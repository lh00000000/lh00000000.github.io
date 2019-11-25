const toggleColor = () => {
  let e = document.getElementById("CALTEXTLINK")
  let currentColor = e.style.color || "black"
  let newColor = currentColor == "black" ? "white" : "black"
  e.style.color = newColor
  return newColor
}

const pitch = ({ audioContext, masterGainNode }, freq, length) => {
  let now = audioContext.currentTime
  let oscillator = audioContext.createOscillator()
  let episilon = 0.001
  oscillator.type = "triangle"
  oscillator.frequency.value = freq
  oscillator.connect(masterGainNode)
  masterGainNode.gain.setValueAtTime(0.8, now)
  masterGainNode.gain.exponentialRampToValueAtTime(episilon, now + length)
  oscillator.start(now)
  oscillator.stop(now + length + episilon)
}

const freqs = {
  CS6: 1108.731,
  GS5: 830.6094,
  E4: 659.2551,
  A4: 440,
  D4: 293.6648
}
let baseFreq = _.sample([
  freqs.CS6,
  freqs.CS6,
  freqs.GS5,
  freqs.GS5,
  freqs.GS5,
  freqs.E4,
  freqs.E4,
  freqs.A4,
  freqs.D4,
  freqs.D4,
  freqs.D4
])
document.addEventListener("DOMContentLoaded", async () => {
  let res = await fetch(
    "https://luminghao.com/2019-08-13-annualoffsite/ANNUAL_OFFSITE.ics"
  )
  let resText = await res.text()
  let daturi = `data:text/calendar,${encodeURIComponent(resText)}`
  document.getElementById("CALTEXTLINK").href = daturi

  let audioContext = new (window.AudioContext || window.webkitAudioContext)()
  let masterGainNode = audioContext.createGain()
  masterGainNode.connect(audioContext.destination)

  let period = 512(() => {
    let newColor = toggleColor()
    pitch(
      { audioContext, masterGainNode },
      newColor == "black" ? baseFreq : baseFreq / 2,
      Math.min(1, period / 1000 - 0.01)
    )
    setTimeout(toggleTimeout, period)
  })()

  const startdt = new Date()
  const lfo = 4096
  const maxPeriod = 1024
  const minPeriod = 9.090909

  setInterval(() => {
    let sinceStart = new Date() - startdt
    let deci = (Math.sin(sinceStart / lfo) + 1) / 2
    period = deci * maxPeriod + minPeriod
    window.requestAnimationFrame(adjustPeriod)
  }, 16)

  // start sound on ios
  document
    .querySelector("body")
    .addEventListener("touchend", () =>
      pitch({ audioContext, masterGainNode }, 110, 1)
    )
})
