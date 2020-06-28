let state = {
  blinking: false
}

const spillContents = (tick = 1) => {
  document.querySelector("#spillzone").prepend(blogText[blogText.length - tick])
  if (tick < blogText.length) {
    setTimeout(() => spillContents(tick + 1), 0)
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
      document.querySelector(
        "#sum"
      ).innerText = `ZERO ... PLEASE COMPUTE AGAIN.`
      document.querySelector("#spillzone").innerText = `NONE`
    }

    if ((A1 && B0) || (A0 && B1)) {
      document.querySelector(
        "#sum"
      ).innerText = `ONE ...................... INSTRUMENT FOR THE ADDITION OF DIGITAL SOLAR INFORMATION.`
      document.querySelector("#spillzone").innerText = `NONE`
    }
    if (A1 && B1) {
      setInterval(() => {
        let bigStr = "COMPUTING DISABLED"
          .split("")
          .map(c =>
            _.range(Math.ceil(Math.random() * 2))
              .map(i => c)
              .join("")
          )
          .join("")
        document.querySelector("#computeButton").value = bigStr
      }, 50)

      document.querySelector("#helpButton").disabled = true
      document.querySelector("#helpButton").value = "NOHELP"

      document.querySelector("#computeButton").disabled = true

      document.querySelector("#sum").innerText = ""
      let marq = document.createElement("marquee")
      marq.hspace = 0
      marq.innerText = _.range(64)
        .map(x => "ERROR")
        .join(" ")
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
let link = (s, http) =>
  s.split("").map(c => {
    let a = document.createElement("a")
    a.href = http
    a.innerText = c
    return a
  })

let img = (src, classs) => {
  let i = document.createElement("img")
  i.src = src

  if (classs) {
    i.classList.add(classs)
  }
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

const urls = {
  eagleSche:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/A57B1461-D026-4BB1-91CF-9231794F59F3.png",
  img0:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/549F9097-1830-4898-93A5-C2242CB389FE.png",
  img1:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Apr%201,%202019%20at%2064320%20PM.jpg",
  img2:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Apr%201,%202019%20at%2064353%20PM.jpg",
  img3:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20104303%20PM.jpg",
  img4:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20104308%20PM.jpg",
  img5:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/Photo%20Mar%2015,%202019%20at%20105158%20PM.jpg",
  imgB1:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6131.jpg",
  imgB2:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6135.jpg",
  imgB3:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6206.jpg",
  imgB4:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6137.jpg",
  imgB5:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6203.jpg",
  imgB6:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6151.jpg",
  imgB7:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6207.jpg",
  imgB8:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6474.jpg",
  imgB9:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6476.jpg",
  imgB10:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6493.jpg",
  imgB11:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6477.jpg",
  imgB12:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6486.jpg",
  imgB13:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6580.jpg",
  imgB14:
    "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-11-sunadd/IMG_6494.jpg",

  //TODO
  design1:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunadddesign/Screen%20Shot%202019-04-30%20at%202.48.29%20AM.png",
  design2:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunadddesign/Screen%20Shot%202019-04-30%20at%203.06.03%20AM.png",
  shardbtm:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunadddesign/shard.btm",
  morenotes1:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Apr%201%2C%202019%20at%2064320%20PM.jpg",
  morenotes2:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Apr%201%2C%202019%20at%2064353%20PM.jpg",
  morenotes3:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Jun%205%2C%202019%20at%2095806%20AM.jpg",
  morenotes4:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Jun%205%2C%202019%20at%2095835%20AM.jpg",
  morenotes5:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Jun%205%2C%202019%20at%20100501%20AM.jpg",
  morenotes6:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Jun%205%2C%202019%20at%20100542%20AM.jpg",
  morenotes7:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Jun%205%2C%202019%20at%20105108%20AM.jpg",
  morenotes8:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Mar%2015%2C%202019%20at%20104303%20PM.jpg",
  morenotes9:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Mar%2015%2C%202019%20at%20104308%20PM.jpg",
  morenotes10:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddnotes/Photo%20Mar%2015%2C%202019%20at%20105158%20PM.jpg",

  show1:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddshow/IMG_7151.jpg",
  show2:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddshow/IMG_7152.jpg",
  show3:
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/sunaddshow/IMG_7166.jpg",

  "wiresontable":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/58000100835__0D42B334-19C0-48A4-B8B3-865B39DE5EBC.jpg",
  "basementfar":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/IMG_6968.jpg",
  "face":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/IMG_7120.jpg",
  "basement":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/IMG_6969.jpg",
  "coiled":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/IMG_7127.jpg",
  "oneshard":
    "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-sunaddmore/IMG_7111.jpg"
}

const period = () => text(". ")
const board = [
  text("POWER BANKING : BOARD FABRICATION = "),
  [img(urls.design1, "othermill"), img(urls.design2, "othermill")],
  period()
]

const sketches = [
  text("IDEATION PROCESS = "),
  [
    img(urls.img0, "sms"),
    sketch(urls.img1),
    sketch(urls.img2),
    sketch(urls.img3),
    sketch(urls.img4),
    sketch(urls.img5),
    sketch(urls.morenotes1),
    sketch(urls.morenotes2),
    sketch(urls.morenotes3),
    sketch(urls.morenotes4),
    sketch(urls.morenotes5),
    sketch(urls.morenotes6),
    sketch(urls.morenotes7),
    sketch(urls.morenotes8),
    sketch(urls.morenotes9),
    sketch(urls.morenotes10)
  ],
  period()
]

const v1  = [
  text("V1 WPANELS ="),
  [

    img(urls.basementfar),
    img(urls.basement),
  ],
  period()
]

const bush = [
  text("BUSH FABRICATION ="),
  [

    img(urls.wiresontable),
    img(urls.coiled),
    img(urls.face),
    img(urls.oneshard),
    img(urls.eagleSche),
    img(urls.imgB8),
    img(urls.imgB9),
    img(urls.imgB10),
    img(urls.imgB11),
    img(urls.imgB12),
    img(urls.imgB13),
    img(urls.imgB14)
  ],
  period()
]

const research = [
  text("RESEARCH: PHOTOVOLTAIC + LOGICGATE ="),
  [
    img(urls.imgB1),
    img(urls.imgB2),
    img(urls.imgB3),
    img(urls.imgB4),
    img(urls.imgB5),
    img(urls.imgB6),
    img(urls.imgB7)
  ],
  period()
]

const explanation = [
  text("GUIDING QUOTE = \"DIFFÉRANCE APPEARS ALMOST BY NAME IN THEIR TEXTS, AND IN THOSE PLACES WHERE EVERYTHING IS AT STAKE. I CANNOT EXPAND UPON THIS HERE; I WILL ONLY RECALL THAT FOR NIETZSCHE \"THE GREAT PRINCIPAL ACTIVITY IS UNCONSCIOUS,\" AND THAT CONSCIOUSNESS IS THE EFFECT OF FORCES WHOSE ESSENCE, BYWAYS, AND MODALITIES ARE NOT PROPER TO IT. FORCE ITSELF IS NEVER PRESENT; IT IS ONLY A PLAY OF DIFFERENCES AND QUANTITIES. THERE WOULD BE NO FORCE IN GENERAL WITHOUT THE DIFFERENCE BETWEEN FORCES; AND HERE THE DIFFERENCE OF QUANTITY COUNTS MORE THAN THE CONTENT OF THE QUANTITY, MORE THAN ABSOLUTE SIZE ITSELF. \"QUANTITY ITSELF, THEREFORE, IS NOT SEPARABLE FROM THE DIFFERENCE OF QUANTITY. THE DIFFERENCE OF QUANTITY IS THE ESSENCE OF FORCE, THE RELATION OF FORCE TO FORCE. THE DREAM OF TWO EQUAL FORCES, EVEN IF THEY ARE GRANTED AN OPPOSITION OF MEANING, IS AN APPROXIMATE AND CRUDE DREAM, A STATISTICAL DREAM, PLUNGED INTO BY THE LIVING BUT DISPELLED BY CHEMISTRY. (GILLES DELEUZE, NIETZSCHE ET LA PHILOSOPHIE (PARIS: PRESSES UNIVERSITAIRES DE FRANCE, 1970), P. 49.)\" (DERRIDA, JACQUES, AND ALAN BASS. MARGINS OF PHILOSOPHY. CHICAGO: UNIVERSITY OF CHICAGO PRESS, 1982. PRINT.)\" "),

  text("SUNADD = AN AMBIGUITY BETWEEN POTENTIALITY AND DIFFERENCE."),
  text(
    "SUNADD = COMPUTATION AS INFORMATION AS DENSITY AS ERROR AS COMPROMISE AS THRESHOLD AS ABSTRACTION AS FORGETTING. "
  ),
  text("SUNADD = A ONE BIT ADDER CIRCUIT WITH TWO INPUTS OF SOLAR STRINGS. "),

  text(
    "SUNADD = A PERSONAL COMPUTER DESIGNED FOR AN UNTAPPED CONSUMER MARKET OF ONE AKA THE SUN. "
  ),

  text('SUNADD = ITP : 2019 : SPRING : ENERGY : PROMPT="SOLAR COMPUTATION". '),
  text("SUNADD = A COLLABORATION BETWEEN LUMING HAO AND "),
  link("AILEEN STANZIOLA", "https://aileenstanziola.com"),
  period(),
  text(
    `HUI SAYS "SHANNON SAYS "INFO IS ENTROPY", WIENER SAYS "INFO IS ANTI ENTROPY", BATESON SAYS "INFO IS PATTERN""`
  ),
  period()
]

const processDivider = text(
  "PROCESS " +
    _.range(256)
      .map(d => "/")
      .join("")
)
const showPics = [
  img(urls.show1, "showPic"),
  img(urls.show2, "showPic"),
  img(urls.show3, "showPic")
]
let blogText = _.concat(
  ...showPics,
  ...explanation,
  processDivider,
  ...v1,
  ...bush,
  ...board,
  ...research,
  ...sketches
)
