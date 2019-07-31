const el = {
  src(tag, toSrc) {
    let ele = document.createElement(tag)
    ele.src = toSrc
    return ele
  },
  html(tag, innerML) {
    let ele = document.createElement(tag)
    ele.innerHTML = innerML
    return ele
  },
  txt(tag, text) {
    let ele = document.createElement(tag)
    ele.innerText = text
    return ele
  },
  cls(tag, classStr) {
    let ele = document.createElement(tag)
    classStr.split(" ").forEach(c => ele.classList.add(c.substring(1)))
    return ele
  }
}

const ap = (up, child) => {
  let parent = (typeof up == "string") ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}

document.addEventListener("DOMContentLoaded", async () => {
  let res = await fetch("https://luminghao.com/2019-08-13-annualoffsite/ANNUAL_OFFSITE.ics")
  let resText = await res.text()
  let daturi = `data:text/calendar,${encodeURIComponent(resText)}`
  document.getElementById("CALTEXTLINK").href = daturi
})