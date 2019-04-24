const el = {
  src(ele, toSrc) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.src = toSrc
    return ele
  },
  inn(ele, innerML) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.innerHTML = innerML
    return ele
  },
  txt(ele, text) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    ele.innerText = text
    return ele
  },
  cls(ele, classStr) {
    if (typeof ele == "string") {ele = document.createElement(ele)}
    classStr.split(" ").forEach(c => ele.classList.add(c.substring(1)))
    return ele
  },
  a(url, inside) {
    let aEle = document.createElement("a")
    aEle.href = url

    if (typeof inside == "string") {
      aEle.innerText = inside
      return aEle
    } else {
      return ap(aEle, inside)
    }

  }
}

const ap = (up, child) => {
  let parent = (typeof up == "string") ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}


let bom = [{
  what: "charge controller",
  partno: "MCP73871",
  quantity: 1,
  source: "https://www.digikey.com/product-detail/en/microchip-technology/MCP73871T-2CCI-ML/MCP73871T-2CCI-MLCT-ND/7065594",
  datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/20002090D.pdf",
  cost: 1.84
}, {
  what: "power mux",
  partno: "TPS2115A",
  quantity: 1,
  source: "https://www.digikey.com/product-detail/en/texas-instruments/TPS2115APWR/296-16940-1-ND/652794",
  datasheet: "http://www.ti.com/general/docs/suppproductinfo.tsp?distId=10&gotoUrl=http%3A%2F%2Fwww.ti.com%2Flit%2Fgpn%2Ftps2114a",
  cost: 2.41
}, {
  what: "diode (THRU HOLE)",
  partno: "N/A",
  quantity: 3,
  source: "ITP.SHOP",
  datasheet: "N/A",
  cost: "NYUTUITION"
}, {
  what: "10k resistor",
  partno: "N/A",
  quantity: 5,
  source: "ITP.HARDLAB",
  datasheet: "N/A",
  cost: "NYUTUITION"
}, {
  what: "470 resistor",
  partno: "N/A",
  quantity: 5,
  source: "ITP.HARDLAB",
  datasheet: "N/A",
  cost: "NYUTUITION"
}, {
  what: "4.7 uF capacitor",
  partno: "N/A",
  quantity: 2,
  source: "ITP.HARDLAB",
  datasheet: "N/A",
  cost: "NYUTUITION"
}, {
  what: "2 pin header",
  partno: "N/A",
  quantity: 2,
  source: "https://www.amazon.com/Haobase-2-54mm-Straight-Single-Headers/dp/B01DLX6RSQ/ref=sr_1_5?keywords=HEADER+FEMALE&qid=1556076085&s=gateway&sr=8-5",
  datasheet: "N/A",
  cost: 5.60
}, {
  what: "4 pin header",
  partno: "N/A",
  quantity: 1,
  source: "https://www.amazon.com/Haobase-2-54mm-Straight-Single-Headers/dp/B01DLX6RSQ/ref=sr_1_5?keywords=HEADER+FEMALE&qid=1556076085&s=gateway&sr=8-5",
  datasheet: "N/A",
  cost: 5.60
}]

document.addEventListener("DOMContentLoaded", () => {
  ap("#main", el.txt("h1", "SUNADDBOARD".split("").map((c, i) => c + _.range(i+1).map(x => "_").join("")).join("")))


  let explain = el.cls("div", ".explain")

  let p1 = el.txt("p", "")
  ap(p1, el.txt("span", "GOAL = CREATE CUSTOM HARDWARE FOR !(LOGIC ||INFORMATION) ASPECTS OF "))
  ap(p1, el.a("https://luminghao.com/2019-04-11-sunadd/", "SUN_ADD 1 BIT SOLAR ADDER"))
  ap(p1, el.txt("span", ". "))
  ap(explain, p1)

  ap(explain, el.txt("p", "GOAL.INPUT = [0-6V PANEL A, GROUND PANEL A, 0-6V PANEL B, GROUND PANEL B, POSITIVE LEAD LIPO, GROUND LIPO] "))
  ap(explain, el.txt("p", "GOAL.OUTPUT = [LOGIC OUT FOR INPUT A, LOGIC OUT FOR INPUT B, GROUND, 5V]"))

  ap("#main", ap(el.cls("div", ".explain"), explain))

  ap("#main", el.src("img", "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-04-22-sunbom/sunbomsch.png"))

  bom.forEach((b, i) => {
    let rec = el.cls("div", ".record")
    _.reverse(_.sortBy(_.toPairs(b))).forEach(([key, val]) => {
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



  setInterval(() => {
    let allBomban = [...document.querySelectorAll(".bombanner > span")]
    _.shuffle(allBomban).slice(0, allBomban.length / 2).forEach(b => b.classList.contains("hide") ? b.classList.remove("hide") : b.classList.add("hide"))
  }, 125)
})