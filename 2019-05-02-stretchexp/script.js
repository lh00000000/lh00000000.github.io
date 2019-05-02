const el = {
  src(ele, toSrc) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.src = toSrc
    return ele
  },
  inn(ele, innerML) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.innerHTML = innerML
    return ele
  },
  txt(ele, text) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.innerText = text
    return ele
  },
  cls(classStr, ele) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    classStr.split(" ").forEach(c => ele.classList.add(c.substring(1)))
    return ele
  },
  a(url, inside) {
    let aEle = document.createElement("a")
    aEle.href = url

    if (typeof inside == "string") {
      aEle.innerText = inside
      return aEle
    } else {
      return ap(aEle, inside)
    }

  }
}

const ap = (up, child) => {
  let parent = (typeof up == "string") ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}



let span = txt => {
  let s = document.createElement("span")
  s.innerText = txt
  return s
}

let stretchText = (msg, stretchFunc, spacingFactor = 3, fontSize="8rem") => {
  let masterSpan = span("")
  msg.split("").forEach((c, i) => {
    let s = span(c)

    let [xStretch, yStretch] = stretchFunc(c, i)
    s.style["font-family"] = "Helvetica"
    s.style["font-size"] = fontSize
    s.style.display = "inline-block"
    s.style["width"] = `${xStretch * spacingFactor}rem`
    s.style["height"] = `${yStretch * spacingFactor}rem`
    s.style.transform = `scale(${xStretch}, ${yStretch})`
    s.style["word-break"] = "break-all"
    masterSpan.appendChild(s)
  })
  return masterSpan
}
document.addEventListener("DOMContentLoaded", () => {
  _.range(4).forEach(() => {
  document.body.appendChild(stretchText(
    "testtesttest",
    (c, i) => [_.random(0.5, 2.5), _.random(0.5, 2.5)]
    )
  )

  document.body.appendChild(stretchText(
    "growing",
    (c, i) => [i * 0.4 + 1, 1],
    2,
    "4rem"
    ))

  document.body.appendChild(stretchText(
    "talllllllllllll",
    (c, i) => [1, i * 0.4 + 1],
    2,
    "4rem"
    ))

  document.body.appendChild(stretchText(
    "talllllllllllll",
    (c, i) => [1, i * 0.4 + 1],
    2,
    "4rem"
    ))

  document.body.appendChild(stretchText(
    "exppppooooonnnnn",
    (c, i) => [1, Math.pow(i * 0.4 + 1, 2)],
    1,
    "2rem"
    ))

  document.body.appendChild(stretchText(
    "now i'm late",
    (c, i) => [12 / i + 1, 12 / i + 1],
    1,
    "0.5em"
    ))
  })
})