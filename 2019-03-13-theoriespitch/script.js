document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
  	let i = 0
  	let extent = 64
  	let inter = setInterval(() => {
  		let spacing = (
  			((i - (i % extent)) / extent) * (extent - (i % extent)) +
  			(1 - ((i - (i % extent))  / extent)) * (i % extent)
			)
  		document.querySelector("*").style["letter-spacing"] = `${spacing}px`
  		i ++
  		if (i >= (extent * 2)) clearInterval(inter)
  	} , 10)
  }, 5000)
})

