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

const ASSET = filename => `https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-05-17-dyesens/${filename}`

const ap = (up, child) => {
  let parent = typeof up == "string" ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}

const qs = sel => document.querySelector(sel)

const qsa = document.querySelectorAll

let div = (cls, insides) => {
  let ele = document.createElement("div")
  ele.classList.add(cls)
  insides.forEach(inside => ap(ele, inside))
  return ele
}

let p = inside => {
  let ele = document.createElement("p")
  ele.innerText = inside
  return ele
}

let h1 = inside => {
  let ele = document.createElement("h1")
  ele.innerText = inside
  return ele
}

let img = src => {
  let ele = document.createElement("img")
  ele.src = src
  return ele
}

let span = txt => {
  let ele = document.createElement("span")
  ele.innerText = txt
  return ele
}

let ul = textItems => {
  let ele = document.createElement("ul")
  textItems.forEach(textItem => {
    let li = document.createElement("li")
    li.innerText = textItem
    ele.appendChild(li)
  })
  return ele
}

let ahref = (url, inside) => {
  let ele = document.createElement("a")
  ele.href = url
  ele.appendChild(inside)
  return ele
}

let embed = html => {
  let ele = document.createElement("div")
  ele.innerHTML = html
  return ele
}

const processimgs = [
"IMG_6985.jpg",
"IMG_6986.jpg",
"IMG_6987.jpg",

]
document.addEventListener("DOMContentLoaded", () => {
  let contentList = [
    div("title", [h1("dyesens")]),
    div("studentlist", [
      p(
        "for our final for energy, aileen and i attempted to make dye sensitized solar cells. but i ruined the project by buying conductive PET instead of conductive glass."
      ),
      img(ASSET("price.png")),
      ahref(
        "https://www.sciencedirect.com/science/article/pii/S2211285512002066",
        p(
          "we later found out that DSSC on PET is currently an unsolved topic of interest in the field"
        )
      )
    ]),
    div("jiodsf", [
      p("so all we could do is make a presentation about it"),
      embed(
        `<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTgcYzGASTrv6j8LiIQtWEIo_bz0wq2GPxEnWFLhF50gytWgptZTxRkkyBDNPJ8FFNDXuVXu4vHBqdV/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`
      )
    ]),
    div("dssc", [
      p(
        "i forgot to talk about how DSSC are doing vs other photovoltaaics though"
      ),
      p("here is the chart everyone copies and pastes"),
      img(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CellPVeff%28rev190416%29.pdf/page1-1600px-CellPVeff%28rev190416%29.pdf.jpg"
      ),
      div("wikiquotes", [
        span("here are some quotes from "),
        ahref("https://en.wikipedia.org/wiki/Dye-sensitized_solar_cell#Efficiency", span("wikipedia")),
        ul([
          "Although the dye is highly efficient at converting absorbed photons into free electrons in the TiO2, only photons absorbed by the dye ultimately produce current.",
          `Due to their "depth" in the nanostructure there is a very high chance that a photon will be absorbed, and the dyes are very effective at converting them to electrons. Most of the small losses that do exist in DSSC's are due to conduction losses in the TiO2 and the clear electrode, or optical losses in the front electrode. `,
          "Most of the small losses that do exist in DSSC's are due to conduction losses in the TiO2 and the clear electrode, or optical losses in the front electrode.",
          "Overall peak power conversion efficiency for current DSSCs is about 11%. [Current record for prototypes lies at 15%."
        ])
      ])
    ]),
    div("takeaways", [
      p("our takeaways were"),
      ul([
        "a lot of loss of efficiency is possible based on method of adhering the TiO2 to the conduction layer. the dye + dye substrate itself has no problem",
        "most of the variance in efficiencies the field is concentrating on is comparing different dyes. see lik https://dyedb.com/",
        "many of the techniques to get better efficiency are on a sliding scale away from the low-budget + high margin of error 'spirit' of the original demonstration that inspired interest in the method in the first place",
        "DSSC don't have the head start for efficiency that silicon has, but the low cost of production for them sustains interest in the method"
      ])
    ]),
    div("process", [
      p("some photographic evidence of the project i doomed"),
      ].concat(processimgs.map(i => img(ASSET(i))))),
    div("nexts", [
      p("current status: "),
      ul([
        "i order some of the good stuff from ebay",
        "we are going with stringing together facotry solar cells, since we weren't sure if we could get the cells efficient enough to not require making hundreds of them to get the current we needed",
        ]),
      img(ASSET("IMG_7082.png"))
      ]),
    div("biblio", [
      p("links for future use"),
      ul([
        "https://dyedb.com/",
        "http://butane.chem.uiuc.edu/murphycj/chem204spring2014/handouts/sp14/DSSCOverview.pdf",
        "https://www.instructables.com/id/DIY-solar-cell-from-scratch/",
        "https://www.iflscience.com/technology/tweaked-graphene-could-double-electricity-generated-solar/",
        "https://www.youtube.com/user/RobertMurraySmith",
        "https://www.youtube.com/watch?v=CXmchQ1jNSM",
        "https://www.instructables.com/id/DIY-Solar-Panel/",
        "https://www.sciencedirect.com/science/article/pii/S2211285512002066",
        ])
      ])
  ]
  contentList.forEach(n => {
    ap("#main", n)
  })

  let colWidth = 10
  let nCols = 2048 / colWidth
  let cols = _.range(nCols).map(i => {
    let top = div("top", [])
    top.style["height"] = `0px`
    let col = div("dripcolumn", [
      top,
      div("bottom", [])
      ])

    return {
      ele: col,
      rate: _.random(0.02, 0.4)
    }
  })
  cols.forEach(({ele}) => qs("#drip").appendChild(ele))

  setInterval(() => {
    cols.forEach(({ele, rate}) => {

      let currentHeight = ele.querySelector(".top").style["height"].replace("px", "")
      ele.querySelector(".top").style["height"] = `${Number(currentHeight) + rate}px`
    })
  }, 20)
})
