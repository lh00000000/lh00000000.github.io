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
    ? words
    : words.concat([_.sample(countsToBag(brain[_.last(words)]))]),
    [_.sample(_.keys(brain).filter(word => _.keys(brain[word]).length > 1))])
    .filter(gram => gram != "_END")
    .join(" ")

let rewriteExample = () => {
  let getTexts = () =>
    _(document.querySelectorAll("span.head"))
    .map("textContent")
    .concat(_(document.querySelectorAll("span.guts > span")).map("textContent"))
    .filter(text => !text.startsWith("is a") && !text.startsWith(" is a"))
    .map(text => text.replace(".", ""))
    .filter(text => text.length > 0)
    .value()

  let displayMarkov = (markovText) =>
    d3.select("#fillMeWithMarkovText")
      .transition()
      .ease(EASE)
      .duration(1000)
      .call(tweenHtml, d =>
        tag(
          "<samp>🤖: ",
          markovText,
          "</samp>"
        )
      )

  if (!d3.select("#fillMeWithMarkovText").empty()) {
    displayMarkov(markovSpeak(markovMake(getTexts()), 8))
  }
}

setInterval(rewriteExample, 5000)