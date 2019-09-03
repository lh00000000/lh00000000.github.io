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

const ap = (up, child) => {
  let parent = (typeof up == "string") ? document.querySelector(up) : up
  parent.appendChild(child)
  return parent
}

document.addEventListener("DOMContentLoaded", () => {
  let s3Root = "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/liao/"
  let mp3Keys = [
        "01-intro-2019-09-01.mp3",
        "02-rust-2019-08-19.mp3",
        "03-liao-baptistlake-2019-09-02.mp3",
        "04-sfh-2019-08-21.mp3",
        "08-wwcd-2019-08-16-snapshot.mp3",
        ]

   mp3Keys.forEach(m => {
     let aud = el.src("audio", s3Root + m)
     aud.controls = true

     let track = el.cls("div", ".track")
     ap(track, el.txt("p", m))
     ap(track, aud)
     ap("#main", track)
   })

})