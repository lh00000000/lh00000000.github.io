let imgPrefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-22-rightshelf/"
const ele = {
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

const app = (selector, child) => {
  document.querySelector(selector).appendChild(child)
  return document.querySelector(selector)
}

const makeFullKnollDiv = () => {
  let fullKnoll = ele.img(imgPrefix + "rightknoll.png")

  let fullKnollStyleString = "position: fixed;"
  fullKnollStyleString += "width: 100%;"
  fullKnoll.style = fullKnollStyleString

  let fullKnollDiv = ele.div(fullKnoll)
  fullKnollDiv.style = [
    "position: fixed;",
    "top: 0;",
    "left: 0;",
    "display:flex;",
    "align-items: center;",
    "height: 100vh;",
    "z-index: -11;"
  ].join(" ")
  return fullKnollDiv
}

const spacer = () => {
  let spacerDiv = ele.div(ele.p(" "))
  spacerDiv.style = `height: 100vh;`
  return spacerDiv
}

document.addEventListener("DOMContentLoaded", () => {

  app("body", makeFullKnollDiv())

  let main = ele.div(ele.span(""))
  main.id = "main"
  app("body", main)


  app("#main", spacer())


  const textBlock = text => {
    let dp = ele.div(ele.p(text))
    dp.classList.add("textBlock")
    return dp
  }

  app("#main", ele.img(imgPrefix + "IMG_6609.jpg"))
  app("#main", textBlock("2019-04-07 the right shelf has accumulated many circuit boards, broken components, debris, and dust."))
  app("#main", ele.img(imgPrefix + "IMG_6612.jpg"))

  app("#main", textBlock("the items are taken to a workspace to be sorted into loosely associated categorie s. "))
  app("#main", ele.img(imgPrefix + "IMG_6618.jpg"))


  app("#main", textBlock("the extraction reveals a concentration of quintessentially freestore dust"))
  app("#main", ele.img(imgPrefix + "IMG_6615.jpg"))
  app("#main", ele.img(imgPrefix + "IMG_6616.jpg"))

  app("#main", textBlock("ar r     \nan               \n ge        me \nn  t"))
  app("#main", ele.img("57638275490__72BB6D3A-C30D-4778-9B93-9F3CCA9C5CA3.jpg"))
  app("#main", ele.img(imgPrefix + "IMG_6620.jpg"))
  app("#main", ele.img(imgPrefix + "IMG_6629.jpg"))
  app("#main", ele.img(imgPrefix + "IMG_6619.jpg"))
  // app("#main", ele.img(imgPrefix + "IMG_6631.jpg"))

  let lines = ele.div(ele.p("||||||||"))
  lines.classList.add("lines")
  app("#main", lines)
  app("#main", ele.img(imgPrefix + "IMG_6632.jpg"))


  app("#main", spacer())
})