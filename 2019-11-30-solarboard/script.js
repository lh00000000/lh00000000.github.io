const imgs = {
    a: "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
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

const assets = {
    bantam: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/Screen-Shot-2019-04-30-at-2.48.29-AM.png",
    mcp73971pinout: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/C3FF11C1-0AE9-499F-BD84-004EC06D3A34.png",
    mcp73971soldered: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6957.jpg",
    microscope: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6956.jpg",
    laptop: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6952.jpg",
    muxsoldered: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6963.jpg",
    wholeboard: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6964.jpg",
    mcpclose: "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/IMG_6958.jpg"
}

const nbt = txts => txts.join("")

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
            <img src={assets.wholeboard} width={400} />

            <div>
                <p>
                    {"post documenting the excess power saving + power muxing for "}<a href="https://luminghao.com/2019-04-11-sunadd/">sunadd </a>
                </p>
                <p>
                    the board was intended as a replacement/mashup of two
                    adafruit modules used in development
                </p>
                <ul>
                    <li>
                        <a href="https://www.adafruit.com/product/2465">
                            PowerBoost 1000 Charger
                        </a>
                    </li>
                    <li>
                        <a href="https://www.adafruit.com/product/390">
                            USB / DC / Solar Lithium Ion/Polymer charger v2
                        </a>
                    </li>
                </ul>
                <p>
                    both modules use a <a href="http://www.adafruit.com/datasheets/MCP73871.pdf"> MCP73871t-2CCI </a>
                    <img src={assets.mcp73971pinout} width={200} />

                </p>
                <p>
                    the powerboost uses a <a href="http://www.adafruit.com/datasheets/tps61090.pdf"> TPS61090 DC/DC </a>
                </p>
                <p>
                    i added a
                    <a href="http://www.ti.com/lit/ds/symlink/tps2114a.pdf"> TPS2114A </a>
                    to take care of getting as much power from the unmatched
                    voltages of the two solar threads
                </p>
                <p>
                    {"really thankful to "}
                    <a href="https://github.com/RyanteckLTD/eagle">
                        RyanteckLTD on github
                    </a>
                    {"for adding eagle libary parts to doing the design so much easier"}
                </p>
            </div>

            <div>
                <p>bom</p>
                <ul>
                    <li>10uF</li>
                    <li>4.7 uF</li>
                    <li>4.7 uF</li>
                    <li>10k</li>
                    <li>10k</li>
                    <li>10k</li>
                    <li>10k</li>
                    <li>10k (five)</li>
                    <li>2pin header</li>
                    <li>2pin header</li>
                    <li>4pin header</li>
                    <li>battery holder</li>
                    <li>tps2115a (mix)</li>
                    <li>mcp73871 (charger)</li>
                </ul>
            </div>
            <img src={assets.bantam} width={500} />
            <img src="https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-30-solarboard/Screen%20Shot%202019-04-30%20at%203.06.03%20AM.png" width={500} />
            <div>
                <p>checklist i made for milling</p>
                <ul>
                    <li>change instrument to probe</li>
                    <li>locate bracket</li>
                    <li>probe for thickness</li>
                    <li>attach material </li>
                    <li>start job and change endmill</li>
                </ul>
            </div>
            <div>
            <p>had a ton of anxiety soldering bc of my struggles with making the led letter. however i shouldn't have complained about to a classmate withmore previous soldering experience, because they then asked to show me it'd be easy for them to do, did 15 pins and immediately left. i had to fix some, but spent a lot of time preparing to practice a bunch of smt soldering. i ended up really resenting the "some people are just naturally capable and other aren't pep talk i received about the incident for the rest of the semester. i still have a sore feeling about what i have mostly experienced a belligerent student culture, which has made me unenthusiatic and wary about collaborations related to the program. really though, it was a good lesson how i need to work on setting boundaries and making my own intentions and need for space known. </p>
            <p>some useful methods i found were</p>
            <ul>
                <li>using tweezers to pick up very small balls of paste, then using the two tongs to grip the raised copper route, "painting" the lead as the tweezers are dragged</li>
                <li>pressing a q-tip of alcohol an inch or so away, allowing the alcohol to dillute solder paste between leads that would otherwise cause a bridge</li>

            </ul>
            <img src={assets.mcp73971soldered} width={400} />
            <img src={assets.microscope} width={400} />
            <img src={assets.laptop} width={400} />
            <img src={assets.muxsoldered} width={400} />
            <img src={assets.mcpclose} width={400} />
            </div>
        </div>,
        document.getElementById("main")
    )
})