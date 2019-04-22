// const doc = document

const imgPrefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-21-interactiveexperience/"

const TOSAY = {
    prelim: "documentation of freestore session 2019-03-31"
}



const imgs = {
    begin: [{ filename: "IMG_6526.jpg", caption: "documentation of freestore session 2019-03-31. wood graffiti was rejected by community. one of today's goals was getting rid of those plastic bags at the bottom" }],
    laptop: [
        { filename: "IMG_6529.jpg", caption: "laptop" },
        { filename: "IMG_6527.jpg", caption: "removed speakers for transducer drawer" },
        { filename: "IMG_6530.jpg", caption: "removed and discarded battery" }
    ],
    bin: [
        { filename: "IMG_6528.jpg", caption: "more items for freestore finds" },
        { filename: "IMG_6532.jpg", caption: "adding dc motors to freestore finds" },
        { filename: "IMG_6531.jpg", caption: "10k resistors happened to be in short supply in the shop at the time. not sure why a bunch were put in the free store." }
    ],
    wires: [
        { filename: "IMG_6533.jpg", caption: "focused on wirey mess at shop desk" },
        { filename: "IMG_6534.jpg", caption: "sorted into two bins: one for loose wire, another for harvested hookup jumpers and aligator clips found from freestore." },
        { filename: "IMG_6535.jpg", caption: "excess free solder" },
    ],
    glasses: [
        { filename: "IMG_6536.jpg", caption: "there were bags and bags of glasses frames" },
        { filename: "IMG_6537.jpg", caption: "collected all into bin" },
        { filename: "IMG_6545.jpg", caption: "scooped up router for student doing research in network technology" },
        { filename: "IMG_6539.jpg", caption: "attempted doing a \"curated collection\"..."  },
        { filename: "IMG_6550.jpg", caption: "and it seemed to work !"},
    ]
}


const beginDiv = () => {
  let beginDiv = document.createElement("div")
  beginDiv.classList.add("beginDiv")
  beginDiv.classList.add("sideCaptioned")
  beginDiv.classList.add("captioned")


  let beginImg = document.createElement("img")
  beginImg.src = imgPrefix + imgs.begin[0].filename
  beginDiv.appendChild(beginImg)

  let caption = document.createElement("div")
  caption.classList.add("caption")
  let captionP = document.createElement("p")
  captionP.innerText = imgs.begin[0].caption
  caption.appendChild(captionP)
  beginDiv.appendChild(caption)

  return beginDiv

}


const captionedImg = (imgSrc, captionText) => {
  let captionedDiv = document.createElement("div")
  captionedDiv.classList.add("captioned")

  let img = document.createElement("img")
  img.src = imgSrc
  captionedDiv.appendChild(img)

  let caption = document.createElement("div")
  caption.classList.add("caption")
  let captionP = document.createElement("p")
  captionP.innerText = captionText
  caption.appendChild(captionP)
  captionedDiv.appendChild(caption)

  return captionedDiv
}


const leftCaptionedDiv = (imgSrc, captionText) => {
  let captionedDiv = document.createElement("div")
  captionedDiv.classList.add("captioned")
  captionedDiv.classList.add("leftCaptioned")
  captionedDiv.classList.add("sideCaptioned")

  let img = document.createElement("img")
  img.src = imgSrc


  let caption = document.createElement("div")
  caption.classList.add("caption")
  let captionP = document.createElement("p")
  captionP.innerText = captionText


  caption.appendChild(captionP)
  captionedDiv.appendChild(caption)
  captionedDiv.appendChild(img)

  return captionedDiv
}


const threeSecDiv = (imgOs) => {

  let threeRowDiv = document.createElement("div")
  threeRowDiv.classList.add("threeRowDiv")

  imgOs.forEach(i => {
    let captioned = captionedImg(imgPrefix + i.filename, i.caption)
    captioned.classList.add("bottomCaptioned")
    captioned.classList.add("captioned")
    threeRowDiv.appendChild(captioned)
  })

  return threeRowDiv
}


document.addEventListener("DOMContentLoaded", () => {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight


  let headlineimg = document.createElement("img")
  headlineimg.src = "IMG_6539.jpg"
  headlineimg.classList.add("headlineimg")

  let headlineimgDiv= document.createElement("div")
  headlineimgDiv.classList.add("headlineimgContainer")
  headlineimgDiv.appendChild(headlineimg)



  document.querySelector("#main").appendChild(headlineimgDiv)
  document.querySelector("#main").appendChild(beginDiv())

  document.querySelector("#main").appendChild(threeSecDiv(imgs.laptop))
  document.querySelector("#main").appendChild(threeSecDiv(imgs.bin))
  document.querySelector("#main").appendChild(threeSecDiv(imgs.wires))




  imgs.glasses.forEach(g => {
    document.querySelector("#main").appendChild(leftCaptionedDiv(imgPrefix + g.filename, g.caption))
  })


})

