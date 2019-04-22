const imgPrefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-22-leaveanote/"

const captionedImg = (imgSrc, captionText) => {
  let d = document.createElement("div")
  d.classList.add("captionedImg")


  let img = document.createElement("img")
  img.src = imgSrc

  let captionDiv = document.createElement("div")
  captionDiv.classList.add("captionDiv")

  let captionP = document.createElement("p")
  captionP.innerText = captionText

  captionDiv.appendChild(captionP)
  d.appendChild(img)
  d.appendChild(captionDiv)

  return d
}


const imgs = [
  {filename: "IMG_6585.jpg", captionText: "freestore log for 2019-04-06"},
  {filename: "IMG_6586.jpg", captionText: "target: middle shelf debris"},
  // {filename: "IMG_6587.jpg", captionText: ""},
  {filename: "IMG_6589.jpg", captionText: "found tiny notebook to use as new guestbook"},
  {filename: "IMG_6590.jpg", captionText: "my \"workstation\""},
  {filename: "IMG_6591.jpg", captionText: "categories: trash, metallic, materials drawer, freestore finds bin"},
  {filename: "IMG_6592.jpg", captionText: ""},
  {filename: "IMG_6594.jpg", captionText: "claimed bin for metal hardware"},
  {filename: "IMG_6593.jpg", captionText: "cleared bed"},
  {filename: "IMG_6595.jpg", captionText: "swept and vacuumed"},
]

document.addEventListener("DOMContentLoaded", () => {
  imgs.forEach(i => {

    document.querySelector("#main").appendChild(captionedImg(imgPrefix + i.filename, i.captionText))
  })

})