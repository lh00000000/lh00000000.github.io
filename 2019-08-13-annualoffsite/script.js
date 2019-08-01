

const toggleColor = () => {
  let e = document.getElementById("CALTEXTLINK")
  let currentColor = e.style.color || "black"
  let newColor = currentColor == "black" ? "white" : "black"
  e.style.color = newColor
  return newColor

}

const pitch = ({audioContext, masterGainNode}, freq, length) => {
  let now = audioContext.currentTime
  let oscillator = audioContext.createOscillator()
  let episilon = 0.001
  oscillator.type = "sine"
  oscillator.frequency.value = freq
  oscillator.connect(masterGainNode)
  masterGainNode.gain.setValueAtTime(0.8, now)
  masterGainNode.gain.exponentialRampToValueAtTime(episilon, now + length)
  oscillator.start(now)
  oscillator.stop(now + length + episilon)
}


document.addEventListener("DOMContentLoaded", async () => {
  let res = await fetch("https://luminghao.com/2019-08-13-annualoffsite/ANNUAL_OFFSITE.ics")
  let resText = await res.text()
  let daturi = `data:text/calendar,${encodeURIComponent(resText)}`
  document.getElementById("CALTEXTLINK").href = daturi

  let audioContext = new (window.AudioContext || window.webkitAudioContext)
  let masterGainNode = audioContext.createGain()
  masterGainNode.connect(audioContext.destination)

  let period = 500
  let toggleTimeout = () => {
    let newColor = toggleColor()
    pitch(
      {audioContext, masterGainNode},
      newColor == "black" ? 440 : 220,
      Math.min(1, (period / 1000) - 0.01)
    )
    setTimeout(toggleTimeout, period)
  }
  toggleTimeout()

  const startdt = new Date()
  const lfo = 4096
  const maxPeriod = 1024
  const minPeriod = 9.090909

  setInterval(() => {
    let sinceStart = (new Date()) - startdt
    let deci = (Math.sin(sinceStart / lfo) + 1) / 2
    period = (deci * maxPeriod) + minPeriod
  }, 8)

})



