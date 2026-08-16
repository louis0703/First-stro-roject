/**
 * 自定义光标 — 普通 / 交互 两种状态切换
 */

;(function () {
  const el = document.createElement('div')
  el.className = 'custom-cursor'
  document.body.appendChild(el)

  const CLICKABLE = 'a, button, [role="button"], input[type="submit"], input[type="button"], select, summary'

  let mx = 0, my = 0, raf = null

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    if (!raf) {
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${mx}px, ${my}px)`
        raf = null
      })
    }
  })

  document.addEventListener('mouseover', (e) => {
    el.setAttribute('data-state', e.target.closest(CLICKABLE) ? 'pointer' : '')
  }, true)
})()
