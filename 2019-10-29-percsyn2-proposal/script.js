const imgs = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
}

const imgCap = (imgSrc, caption, width = 600) => (
    <div style={{ width }}>
        <div>
            <img style={{ width: "100%" }} src={imgSrc} />
        </div>
        <div>
            <p style={{ margin: 0 }}>{caption}</p>
        </div>
    </div>
)

const imgRCap = (imgSrc, caption, width = 600) => (
    <div style={{ display: "flex", flexDirection: "row", width }}>
        <div>
            <img style={{ width: width / 2 }} src={imgSrc} />
        </div>
        <div>
            <p style={{ width: width / 2 }} style={{ margin: 0 }}>
                {caption}
            </p>
        </div>
    </div>
)
const list = (title, items) => (
    <div style={{ width: 480 }}>
        <div>
            <p>{title}</p>
        </div>
        <div>
            <ul>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </div>
)

const nbt = txts => txts.join("")
let preload = {
    proposal: fetch("./proposal.txt").then(res => res.text())
}

let preloadReady = () =>
    new Promise(resolve => {
        let finished = {}

        let allPromises = _(preload)
            .toPairs()
            .map(([key, promise]) => {
                promise.then(value => finished[key] = value)
                return promise
            })
            .value()
        Promise.all(allPromises).then(() => resolve(finished))
    })
$(document).ready(() => {
    hljs.initHighlightingOnLoad()
    preloadReady().then(({proposal}) => {

        ReactDOM.render(
            <div>
                <p>i am attempting to implement my idea from pcomp last year as my final project for "Computer Music Composition" taught by Elizabeth Hoffman</p>
                <pre>{proposal}</pre>
            </div>,
            document.getElementById("main")
        )
    })
})
