/**
 * マウスダウンのリップルイベントハンドラ
 * @param {*} e
 */
function onRipple (e) {
  const size = 300
  const x = e.offsetX
  const y = e.offsetY
  const w = size
  const h = size

  const effect = $('<span class="ripple-effect"></span>')
    .css({
      left: x - w / 2,
      top: y - h / 2,
      width: size,
      height: size
      })
    .appendTo(this)
    .on('animationend', () => effect.remove())
}

/**
 * リップル初期化
 */
function initRipples () {
  $('.ripple')
    .mousedown(onRipple)
}
