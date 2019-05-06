let state = {
    blinking: false
}

const spillContents = (tick = 1) => {
    document.querySelector("#spillzone").prepend(blogText[blogText.length - tick])
    if (tick < blogText.length) {
        setTimeout(() => spillContents(tick + 1), 40)
    }
}
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#helpButton").addEventListener("click", e => {
      e.preventDefault()

      window.open(`https://player.vimeo.com/video/334349101`, "_blank")
      // let previewDiv = document.createElement("div")
      // previewDiv.innerHTML = `<iframe src="https://player.vimeo.com/video/334349101" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      // previewDiv.style["position"] = "fixed"
      // previewDiv.classList.add("towardsRight")
      // document.body.appendChild(previewDiv)
    })
    document.querySelector("#calc").addEventListener("submit", e => {
        e.preventDefault()
        let A0 = document.querySelector("#A0").checked
        let A1 = document.querySelector("#A1").checked
        let B0 = document.querySelector("#B0").checked
        let B1 = document.querySelector("#B1").checked

        if (A0 && B0) {
          document.querySelector("#sum").innerText = `ZERO ... PLEASE COMPUTE AGAIN.`
          document.querySelector("#spillzone").innerText = `NONE`
        }

        if ((A1 && B0) || (A0 && B1) ) {
          document.querySelector("#sum").innerText = `ONE ...................... INSTRUMENT FOR THE ADDITION OF DIGITAL SOLAR INFORMATION.`
          document.querySelector("#spillzone").innerText = `NONE`
        }
        if (A1 && B1) {
          setInterval(() => {
            let bigStr = "COMPUTING DISABLED".split("").map(c => _.range(Math.ceil(Math.random() * 2)).map(i => c).join("")).join("")
            document.querySelector("#computeButton").value = bigStr
          }, 200)

          document.querySelector("#helpButton").disabled = true
          document.querySelector("#helpButton").value = "NOHELP"

          document.querySelector("#computeButton").disabled = true

          document.querySelector("#sum").innerText = ""
          let marq = document.createElement("marquee")
          marq.hspace = 0
          marq.innerText = _.range(64).map(x => "ERROR").join(" ")
          document.querySelector("#sum").appendChild(marq)

          document.querySelector("#spillzone").innerText = ""
          spillContents()
        }
        return false
    })
})
let text = s =>
    s.split("").map(c => {
        let span = document.createElement("span")
        span.innerText = c
        return span
    })

let img = (src, classs) => {
    let i = document.createElement("img")
    i.src = src

    if (classs) {i.classList.add(classs)}
    return i
}
let video = url => {
    let vid = document.createElement("video")
    let sou = document.createElement("source")
    sou.src = url
    sou.type = "MOV"
    vid.appendChild(sou)
    return vid
}
let sketch = src => {
    let imgg = img(src)
    imgg.classList.add("sketch")
    return imgg
}
let look = x => {
    console.log(x)
    return x
}
let blogText = _.concat(
    text("ITP : 2019 : SPRING : ENERGY : MIDTERM : PROMPT: SOLAR COMPUTATION...."),
    text(". IDEATION pROCESS = "),
    [
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/549F9097-1830-4898-93A5-C2242CB389FE.png", "sms"),
        sketch("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Apr%201,%202019%20at%2064320%20PM.jpg"),
        sketch("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Apr%201,%202019%20at%2064353%20PM.jpg"),
        sketch("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20104303%20PM.jpg"),
        sketch("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20104308%20PM.jpg"),
        sketch("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20105158%20PM.jpg")
    ],
    text(". PRELIMINARY RESEARCH : PHOTOVOLTAIC PANEL : TESTING = "),
    [img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6131.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6135.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6206.jpg")
    ],
    text(". MATERIAL ORGANIZATION METHODS = "),
    [img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6137.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6203.jpg"),
    ],
    text(". WOW. LOGIC GATE RESEARCH = "),
    [img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6151.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6207.jpg")
    ],
    text(". BUSH FABRICATION METHODS : SPINE = "),
    [img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6474.jpg"), ],
    text(". BUSH FABRICATION METHODS : ATLAS MERGE METHOD = "),
    [img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6476.jpg")],
    text(". SSOOLLDDEERR"), [
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6493.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6477.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6486.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6580.jpg"),
        img("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6494.jpg"),
    ]
)