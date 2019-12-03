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

let mov = (src, width = 320, height = 240) => (
    <video width={width} height={height} controls>
        <source src={src} type={`video/${_.last(src.split("."))}`} />
    </video>
)

const nbt = txts => txts.join("")

const eygloHttp = "https://soundcloud.com/eyglocomposer/silfra"

const iframeSlides = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRe_2KcOM3-Q4z7Z5zFVIoJhyBUDr5rmbVnUSu7E6SZqvriJq3SfFjXlEHjqqgUz6YG1xxz8D-RPtcb/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
            <p>
                <a href={eygloHttp}>eygló viborg</a> and i presented on <a href="http://www.ems-network.org/IMG/pdf_EMS14_forcucci.pdf">Luca Forcucci's piece</a> on embodied
                and haptic possiblities for electroacoustic music.
            </p>
            <p>in order to begin a discussion on otoacoustic music or "listening to the skull", we quickly improvised a participartory piece based on eygló's ideas on creating music based on instructing the listener to activate parts of their head</p>
            <p>we used google slides as a way to quickly create an instruction-based score</p>
            <p>the piece is titled "oyster mushroom" as a result of our mycelial analogies to embodied listening, and it is intended to be part of a greater series of, presumably deeper explorations into this technique, pieces called the "headpiece suite".</p>
            {iframeSlides}
        </div>,
        document.getElementById("main")
    )
})
