const el = {
  img(imgSrc) {
    let ele = document.createElement("img")
    ele.src = imgSrc
    return ele
  },
  p(text) {
    let ele = document.createElement("p")
    ele.innerText = text
    return ele
  },
  span(text) {
    let ele = document.createElement("span")
    ele.innerText = text
    return ele
  },
  div(child) {
    let ele = document.createElement("div")
    ele.appendChild(child)
    return ele
  }
}

const ap = (selector, child) => {
  document.querySelector(selector).appendChild(child)
  return document.querySelector(selector)
}

const cl = (ele, classes) => {
  classes.forEach(ele.classList.add)
  return ele
}

document.addEventListener("DOMContentLoaded", () => {

})