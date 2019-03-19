text = `this is a blog post for the first week of pcomp at itp 2018 taught by danny rozin
it was supposed to be written a week ago... but i somehow forgot that a blog post is required for every class. i still feel bad about it...

the week's the readings were
- Crawford, The Art of Interactive Design, chapters 1 and 2
- Bret Victor, “A Brief Rant on the Future of Interaction Design”

i first heard of Chris Crawford from a feature that I am not sure if I simply dreamed of reading. it mentioned how he erected an elaborate pole and pulley system to suspend a gargoyle at the threshold of his countryside property (http://www.erasmatazz.com/personal/weird-projects/the-gateway/index.html). he kept a large jar of jellybeans with one jellybean for every day of his predicted lifespan so he could manually transfer one to a "death jar" every day. he was fired from his game developer job after being assigned to make a clone of a popular war-simulation game after he developed an elaborate game about promoting non-violent diplomacy. however, i just spent two hours looking for this article and couldn't find it. did it exist? in the end, i somehow learned that he wrote a book on interactive design, which sounded interesting was was completely outside my knowledge base, so i ordered  a copy as soon as i could.
the book confirmed my hope that crawford was someone with high standards and optimistic expectations for the possibilities of technology but frequently stayed grounded in the realistic frustration of the present.
"the term interactivity, yanked around so much as to be half-dead, a pallid bloodless nothing burger of a word"
sounds familiar today, as it probably would a hundred years ago.
one thing i found interesting interesting upon this reunion with the text was how crawford focused on a two agent example as the prototypical example of interactivity. although i don't think it's incorrect, i feel like the tone today is very much about systems of many interactions, forming atmospheres of emergent complexity that promise to reveal something about the frequently measurable and reducible but ultimately hopelessly confusing world. in this lens, "you can't converse with a brick wall" becomes false. the indirect actions matter. the meaning of the wall exists as a result of forces you have varying, but frequently little, degrees of control over. it can affect you. you can affect it. it can signify something. you can yell at it. it can ignore you. you can feel bad about it. or maybe i just feel bad because i am the argumentative reader crawford talks about. or maybe i just like to take the things on the "lower" side of crawfords interactivity spectrum seriously.
i think my main disagreement is with the belief that things can be separated from the conditions that led to their existence, and that their existences can be absolved from the effects they have on the condition of other things regardless of any actual listening, speaking, or thinking that may or may not occur. is it valid or relevant to say this has anything to do with interactivity? subscribing to crawford's definition of interactivity probably results in making better products at least. it sounds to me as if he's taking about what people today refer to as "engagement". but there is 1 second of engagement for every one hour of disengagement, and i think accounting for the effect those hours could lead to something better.
"right now, it's CRAP!" - my friend ian and my impression of Bret Victor in college.
i first heard about victor from the talk he gave where he casually demo'd a code editor that still shocks today, then from reading about his subsequent struggle about how his talk went viral by being misinterpreted as being a code editor demonstration, when his point was the world's sick fetishization of replicating the same broken tools over and over again in slightly fancier designs.
it's fun to joke about Bret Victor because it's hard to disagree with Bret Victor. we all want tools that feel like they're extensions of our aspirations, neither standing in the way of our vision nor running off with the results of ideas without us. but ultimately, it keeps feeling like we're left with another realization that this is skeuomorphic of that or the new thing to swipe up isn't new at all.
the microsoft "vision" video Victor was talking was pretty baffling to me because i wouldn't be surprised if the same thing came out last week.
some questions i had while watching
* why are the glasses blasting out translation for the woman to literally take two steps forward from where she already was?
* the clock on the taxi passenger window seems alright
* why did that woman draw a heart on her calendar
* what is the point of drawing a hologram outline around a boxy building on the horizon just to tell them their meeting tomorrow is going to be a bunch of traffic away?
* why can't people use the finger on the back of their devices for their transparent touchscreen phone-things?
* why does the hotel person get a small pic and bio to wait for woman? can't this army of screens do something when she's actually there?
* why is taking up half the screen of someone's device with a picture of someone that wants something for you, then a glacial-speed gesture to send a canned response about how your going to post pone doing anything about it until tomorrow, then accepting a meeting invite/commitment considered at all futuristic or effective
* why did microsoft want phones with a billion widgets on them so badly?
* why haven't people cracked down on the use-phone-to-give-money-to-poor idea yet?
* why would anyone want a 3d bar graph, especially one where the bars come straight at you
* why do we still like animated transitions today
* why does that one guy have a tablet with a hole in the top right of it
* why does the facetime-video-chat thing zoom up on faces so much?
* why does this family only have 3 spices?
i'm not claiming to have all of the solutions, i just honestly wondered.
i frequently reach for the argument that the gold standard for tooling is the hammer and the hands, and every time i do, i wonder if i'm just another Victor parrot.
at the same time, i think saying that glasses are a good interface for gauging how much water is left is kind of like saying the beach is a really well designed API for the ocean. the headroom for the level of quality of design for things like hammers and cups is just higher than that of calendars and musical instruments. liquids and solids have a world of association around them that extends far beyond the realm of their relationship to human existence. i don't know if there's going to be a truly intuitive design for a calendar app because the concept of a calendar event is really weird. i don't know why people always talk about how great pianos are. they can be fun, satisfying, and tactile, but a lot of the design is result of a longer run of trial-and-error towards hyper optimizing towards very particular beliefs about how pianos should be used. if you find a composer that truly refrains from questioning the design of the piano keyboard, they're probably really into brahms or also have similar opinions of sibelius (the software), which means they are not to be trusted.
`

const getCharSynonym = c => _.get({
  "!": "1",
  "(": "9",
  ")": "0",
  "*": "8",
  ":": ";",
  "?": "/",
  "“": '"',
  "”": '"'
}, c, c)
let globalState = {
  velocity: 0.005,
  opacity: _.fromPairs(
    _.uniq(
      text
        .toLowerCase()
        .replace("\n", "")
        .replace(" ", "")
        .split("")
    )
      .filter(c => c != " ")
      .map(c => getCharSynonym(c))
      .map(c => [c, 1.0])
  )
}
const setup = () => {
  let lines = text.split("\n")
  let mainDiv = document.querySelector("#main")

  let h1 = document.createElement("h1")
  document.title.split("").forEach(c => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(c))
    span.setAttribute("style", "opacity: 1.0;")
    span.setAttribute("class", "tickMe")
    h1.appendChild(span)
  })
  mainDiv.appendChild(h1)

  lines.forEach(line => {
    let p = document.createElement("p")
    line.split("").forEach(c => {
      let span = document.createElement("span")
      span.appendChild(document.createTextNode(c))
      span.setAttribute("style", "opacity: 1.0;")
      span.setAttribute("class", "tickMe")
      p.appendChild(span)
    })
    mainDiv.appendChild(p)
  })
}

const tickFade = () => {
  globalState.opacity = _.fromPairs(
    _.toPairs(globalState.opacity).map(([c, opac]) => [
      c,
      Math.max(opac - globalState.velocity, 0)
    ])
  )
  Array.from(document.querySelectorAll(".tickMe")).forEach(span =>
    span.setAttribute(
      "style",
      `opacity: ${globalState.opacity[
        getCharSynonym(span.textContent.trim().toLowerCase())
      ]}`
    )
  )
}

const handleKey = ev => {
  globalState.opacity[getCharSynonym(ev.key)] = 1.0
}

const stopInteracting = () => {
  globalState.velocity = 0
  globalState.opacity = _.fromPairs(_.toPairs(globalState.opacity).map(([c, o]) => [c, 1.0]))
}

// const stopInteracting = () =>

$(document).ready(() => {
  setup()
  setInterval(tickFade, 1000/24)
  window.addEventListener("keyup", handleKey)
})
