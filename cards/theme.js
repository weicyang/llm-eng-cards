/*
 * theme.js — 知识卡片深色模式切换（全站共享）
 *
 * 与首页 index.html 用同一套约定，所以「首页切了深色，点进卡片也是深色」：
 *   localStorage 键    lec-theme，取值 "dark" / "light"
 *   生效方式          <html> 上加/去 .dark 类，配色由 theme.css 的 html.dark 变量层接管
 *
 * 优先级和首页一致：用户手动选过（localStorage）> 系统偏好（prefers-color-scheme）。
 * 没手动选过时，系统切深色/浅色本页实时跟随；一旦点过按钮，就固定住不再跟随。
 *
 * 卡片通过 <script src="../theme.js"></script> 引入（相对层级按卡片深度算，配合 theme.css）。
 * 类名本身由 <head> 里那段内联脚本提前定好，避免深色用户先看到一屏浅色再闪一下；
 * 这里再同步一次，是为了兜住漏注入内联脚本的页面，并负责画切换按钮。
 */
(function () {
  'use strict';

  var KEY = 'lec-theme';
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function want() {
    var s = saved();
    if (s === 'dark' || s === 'light') return s;
    return mq.matches ? 'dark' : 'light';   // 没手动选过 → 跟随系统
  }

  function apply(mode) {
    root.classList.toggle('dark', mode === 'dark');
    if (btn) paint();
  }

  apply(want());

  /* 系统偏好变了，且用户还没手动选过 → 跟着变 */
  var onSystem = function () { if (!saved()) apply(want()); };
  if (mq.addEventListener) mq.addEventListener('change', onSystem);
  else if (mq.addListener) mq.addListener(onSystem);

  /* 另一个标签页点了切换 → 本页同步 */
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(want());
  });

  /* ---------- 右上角 ◐ 按钮 ---------- */
  var btn = document.createElement('button');
  btn.id = 'lec-theme-btn';
  btn.type = 'button';

  function paint() {
    var dark = root.classList.contains('dark');
    btn.textContent = '◐';
    btn.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    btn.title = dark ? '切换到浅色模式' : '切换到深色模式';
  }

  btn.addEventListener('click', function () {
    var dark = !root.classList.contains('dark');
    root.classList.toggle('dark', dark);
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) { /* 隐私模式下不阻断切换 */ }
    paint();
  });

  document.body.appendChild(btn);
  paint();

  /* 放在「⌂ 首页」按钮左边；卡片没有首页按钮时退回右上角默认位。
     首页按钮宽度随文案变化，所以量一次实际位置，窗口变化时再量。 */
  function place() {
    var home = document.querySelector('a.home-btn');
    if (!home) { btn.style.right = ''; btn.style.top = ''; return; }
    var r = home.getBoundingClientRect();
    if (!r.width) return;                              // display:none（窄屏）时不挪
    btn.style.top = r.top + 'px';
    btn.style.right = (window.innerWidth - r.left + 8) + 'px';
  }

  place();
  var queued = false;
  window.addEventListener('resize', function () {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () { queued = false; place(); });
  });
  window.addEventListener('load', place);
})();
