const assets = {
    IMG_1685:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1685.jpg",
    image0:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/image0.jpeg",
    IMG_1686:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1686.jpg",
    IMG_1679:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1679.jpg",
    IMG_1683:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1683.jpg",
    IMG_1682:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1682.jpg",
    image1:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/image1.jpeg",
    IMG_1677:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1677.jpg",
    IMG_1688:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/relevanceoftrash/IMG_1688.jpg",
}

const DEFAULT_COL_WIDTH = 600

class CaptionedImage extends React.Component {
    constructor(props) {
        props.width = props.width || "auto"
        super(props)
    }
    rightStyle() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: this.props.width,
                }}
            >
                <div>
                    <img
                        style={{
                            width: this.props.width,
                        }}
                        src={src}
                    />
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
                <img
                    style={{
                        width: this.props.width,
                    }}
                    src={this.props.src}
                />
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
        let innerItems = this.props.items.map((item) => (
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
            justifyContent: "center",
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class HugSides extends React.Component {
    render() {
        let style = {
            display: "flex",
            justifyContent: "space-between",
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
            height: "100%",
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class Fullscreen extends React.Component {
    render() {
        let style = {
            width: "100wh",
            height: "100vh",
        }
        return <div style={style}>{this.props.children}</div>
    }
}

const emilypics = [
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5648.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5566.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5604.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5605.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5598.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5559.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5607.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5606.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5616.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5602.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5603.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5549.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5615.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5562.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5553.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5625.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5618.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5578.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5632.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5626.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5551.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5545.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5579.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5637.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5568.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5608.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5609.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5621.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5557.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5646.JPG",
    // "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5647.JPG",
    "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-02-todo-7_LUMING_HANNAH/8W0B5643.JPG",
]

const nbt = (txts) => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // flexWrap: "wrap"
            }}
        >
            <section style={{ width: 600 }}>
                <h1>2020-02-03-relevanceoftrash</h1>
                <p>
                    workshop for{" "}
                    <a href="https://techforsocialgood.rocks/">
                        tech for social good day{" "}
                    </a>
                </p>
                <p>
                    collab w{" "}
                    <a href="https://www.hannahtardie.com/">hannah tardie</a>
                </p>
                <p>
                    focus: desoldering practice + lecture on ewaste, focusing on
                    the waste of production of idealized components, ending with
                    traditional narrative of exported consumer electronics
                </p>
            </section>

            <div>
                <h2
                    style={{
                        position: "sticky",
                        top: 0,
                        padding: 8,
                        backgroundColor: "white",
                    }}
                >
                    slides:
                </h2>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQT6Dn0_e9-NnZN8uFKfxli2qEXmIYsVhWk7EEaezSK1jqcS8wJNPvZBbEZz_I6PL_K2WSD40u6QhKH/embed?start=false&loop=false&delayms=3000"
                    frameborder="0"
                    style={{
                        width: "90vw",
                        height: "70vh",
                    }}
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                />
            </div>

            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <p
                    style={{
                        width: "200px",
                        textAlign: "center",
                        position: "sticky",
                        top: 0,
                        backgroundColor: "white",
                        padding: 8,
                    }}
                >
                    photos by emily lin:
                </p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    {_(emilypics)
                        .shuffle()
                        .values()
                        .map((s) => (
                            <div
                                style={_.sample([
                                    {
                                        position: "sticky",
                                        top: `${_.random(-4, 4) * 100}px`,
                                        zIndex: -9999,
                                    },
                                    {},
                                ])}
                            >
                                <CaptionedImage src={s} width={"32vw"} />
                            </div>
                        ))}
                </div>
            </section>

            <section
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <p
                    style={{
                        position: "sticky",
                        top: 0,
                        padding: 8,
                        backgroundColor: "white",
                    }}
                >
                    photos by hannah tardie (except three bad ones by me):
                </p>
                {_(assets)
                    .values()
                    .map((s) => (
                        <CaptionedImage src={s} width="49vw" />
                    ))}
            </section>
        </div>,
        document.getElementById("main")
    )
})
