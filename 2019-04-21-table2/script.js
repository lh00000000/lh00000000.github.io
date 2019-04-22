const s3prefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-21-table2/"

let photos = [
    {
        filename: "IMG_6739.jpg",
        caption: "INK TEST SCRAP HARD LAB SIGHTING"
    },
    {
        filename: "57678692905__7551CD5A-65B8-4462-9252-F3011172F21A.jpg",
        caption: "EMILY'S WOOD"
    },
    {
        filename: "IMG_6681.jpg",
    },
    {
        filename: "IMG_6682.jpg",
    },
    {
        filename: "IMG_6683.jpg",
    },
    {
        filename: "IMG_6684.jpg",
        caption: "NICE PIPE"
    },
    {
        filename: "IMG_6686.jpg",
        caption: "CATASTROPHE"
    },
    {
        filename: "IMG_6687.jpg",
        caption: "REINSERT ENDMILL + REZERO + PERCENT SKIP"
    },
    {
        filename: "IMG_6688.jpg",
        caption: "BROKEN OFF -> SANDED ANYWAYS"
    }
]


let failureMovie = "IMG_6685.MOV"
// TODO ADD TO SOUNDS

const createBlock = () => {
    let div = document.createElement("div")
    div.classList.add("block")
    return div
}

document.addEventListener("DOMContentLoaded", () => {

  let photoEles = photos.map(p => {
    let img = document.createElement("img")
    img.src = `${s3prefix}${p.filename}`
    let div = createBlock()
    div.appendChild(img)

    if ("caption" in p) {

        let captionDiv = document.createElement("div")
        captionDiv.classList.add("caption")

        let paraEle =  document.createElement("p")
        paraEle.innerText = p.caption

        captionDiv.appendChild(paraEle)
        div.appendChild(captionDiv)
    }

    return div
  })

  let blankEle = _.range(photoEles.length).map(b => {
    let block = createBlock()
    let div = document.createElement("div")
    div.classList.add("blank")
    block.appendChild(div)
    return block
})


  let movieBlock = createBlock()
  movieBlock.innerHTML = `<video controls><source src="${s3prefix}${failureMovie}" type="video/mp4"></video>`
  movieBlock.innerHTML += `<div class='caption'><p>rRUINED</p></div>`
  let allEle = _.shuffle(photoEles.concat(blankEle, [movieBlock]))
  allEle.forEach(ele => {
    document.querySelector("#main").appendChild(ele)
  })

  let infoBlock = createBlock()
  infoBlock.classList.add("info")

  let infoP = document.createElement("p")
  infoP.innerText = "2019-03-12 @2019-03-14-subtractfailure OFFSET INNER (FIX LACK OF AFFORDANCE)"

  infoBlock.appendChild(infoP)
  document.body.appendChild(infoBlock)
})

