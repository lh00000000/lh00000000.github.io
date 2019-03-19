const s3prefix = https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-02-10-stavecardfailure/
const captionedImage = ({caption, imgSrc}, x, y) => {
  let div = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")


  img.src = s3prefix + imgSrc
  p.innerText = caption
  div.classList.add("captionedImage")
  div.appendChild(img)
  div.appendChild(p)
  div.style.top = `${y}px`
  div.style.left = `${x}px`
  return div
}

const captionedSound = ({caption, soundSrc}, x, y) => {
  let div = document.createElement("div")
  let audio = document.createElement("audio")
  let audSrc = document.createElement("source")
  let p = document.createElement("p")

  audSrc.src = s3prefix + soundSrc
  audSrc.type = "audio/mp3"
  audio.appendChild(audSrc)
  audio.controls = true
  p.innerText = caption


  div.classList.add("captionedImage")

  div.appendChild(audio)
  div.appendChild(p)
  div.style.top = `${y}px`
  div.style.left = `${x}px`
  return div
}
const captionedEmbed = ({caption, embedSrc}, x, y) => {
  let div = document.createElement("div")
  let embedDiv = document.createElement("div")
  let p = document.createElement("p")

  div.classList.add("captionedImage")
  p.innerText = caption
  embedDiv.innerHTML = embedSrc

  div.appendChild(embedDiv)
  div.appendChild(p)
  div.style.top = `${y}px`
  div.style.left = `${x}px`
  return div
}

let videoEmbed = `<iframe src="https://player.vimeo.com/video/317195101" width="400px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/317195101">stavecardfailed</a> from <a href="https://vimeo.com/luming">Luming Hao</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`

const content = [
  {imgSrc: "card.jpg", caption: "for the othermill skillbuilder of Ben Light's 2019 ITP Subtraction: Cutting class, i wanted to make a stencil for drawing music staves that was credit card sized so i could put it in my wallet. please scroll through this post using the arrow keys like a cnc."},

  {imgSrc: "raw.jpg", caption: "found material from shop"},
  {imgSrc: "bandsaw.jpg", caption: "using band saw to normalize material to rectangle"},
  {imgSrc: "donated.jpg", caption: "i donated the scrap to the free store"},

  {imgSrc: "dimscript.png", caption: "script i used to get the grill area proportional. initially tried to have the grill be a third of the vertical size, but that was too small for my bit. so i went to a half, then enough to have the width of the bit. then enough to have the width of the bit plus a little bit of buffer."},

  {imgSrc: "asfilled.png", caption: "attempting to have troughs only as wide as bit. designing using filled areas as wide as bit."},
  {imgSrc: "aslines.png", caption:"attempting to have troughs only as wide as bit. designing using lines. bantam didn't like it."},
  {imgSrc: "needsmaller.png", caption: "ahh !"},
  {imgSrc: "tooltoolarge.png", caption: "ahh !!!"},

  {imgSrc: "finallypreview.png", caption: "finally, got a design to get preview to show in bantam with actual cutting"},

  {imgSrc: "wrenches.jpg", caption: "wrenches to attach bit. s/o to gilad for coordinating a group order."},
  {imgSrc: "onbed.jpg", caption: "attached to bed using double sized tape"},

  {imgSrc: "homing.png", caption: "turning on requires a new homing (tip touching non-material part of the bed)"},
  {imgSrc: "touching.jpg", caption: "it touched"},
  {imgSrc: "probing.png", caption: "something looked wrong but i guess it turned out okay"},

  {imgSrc: "bantamsettings.png", caption: "lots of dust while milling. shouldn't have used this thick of material."},
  {imgSrc: "digging.jpg", caption: "it was really digging at it"},
  {soundSrc: "millsound.wav", caption: "there was a low hum at a C and the cutting happend at major thirds and fourths. does bantam tune their mills?"},
  {embedSrc: videoEmbed, caption: "i guess it's working"},
  {imgSrc: "aftermath.jpg", caption: "it was very dusty when it was over"},
  {imgSrc: "vacuumed.jpg", caption: "after a lot of vacuuming"},

  {imgSrc: "ew.jpg", caption: "the result was a gross failure. the lines were way to wide"},
  {imgSrc: "wallet.jpg", caption: "i guess it fits"},
  {imgSrc: "workaround.jpg", caption: "it does kind of work if i trace along the edges of each trough, i.e two lines per trough, adding to my desire to get 1/16 bits now"},
  {imgSrc: "final.jpg", caption: "oh well. i've been using it to underline passages of my readings for other classes though."},
]

let coors = [
[0, 0],
[1, 0],
[2, 0],
[2, 1],
[2, 2],
[2, 3],
[3, 3],
[3, 4],
[3, 5],
[2, 5],
[1, 5],
[1, 6],
[1, 7],
[2, 7],
[3, 7],
[3, 8],
[3, 9],
[3, 10],
[3, 11],
[4, 11],
[4, 12],
[4, 13],
[3, 13],
[3, 14],
[3, 15],
]

document.addEventListener("DOMContentLoaded", () => content.forEach((c, i) => {
  let spacing = 510
  let x = coors[i][0] * spacing
  let y = coors[i][1] * spacing
  if ("imgSrc" in c) {
    document.querySelector("#main").appendChild(captionedImage(c, x, y))
  }

  if ("embedSrc" in c) {
    document.querySelector("#main").appendChild(captionedEmbed(c, x, y))
  }

  if ("soundSrc" in c) {
    document.querySelector("#main").appendChild(captionedSound(c, x, y))

  }
}))
