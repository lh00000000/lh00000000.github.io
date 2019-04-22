const NO_FILTER = "NO_FILTER"
const FILTERED_SOME = "FILTERED_SOME"
const FILTERED_ALL = "FILTERED_ALL"

const allPosts = [
  {href:"/2018-09-11-bloginit", tags: ["#personal"]},
  {href:"/2018-09-13-genmusic", tags: ["#itp", "#genmusic"]},
  {href:"/2018-09-13-interactivity", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-19-concreteswitch", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-19-design", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-21-ufosonification", tags: ["#itp", "#genmusic"]},
  {href:"/2018-09-26-publicinteract", tags: ["#itp", "#pcomp"]},
  {href:"/2018-10-04-draftmarkov01", tags: ["#itp", "#genmusic"]},
  {href:"/2018-10-18-mlbias", tags: ["#itp", "#genmusic"]},
  {href:"/2018-10-31-gooddesign", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-06-signage", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-06-psproposal", tags: ["#itp", "#pcomp"]},
  {href:"/2018-11-09-multiplex", tags: ["#itp", "#pcomp"]},
  {href:"/2018-11-12-tsnegoldberg", tags: ["#itp", "#genmusic"]},
  {href:"/2018-11-14-deltaredesign", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-28-sixpalette", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-29-anipiano", tags: ["#itp", "#ani"]},
  {href:"/2018-12-04-itpposter", tags: ["#itp", "#vislang"]},
  {href:"/2018-12-06-genmusic10", tags: ["#itp", "#genmusic"]},
  {href:"/2018-12-12-bcard", tags: ["#itp", "#vislang"]},
  {href:"/2018-12-13-worldfiltersyn", tags: ["#itp", "#genmusic"]},
  {href:"/2018-12-13-percsyn", tags: ["#itp", "#pcomp", "#update"]},
  {href:"/2018-12-18-anipaper", tags: ["#itp", "#ani"]},
  {href:"/2018-12-18-dingtest", tags: ["#itp", "#ani"]},
  {href:"/2019-02-06-energyinit", tags: ["#itp", "#energy"]},
  {href:"/2019-02-06-handrouter", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-07-time", tags: ["#workflow", "#neurosis"]},
  {href:"/2019-02-12-freestoreinit", tags: ["#itp", "#freestore"]},
  {href:"/2019-02-10-stavecardfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-23-otherfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-23-tpkinetic", tags: ["#itp", "#energy"]},
  {href:"/2019-02-28-threebatteries", tags: ["#itp", "#energy"]},
  {href:"/2019-03-13-theoriespitch", tags: ["#idm", "#theories"]},
  {href:"/2019-03-14-cncfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-14-dovetailfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-14-subtractfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-17-freestoreblend", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-02-attinyapp", tags: ["#itp", "#homehard"]},
  {href:"/2019-04-08-eagleboard", tags: ["#itp", "#homehard"]},
  {href:"/2019-04-11-sunadd", tags: ["#itp", "#energy"]},
  {href:"/2019-04-19-freestoremac", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-19-sockpatch", tags: ["#mend", "#process", "#apt"]},
  {href:"/2019-04-19-freestoreforever", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-19-comedowntous", tags: ["#process", "#mend"]},
  {href:"/2019-04-21-table2", tags: ["#apt", "#process"]},
  {href:"/2019-04-21-interactiveexperience", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-22-leaveanote", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-22-rightshelf", tags: ["#itp", "#freestore"]},
]

const allTags = _(allPosts).chain().flatMap("tags").uniq().value()

const changeUrl = newTag => {
  window.location.hash = newTag
  update()
}
const reset = () => {
  Array.from(document.querySelectorAll(".posts .list .post")).forEach(child => child.remove())
  Array.from(document.querySelectorAll(".tags .list .tag")).forEach(child => child.remove())
}

const update = () => {
  reset()

  let currentTag = (new URLSearchParams(location).get("hash") || undefined)
  let [visiblePosts, hiddenPosts] = _.partition(
    allPosts,
    post => _.some(post.tags, tag => tag === currentTag)
  )

  let currentState =
    currentTag === undefined
    ? NO_FILTER
    : (visiblePosts.length != 0 ? FILTERED_SOME : FILTERED_ALL)

  // posts
  document.querySelector(".posts .copy").textContent = {
    [NO_FILTER]: "here are all of luming hao's blog posts: ",
    [FILTERED_SOME]: `here are all of luming hao's blog posts tagged with ${currentTag}: `,
    [FILTERED_ALL]: `none of luming hao's blog posts are tagged with ${currentTag}`
  }[currentState]


  let toAppend = {
    [NO_FILTER]: allPosts,
    [FILTERED_SOME]: visiblePosts,
    [FILTERED_ALL]: []
  }
  toAppend[currentState].forEach((post, i, all) => {
    let span = document.createElement("span")
    span.setAttribute("class", "post")
    // span.class = "post"
    let a = document.createElement("a")
    a.href = post.href
    let aContent = document.createTextNode(`${post.href} ${post.tags.join(" ")}`)
    a.appendChild(aContent)

    if (i != 0) {
      span.appendChild(document.createTextNode(", "))
    }
    span.appendChild(a)
    document.querySelector(".posts .list").appendChild(span)
  })

  document.querySelector(".tags .copy").textContent = {
    [NO_FILTER]: "would you like to only see posts tagged with: ",
    [FILTERED_SOME]:  "would you like to only see posts tagged with: ",
    [FILTERED_ALL]:  "would you like to see posts tagged with: "
  }[currentState]

  //tags
  allTags
  .map(tag => ({tag, linkText: tag}))
  .concat(
    currentState != NO_FILTER
    ? {tag: "", linkText: "see all posts"}
    : []
  )
  .forEach(({tag, linkText}, i, all) => {
    let span = document.createElement("span")
    span.setAttribute("class", "tag")

    let a = document.createElement("a")
    a.setAttribute("class", "link")
    a.setAttribute("onclick", `changeUrl("${tag}")`)
    a.href = tag

    a.appendChild(document.createTextNode(linkText))
    if (i != 0) {
      span.appendChild(document.createTextNode(
        i == all.length - 1
        ? ", or "
        : ", "
        )
      )
    }
    span.appendChild(a)
    document.querySelector(".tags .list").appendChild(span)
  })
}

$(document).ready(update)