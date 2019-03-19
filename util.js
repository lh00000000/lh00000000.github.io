// [1,2,3,4] => [[1], [1, 2], [1,2,3], [1,2,3,4]]
const stack = original =>
  original
  .reduce(
    (agg, ele) => agg.concat([_.last(agg).concat([ele])]), [
      []
    ])

// [1,2,3,4] => [[], [4], [3, 4], [1, 3, 4], [1, 2, 3, 4],]
const grow = arr =>
  stack(_.shuffle(_.range(arr.length)))
  .map(indexSet => indexSet.sort(_.subtract).map(idx => arr[idx]))


// i like doing this so i can shove it into chains of nested stuff
const look = x => {
  console.log(x)
  return x
}

// for making tiny objects. mainly because i couldn't figure out
// a one liner for making an object if i only knew the property as a string
const keyval = (...pair) => _.fromPairs([pair])

// {"a": 2, "b": 4} => ["a", "a", "b", "b", "b", "b"]
const countsToBag = countLookup =>
  _.toPairs(countLookup)
    .reduce((arr, pair) =>
      arr.concat(Array(pair[1]).fill(pair[0])),
      [])

// check if you're currently being displayed in an iframe
const inIFrame = () => window.frameElement ? true : false

// check if you're running on mobile
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

// for oxford commas
const oxford = (arr, sep, lastSep) =>
  _(arr).chain().initial().flatMap(ele => [ele, sep]).initial().concat([lastSep, _.last(arr)]).value()

