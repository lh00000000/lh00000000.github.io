const nCompositions = 6

const initBg = () => {
  let makeNewPhrase = () =>
    d3.range(nCompositions).map(i => {
      let img = document.createElement("img")
      img.src = `https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2018-11-28-sixpalette/gifs/offset-${i}.gif`

      img.width = 32
      return img
    })

  let bg = document.querySelector("#bg")
  let nPhrases = 2048
  d3
    .range(nPhrases)
    .forEach(() => makeNewPhrase().forEach(img => bg.appendChild(img)))
}
const look = x => {
  console.log(x)
  return x
}

const node = (tagName, insides = [], opts = {}) => {
  let tag = document.createElement(tagName)
  Object.entries(opts).forEach(([key, val]) => {
    tag[key] = val
  })
  insides.forEach(child => tag.appendChild(child))
  return tag
}

const textNode = text => document.createTextNode(text)

const crumbSixLayoutInstagram = () => {
  let crumbInstagramEmbeds = [...document.querySelectorAll(".instagram-media")]


  let widened = crumbInstagramEmbeds.map(item => {
    let divved = node("div", [])

    item.style["max-width"] = "100%"
    item.style["min-width"] = "0%"
    divved.style["max-width"] = "30%"
    divved.style["vertical-align"] = "top"
    divved.style.display = "inline-block"
    divved.appendChild(item)

    return divved
  })

  return [
    node("h1", [textNode("RESULT:")]),
    node("div", [
      node("div", widened.slice(0, 3)),
      node("div", widened.slice(3))
    ])
  ]
}
window.onload = () => {
  initBg()
  let main = document.querySelector("#main")

  const crumbPrompt = [
    node("h1", [textNode("PROMPT: ")]),
    node("ul", [
      node("li", [textNode("1. COLOR PALETTE OF FIVE COLORS")]),
      node("li", [textNode("2. SIX COMPOSITIONS USING PALETTE")]),
      node("li", [textNode("3. INSTAGRAM DUMP")])
    ])
  ]

  const crumbClassMeta = [
    node("p", [textNode("COURSE: ITP VISUAL LANGUAGE 2018")]),
    node("p", [textNode("DT: 2018-11-28")])
  ]

  const crumbWants = [
    node("h1", [textNode("WANTED:")]),
    node("ul", [
      node("li", [textNode(`.TO PLAY WITH BORDER AS BACKGROUND`)]),
      node("li", [
        textNode(
          `.TO ENTER IN HEX CODES AND HAVE THE COMPOSITION BE VERY HEX-Y`
        )
      ]),
      node("li", [
        textNode(
          `.TO PLAY WITH RECURRING DARK-GREY OFF-BLACK AND SLIGHTLY GRAYED OFF-WHITE`
        )
      ]),
      node("li", [
        textNode(
          `.THE NUMBER OF COMPOSITIONS TO BE A PART OF THE INDIVIDUAL COMPOSITION`
        )
      ]),
      node("li", [textNode(`.AN OPPORTUNITY TO PRACTICE CLOJURE`)])
    ])
  ]

  const crumbsGlobal = [
    node("h1", [textNode("GLOBAL COMPOSITION:")]),
    node("ul", [
      node("li", [
        textNode(
          "LOCAL PALETTE: ROTATED VERSION OF SORTED-BY-LUMINOSITY MASTER PALETTE"
        )
      ]),
      node("li", [textNode("WIDTH: 64 PIXELS")]),
      node("li", [textNode("HEIGHT: 64 PIXELS")]),
      node("li", [textNode("OUTERBORDER: TWO PIXELS COLOR ONE")]),
      node("li", [textNode("INNERBORDER: TWO PIXELS COLOR TWO")]),
      node("li", [textNode("INNERCONTENT: COLOR THREE COLOR FOUR COLOR FIVE")]),
      node("li", [textNode("BOTTOMLEFT: SUMMARY INNERCONTENT PALETTE")])
    ])
  ]

  const crumbsLocal = [
    node("h1", [textNode("LOCAL COMPOSITION:")]),
    node("ul", [
      node("li", [textNode("MANUALLY SELECTED IMAGE")]),
      node("li", [
        textNode("PIXEL DATA QUANTIZED TO THREE COLOR GLOBAL SUBSET PALETTE")
      ]),
      node("li", [
        textNode("WEIGHTING ACCORDING TO ON-BITS OF LOCAL-ID NUMBER IN BINARY")
      ])
    ])
  ]

  const weighting = i => {
    let s = [
      ["SATURN", "001", "░ ░ █"],
      ["MONOLITH", "010", "░ █ ░"],
      ["MOUNTAIN", "011", "░ █ █"],
      ["ROCKY", "100", "█ ░ ░"],
      ["NOSE", "101", "█ ░ █"],
      ["STAIRCASE", "110", "█ █ ░"]
    ]

    return [
      node("p", [textNode(`COMPOSITION ${i + 1} = ${s[i][0]}`)]),
      node("p", [textNode(`${i + 1} = ${s[i][1]}`)]),
      node("p", [textNode(`${s[i][1]} = ${s[i][2]}`)]),
      node("img", [], { src: `https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2018-11-28-sixpalette/unit/${i}.png` }),
      node("img", [], { src: `https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2018-11-28-sixpalette/originals/${s[i][0]}.png`, height: 64 }),
      node("p", [textNode("---")])
    ]
  }

  const crumbsSpatial = [
    node("h1", [textNode("WEIGHTING:")]),
    node("ul", d3.range(6).map(i => node("li", weighting(i))))
  ]

  const crumbChallenges = [
    node("h1", [textNode("CHALLENGES:")]),
    node("ul", [
      node("li", [
        textNode(
          `.IMAGES BY MIKERA RETURNS DATA AS ARGB INTEGERS LEFT-PADDED WITH 1S BUT ALL COLORS OPERATIONS RETURN AS LONGS LEFT-PADDED WITH 0S`
        )
      ]),
      node("li", [
        textNode(
          `.I USED EVOCOMPUTING COLORS PACKAGE TO DO HSL LUMINOSITY CONVERSIONS, WHERE COLOR COMPONENTS ARE OUTPUT AS RGBA, SO I HAD TO TAKE SPECIAL CARE (AFTER A LOT OF TRIAL AND ERROR) TO GET MY BIT-SHIFTING RIGHT. IT'S PROBABLY STILL WRONG BUT AT LEAST I GOT THE RELATIVE DISPLAYS OF LUMINOSITY AND FORWARDS AND BACK CONVERSION (BETWEEN THE JAVA INTEGERS THAT IMAGEZ RETURNS JAVA'S BUFFEREDIMAGE AND EVOCOMPUTING'S COLORS PACKAGE) THAT I WANTED. `
        )
      ])
    ])
  ]

  let blogPostCrumbs = [
    ...crumbClassMeta,
    ...crumbPrompt,
    ...crumbSixLayoutInstagram(),
    ...crumbWants,
    ...crumbChallenges,
    ...crumbsGlobal,
    ...crumbsLocal,
    ...crumbsSpatial,

    node("h1", [textNode("CODE:")]),
    node("a", [textNode("GITHUB")], {href:"https://github.com/lh00000000/vislangpalette"}),
    node("pre", [textNode(clojureCode)], {style: "background-color: rgb(0,0,0,0.5);"})
  ]

  blogPostCrumbs.forEach(crumb => main.appendChild(crumb))
}
