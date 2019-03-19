

document.addEventListener("DOMContentLoaded", () => {
  let word = "failure "
  let i = 0
  setInterval(() =>  {
    let wi = (word.length - i) - 1
    let letter = word[wi]
    i = (i + 1) % word.length
    document
      .getElementById("failuretext")
      .innerHTML = word[wi] + document.getElementById("failuretext").innerHTML
  }, 1)

})