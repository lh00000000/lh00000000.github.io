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
        return <div style={{ display: "flex", flexDirection: "row", width: this.props.width }}>
        <div>
            <img style={{ width: this.props.width / 2 }} src={src} />
        </div>
        <div>
            <p style={{ width: this.props.width / 2 }} style={{ margin: 0 }}>
                {this.props.caption}
            </p>
        </div>
    </div>
    }

    verticalStyle() {
        return
            <div style={{ width: this.props.width }}>
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
        return <video width={this.props.width} height={this.props.height} controls>
            <source src={this.props.src} type={`video/${_.last(src.split("."))}`} />
        </video>
    }
}

class PageCentered extends React.Component {
    render() {
        let style = {
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
            <p>in 2018, i was extremely fortunate enough to be one of the attendees of the first session of SFPC's Code Societies program. it gave me the opportunity to meet some of the most amazing people i have ever known and continue to excitedly follow and had an incredible influence on me that i am still continuing to process.</p>
            <p>i sometimes get questions about the program and/or things i did during it, which has added to the guilt i have been amassing since then over not having archived anything concrete from the session to share with others.</p>
            <p>it has legitimately influenced the concept of almost everything i have put my full energy into since then. </p>
            <p>2019-12-18-including a conclusionary essay for a class i took this semestered called "computer music composition". i thought this is an inoptimal but better-than-nothing time to start a page to collect items and thoughts related to my time there there as any. </p>


        </PageCentered>,
        document.getElementById("main")
    )
})
