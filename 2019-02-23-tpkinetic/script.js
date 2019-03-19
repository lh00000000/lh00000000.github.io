document.addEventListener("DOMContentLoaded", () => {
  document.body.style.height="11300px"
  window.addEventListener("scroll", e => {
    document.getElementById("screen").style.bottom = `${-window.pageYOffset}px`
  })
})

