const imgs = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
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

const nbt = txts => txts.join("")
const assets = {
    "0":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/B12DF246-CE57-4FB6-A5F0-103C9319F695.png",
    "1":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/index.html",
    "2":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/Screen-Shot-2019-04-20-at-3.52.03-AM.png",
    "3":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/Screen-Shot-2019-04-20-at-3.49.47-AM.png",
    "4":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/287DF4E6-16F8-4979-9D76-DA68376524DF.png",
    "5":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/Photo-Apr-18,-2019-at-82636-PM.jpg",
    "6":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/C369F89D-2B73-453B-B55D-715CC8DA13C7.png",
    "7":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/script.js",
    "8":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/C54F73F3-4C79-46D5-BC19-F204D9FA20C2.png",
    "9":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/style.css",
    "10":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/3F8F3AF9-52CF-4BEB-9EBA-331BE02F4843.png",
    "11":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/6F155DBE-9B49-4625-8F4A-A14414C79842.png",
    "12":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/Screen-Shot-2019-04-20-at-4.04.14-AM.png",
    "13":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/D98ED685-C8F1-42A0-BEAA-0A3C2572A21A.png",
    "14":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-11-29-homehard-letter/Screen-Shot-2019-04-20-at-3.43.21-AM.png"
}

let moreassets = {
    "0":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6840.jpg",
    "1":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6853.jpg",
    "2":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6829.jpg",
    "3":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6857.MOV",
    "4":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6838.jpg",
    "5":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-02-more-homehardletter/IMG_6858.jpg"
}

let evenmoreassets = {
    headphones:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/headphones.jpg",
    deskmess:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/deskmess.jpg",
    copperbraid:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/copperbraid.jpg",
    myblackink:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/myblackink.jpg",
    hotplate:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/hotplate.jpg",
    breadboard:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/breadboard.jpg",
    irlbom:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/irlbom.jpg",
    polishedtip:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/moremoreletter/polishedtip.jpg",
    "sixsofar.jpg":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/manyboards/sixsofar.jpg",
    "onsign.jpg":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/manyboards/onsign.jpg",
    "bare.jpg":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/manyboards/bare.jpg",
    "somecaps.jpg":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/manyboards/somecaps.jpg"
}

let mov = (src, width = 320, height = 240, fileextension = "mp4") => (
    <video width={width} height={height} controls>
        <source src={src} type={`video/${fileextension}`} />
    </video>
)

const backgroundSection = (
    <section>
        <h1>homehard-letter: first pcb struggles</h1>
        <div>
            {imgCap(
                moreassets["5"],
                "all of the failures + one working board",
                600
            )}
        </div>
        <p>
            late post but i wanted to get these pics out of my notes on an
            assignment i did for my "homemade hardware" class, which was to make
            one letter of a sign that involved some kind of interaction. my
            interaction was basically a clap light, where the microphone was a
            headphone speaker. i spent a ton of time on it. i stayed up two
            nights doing it. i made twenty boards before i got one that was
            working. wanted to make this post to make sure i remember my
            mistakes
        </p>
        <ul>
            <li>
                make traces as large as possible. go for a goopy aesthetic. i
                think 99% of my problems (disconnections, high error rate
                connections, burning off copper) was because i was using 3mil
                wide routes instead of the recommened 0.3 mm (11.8mm)
            </li>
            <li>
                make pads. i didn't know better and tried to do weird right
                angle placements for my resistors. i really didn't that what
                this meant in practice was that the miniscle sliding of
                resistors with a hot air rework gun would make the resistors
                slide off the very thin leads and that the only way i would have
                succeeded was to put exactly enough solder to touch the each
                side of a lead of a resistor so it was balanced enough to not
                slip off my ridiculously thin routes.
            </li>
            <li>
                test leads. i was going for maximum minimality. why? i don't
                know. i knew where to touch with my multimeter to test what i
                thought to be three modules, the clap amplification, the attiny
                toggle, and my led array. but it was a complete waste of time to
                search and place the pins of my multimeter all the time.
            </li>
            <li>
                decoupling capacitor. still need some work calculating how much
                capacitance i need, but in the end, my circuit didn't work in
                the class sign because power was too noisy (it was working with
                a clean power supply).
            </li>
            <li>
                my circuit depended on the clock of the adc for an attiny (fast
                high voltage spikes). i was okay with it "sometimes" working,
                which i think came from my lax standards for code, where
                "sometimes" at least logs when it was a "sometime". i did ask
                for signal processing help but was advised to simply go straight
                into an attiny analog pin, doing all of the logic there, which i
                didn't find to work.{" "}
            </li>
            <li>
                solder masks are how the world works. our truncated class
                session didn't go over solder masks but i really regret not
                trying it myself. all of the advice on diy smt soldering is
                dependent on solder masks to help out. i needed all the help i
                could get as a beginner.{" "}
            </li>
            <li>
                ask for help / or at least a checkup. i actually missed the
                class where this material was review, so i was only going off
                guesses from the eagle software and guides on using the
                othermill.{" "}
            </li>
        </ul>
        <div>
            {imgCap(moreassets["2"], "finally working version", 600)}
            {mov(moreassets["3"], 400, 640)}
        </div>
    </section>
)
const bomSection = (
    <section>
        <h4>bom</h4>
        <ul>
            <li>in headers</li>
            <li>out header</li>
            <li>headers for mic</li>
            <li>attiny socket</li>
            <li>attiny</li>
            <li>lm386 socket</li>
            <li>lm386</li>
            <li>2222a</li>
            <li>15 LEDs</li>
        </ul>

        <p>capacitors</p>
        <ul>
            <li>0.1uF (supply attiny)</li>
            <li>0.1uF (supply mic to +)</li>
            <li>10uF (smoothing bypass lm386)</li>
            <li>10 uF (lm386 gain)</li>
            <li>100uF (led supply)</li>
        </ul>
        <p>resistors</p>
        <ul>
            <li>(15) 220s</li>
            <li>220 ohm (for transistor)</li>
            <li>20k (5v to mic)</li>
            <li>3k (right before + of lm386)</li>
            <li>10k (for attiny reset)</li>
        </ul>
    </section>
)

const millingSection = (
    <section>
        <h4>milling</h4>
        <img src={assets["10"]} width={600} />
        {imgRCap(moreassets["4"], "milling two at a time")}
        {imgRCap(
            evenmoreassets.polishedtip,
            "i think i broke the tip of my endmill"
        )}
    </section>
)
const ideationSection = (
    <section>
        <h4>ideation</h4>

        {imgCap(assets["5"], "basic sketch")}
        {imgCap(assets["11"], "sche")}
        {imgCap(assets["6"], "board design")}
        {imgCap(
            evenmoreassets.headphones,
            "used these headphones from freestore as first mics."
        )}
        {imgCap(evenmoreassets.deskmess, "osc to track peaks")}
        {imgCap(evenmoreassets.breadboard, "knob for adjusting sensitivity")}
    </section>
)

const iterationSection = (
    <section>
        <h4>iteration</h4>
        {imgCap(evenmoreassets["somecaps.jpg"], "earlier gross version")}
        {imgCap(moreassets["1"], "later gross version")}
        {imgCap(evenmoreassets["bare.jpg"], "one bare version")}
        {imgCap(evenmoreassets["sixsofar.jpg"], "many failures")}
        {imgCap(evenmoreassets["onsign.jpg"], "finally put on sign board")}
    </section>
)
const eagleLibSection = (
    <section>
        <p>
            good practice adding lm386 to eagle library. sorta. put the 8pin dip
            version by stealing footprint from attiny85 8pin dip item from
            library provided by andy siegler.
        </p>
        <img src={assets["0"]} width={200} />
        <img src={assets["2"]} width={200} />
        <img src={assets["3"]} width={200} />
        <img src={assets["4"]} width={200} />
        <img src={assets["16"]} width={200} id="lh-linear" />
        <img src={assets["18"]} width={200} />
        <img src={assets["12"]} width={200} id="lib" />
        <img src={assets["17"]} width={200} />
        <img src={assets["14"]} width={600} />
    </section>
)

const solderingSection = (
    <section>
        {imgCap(
            evenmoreassets.myblackink,
            "still entertained a random person used my india ink test to improve the PnP visibility"
        )}
        {imgCap(
            evenmoreassets.copperbraid,
            "copper braid as attempt to cleanup / save the dead"
        )}
        {imgCap(evenmoreassets.hotplate, "hot plate and hot air gun method")}
        {imgCap(
            evenmoreassets.irlbom,
            "should have taken the paper bom idea more seriously in the beginining. now i always do this."
        )}
        {imgCap(moreassets["0"], "testing leds")}
    </section>
)

const sections = {
    backgroundSection: backgroundSection,
    bomSection: bomSection,
    ideationSection: ideationSection,
    iterationSection: iterationSection,
    millingSection: millingSection,
    solderingSection: solderingSection,
    eagleLibSection: eagleLibSection
}

$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
                {sections.backgroundSection}
                {sections.bomSection}
                {sections.ideationSection}
                {sections.solderingSection}
                {sections.millingSection}
                {sections.iterationSection}
                {sections.eagleLibSection}
            </div>
        </div>,
        document.getElementById("main")
    )
})
