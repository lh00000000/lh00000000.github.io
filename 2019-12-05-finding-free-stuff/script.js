const assets = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
}

const DEFAULT_COL_WIDTH = 600

class CaptionedImage extends React.Component {
    constructor(props) {
        props.width = props.width || DEFAULT_COL_WIDTH
        super(props)
    }
    rightStyle() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: this.props.width
                }}
            >
                <div>
                    <img style={{ width: this.props.width / 2 }} src={src} />
                </div>
                <div>
                    <p
                        style={{ width: this.props.width / 2 }}
                        style={{ margin: 0 }}
                    >
                        {this.props.caption}
                    </p>
                </div>
            </div>
        )
    }

    verticalStyle() {
        return <div style={{ width: this.props.width }}>
            <div>
                <img style={{ width: "100%" }} src={this.props.src} />
            </div>
            <div>
                <p style={{ margin: 0 }}>{this.props.caption}</p>
            </div>
        </div>
    }

    render() {
        return this.props.right ? this.rightStyle() : this.verticalStyle()
    }
}

class List extends React.Component {
    constructor(props) {
        props.width = props.width || "100%"
        props.ordered = props.ordered || false
        super(props)
    }

    render() {
        let innerItems = this.props.items.map(item => <li><p>{item}</p></li>)
        let list = this.props.ordered ? (
            <ol>{innerItems}</ol>
        ) : (
            <ul>{innerItems}</ul>
        )
        return (
            <div style={{ width: this.props.width }}>
                <div>
                    <p>{this.props.text}</p>
                </div>
                <div>{list}</div>
            </div>
        )
    }
}

class Movie extends React.Component {
    constructor(props) {
        props.width = props.width || 320
        props.width = props.width || 240
        super(props)
    }
    render() {
        return (
            <video width={this.props.width} height={this.props.height} controls>
                <source
                    src={this.props.src}
                    type={`video/${_.last(src.split("."))}`}
                />
            </video>
        )
    }
}

class PageCentered extends React.Component {
    render() {
        let style = {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class HugSides extends React.Component {
    render() {
        let style = {
            display: "flex",
            justifyContent: "space-between"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class TotalCenter extends React.Component {
    render() {
        let style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class Fullscreen extends React.Component {
    render() {
        let style = {
            width: "100wh",
            height: "100vh"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

const nbt = txts => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            <section style={{maxWidth:"800px", width: "60%"}}>
                <p>
                    i've been finding a lot of things this year right after i've
                    been putting them on a list of things to order online or
                    look for in stores and wanted to start listing them
                    somewhere.
                </p>
            </section>
            <section style={{width:"400px", paddingLeft: 16}}>
                <List
                    text={"last updated 2019-12-05"}
                    items={[
                        "i was trying to figure out a cost-effective way to get a sheet of transparent flexible vinyl when i saw someone throwing away a 3x2 foot picture frame. the large sheet of flat cardboard was also great and what i made my lampshades out of.",
                        "on the way out to get something to drink from the bodega, i found a sodastream someone moving out of the building was giving away. send ideas for soda syrups please.",
                        "recently got into rotating pdfs and my laptop to read in portrait orientation. have been bumping my laptop into things so i figured i should get a case or before the next dent. i ended up finding a laptop cover in a free book pile.",
                        "have been working with electronics more at home using a pendant rope light. it's kind of annoying to get into position so i was planning to buy a clip lamp, but ended up finding one outside. the part where you screw in the bulb was smaller than standard but i still kept the clip and now suspend it using my mic stand, which is probably more adjustable anyways.",
                        "we had an hdpe trashcan in the kitchen that i was really not liking anymore becaue the lid hinge kept snapping out of place when i found a restaurant putting a simplehuman trash can that i've always wanted out on the street. gross to clean now our living room looks much more stylish."
                    ]}
                />
            </section>
        </PageCentered>,
        document.getElementById("main")
    )
})
