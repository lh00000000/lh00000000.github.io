const s3prefix = `https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteimg/2019-10-08-volley2/`

const imgs = {
    pic0: s3prefix + "Screen%20Shot%202019-10-07%20at%202.45.11%20PM.png",
    pic1: s3prefix + "Screen%20Shot%202019-10-07%20at%202.45.19%20PM.png",
    pic2: s3prefix + "Screen%20Shot%202019-10-07%20at%202.45.27%20PM.png",
}

const randLeft = txt => {
    let randLeft = _.random(0, 80)
    return (
        <div
            style={{
                position: "relative",
                left: `${randLeft}vw`,
                width: "20vw",
                margin: 20
            }}
        >
            {txt}
        </div>
    )
}

const img = (imgkey, copy, width = 600) => (
    <div style={{ width }}>
        <img style={{ width: "100%" }} src={imgs[imgkey]} />
        <div>
            <p style={{ margin: 0 }}>{copy}</p>
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

const nbt = txts => txts.join("")
ReactDOM.render(
    <div>
        {img(
                "pic0",
                "refactored volley idea. all in subpatcher (left). outlets for inspecting staggered delays. right is keyboard and bpm interfaces i had from before."
            )}
        {img(
                "pic1",
                "inside of staggered delay"
            )}
        {img(
                "pic2",
                "inside modrange. wish i had _.range().flatMap"
            )}
        {
            list("trying to", [
                "be better about documenting daily",
                "doing something documentable daily",
                "documenting older things",
                ])
        }
    </div>,
    document.getElementById("main")
)
