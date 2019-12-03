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
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/plantbottles/IMG_6677.jpg",
    "1":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/plantbottles/IMG_6679.jpg",
    "2":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/plantbottles/IMG_6678.jpg"
}

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
            <p>this is an in-progress post about my lackadaisical intermettant efforts to learn more about hydroponics.</p>
            <p>more info on seeds and substrates at some point in the future. </p>
            <p>what's the point of making a lo-fi aesthetic website without the low-production value prevalance of vague declarations of future ambitions?</p>
            {imgRCap(assets["0"], "for covering in india ink")}
            {imgRCap(assets["2"], "half covered")}
            {imgRCap(assets["1"], "fully covered")}
        </div>,
        document.getElementById("main")
    )
})
