d3.csv("https://lh00000000-public.s3.amazonaws.com/2019/siteimg/2019-02-12-freestoreinit/freestore1.csv", (err, data) => {
  console.log(data)
  data.forEach(row => {
    let rowEle = document.createElement("tr")
    let fields = ["what", "type", "action"]
    fields.map(field => {

      let td = document.createElement("td")
      td.innerText = row[field]
      return td
    }).forEach(td => rowEle.appendChild(td))
    document.querySelector("#table").appendChild(rowEle)
  })
})