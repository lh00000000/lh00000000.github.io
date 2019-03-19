const captionedImage = ({caption, imgSrc}) => {
  let div = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")

  let s3prefix = "https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-02-06-handrouter/"
  img.src = s3prefix + imgSrc
  p.innerText = caption
  div.classList.add("captionedImage")
  div.appendChild(img)
  div.appendChild(p)
  return div
}

const content = [
{imgSrc: "router.jpg", caption: "skillbuilder 01 for Ben Light's subtraction (cutting edition) class for 2019 ITP = hand router + rotational jig"},

{imgSrc: "measure.jpg", caption: "measure / clamp / guide"},
{imgSrc: "cncbit.jpg", caption: "a cnc bit that i stupidly almost used before Ben Light caught me"},
{imgSrc: "rightbits.jpg", caption: "the bits to use to avoid being expelled from itp"},
{imgSrc: "openbits.jpg", caption: "bit set for hand router"},
{imgSrc: "attach.jpg", caption: "wrench to secure the bit"},

{imgSrc: "depth.jpg", caption: "set depth of bit by rotating"},
{imgSrc: "lockguard.jpg", caption: "lock jig using this"},

{imgSrc: "raw.jpg", caption: "raw material from scrap pile"},

{imgSrc: "hole.jpg", caption: "measured from edge of bit. used hole at 5.5in"},
{imgSrc: "lines.jpg", caption: "drew lines then had to put everything away"},
{imgSrc: "drill.jpg", caption: "drill for making hole for peg"},
{imgSrc: "drilling.jpg", caption: "drilling for axis peg"},
{imgSrc: "pin.jpg", caption: "insert peg for rotational jig"},

{imgSrc: "itshappening.jpg", caption: "it's happening"},
{imgSrc: "gross.jpg", caption: "why does this look so gross? #TODO(ask Ben)"},
{imgSrc: "dust.jpg", caption: "dust"},

{imgSrc: "unsafeclamp.jpg", caption: "tried to use a much heavier piece of wood as straight edge. balance seemed prone to murder me so i switched to a ruler."},
{imgSrc: "clamp.jpg", caption: "clamping for straight line (measured dist using stick end of caliper)"},

{imgSrc: "trash.JPG", caption: "why does it look so nasty?"}
]

document.addEventListener("DOMContentLoaded", () => content.forEach(c => document.querySelector("#main").appendChild(captionedImage(c))))
