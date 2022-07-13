const pianoKey = (src, preload) => {
  let h = new Howl({ src })
  if (preload) {
    h.load()
  }
  return {
    play: (vol) => {
      let tryToPlayIt = (overrideVol = vol, delay = 0) => {
        setTimeout(
          () => {
            h.volume(vol)
            h.play()
          },
          delay
        )
      }
      switch (h.state()) {
        case "loaded":
          tryToPlayIt(0)
          break
        case "unloaded":
          h.load()
          break
        case "loading":
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

const throttledPlay = (keyLookup, minVol, maxVol, debounceVal) =>
  _.throttle(
    () => _.sample(_.values(keyLookup)).play(_.random(minVol, maxVol)),
    debounceVal
  )

const player = {
  RH: {
    forwards: throttledPlay(RH.forwards, 0.1, 0.3, 40),
    backwards: throttledPlay(RH.backwards, 0.2, 0.3, 5),
  },
  LH: {
    forwards: throttledPlay(LH.forwards, 0.5, 0.6, 20),
    backwards: throttledPlay(LH.backwards, 0.7, 0.9, 10),
  },
}
