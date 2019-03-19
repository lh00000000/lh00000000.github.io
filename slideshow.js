const tick = (id, slides) => {
  let ele = document.querySelector(id)
  if (ele) {
    let currentSlideIdx = slides.indexOf(ele.src)
    ele.src = slides[(currentSlideIdx + 1) % slides.length]
  }
}


setInterval(
	() => tick("#omegleImg", assets.omegle.imgs),
	3000
)
