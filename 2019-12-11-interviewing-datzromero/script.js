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
        return (
            <div style={{ width: this.props.width }}>
                <div>
                    <img style={{ width: "100%" }} src={this.props.src} />
                </div>
                <div>
                    <p style={{ margin: 0 }}>{this.props.caption}</p>
                </div>
            </div>
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

const boathouse = {
    IMG_1509:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-boathouse/IMG_1509.jpg",
    IMG_1511:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-boathouse/IMG_1511.jpg",
    IMG_1512:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-boathouse/IMG_1512.jpg",
    IMG_1514:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-boathouse/IMG_1514.jpg"
}
const warehouse = {
    IMG_1281:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1281.jpg",
    IMG_1283:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1283.jpg",
    IMG_1287:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1287.jpg",
    IMG_1286:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1286.jpg",
    IMG_1284:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1284.jpg",
    IMG_1290:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1290.jpg",
    IMG_1288:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1288.jpg",
    IMG_1289:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-11-les-warehouse/IMG_1289.jpg"
}

const nbt = txts => txts.join("")

const oneImg = src => (
    <PageCentered><div style={{maxWidth: 640, width: "100%", padding: 4}}><CaptionedImage src={src} width={"100%"}/></div></PageCentered>)

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            <div>
                <section>
                    <h1>LOWER EAST SIDE ECOLOGY CENTER GOWANUS E-WASTE WAREHOUSE AND PROP LIBRARY</h1>
                    {oneImg(warehouse["IMG_1281"])}
                    {oneImg(warehouse["IMG_1283"])}
                    {oneImg(warehouse["IMG_1287"])}
                    {oneImg(warehouse["IMG_1286"])}
                    {oneImg(warehouse["IMG_1284"])}
                    {oneImg(warehouse["IMG_1290"])}
                    {oneImg(warehouse["IMG_1288"])}
                    {oneImg(warehouse["IMG_1289"])}
                </section>
                <section>
                    <h1>EAST RIVER PARK FIRE BOAT HOUSE</h1>

                    {oneImg(boathouse["IMG_1509"])}
                    {oneImg(boathouse["IMG_1511"])}
                    {oneImg(boathouse["IMG_1512"])}
                    {oneImg(boathouse["IMG_1514"])}
                </section>

            </div>
        </PageCentered>,
        document.getElementById("main")
    )
})
