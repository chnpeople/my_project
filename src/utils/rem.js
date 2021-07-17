;(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      window.console.log(clientWidth);
      docEl.style.fontSize =
        clientWidth >= 750 ? '100px' : 100 * (clientWidth / 750) + 'px';
      window.console.log(docEl.style.fontSize);
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
