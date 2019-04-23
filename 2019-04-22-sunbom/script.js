const el = {
  src(tag, toSrc) {
    let ele = document.createElement(tag)
    ele.src = toSrc
    return ele
  },
  inn(tag, innerML) {
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

const ap = (up, child) => {
  let parent = (typeof up == "string") ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}


let bom = [{
  what: "charge controller",
  id: "MCP73871",
  quantity: 1,
  cart: "https://www.digikey.com/product-detail/en/microchip-technology/MCP73871T-2CCI-ML/MCP73871T-2CCI-MLCT-ND/7065594",
  datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/20002090D.pdf",
  cost: 1.84
}, {
  what: "power mux",
  id: "TPS2115A",
  quantity: 1,
  cart: "https://www.digikey.com/product-detail/en/texas-instruments/TPS2115APWR/296-16940-1-ND/652794",
  datasheet: "http://www.ti.com/general/docs/suppproductinfo.tsp?distId=10&gotoUrl=http%3A%2F%2Fwww.ti.com%2Flit%2Fgpn%2Ftps2114a",
  cost: 2.41
}, {
  what: "diode",
  id: undefined,
  quantity: 3,
  cart: undefined,
  datasheet: undefined,
  cost: undefined
}, {
  what: "10k resistor",
  id: undefined,
  quantity: 5,
  cart: undefined,
  datasheet: undefined,
  cost: 0
}, {
  what: "470 resistor",
  id: undefined,
  quantity: 5,
  cart: undefined,
  datasheet: undefined,
  cost: 0
}, {
  what: "4.7 uF capacitor",
  id: undefined,
  quantity: 2,
  cart: undefined,
  datasheet: undefined,
  cost: 0
}, {
  what: "2 pin header",
  id: undefined,
  quantity: 2,
  cart: undefined,
  datasheet: undefined,
  cost: undefined
}, {
  what: "4 pin header",
  id: undefined,
  quantity: 1,
  cart: undefined,
  datasheet: undefined,
  cost: undefined
}]

document.addEventListener("DOMContentLoaded", () => {
  ap("#main", el.txt("h1", "SUNADDBOARD".split("").map((c, i) => c + _.range(i+1).map(x => "_").join("")).join("")))
  bom.forEach((b, i) => {
    let rec = el.cls("div", ".record")
    _.sortBy(_.toPairs(b)).forEach(([key, val]) => {
      let keypair = el.cls("p", ".keypair")
      ap(keypair, el.txt("b", `${key}: `))
      ap(keypair, el.inn("span",
        _.startsWith(val, "http")
        ? `<a href=${val}>${val}</a>`
        : `${val}`))
      ap(rec, keypair)

    })
    ap("#main", rec)
    let bomBanner = el.cls("div", ".bombanner")
    _.range(64).map(i => "billofmaterials").join("").split("").splice(i * 3).forEach(c => ap(bomBanner, el.txt("span", c)))
    ap("#main", bomBanner)
  })

  ap("#main", el.src("img", "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-22-sunbom/sunbomsch.png"))

  setInterval(() => {
    _.range(64).forEach(i => {
      let unlucky = _.sample(...[document.querySelectorAll(".bombanner > span")])
      unlucky.classList.contains("hide") ? unlucky.classList.remove("hide") : unlucky.classList.add("hide")
    })
  }, 200)
})