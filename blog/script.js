const NO_FILTER = "NO_FILTER"
const FILTERED_SOME = "FILTERED_SOME"
const FILTERED_ALL = "FILTERED_ALL"
const allPosts = [

  {href:"/2020-04-09-itpthesis-alpha", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-04-07-tuneclass-final", tags: ["#tuneclass"]},
  {href:"/2020-04-06-myc", tags: ["#exp"]},
  {href:"/2020-04-06-itpthesismidterm", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-04-04-simsmuni", tags: ["#event", "#waste"]},
  {href:"/2020-04-03-treasuresintrash", tags: ["#event"]},
  {href:"/2020-04-03-bsteeltour", tags: ["#event"]},
  {href:"/2020-04-02-pianotune-withapp", tags: ["#tuneclass", "#piano"]},
  {href:"/2020-04-02-biodes-final-nsf", tags: ["#biodes", "#itp"]},
  {href:"/2020-03-31-containerhome", tags: ["#event"]},
  {href:"/2020-03-29-new-blog-philo", tags: ["#blog"]},
  {href:"/2020-03-27-compmusfinal-volley", tags: ["#compmus", "#audio", "#writing", "#maxmsp"]},
  {href:"/2020-03-16-itpthesis04", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-03-13-itptno", tags: ["#itp", "#event"]},
  {href:"/2020-02-26-itpthesis03", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-02-24-biodes03", tags: ["#biodes", "#itp"]},
  {href:"/2020-02-21-biodes-proposal2", tags: ["#biodes", "#itp"]},
  {href:"/2020-02-18-tuneclass03", tags: ["#tuneclass"]},
  {href:"/2020-02-18-itpthesis02", tags: ["#itp", "#itpthesis"]},
  {href:"/2020-02-18-cljstemplate", tags: ["#js", "#clojure", "#blog"]},
  {href:"/2020-02-18-piano56202", tags: ["#piano", "#loser"]},
  {href:"/2020-02-18-pptreasury", tags: ["#piano"]},
  {href:"/2020-02-18-biodes02", tags: ["#biodes", "#itp"]},
  {href:"/2020-02-18-specialhousehold", tags: ["#waste", "#visit", "#nyc"]},
  {href:"/2020-02-16-clothingsale", tags: ["#sell"]},
  {href:"/2020-02-11-biodes01", tags: ["#biodes", "#itp"]},
  {href:"/2020-02-10-itpthesis01", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-02-10-tuneclass02", tags: ["#tuneclass"]},
  {href:"/2020-02-10-karaliao", tags: ["#liao"]},
  {href:"/2020-02-04-biodes00", tags: ["#biodes", "#itp"]},
  {href:"/2020-02-03-relevanceoftrash", tags: ["#event", "#waste"]},
  {href:"/2020-02-02-tuneclass01", tags: ["#tuneclass"]},
  {href:"/2020-02-02-tuneclass00", tags: ["#tuneclass"]},
  {href:"/2020-02-02-itpthesis00", tags: ["#itpthesis", "#itp"]},
  {href:"/2020-01-13-liaonotes", tags: ["#liao"]},
  {href:"/2019-12-19-steintour", tags: ["#piano", "#event"]},
  {href:"/2019-12-11-interviewing-datzromero", tags: ["#writing", "#waste"]},
  {href:"/2019-12-05-npsin", tags: ["#digisig", "#audsyn"]},
  {href:"/2019-12-05-finding-free-stuff", tags: ["#update"]},
  {href:"/2019-12-03-findsonata", tags: ["#itp", "#listmach","#process"]},
  {href:"/2019-12-03-freestore-garagesale", tags: ["#itp", "#freestore"]},
  {href:"/2019-12-03-headpiece", tags: ["#compmus"]},
  {href:"/2019-12-02-plantbottles", tags: ["#plant", "#process"]},
  {href:"/2019-12-02-solarcells", tags: ["#solar", "#process"]},
  {href:"/2019-11-30-solarboard", tags: ["#homehard", "#itp", "#smt"]},
  {href:"/2019-11-29-homehard-letter", tags: ["#homehard", "#itp", "#smt"]},
  {href:"/2019-11-25-maxjstest", tags: ["#maxmsp", "#compmus", "#exp"]},
  {href:"/2019-11-23-tableenergy", tags: ["#exp", "#event"]},
  {href:"/2019-11-19-percsyn2-update", tags: ["#update", "#compmus"]},
  {href:"/2019-11-09-mouseconftalk", tags: ["#mouseconf", "#writing", "#maintenance", "#talk"]},
  {href:"/2019-10-29-percsyn2-proposal", tags: ["#compmus", "#proposal"]},
  {href:"/2019-10-29-gorne-inter", tags: ["#compmus", "#response"]},
  {href:"/2019-10-08-tryfm", tags: ["#maxmsp", "#audsyn"]},
  {href:"/2019-10-08-npsquare", tags: ["#digisig", "#audsyn"]},
  {href:"/2019-10-08-volley2", tags: ["#maxmsp", "#compmus"]},
  {href:"/2019-10-08-softrelease01", tags: ["#liao"]},
  {href:"/2019-10-01-maxq", tags: ["#compmus", "#maxmsp", "#update"]},
  {href:"/2019-09-22-liao-softrelease00", tags: ["#liao", "#snapshot"]},
  {href:"/2019-09-15-liao-snapshot8", tags: ["#liao", "#process", "#snapshot"]},
  {href:"/2019-09-02-liao-snapshot", tags: ["#liao", "#process", "#snapshot"]},
  {href:"/2019-06-19-squeezehit", tags: ["#liao", "#audio", "#freq"]},
  {href:"/2019-05-17-dyesens", tags: ["#itp", "#energy"]},
  {href:"/2019-05-02-stretchexp", tags: ["#exp", "#js"]},
  {href:"/2019-04-22-sunbom", tags: ["#itp", "#homehard"]},
  {href:"/2019-04-22-rightshelf", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-22-leaveanote", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-21-interactiveexperience", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-21-table2", tags: ["#apt", "#process"]},
  {href:"/2019-04-19-comedowntous", tags: ["#process", "#mend"]},
  {href:"/2019-04-19-freestoreforever", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-19-sockpatch", tags: ["#mend", "#process", "#apt"]},
  {href:"/2019-04-19-freestoremac", tags: ["#itp", "#freestore"]},
  {href:"/2019-04-11-sunadd", tags: ["#itp", "#energy"]},
  {href:"/2019-04-08-eagleboard", tags: ["#itp", "#homehard"]},
  {href:"/2019-04-02-attinyapp", tags: ["#itp", "#homehard"]},
  {href:"/2019-03-17-freestoreblend", tags: ["#itp", "#freestore"]},
  {href:"/2019-03-14-subtractfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-14-dovetailfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-14-cncfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-03-13-theoriespitch", tags: ["#idm", "#theories"]},
  {href:"/2019-02-28-threebatteries", tags: ["#itp", "#energy"]},
  {href:"/2019-02-23-tpkinetic", tags: ["#itp", "#energy"]},
  {href:"/2019-02-23-otherfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-10-stavecardfailure", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-12-freestoreinit", tags: ["#itp", "#freestore"]},
  {href:"/2019-02-07-time", tags: ["#workflow", "#neurosis"]},
  {href:"/2019-02-06-handrouter", tags: ["#itp", "#subtract"]},
  {href:"/2019-02-06-energyinit", tags: ["#itp", "#energy"]},
  {href:"/2018-12-18-dingtest", tags: ["#itp", "#ani"]},
  {href:"/2018-12-18-anipaper", tags: ["#itp", "#ani"]},
  {href:"/2018-12-13-percsyn", tags: ["#itp", "#pcomp", "#update"]},
  {href:"/2018-12-13-worldfiltersyn", tags: ["#itp", "#genmusic"]},
  {href:"/2018-12-12-bcard", tags: ["#itp", "#vislang"]},
  {href:"/2018-12-06-genmusic10", tags: ["#itp", "#genmusic"]},
  {href:"/2018-12-04-itpposter", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-29-anipiano", tags: ["#itp", "#ani", "#piano"]},
  {href:"/2018-11-28-sixpalette", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-14-deltaredesign", tags: ["#itp", "#vislang"]},
  {href:"/2018-11-12-tsnegoldberg", tags: ["#itp", "#genmusic"]},
  {href:"/2018-11-09-multiplex", tags: ["#itp", "#pcomp"]},
  {href:"/2018-11-06-psproposal", tags: ["#itp", "#pcomp"]},
  {href:"/2018-11-06-signage", tags: ["#itp", "#vislang"]},
  {href:"/2018-10-31-gooddesign", tags: ["#itp", "#vislang"]},
  {href:"/2018-10-18-mlbias", tags: ["#itp", "#genmusic"]},
  {href:"/2018-10-04-draftmarkov01", tags: ["#itp", "#genmusic"]},
  {href:"/2018-09-26-publicinteract", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-21-ufosonification", tags: ["#itp", "#genmusic"]},
  {href:"/2018-09-19-design", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-19-concreteswitch", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-13-interactivity", tags: ["#itp", "#pcomp"]},
  {href:"/2018-09-13-genmusic", tags: ["#itp", "#genmusic"]},
  {href:"/2018-09-11-bloginit", tags: ["#personal"]},
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
