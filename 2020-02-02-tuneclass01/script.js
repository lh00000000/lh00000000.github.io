
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


const assets = {"14": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/14.png", "00": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/00.png", "01": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/01.png", "15": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/15.png", "03": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/03.png", "17": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/17.png", "16": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/16.png", "02": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/02.png", "06": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/06.png", "12": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/12.png", "13": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/13.png", "07": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/07.png", "11": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/11.png", "05": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/05.png", "04": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/04.png", "10": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/10.png", "21": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/21.png", "09": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/09.png", "08": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/08.png", "20": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/20.png", "22": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/22.png", "23": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/23.png", "18": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/18.png", "19": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/tuneclass01/19.png"}
const nbt = txts => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
        <section id='intro' style={{width: "480px", margin: "auto"}}>
            <p>this is a blog post about my second lesson at the new york school of piano tuning service and repair. it's going to be mainly snips of my drawings because writing about this stuff was very time consuming and i'm already late with my other class work.</p>
            <p>basically today was when we went over the parts of an upright's action and basics of restringing on a grand....so it'd be a lot of description of mechanical parts for me to write out</p>
            <p>if you'd like textual captions for any of the images pls just email me lh00000000@gmail.com but if i dont' hear from anyone i'm just going to plan to do it someday in the far future</p>
        </section>
        <section style={{display: "flex", flexWrap: "wrap", }}>
            {
                _(assets).values().sort().map(src => <CaptionedImage src={src} width="400px"/>).value()

            }
        </section>
        </div>,
        document.getElementById("main")
    )
})
