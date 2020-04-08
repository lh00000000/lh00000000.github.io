const imgs = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
}

class CaptionedImage extends React.Component {
    constructor(props) {
        props.width = props.width || "100%"
        super(props)
    }
    rightStyle() {
        return (
            <figure
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: this.props.width
                }}
            >
                <img style={{ width: this.props.width / 2 }} src={src} />
                <figcaption
                    style={{ width: this.props.width / 2 }}
                    style={{ margin: 0 }}
                >
                    {this.props.caption}
                </figcaption>
            </figure>
        )
    }

    verticalStyle() {
        return (
            <figure style={{ width: this.props.width }}>
                <img style={{ width: "100%" }} src={this.props.src} />
                <figcaption style={{ margin: 0 }}>
                    {this.props.caption}
                </figcaption>
            </figure>
        )
    }

    render() {
        return this.props.right ? this.rightStyle() : this.verticalStyle()
    }
}
const list = (title, items, ordered = false) => {
    let lis = items.map(item => <li>{item}</li>)
    let actualList = ordered ? <ol>{lis}</ol> : <ul>{lis}</ul>

    return (
        <div style={{ width: 480 }}>
            <div>
                <p>{title}</p>
            </div>
            <div>{actualList}</div>
        </div>
    )
}

const nbt = txts => txts.join("")
const assets = {
    "0":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/solarcells/IMG_1394.jpg",
    "1":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/solarcells/IMG_1392.jpg",
    wall:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-05-8solarstrings/wall.jpg",
    table:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-05-8solarstrings/table.jpg"
}


const morepix = [
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2019-12-05-8solarstrings-more/IMG_2462.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2019-12-05-8solarstrings-more/IMG_2460.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2019-12-05-8solarstrings-more/IMG_2458.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2019-12-05-8solarstrings-more/IMG_2465.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2019-12-05-8solarstrings-more/IMG_2459.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-01-26-moresolar/IMG_2600.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-01-26-moresolar/IMG_2563.jpg",
"https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-01-26-moresolar/IMG_2564.jpg",
]
const miniPosts = {
    "2019-12-02-process": (
        <section>
            <h2>2019-12-02-process</h2>
            <CaptionedImage
                src={assets["1"]}
                caption={
                    "2019-12-02 three 3v strings in one hour, which is shockingly a vast improvement for me."
                }
            />
        </section>
    ),
    "2019-12-05": (
        <section>
            <h2>2019-12-05-8strings</h2>
            <CaptionedImage src={assets["wall"]} caption="wanted to make four 6volt strings (12 cells each). almost there"/>
            <CaptionedImage src={assets["table"]} caption="easy flippability"/>
        </section>
    ),
    "2019-12-02-soldering": (
        <section>
            <h2>2019-12-02-soldering</h2>
            <CaptionedImage
                src={assets["0"]}
                caption={
                    "i am annoyed about living in the 0.5 of a 1.5 apartment but i realized that i could combine my folding table with my nightstand (feat. table top with cnc'd bottom to fit into the nsf wire shelving pattern that i have blogged about struggled through, but never the finished result (as of 2019-12-02). i know no one cares about putting wood on wire shelving but i would like to research more about nsf wire shelving so i'd like to have a closed-off document about that experience."
                }
            />
            <p>
                i only have these pics for now, but i took more of all of the
                hassles and trial and errors trying to use traditional wiring
                methods.
            </p>
        </section>
    ),
    "2020-01-20-panel": (
        <section>
            <h2>2020-01-20-panel</h2>
            <p>finally fnished a panel and put it in my window. using adafruit solar controller module with powerboost 500 (powerboost 1000 never worked bc my amperage was always too low). i think it is 8 watts...at a max. it's four 6v strings w a max of 1.2 a (0.3 a each cell ideally). who knows what it really is day to day. seems to charge my usb sticks though.
            </p>
            {morepix.map(src =>
                <CaptionedImage src={src} />
                )}

        </section>
        )
}

let currentProcess = list(
    "current process 2019-12-05",
    [
        "cut long pieces of double-side-conductive copper tape out. i've tried bus-bar wire and tabbing wire, adding solder to the cells directly, dumping a ton of flux. using no flux. cleaing with alcohol. the cells just don't like solder. the only thing that's worked for me is copper tape with conductive adhesive, which is great other than being really flimsy, so another form of wiring was still needed in my opinion.",
        "cover the long pieces of copper tape with masking tape. this is because i've found the copper tape to be extremely sticky, easily sticking to itself, or to dirt, and getting ruined. what i do is put masking tape on so the sticky part of the masking tape is sticking to the non sticky side of the copper tape. the bigger pieces of masking tape are easier to handle and because the adhesive of the copper tape is much more powerful, pulling back the masking tape allows the copper to remain on the cells.",
        "cut the copper / masking tape omnitape so that the copper is only little square pads. i did this because i wanted to save as much copper tape as possible, as it seemed kind of an extremely useful but kind of expensive consumable. beware, there's a lot of copper tape out there where the adhesive side is intentionally nonconductive. conductive adhesive copper tape is a little more $$$.",
        "put the copper on to both sides of the cells you want to connect. essentially making solder-thirsty little pads for both sides",
        "use regular (stranded works best. i found 22 gauage to be between too-thick and too-thin) hookup wire. chop a bunch of small segments in one go, strip each side of the little wires.",
        "tin everything. the cells don't like heat. the copper pads gulp up solder quickly, the wire is a small target. with all these complications, i've found that melting a dab of solder on the pads and tinning the tips of the wires is the least error prone way to get them connected. once you're at the point of trying to get a solder-y tip of wire to connect with a lump of silver-y solder on a little square of copper tape, i've found that for some reason, a bit of small movement along the length of the exposed wire helps the mess of solder cooperate, as opposed what i think of as traditional technique where you want to focus your heat and not futz around.",
        "solder all the fronts (you decide which is front ! ground or positive side idk) at the same time for all the cells your want to connect. then flip them all. flipping the cells over is the most annoying step and definitely the part where i break cells and throw out all of my hard work. having little wires sticking out at the top like handles makes this easier.",
        "majority of the soldering for me has been soldering cells in series. i've found it useful to keep little strings of cells of the voltage i want separate, and to connect them in parallel at the end, which is also when i put them on a supporting surface (a piece of cardboard lol) which is another headache (for me at least). i also feel like this is where one could get creative with the placement and arrangement of the cells, which is probably the biggest reason to do this instead of buying nicely made panels. i haven't gotten to that level of careful abandon however. will update soon"
    ],
    true
)

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div style={{ paddingLeft: 32, width: 600 }}>
            <p>
                in an effort manage stress about not finalizing online
                documentation of things i'm going to start putting up half-done
                posts that i can update with more assets and info as i go along.
            </p>
            {currentProcess}
            {_(miniPosts)
                .toPairs()
                .sortBy(([dt, section]) => dt)
                .reverse()
                .map(([dt, section]) => section)
                .value()}
        </div>,
        document.getElementById("main")
    )
})
