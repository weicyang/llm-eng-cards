/*
 * card-nav.js — 卡片内「上一卡 / 下一卡」导航
 *
 * 顺序跟着「你从哪个入口进来」走，由 URL 上的 ?p= 决定：
 *   ?p=core20  先学 20：按首页「先学 20」的学习顺序（跨模块，因为路径本身就跨模块）
 *   ?p=main42  主干 42：按主干 01→42 的顺序
 *   不带 p     全部卡片：按 catalog.js 的组（模块）内顺序，组首无 prev、组尾无 next，
 *              不跨组、不跨 layer、不循环
 * 翻页链接会继承当前的 p，所以在同一条路径里连续翻不会跳回全量顺序。
 * 参数缺失、或带了 p 但当前卡不在这条序列里 → 退回全量组内顺序。
 * 不在 catalog.js 里的卡片（deep-dives 子页 / interview / topics）静默跳过。
 *
 * 呈现位置有两份，都常驻：
 *   右下角竖条  贴视口右边缘，上一卡在上、下一卡在下，只占窄窄一条，不压正文；
 *               卡片标题走 title / aria-label 悬浮提示
 *   正文末尾完整版  带进度行和卡片标题，读到最后顺手翻
 * 右下角如果被卡片自己的悬浮控件占了（个别 deep-dive 卡的 ☰ 目录按钮），竖条会自动抬到它上面。
 *
 * 卡片通过 <script src="../../catalog.js"> + <script src="../../card-nav.js">
 * 引入（见 _publish_all.py / _add_card_nav.py）。
 */
(function () {
  'use strict';

  var CATALOG = window.CATALOG;
  if (!CATALOG) return;

  /* PATHS:BEGIN 由 _gen_card_paths.py 从 index.html 的 CARDS / CORE_GROUPS 同步，勿手改 */
  var PATHS = {
    core20: { name: '先学 20', hrefs: [
        './cards/transformer/attention_from_scratch.html',
        './cards/transformer/decoder_only_transformer.html',
        './cards/llm/token_mechanism_complete.html',
        './cards/llm/decoding_strategies_deep.html',
        './cards/deploy/kv_cache_inference.html',
        './cards/deploy/prefill_decode_disaggregation.html',
        './cards/deploy/continuous_batching_scheduling.html',
        './cards/deploy/quantization_guide.html',
        './cards/engineering/prompt_vs_context_engineering.html',
        './cards/rag/rag_architecture.html',
        './cards/rag/hybrid_retrieval_guide.html',
        './cards/rag/retrieval_reranking.html',
        './cards/agent/loop_engineering_vs_react.html',
        './cards/agent/mcp_vs_function_calling.html',
        './cards/memory/ai_memory_system.html',
        './cards/engineering/evaluation_testing.html',
        './cards/architecture/inference_serving_architecture_panorama.html',
        './cards/deploy/latency_throughput_cost_metrics.html',
        './cards/engineering/api_stability.html',
        './cards/security/prompt_injection_battle.html'
      ] },
    main42: { name: '主干 42', hrefs: [
        './cards/transformer/attention_from_scratch.html',
        './cards/transformer/tensor_fundamentals.html',
        './cards/transformer/mha_from_scratch.html',
        './cards/transformer/positional_encoding.html',
        './cards/transformer/decoder_only_transformer.html',
        './cards/llm/token_mechanism_complete.html',
        './cards/llm/decoding_strategies_deep.html',
        './cards/deploy/kv_cache_inference.html',
        './cards/transformer/moe_architecture.html',
        './cards/llm/lora_finetuning.html',
        './cards/reinforcement/rl_for_llm.html',
        './cards/llm/reasoning_models_test_time_compute.html',
        './cards/engineering/five_layer_prompt_architecture.html',
        './cards/engineering/prompt_vs_context_engineering.html',
        './cards/rag/rag_architecture.html',
        './cards/rag/chunking_semantic_solutions.html',
        './cards/rag/hybrid_retrieval_guide.html',
        './cards/rag/retrieval_reranking.html',
        './cards/rag/rag_evaluation_practice.html',
        './cards/agent/loop_engineering_vs_react.html',
        './cards/agent/mcp_vs_function_calling.html',
        './cards/agent/single_agent_context_window.html',
        './cards/memory/ai_memory_system.html',
        './cards/agent/agent_evaluation_metrics.html',
        './cards/rag/multimodal_visual_document_rag.html',
        './cards/agent/gui_agent_computer_use.html',
        './cards/deploy/deployment_decision_framework.html',
        './cards/deploy/vram_estimation_hardware.html',
        './cards/deploy/inference_framework_selection.html',
        './cards/deploy/continuous_batching_scheduling.html',
        './cards/deploy/speculative_decoding_production.html',
        './cards/engineering/streaming_five_layers.html',
        './cards/engineering/llm_token_pricing.html',
        './cards/architecture/observability_llm.html',
        './cards/security/prompt_injection_battle.html',
        './cards/security/sandbox_architecture.html',
        './cards/deploy/prefill_decode_disaggregation.html',
        './cards/deploy/quantization_guide.html',
        './cards/engineering/evaluation_testing.html',
        './cards/engineering/api_stability.html',
        './cards/architecture/inference_serving_architecture_panorama.html',
        './cards/deploy/latency_throughput_cost_metrics.html'
      ] }
  };
  /* PATHS:END */

  function norm(href) {
    return String(href || '').replace(/^\.\//, '').toLowerCase();
  }

  // 展平全量目录：组（模块）内顺序，供「不跨组」的默认导航使用
  var flat = [];
  var byHref = {};
  Object.keys(CATALOG).forEach(function (layer) {
    (CATALOG[layer] || []).forEach(function (group) {
      var cards = group.cards || [];
      cards.forEach(function (card, i) {
        var e = {
          layer: layer,
          group: group.label || layer,
          index: i,
          size: cards.length,
          card: card
        };
        flat.push(e);
        byHref[norm(card.href)] = e;
      });
    });
  });
  if (!flat.length) return;

  // 定位当前卡：从 pathname 尾部取 cards/<dir>/<file>.html（query 不参与）
  var m = decodeURIComponent(location.pathname).match(/\/cards\/([^\/]+)\/([^\/?#]+\.html)$/i);
  if (!m) return;
  var cur = byHref[('cards/' + m[1] + '/' + m[2]).toLowerCase()];
  if (!cur) return; // 非目录卡：不注入导航

  function rel(href) {
    // catalog 里是仓库根相对路径 "./cards/<dir>/<file>.html"，
    // 卡片自身在 cards/<dir>/ 下，所以换算成 "../<dir>/<file>.html"
    return String(href || '').replace(/^\.\//, '').replace(/^cards\//, '../');
  }

  // 选序列：?p= 命中且当前卡确实在序列里才用，否则退回全量组内顺序
  var p = new URLSearchParams(location.search).get('p');
  var path = p && PATHS[p] ? PATHS[p] : null;
  var at = -1;
  if (path) {
    for (var i = 0; i < path.hrefs.length; i++) {
      if (norm(path.hrefs[i]) === norm(cur.card.href)) { at = i; break; }
    }
    if (at < 0) path = null;
  }

  var prev, next, meta, query = '';
  if (path) {
    var pick = function (k) {
      if (k < 0 || k >= path.hrefs.length) return null;
      var e = byHref[norm(path.hrefs[k])];
      return e ? e.card : null;
    };
    prev = pick(at - 1);
    next = pick(at + 1);
    meta = path.name + ' · 第 ' + (at + 1) + ' / ' + path.hrefs.length + ' 张';
    query = '?p=' + encodeURIComponent(p);
  } else {
    var sibling = function (delta) {
      var t = flat[flat.indexOf(cur) + delta];
      // 组首/组尾到此为止：换组或换 layer 都算越界
      if (!t || t.layer !== cur.layer || t.group !== cur.group) return null;
      return t.card;
    };
    prev = sibling(-1);
    next = sibling(1);
    meta = '全部卡片 · ' + cur.group + ' · 第 ' + (cur.index + 1) + ' / ' + cur.size + ' 张';
  }
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
    var isPrev = side === 'prev';
    // 箭头和文字分开包：竖条里箭头转成上下向、文字竖排
    var word = isPrev ? '上一卡' : '下一卡';
    return '<a class="' + side + '" href="' + esc(rel(card.href)) + query + '" ' +
      'aria-label="' + esc(word + '：' + label(card)) + '" ' +
      'title="' + esc(meta + ' — ' + word + '：' + label(card)) + '">' +
      '<span class="dir">' +
      (isPrev ? '<span class="ar">←</span><span class="dw">' + word + '</span>'
              : '<span class="dw">' + word + '</span><span class="ar">→</span>') +
      '</span>' +
      '<span class="t">' + esc(label(card)) + '</span></a>';
  }

  // 同一组 prev/next 渲染两份：右边缘常驻竖条 + 正文末尾完整版，两份都显示。
  var row =
    (prev ? link('prev', prev) : '<span class="spacer"></span>') +
    (next ? link('next', next) : '<span class="spacer"></span>');

  var bodyHTML = '<nav class="card-nav" aria-label="卡片导航">' +
    '<p class="card-nav-meta">' + esc(meta) + '</p>' +
    '<div class="card-nav-row">' + row + '</div></nav>';

  var dockHTML = '<nav class="card-nav-dock card-nav-off" aria-label="卡片导航">' +
    '<div class="card-nav-row">' + row + '</div></nav>';

  var css =
    /* 两处共用的行与链接 */
    '.card-nav-row{display:flex;gap:1rem;flex-wrap:wrap}' +
    '.card-nav-row a,.card-nav-row .spacer{flex:1 1 260px;min-width:0}' +
    '.card-nav-row a{display:block;padding:.85rem 1rem;text-decoration:none;' +
    'background:var(--surface,#fffdf8);border:1px solid var(--border,rgba(28,25,23,.12));border-radius:10px;' +
    'color:var(--text,#1c1917);transition:border-color .15s,transform .15s,box-shadow .15s,background .15s}' +
    '.card-nav-row a:hover{border-color:var(--accent,var(--blue,#4338ca));text-decoration:none;' +
    'transform:translateY(-2px);box-shadow:0 4px 14px rgba(28,25,23,.08)}' +
    '.card-nav .dir,.card-nav-dock .dir{display:flex;align-items:center;gap:.35em;margin-bottom:.15rem;' +
    'font-size:.78rem;letter-spacing:.02em;color:var(--text-muted,var(--muted,#78716c))}' +
    '.card-nav .next .dir,.card-nav-dock .next .dir{justify-content:flex-end}' +
    '.card-nav .t,.card-nav-dock .t{display:block;font-size:.95rem;font-weight:600;line-height:1.5}' +
    '.card-nav .next,.card-nav-dock .next{text-align:right}' +
    /* 正文末尾完整版 */
    '.card-nav{margin:2.5rem 0 .5rem}' +
    '.card-nav-meta{margin-bottom:.5rem;font-size:.78rem;letter-spacing:.02em;color:var(--text-muted,var(--muted,#78716c))}' +
    /* 右下角常驻竖条：贴右边缘、上一卡在上下一卡在下，宽度只占一条，不压正文。
       bottom 可能被 JS 抬高以避开卡片自己的悬浮控件 */
    '.card-nav-dock{position:fixed;right:0;bottom:14px;z-index:101;box-sizing:border-box;' +
    'padding:.35rem .25rem;background:var(--surface,#fffdf8);' +
    'border:1px solid var(--border,rgba(28,25,23,.14));border-right:0;border-radius:10px 0 0 10px;' +
    'box-shadow:-4px 4px 16px rgba(28,25,23,.10)}' +
    '.card-nav-dock .card-nav-row{display:grid;grid-template-rows:1fr 1fr;gap:.2rem}' +
    /* 卡片标题不塞进竖条（会很长），完整标题在 title / aria-label 和正文末尾那份里 */
    '.card-nav-dock .t{display:none}' +
    /* 两格等高：路径首张没有上一卡、末张没有下一卡时，占位格照样撑住，
       保证「上一卡永远在上、下一卡永远在下」，不因缺一格而跳位 */
    '.card-nav-dock .spacer{width:2.2rem}' +
    '.card-nav-dock .card-nav-row a{display:flex;align-items:center;justify-content:center;box-sizing:border-box;' +
    'width:2.2rem;padding:.5rem .25rem;border-color:transparent;border-radius:8px;background:transparent}' +
    '.card-nav-dock .card-nav-row a:hover{transform:none;box-shadow:none;border-color:transparent;background:rgba(127,127,127,.09)}' +
    '.card-nav-dock .dir{flex-direction:column;justify-content:center;gap:.3rem;margin:0;font-size:.72rem}' +
    /* 竖排时把 ←/→ 转成 ↑/↓ */
    '.card-nav-dock .ar{display:inline-block;transform:rotate(90deg);font-size:.95rem;line-height:1}' +
    '.card-nav-dock .dw{writing-mode:vertical-rl;letter-spacing:.14em}' +
    '@media print{.card-nav-dock{display:none !important}}' +
    '.card-nav-off{display:none !important}';

  var style = document.createElement('style');
  style.setAttribute('data-card-nav', '');
  style.textContent = css;
  document.head.appendChild(style);

  // 正文末尾那份：插到 footer 之上；没有 footer 的卡片退化为追加到 body 末尾
  var footer = document.querySelector('.footer');
  if (footer && footer.parentNode) {
    footer.insertAdjacentHTML('beforebegin', bodyHTML);
  } else {
    document.body.insertAdjacentHTML('beforeend', bodyHTML);
  }

  // 右边缘那份：钉在视口右侧下沿，与侧栏无关，所以宽屏窄屏都能常驻
  document.body.insertAdjacentHTML('beforeend', dockHTML);
  var dock = document.querySelector('.card-nav-dock');
  if (!dock) return;

  // 个别卡片自己在右下角放了悬浮控件（deep-dive 卡的 ☰ 目录按钮），撞上就把 dock 抬到它上面。
  // 只看 fixed/sticky 的候选，整屏遮罩（lightbox 之类）跳过——它 z-index 更高，本来就会盖住 dock。
  function place() {
    dock.classList.remove('card-nav-off');
    dock.style.bottom = '';
    var r = dock.getBoundingClientRect();
    var area = window.innerWidth * window.innerHeight * 0.5;
    var lift = 0;
    var all = document.body.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el === dock || dock.contains(el)) continue;
      var q = el.getBoundingClientRect();
      if (q.width <= 0 || q.height <= 0) continue;                       // display:none 的不算
      if (q.width * q.height > area) continue;                           // 整屏遮罩跳过
      if (!(q.right > r.left && q.left < r.right && q.bottom > r.top && q.top < r.bottom)) continue;
      var pos = window.getComputedStyle(el).position;
      if (pos !== 'fixed' && pos !== 'sticky') continue;
      lift = Math.max(lift, window.innerHeight - q.top + 10);
    }
    if (lift) dock.style.bottom = lift + 'px';
  }

  place();
  var queued = false;
  window.addEventListener('resize', function () {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () { queued = false; place(); });
  });
})();
