
var titleScrollIdx = 0
setInterval(() => {
  titleScrollIdx = (titleScrollIdx + 1) % orderedProjectDatums.length
  document.title = _.last(orderedProjectDatums[titleScrollIdx].head)
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/\./g, "")
    .match(/is .*/g)
}, 1000)

