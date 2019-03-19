const captionedImage = ({caption, imgSrc}) => {
  let div = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")

  let s3prefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-02-06-energyinit/"
  img.src = s3prefix + imgSrc

  p.innerText = caption
  div.classList.add("captionedImage")
  div.appendChild(img)
  div.appendChild(p)
  return div
}

const content = _.shuffle([
{
  imgSrc: "wretchedcoil.png",
  caption: "we used hot glue to try to keep our coil intact"
},
{
  imgSrc: "coil.gif",
  caption: "winding a coil from stripped wire"
},
{
  imgSrc: "coildoesntwork.gif",
  caption: "moving a magnet thru our coil didn't seem to work"
},
{
  imgSrc: "gearlight.gif",
  caption: "attaching a gearmotor to an led generates voltage"
},
{
  imgSrc: "isitnoise.gif",
  caption: "is voltage coming out of our coil? or is it just noise?"
},
{
  imgSrc: "shakeweight.gif",
  caption: "we thought moving the magnetic through the coil faster would do something, so we taped both ends and shook it. it didn't work."
},
{
  imgSrc: "coil1.jpeg",
  caption: "winding a coil by hand"
},
{
  imgSrc: "flashlight.jpg",
  caption: "minmal crank flashlight"
},
{
  imgSrc: "minishakeweight.jpg",
  caption: "minimal shakeweight flashlight. pledge to our kickstarter to make it work."
},
])


let i = 0
const insertOne = () => {
  if (i < content.length) {
    document.querySelector("#insertHere").appendChild(captionedImage(content[i]))
    i++
    setTimeout(insertOne, Math.random() * 2000 + 50)
  }
}

document.addEventListener("DOMContentLoaded", insertOne)


const bgGifs = [
  "animated-energy-image-0011.gif",
  "animated-energy-image-0001.gif",
  "animated-energy-image-0003.gif",
  "animated-energy-image-0004.gif",
  "animated-energy-image-0005.gif",
  "animated-energy-image-0006.gif",
  "animated-energy-image-0007.gif",
  "animated-energy-image-0008.gif",
  "animated-energy-image-0009.gif",
  "animated-energy-image-0010.gif",
]

let j = 0
const generateEnergy = () => {
  let img = document.createElement("img")


  img.src = `https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-02-06-energyinit/${_.sample(bgGifs)}`
  document.querySelector("#bgGifs").appendChild(img)
  j++
  if (j < 64) setTimeout(generateEnergy, 200)
}

document.addEventListener("DOMContentLoaded", generateEnergy)