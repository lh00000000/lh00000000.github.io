const ROWS = 32
const COLS = 256
const newData = () =>
  d3.range(ROWS).map(
    r => [...Array(COLS)].map(
      i => _.sample(
        ".*+⊹˚".split("").concat([...Array(100)].map(i => " "))
        )
      ).join("")
    )

$(document).ready(() => {
    let rows = d3.select("#starfield")
      .selectAll(".starRow")
      .data(newData())

    let entering = rows.enter()
      .append("pre")
      .attr("class", "starRow")

    let all = entering.merge(rows)

    all.text(d => d)

  setInterval(
    () => {
      all.data(newData()).text(d => d)
    }, 500)
})