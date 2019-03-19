const NUM_SAMPLES = 7
let state = {
  numSamplesLoaded: 0,
  csvData: null,
  iterateTime: 64,
  shapeToSampleI: null,
  samples: null,
  tempoChanges: {
    [512 * 8]: 96,
    [512 * 10]: 32,
    [512 * 12]: 64,
    [512 * 16]: 128,
    [512 * 17]: 64
  }
}

const choice = arr => arr[Math.floor(Math.random() * arr.length)]

const cleanText = text =>
  text
    .replace(new RegExp("&#44", "g"), "")
    .replace(new RegExp("&#39", "g"), "")
    .replace(new RegExp("&amp", "g"), "")
    .replace(new RegExp("&#33", "g"), "")
    .replace(new RegExp("&#8217", "g"), "")
    .replace(new RegExp("&#8230", "g"), "")
    .replace(new RegExp("&quot", "g"), "")
    .replace(new RegExp("\W", "g"), "")
    .replace(new RegExp("[():;.-]", "g"), "")
    .trim()

const tryStart = () => {
  if (
    !(
      state.numSamplesLoaded == NUM_SAMPLES &&
      state.csvData != null &&
      state.shapeToSampleI != null
    )
  ) {
    return
  }

  playRow(0, 0)
  _.toPairs(state.tempoChanges).map(([at, to]) =>
    setTimeout(() => (state.iterateTime = to), at)
  )

  setTimeout(() => {
    setInterval(
      () => (state.iterateTime = choice([24, 48, 64, 128, 192])),
      512 * 8
    )
  }, d3.max(_.keys(state.tempoChanges).map(x => parseInt(x))) + 64 * 8)
}

const playRow = (i, stopMeI) => {
  let row = state.csvData[i]

  state.samples[stopMeI].stop()
  let playingNow = state.samples[state.shapeToSampleI[row.shape]].play()

  document.querySelector("h1").textContent = choice(
    row.desc
      .split(" ")
      .map(w => w.trim())
      .filter(w => w.length > 3)
      .concat([
        [...Array(Math.floor(Math.random() * 8))].map(i => "█").join("")
      ])
  ).toUpperCase()

  setTimeout(function() {
    playRow((i + 1) % state.csvData.length, state.shapeToSampleI[row.shape])
  }, state.iterateTime * (Math.random() < 1 / 16 ? 16 : 1))
}

state.samples = [...Array(NUM_SAMPLES).keys()].map(i => {
  let sound = new Howl({
    src: `https://lh00000000-public.s3.amazonaws.com/2018/09-21-ufosonfication/${i + 1}.wav`
  })
  sound.on("load", () => {
    state.numSamplesLoaded += 1
    tryStart()
  })
  return sound
})

d3.csv("./ufo_small.csv", (err, data) => {
  state.csvData = data.map(sighting => ({
    ...sighting,
    ...{
      shape: sighting.shape.trim().length == 0 ? "unknown" : sighting.shape,
      desc: cleanText(sighting.desc)
    }
  }))
  state.shapeToSampleI = _(data)
    .chain()
    .map("shape")
    .uniq()
    .concat(["unknown"])
    .shuffle()
    .map((shape, i) => [shape, i % NUM_SAMPLES])
    .fromPairs()
    .value()
  tryStart()
})
