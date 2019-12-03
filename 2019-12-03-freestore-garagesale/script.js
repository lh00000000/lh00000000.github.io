const assets = {
    whatthecodessay:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/whatthecodessay.png",
    cleanedperf:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/cleanedperf.jpg",
    wastedbraid:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/wastedbraid.jpg",
    afterangle:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/afterangle.jpg",
    soldersucker:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/soldersucker.jpg",
    bagpile:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/bagpile.jpg",
    onepackage:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/onepackage.jpg",
    aftertable:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/aftertable.jpg",
    oneattiny:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/oneattiny.jpg",
    afterthingstaken:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/afterthingstaken.jpg",
    aftertopdown:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/aftertopdown.jpg",
    foundbreakout:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/foundbreakout.jpg",
    aftermorethingstaken:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/aftermorethingstaken.jpg",
    freed8pin:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/freed8pin.jpg",
    qrcodes:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/qrcodes.jpg",
    aftershowfeedback:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-freestore-garagesale/aftershowfeedback.jpg"
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
            height: "100vh"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

const nbt = txts => txts.join("")


const colWidth = 1000
const miniPost = (title, txt, imgs) => (
    <section style={{ width: colWidth }}>
        <h2>{title}</h2>
        <p>{txt}</p>
        <div
            style={{
                diplay: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                width: "100%",
                alignItems: "center"
            }}
        >
            {imgs.map(imgSrc => (
                <img
                    key={`${title}${imgSrc}`}
                    src={imgSrc}
                    width={colWidth / 3}
                />
            ))}
        </div>
    </section>
)

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            {miniPost("freestore at the garagesale", "this is an in-progress post about a one-night project i did back in may 2019 that nobody asked for where i attempted to represent the itp freestore in the itp garage sale like a commercial electronics store by individually packaging single components with specific documentation for each.", [
                assets.whatthecodessay,
                assets.cleanedperf,
                assets.wastedbraid,
                assets.afterangle,
                assets.soldersucker,
                assets.bagpile,
                assets.onepackage,
                assets.aftertable,
                assets.oneattiny,
                assets.afterthingstaken,
                assets.aftertopdown,
                assets.foundbreakout,
                assets.aftermorethingstaken,
                assets.freed8pin,
                assets.qrcodes,
                assets.aftershowfeedback
            ])}
        </PageCentered>,
        document.getElementById("main")
    )
})
