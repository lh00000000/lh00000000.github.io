const s3prefix = `https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteimg/2019-10-01-maxq/`

const imgs = {
    one: s3prefix + "01.png"
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
        {randLeft(
            "some kind of impeteus to find the idea of some kind of daily practice"
        )}
        {randLeft(
            "replicatable labor in a challenge against a world of reproduced labor"
        )}
        {randLeft("is a documentary blog just another picture collage")}
        {randLeft("extraneous copy")}
        {randLeft(
            img(
                "one",
                "given a signal of two sine waves an octave apart, would using a crossover filter to separate the sines, then recombining in max msp result in the original composite signal? yes"
            )
        )}
        {randLeft(
            list("other recent max experiments", [
                nbt([
                    "volley : transient clicks to attain frequency, rotating amongst multiple speakers.",
                    "if a jackhammer mechanism were to hit a table at a specifc spot on a table, the table",
                    "would emit a frequency right?",
                    "if the point of the jackhammer were to be shared across 4 jackhammers pointed at the same point",
                    "the same should happen right?",
                    "if the group of jackhammers were to spread apart, at what point would pitch end"
                ]),
                nbt([
                    "buzz - static onset, variable loop end for pitched to looped sample gradient"
                ])
            ])
        )}
        {randLeft(
            list("other late blog posts", [
                "sunadd",
                "tabletop cnc ending",
                "custom solar panels",
                "black food experiments",
                "wwcd buss documentation",
                "liao texture"
            ])
        )}
        {randLeft(
            list("reasons for low quality post", [
                "behind on documentation",
                "held back from new experiments bc lack of documentation interia",
                "finding daily practice created non-committal meltdown",
                "recent time of a lot of sound experimentation. hard to archive without documenting media like screenshots and process instructions",
                "always low quality"
            ])
        )}
    </div>,
    document.getElementById("main")
)
