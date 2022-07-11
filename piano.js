const protectMobileDataPlans = false // 2018-09-21 is this mean
const pianoKey = (src, preload) => {
  // i can't figure out a good way to deal with the shittiness
  // of making people on data plans download 15mb of wavs
  // that all finish loading at the same instant
  // and end up being played as abrupt maj9/6 chords
  let h = new Howl({ src })
  if (preload) {
    h.load()
  }
  return {
    play: vol => {
      let tryToPlayIt = () => {
        h.volume(vol)
        h.play()
      }
      switch (h.state()) {
        case "loaded":
          h.volume(vol)
          h.play()
          break
        case "unloaded":
          h.load()

          setTimeout(() => {
            tryToPlayIt = _.identity
          }, Math.random() * 100 + 5)
          h.on("load", () => tryToPlayIt())
          break
        case "loading":
          setTimeout(() => {
            tryToPlayIt = _.identity
          }, Math.random() * 100 + 5)
          h.on("load", () => tryToPlayIt())
          break
      }
    },
  }
}

const RH = {
  forwards: {
    e: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-RH-e-v4.mp3",
      true
    ),
    g: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-RH-g-v4.mp3",
      true
    ),
    a: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-RH-a-v4.mp3",
      true
    ),
    c: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-RH-c-v4.mp3",
      true
    ),
    d: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-RH-d-v4.mp3",
      true
    ),
  },
  backwards: {
    g: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-RH-g-v4.mp3",
      false
    ),
    a: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-RH-a-v4.mp3",
      false
    ),
    c: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-RH-c-v4.mp3",
      false
    ),
    d: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-RH-d-v4.mp3",
      false
    ),
    e: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-RH-e-v4.mp3",
      false
    ),
  },
}

const LH = {
  forwards: {
    f: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-LH-f-v4.mp3",
      true
    ),
    g: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-LH-g-v4.mp3",
      true
    ),
    e: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-LH-e-v4.mp3",
      true
    ),
    c: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-LH-c-v4.mp3",
      true
    ),
    a: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/for-LH-a-v4.mp3",
      true
    ),
  },
  backwards: {
    a: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-LH-a-v4.mp3",
      false
    ),
    e: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-LH-e-v4.mp3",
      false
    ),
    f: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-LH-f-v4.mp3",
      false
    ),
    g: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-LH-g-v4.mp3",
      false
    ),
    c: pianoKey(
      "https://s3.amazonaws.com/lh00000000-public/rev-LH-c-v4.mp3",
      false
    ),
  },
}

const debouncedPlay = (keyLookup, minVol, maxVol) =>
  _.debounce(
    () => _.sample(_.values(keyLookup)).play(_.random(minVol, maxVol)),
    8
  )

const player = {
  RH: {
    forwards: debouncedPlay(RH.forwards, 0.1, 0.2),
    backwards: debouncedPlay(RH.backwards, 0.2, 0.3),
  },
  LH: {
    forwards: debouncedPlay(LH.forwards, 0.5, 0.6),
    backwards: debouncedPlay(LH.backwards, 0.7, 0.9),
  },
}
