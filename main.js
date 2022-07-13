'use moz'

const EASE = d3.easeLinear
const TRANSITION_DURATION = 1000
const INTRO_TRANSITION_DURATION = 2000


const tweenHtml = (
  trans,
  getFrames,
  onFrameChange = _.identity,
  onFinalFrame = _.identity
) => {
  trans
    .tween("html", (d, i, all) => {
      let thisEle = d3.select(all[i])
      let getHtmlAt =
        d3
          .scaleQuantize()
          .range(getFrames(d))
      return t => {
        let oldHtml = thisEle.html()
        let newHtml = getHtmlAt(t)
        let finalHtml = getHtmlAt(1)

        if (oldHtml != newHtml) {
          onFrameChange()
        }

        if (newHtml == finalHtml && oldHtml != newHtml) {
          onFinalFrame()
        }

        return thisEle.html(newHtml)
      }
    })
}

const update = (datums) => {
  const projects = d3.select("#content")
    .selectAll(".project")
    .data(datums, _.iteratee("id"))

  projects.exit()
    .transition()
    .duration(TRANSITION_DURATION)
    .style("opacity", 0)
    .remove()

  const projectsEnter = projects.enter()
    .append("span")
    .attr("class", d => d.id === "bloglink" ? "project bloglink" : "project")
    .attr("id", _.iteratee("id"))

  const headsEnter = projectsEnter
    .append("span")
    .attr("class", "head")

  const gutsEnter = projectsEnter
    .append("span")
    .attr("class", "guts")

  headsEnter
    .transition()
    .ease(EASE)
    .duration(INTRO_TRANSITION_DURATION)
    .delay((d, i) => 200 + i * 50)
    .call(
      tweenHtml,
      _.iteratee("head"),
      player.RH.forwards,
      player.LH.forwards
    )

  headsEnter
    .on("mousedown", d =>
      d3.select("#" + d.id)
        .style("background-color", "black")
    )
    .on("mouseup", d =>
      d3.select("#" + d.id)
        .style("background-color", "transparent")
    )
    .on("click", d => {
      if (d.id === "bloglink") return

      let selector = `#${d.id} span.guts`
      if (!document
        .querySelector(selector)
        .hasChildNodes()) {
        d3.select(selector)
          .transition()
          .ease(EASE)
          .duration(TRANSITION_DURATION)
          .call(
            tweenHtml,
            _.iteratee("guts"),
            player.RH.forwards,
            _.once(player.LH.forwards)
          )
          .on("end", d => {
            if (d.after) { d.after() }
          })

      } else {
        d3.select(selector)
          .transition()
          .ease(EASE)
          .duration(TRANSITION_DURATION)
          .call(
            tweenHtml,
            d => {
              return d.guts.slice().reverse()
            },
            player.RH.backwards,
            player.LH.backwards
          )
          .on("end", () => {
            d3.select(`${selector} > *`).remove()
          })
      }
    })
}

update(orderedProjectDatums)
