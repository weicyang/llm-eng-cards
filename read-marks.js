/*
 * read-marks.js — 阅读进度（发行站专用，纯 localStorage）
 *
 * 进度只保存在当前设备的浏览器里：不登录、不上传、换设备/换浏览器不带过去。
 * 存储键 lecReadMarks（与 lec-theme / lec-from 同一命名系），形如
 *   { "transformer/architecture_overview.html": {ts:毫秒, pct:0-100}, ... }
 * key 用「cards/ 下的 目录/文件名」两段式，首页与卡片页对同一张卡算出的
 * key 一致；deep-dives 子页（cards/deep-dives/docs/...）取 docs/xxx.html。
 *
 * 两种形态，按所在页面自动分工：
 *   卡片页（路径含 /cards/）  打开即记已读；滚动算 pct（只升不降，防止往回滚
 *                             把进度抹掉）；页顶注入一条 3px 进度条（页面自带
 *                             #progress 的跳过）；切后台 / 关页时强制落盘。
 *   首页（index.html）        由首页内联脚本在渲染完成后调用 renderHome(ctx)，
 *                             画「先学 21 / 主干 42 / 全部卡片」三层进度面板，
 *                             并给已读过的 .row 条目打 ✓（decorate）。
 *                             面板在首页注入，不写死在 HTML 里，脚本失效时
 *                             首页保持原样，不留空壳。
 *
 * 注入方式：_add_read_marks.py 批量给 catalog.js + qa-catalog.js 里的卡加
 *   <script src="../../read-marks.js"></script>；新卡由 _publish_all.py /
 *   _publish_qa.py 在发布时自动带上。目录外卡片不注入（口径与 card-nav 一致）。
 */
(function () {
  'use strict';

  var LS_KEY = 'lecReadMarks';
  var mem = null;             /* 本页的进度条目（卡片形态用）；取消已读后置 null */
  var homeCtx = null;         /* 首页形态：renderHome 之后存面板刷新句柄 */

  function loadAll() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || '{}') || {};
    } catch (e) { return {}; }
  }

  function saveAll(all) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(all)); }
    catch (e) { /* 隐私模式 / 存储满：进度丢弃，不影响阅读 */ }
  }

  function clampPct(v) {
    v = Math.round(v);
    return v < 0 ? 0 : v > 100 ? 100 : v;
  }

  /* href（"./cards/x/y.html?p=..." 或 "cards/x/y.html"）→ 存储 key。
   * 统一取「cards/ 下最后两段」（目录/文件名.html）：卡片文件名全站唯一，
   * 个别网络环境给 pathname 套一层 /cards/ 前缀、或深链路径不同时，
   * 卡片页与首页算出的 key 依然一致；deep-dives 子页（docs/xxx.html）同样成立。 */
  function keyOf(href) {
    var s = String(href).split('?')[0].split('#')[0];
    var i = s.lastIndexOf('cards/');
    if (i < 0) return s.replace(/^\.\//, '');
    var tail = s.slice(i + 6);
    var m = tail.match(/([^/]+\/[^/]+)$/);
    return m ? m[1] : tail;
  }

  /* 一次性迁移：把旧版 indexOf 写坏的 "cards/cards/..." 键归一成 "cards/..."，
   * 同卡两条记录合并（ts 取最早、pct 取最大），无脏键时不写回。 */
  function migrateKeys() {
    var all = loadAll(), out = {}, dirty = false, k;
    for (k in all) {
      if (!Object.prototype.hasOwnProperty.call(all, k)) continue;
      var nk = keyOf(k);
      if (nk !== k) dirty = true;
      var o = out[nk];
      out[nk] = o
        ? { ts: Math.min(o.ts, all[k].ts || o.ts), pct: Math.max(o.pct || 0, all[k].pct || 0) }
        : all[k];
    }
    if (dirty) saveAll(out);
  }

  function pagePct() {
    var doc = document.documentElement;
    var full = doc.scrollHeight - window.innerHeight;
    if (full <= 0) return 100;   /* 短页：一屏装下即算读完 */
    return clampPct((window.scrollY || doc.scrollTop || 0) / full * 100);
  }

  /* ---------------- 卡片形态 ---------------- */

  function initCard(key) {
    var all = loadAll();
    var old = all[key] || {};
    /* pct 只升不降：多标签页 / 往回滚都不把已有进度抹掉；打开即记已读（ts） */
    mem = { ts: old.ts || Date.now(), pct: clampPct(Math.max(old.pct || 0, pagePct())) };
    flush(true);

    if (!document.getElementById('progress')) {
      var bar = document.createElement('div');
      bar.id = 'lec-progress';
      bar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(bar);
      var paint = function () { bar.style.width = mem.pct + '%'; };
      paint();
    }

    var timer = 0;
    function flush(now) {
      if (!mem) { timer = 0; return; }     /* 已取消已读：不再写回 */
      if (!now && timer) return;           /* 节流：1s 内只写一次 */
      clearTimeout(timer); timer = 0;
      mem.pct = clampPct(Math.max(mem.pct, pagePct()));
      var cur = loadAll();
      var prev = cur[key] || {};
      cur[key] = { ts: mem.ts, pct: Math.max(mem.pct, prev.pct || 0) };
      mem.pct = cur[key].pct;
      saveAll(cur);
      var b = document.getElementById('lec-progress');
      if (b) b.style.width = mem.pct + '%';
    }
    window.addEventListener('scroll', function () {
      if (!timer) timer = setTimeout(function () { flush(true); }, 1000);
    }, { passive: true });
    /* 切后台 / 关页：浏览器不保证 scroll 节流还能跑完，这里强制落盘 */
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') flush(true);
    });
    window.addEventListener('beforeunload', function () { flush(true); });
    window.addEventListener('pagehide', function () { flush(true); });

    /* 右下角「✓ 已读」悬浮按钮：点一下取消本页已读（删除记录），再点恢复 */
    var btn = document.createElement('button');
    btn.id = 'lec-cancel-read';
    btn.type = 'button';
    document.body.appendChild(btn);
    var cancelled = false;
    function paintBtn() {
      btn.textContent = cancelled ? '○ 未读' : '✓ 已读';
      btn.title = cancelled ? '点击重新记为已读' : '已读（点击取消）';
      btn.classList.toggle('off', cancelled);
    }
    paintBtn();
    btn.addEventListener('click', function () {
      cancelled = !cancelled;
      toggleRead(key, !cancelled);
      paintBtn();
    });
    /* 别的标签页把这张卡取消/恢复时，按钮跟着变 */
    window.addEventListener('storage', function (e) {
      if (e.key !== LS_KEY) return;
      cancelled = !loadAll()[key];
      paintBtn();
    });
  }

  /* 已读开关：want=true 补记为已读（保留原进度），false 删除记录（取消已读）。
   * 取消后卡片页自己的 flush 不会再写回（mem 置 null），首页各视图刷新 ✓ 与面板。 */
  function toggleRead(key, want) {
    var all = loadAll();
    if (want) {
      if (!all[key]) all[key] = { ts: Date.now(), pct: 0 };
    } else {
      delete all[key];
    }
    saveAll(all);
    if (mem) {
      if (want) { mem.ts = all[key].ts; }
      else { mem = null; }
    }
    var b = document.getElementById('lec-progress');
    if (b && !want) b.style.width = '0%';
    if (homeCtx) {
      decorate();
      homeCtx.paintPanel();   /* paintPanel 是 renderHome 的内部函数，只能从 homeCtx 上取 */
    }
  }

  /* ---------------- 首页形态 ---------------- */

  function injectStyle() {
    var css = [
      '.lec-rp{margin-top:14px;background:var(--bg-2);border:1px solid var(--line);border-radius:14px;padding:14px 16px;box-shadow:var(--shadow);max-width:640px}',
      '.lec-rp-row{display:flex;align-items:center;gap:10px;margin:7px 0}',
      '.lec-rp-row>a{font-size:13px;color:var(--ink-2);width:7em;flex:none;text-decoration:none}',
      '.lec-rp-row>a:hover{color:var(--ink)}',
      '.lec-rp-track{flex:1;height:6px;border-radius:3px;background:var(--line);overflow:hidden}',
      '.lec-rp-fill{display:block;height:100%;border-radius:3px;background:var(--fund);transition:width .3s}',
      '.lec-rp-row.main .lec-rp-fill{background:var(--app)}',
      '.lec-rp-row.all .lec-rp-fill{background:var(--prod)}',
      '.lec-rp-num{font-family:var(--mono);font-size:12px;color:var(--ink-3);min-width:7em;flex:none;text-align:right;white-space:nowrap}',
      '.lec-rp-note{margin-top:8px;font-size:12px;color:var(--ink-3)}',
      'a.row.lec-read{position:relative}',
      'a.row.lec-read .title{opacity:.62}',
      'a.row.lec-read::after{content:"\\2713";position:absolute;top:6px;right:8px;font-size:12px;line-height:1.4;color:var(--app)}',
      'a.row.lec-read:hover::after{content:"\\2713 \\53D6\\6D88\\5DF2\\8BFB";color:#c0392b}',
      '#lec-progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--accent,#4338ca);z-index:9999;pointer-events:none;transition:width .15s linear}',
      '#lec-cancel-read{position:fixed;right:14px;bottom:14px;z-index:9999;padding:5px 12px;border-radius:999px;border:1px solid rgba(5,150,105,.45);background:rgba(255,255,255,.92);color:#059669;font-size:12.5px;cursor:pointer;box-shadow:0 2px 10px rgba(15,23,42,.18)}',
      '#lec-cancel-read:hover{background:#fee2e2;border-color:#ef4444;color:#dc2626}',
      '#lec-cancel-read.off{color:var(--ink-3,#64748b);border-color:#cbd5e1}',
      '#lec-cancel-read.off:hover{background:#d1fae5;border-color:#059669;color:#059669}'
    ].join('\n');
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* 给已读条目打 ✓；首页任何一次重渲染（tab 切换 / 搜索）之后都可以再调 */
  function decorate(root) {
    var all = loadAll();
    var rows = (root || document).querySelectorAll('a.row');
    Array.prototype.forEach.call(rows, function (a) {
      var href = a.getAttribute('href');
      if (!href || href.indexOf('cards/') < 0) return;
      a.classList.toggle('lec-read', !!all[keyOf(href)]);
    });
  }

  function countRead(hrefs) {
    var all = loadAll();
    var n = 0;
    hrefs.forEach(function (h) { if (all[keyOf(h)]) n++; });
    return n;
  }

  /* 首页三层进度面板。ctx 由 index.html 内联脚本传入：
   *   { statsEl, coreHrefs, mainHrefs, allHrefs }
   * core/main 来自 CARDS + CORE_GROUPS，all 来自 catalog.js（career 不计入，
   * 与首页「全部卡片」计数口径一致）。 */
  function renderHome(ctx) {
    if (!ctx || !ctx.statsEl) return;
    var layers = [
      { cls: 'core', name: '先学 21', href: '#core', hrefs: ctx.coreHrefs },
      { cls: 'main', name: '主干 42', href: '#start', hrefs: ctx.mainHrefs },
      { cls: 'all', name: '全部卡片', href: '#full', hrefs: ctx.allHrefs }
    ];
    var box = document.createElement('div');
    box.className = 'lec-rp';
    box.id = 'lecReadPanel';
    box.innerHTML = layers.map(function () {
      return '<div class="lec-rp-row"><a href="#"></a>' +
        '<span class="lec-rp-track"><span class="lec-rp-fill"></span></span>' +
        '<b class="lec-rp-num"></b></div>';
    }).join('') + '<p class="lec-rp-note">打开卡片即计入已读，进度条记录阅读深度（滚动位置）；点条目上的 ✓ 可取消已读。进度仅保存在当前设备浏览器，不随账号同步。</p>';
    ctx.statsEl.insertAdjacentElement('afterend', box);
    var rows = box.querySelectorAll('.lec-rp-row');
    Array.prototype.forEach.call(rows, function (r, i) {
      r.classList.add(layers[i].cls);
      var a = r.querySelector('a');
      a.href = layers[i].href;
      a.textContent = layers[i].name;
    });

    function paintPanel() {
      var fills = box.querySelectorAll('.lec-rp-fill');
      var nums = box.querySelectorAll('.lec-rp-num');
      layers.forEach(function (L, i) {
        var n = countRead(L.hrefs), t = L.hrefs.length;
        if (fills[i]) fills[i].style.width = (t ? Math.round(n / t * 100) : 0) + '%';
        if (nums[i]) nums[i].textContent = n + ' / ' + t + ' 张';
      });
    }
    paintPanel();
    homeCtx = { ctx: ctx, paintPanel: paintPanel };

    /* 已读条目上的 ✓ 可点击取消：拦下 <a> 的跳转，删记录后原地刷新 */
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a.row.lec-read') : null;
      if (!a) return;
      e.preventDefault();
      e.stopPropagation();
      toggleRead(keyOf(a.getAttribute('href')), false);
    }, true);

    /* 在别的标签页读了卡 / 取消了已读，回到首页这一栏也能对上 */
    window.addEventListener('storage', function (e) {
      if (e.key !== LS_KEY) return;
      paintPanel();
      decorate();
    });
  }

  window.LEC_READ = {
    keyOf: keyOf,
    loadAll: loadAll,
    decorate: decorate,
    renderHome: renderHome,
    toggleRead: toggleRead
  };

  /* ---------------- 入口分流 ---------------- */

  injectStyle();   /* 面板 / ✓ / 进度条的样式都在这里，首页与卡片页都要注入 */
  migrateKeys();   /* 先归一旧脏键，卡片页写入 / 首页读取都用干净 key */

  if (location.pathname.indexOf('/cards/') >= 0) {
    var key = keyOf(location.pathname);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        initCard(key);
      });
    } else {
      initCard(key);
    }
  }
})();
