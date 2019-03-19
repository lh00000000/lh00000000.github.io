/* tfw you rewrite/port the whole project while trying to list the project in your portfolio */
const toGrams = text =>
  text.split(" ")
  .map(text => text.replace(/[.,\"\']/g, ""))
    .filter(text => text.length > 0)

const toBigrams = grams =>
  _.slice(
    _.zip(grams, _.slice(grams, 1)),
    0,
    grams.length - 1
  )

const EASE = d3.easeLinear

const markovMake = texts => texts
  .reduce((prevTextBrain, text) =>
    toBigrams(toGrams(text).concat(["_END"]))
      .reduce((learningBrain, bigram) =>
        _.merge(learningBrain,
        {
          [bigram[0]]: {
            [bigram[1]]: _.get(learningBrain, `${bigram[0]}.${bigram[1]}`)
                ? learningBrain[bigram[0]][bigram[1]] + 1
                : 1
          }
        }), prevTextBrain),
  {})

const markovSpeak = (brain, limit) =>
  _.range(limit).reduce((words, i) =>
    _.last(words) == "_END"
    ? words.concat([_.sample(_.keys(brain).filter(word => _.keys(brain[word]).length > 1))])
    : words.concat([_.sample(countsToBag(brain[_.last(words)]))]),
    [_.sample(_.keys(brain).filter(word => _.keys(brain[word]).length > 1))]
    )
    .filter(gram => gram != "_END")
    .join(" ")

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


let rewriteExample = () => {
  let getTexts = () =>
    _(document.querySelector("#content"))
    .map("textContent")
    .concat(_(document.querySelectorAll("span.guts > span")).map("textContent"))
    .map(text => text.replace(".", ""))
    .filter(text => text.length > 0)
    .value()

  let displayMarkov = markovText =>
    d3.select("#markovBG")
      .transition()
      .ease(EASE)
      .duration(1000 * 60)
      .call(tweenHtml, d => stack(markovText.split(" ")).map(frame => frame.join(" ")))

  if (!d3.select("#markovBG").empty()) {
    displayMarkov(markovSpeak(
      markovMake(
        Array.from(document.querySelectorAll("p")).map(p => p.textContent.trim())),
      1600)
    )
  }
}

$(document).ready(() => {
  rewriteExample()
})
