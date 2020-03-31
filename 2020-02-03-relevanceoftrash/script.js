const assets = {"IMG_1685": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1685.jpg", "image0": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/image0.jpeg", "IMG_1686": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1686.jpg", "IMG_1679": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1679.jpg", "IMG_1683": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1683.jpg", "IMG_1682": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1682.jpg", "image1": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/image1.jpeg", "IMG_1677": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1677.jpg", "IMG_1688": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1688.jpg"}


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
        return (
            <figure style={{ width: this.props.width, margin: 0 }}>
                <img style={{ width: "100%" }} src={this.props.src} />
                <figcaption>
                    <small>{this.props.caption}</small>
                </figcaption>
            </figure>
        )
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
        let innerItems = this.props.items.map(item => (
            <li>
                <p>{item}</p>
            </li>
        ))
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
        <div style={{display:"flex", flexWrap: "wrap"}}>
        <p>workshop for tech for social good day [link]</p>
        <p>collab w hannah tardie</p>
        <p>focus: desoldering practice + lecture on ewaste, focusing on the waste of production of idealized components, ending with traditional narrative of exported consumer electronics</p>
        <p>all pix by hannah tardie except three bad ones by me</p>
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQT6Dn0_e9-NnZN8uFKfxli2qEXmIYsVhWk7EEaezSK1jqcS8wJNPvZBbEZz_I6PL_K2WSD40u6QhKH/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        {_(assets).values().map(s => <CaptionedImage src={s} />)}
        </div>,
        document.getElementById("main")
    )
})
