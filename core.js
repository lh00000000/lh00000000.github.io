const group = (...sequences) =>
  _.zip(
    ...(sequences.map(seq => seq.reverse()))
  )
  .slice()
  .reverse()
  .map(slice => slice.join(""))

const tag = (opener, str, closer) =>
  grow(str.split(""))
  .map(s => opener + s.join("") + closer)