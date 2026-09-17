/*
 * card-nav.js — 卡片内「上一卡 / 下一卡」导航
 *
 * 顺序口径：只认 catalog.js 的组（模块）内顺序。
 *   - 组内第 1 张没有 prev，最后 1 张没有 next；
 *   - 绝不跨组、不跨 layer、不循环；
 *   - 首页「先学 20 / 主干 42」只是视图，不产生独立索引，
 *     所以同一张卡无论从哪个入口进来，prev/next 完全一致。
 * 不在 catalog.js 里的卡片（deep-dives 子页 / interview / topics）静默跳过。
 *
 * 卡片通过 <script src="../../catalog.js"> + <script src="../../card-nav.js">
 * 引入（见 _publish_all.py / _add_card_nav.py）。
 */
(function () {
  'use strict';

  var CATALOG = window.CATALOG;
  if (!CATALOG) return;

  // 展平目录，保留 layer + 组标签 + 组内序号，供「不跨组」判定使用
  var flat = [];
  Object.keys(CATALOG).forEach(function (layer) {
    (CATALOG[layer] || []).forEach(function (group) {
      (group.cards || []).forEach(function (card) {
        flat.push({ layer: layer, group: group.label || layer, card: card });
      });
    });
  });
  if (!flat.length) return;

  function rel(href) {
    // catalog 里是仓库根相对路径 "./cards/<dir>/<file>.html"，
    // 卡片自身在 cards/<dir>/ 下，所以换算成 "../<dir>/<file>.html"
    return String(href || '').replace(/^\.\//, '').replace(/^cards\//, '../');
  }

  // 定位当前卡：从 pathname 尾部取 cards/<dir>/<file>.html
  var m = decodeURIComponent(location.pathname).match(/\/cards\/([^\/]+)\/([^\/?#]+\.html)$/i);
  if (!m) return;
  var here = ('cards/' + m[1] + '/' + m[2]).toLowerCase();

  var pos = -1;
  for (var i = 0; i < flat.length; i++) {
    if (String(flat[i].card.href || '').replace(/^\.\//, '').toLowerCase() === here) {
      pos = i;
      break;
    }
  }
  if (pos < 0) return; // 非目录卡：不注入导航

  var cur = flat[pos];

  function sibling(delta) {
    var t = flat[pos + delta];
    if (!t || t.layer !== cur.layer || t.group !== cur.group) return null;
    return t;
  }

  var prev = sibling(-1);
  var next = sibling(1);
  if (!prev && !next) return;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function label(card) {
    var code = String(card.code || '').trim();
    var title = String(card.title || '').trim();
    return code ? code + ' · ' + title : title;
  }

  function link(side, card) {
    var dir = side === 'prev' ? '← 上一卡' : '下一卡 →';
    return '<a class="' + side + '" href="' + esc(rel(card.href)) + '" title="' + esc(dir + '：' + label(card)) + '">' +
      '<span class="dir">' + dir + '</span>' +
      '<span class="t">' + esc(label(card)) + '</span></a>';
  }

  var html = '<nav class="card-nav" aria-label="卡片导航">' +
    (prev ? link('prev', prev.card) : '<span class="spacer"></span>') +
    (next ? link('next', next.card) : '<span class="spacer"></span>') +
    '</nav>';

  var css =
    '.card-nav{display:flex;gap:1rem;margin:2.5rem 0 .5rem;flex-wrap:wrap}' +
    '.card-nav a,.card-nav .spacer{flex:1 1 260px;min-width:0}' +
    '.card-nav a{display:block;padding:.85rem 1rem;text-decoration:none;' +
    'background:var(--surface,#fffdf8);border:1px solid var(--border,rgba(28,25,23,.12));border-radius:10px;' +
    'color:var(--text,#1c1917);transition:border-color .15s,transform .15s,box-shadow .15s}' +
    '.card-nav a:hover{border-color:var(--accent,var(--blue,#4338ca));transform:translateY(-2px);box-shadow:0 4px 14px rgba(28,25,23,.08)}' +
    '.card-nav .dir{display:block;margin-bottom:.15rem;font-size:.78rem;letter-spacing:.02em;color:var(--text-muted,#78716c)}' +
    '.card-nav .t{display:block;font-size:.95rem;font-weight:600;line-height:1.5}' +
    '.card-nav .next{text-align:right}';

  var style = document.createElement('style');
  style.setAttribute('data-card-nav', '');
  style.textContent = css;
  document.head.appendChild(style);

  // 插到正文末尾的 footer 之上；没有 footer 的卡片退化为追加到 body 末尾
  var footer = document.querySelector('.footer');
  if (footer && footer.parentNode) {
    footer.insertAdjacentHTML('beforebegin', html);
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
})();
