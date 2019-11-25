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
const assets = {
    "0":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-25-maxjstest/index.html",
    "1":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-25-maxjstest/script.js",
    "2":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-25-maxjstest/style.css",
    "3":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-25-maxjstest/Screen-Shot-2019-11-25-at-3.24.58-AM.png"
}

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
            {imgCap(assets["3"], "trying to connect my nascent max msp studies with my previous js experience and wanted to remember this way of mapping to tonal scales. i am using a simple recursive binary search on an array of note degrees [0-12]. the array must be sorted but maybe that can be wrapped up somewhere else. i am also using a js max object to implement smoothing is a low pass filter. that isn't shown because it was just x = x + 0.05 * (new - x). also in this pic i am using a sine oscilator as an arpeggiator. i would like to continue this idea to another idea of using a bunch of sine as tone generation as well as a composition idea, for determining pitch sequences, section traversal, and forms.")}
            <pre><code class="javascript">{`inlets = 1
outlets = 1

function chromaNote(i) {
    return (i - 60) % 12
}

function bisect(arr, x) {
    if (arr.length > 2) {
        var midPointIdx = Math.floor(arr.length / 2)
        if (x < arr[arr.length / 2]) {
            return bisect(arr.slice(0, midPointIdx), x)
        } else {
            return bisect(arr.slice(midPointIdx, arr.length - 1), x)
        }
    } else if (arr.length == 1) {
        return arr[0]
    } else {
        if (Math.pow(arr[0] - x, 2) < Math.pow(arr[1] - x, 2)) {
            return arr[0]
        } else {
            return arr[1]
        }
    }
}

function msg_float(r) {

    var oct = Math.floor(r / 12)
    var scale = [0, 2,a 4, 7, 11]
    outlet(0, bisect(scale, chromaNote(r)) * oct)`
}

</code></pre>
        </div>,
        document.getElementById("main")
    )
})
