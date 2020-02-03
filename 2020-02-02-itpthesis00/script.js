
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

const assets = {
    mindmap:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/itpthesis00/mindmap.png"
}
const nbt = txts => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            <article>
                <h1>itpthesis00</h1>
                <section id="intro">
                    <p>
                        this is a blog post correlated with my attendance of the
                        first session of thesis advisement of my thesis group of
                        the nyu itp mps masters program.
                    </p>
                    <p>in class proceedings consisted of</p>
                    <List items={[
                                        "administrative matters such as weekly schedule, deadlines, and expectations",
                                        "a mind mapping exercise intended to produce three speculative designs and five research questions for a hypothetical outsider"
                                        ] }/>
                </section>
                <section id="designs">
                    <h2>three speculative designs</h2>
                    <p>these are three possible designs i previously considered as alternate ways to achieve what i think i'm attempting to achieve with this thesis project</p>
                    <List items={["b2b startup data center of refurbished player pianos with an 'engineering blog' featuring texts developed using oral history documents of piano tuners (and restorers and movers) (this seems the most direct opinion to me)",
                                        "decentralized remotely activated batch-based player piano network where production of recorded audio is said to be 'compensated' using a rhetorical cryptocurrency called 'pianocoin'",
                                        "uber-like aesthetic mobile application for requesting the recording of piano music in the form of sending enough information to me personally to render a tradition paper-based piano score that will then use to perform the traditional contracted-performer freelance-composer relationship by claiming creative authorship of the score and scouting a pianist per piece to record a performance of the score to send to the 'app user'"
                                        ]}/>
                </section>
                <section id="responses">
                    <h2>quick answers</h2>
                    <p>
                        we were also asked to generate five questions to ask a hypothetical outsider. my questions were:
                    </p>
                    <List items={[
                        "how is a piano different than a computer?",
                        "how is a computer different than a manager?",
                        "how is a manager different than a machine?",
                        "how is a machine different than a plan?",
                        "how is a plan different than a philosophy?"
                        ]}/>

                    <p>
                        we were asked to ask these five questions to a stranger
                        on the street. i cheated and asked five strangers my
                        first question: "how is a piano different than a
                        computer?"
                    </p>
                    <List
                        items={[
                            "the feel",
                            "the piano has more keys",
                            "the piano has a soul",
                            "the piano is an instrument and instruments can only do one thing. a computer can do anything",
                            "the piano only has audio output. the computer has both visual and audio output. beyond listening to, or looking inside of, a piano, there is nothing.",
                            "piano and computers both have buttons, but the buttons of a piano trigger something analog. computer buttons trigger data. it doesn’t have a timbre of its own."
                        ]}
                    />
                </section>
                <section id="shortstory">
                    <h2>a short....................story?????</h2>
                    <p>another assignment for this week was to write a "Write a short story that forecasts future interactions or speculative fictions.". unfortunately, i had to leave early in a futile attempt to get to my piano tuning class on time so i don't know if i did this right.</p>
                    <section id="chatlog">
                    <p class="speakera"><b>hvoisin:</b> we don't have the bandwidth to be working on all of these integrations with the pianists. we can't scale this way</p>
                    <p class="speakerb"><b>shordge:</b> i agree</p>
                    <p class="speakera"><b>hvoisin:</b> is there some way we work out a deal with someone to get dataset offline and use that for a while?</p>
                    <p class="speakerb"><b>shordge:</b> a dataset of acoustic piano music?</p>
                    <p class="speakera"><b>hvoisin:</b> yeah</p>
                    <p class="speakerb"><b>shordge:</b> like stock music?</p>
                    <p class="speakera"><b>hvoisin:</b> yes</p>
                    <p class="speakerb"><b>shordge:</b> it wouldn't make sense though it wouldn't be related to any of the ad segments we're generating</p>
                    <p class="speakera"><b>hvoisin:</b> oh yeah</p>
                    <p class="speakera"><b>hvoisin:</b> damnit lol i forgot</p>
                    <p class="speakera"><b>hvoisin:</b> "dynamic" ad targeting</p>
                    <p class="speakerb"><b>shordge:</b> maybe we can use those player piano things</p>
                    <p class="speakera"><b>hvoisin:</b> aren't those more expensive than pianists thought</p>
                    <p class="speakera"><b>hvoisin:</b> though</p>
                    <p class="speakerb"><b>shordge:</b> we could just get a couple, like a cluster</p>
                    <p class="speakera"><b>hvoisin:</b> hm idk seems hard</p>
                    <p class="speakerb"><b>shordge:</b> like midi and batch jobs? is that hard?</p>
                    <p class="speakera"><b>hvoisin:</b> yes i guess it's not that hard but it will take more time to build that and integrate it with our current job ticket system</p>
                    <p class="speakerb"><b>shordge:</b> maybe its worth it in the long run though</p>
                    <p class="speakera"><b>hvoisin:</b> wait</p>
                    <p class="speakera"><b>hvoisin:</b> oh there's another company that does this i think</p>
                    <p class="speakera"><b>hvoisin:</b> loserio.cloud</p>
                    <p class="speakerb"><b>shordge:</b> oh of course</p>
                    <p class="speakera"><b>hvoisin:</b> oh nice </p>
                    <p class="speakera"><b>hvoisin:</b> they have node libraries</p>
                    <p class="speakerb"><b>shordge:</b> it's an npm package?</p>
                    <p class="speakera"><b>hvoisin:</b> no it's just an api</p>
                    <p class="speakera"><b>hvoisin:</b> like twilio</p>
                    <p class="speakerb"><b>shordge:</b> oh thank god</p>
                    <p class="speakerb"><b>shordge:</b> wait is it expensive?</p>
                    <p class="speakera"><b>hvoisin:</b> hm i don't really get the pricing yet but i don't think so</p>
                    <p class="speakera"><b>hvoisin:</b> wait what is a sostenuto pedal</p>
                    <p class="speakera"><b>hvoisin:</b> oh nvm i don't think we'll need that</p>
                    <p class="speakerb"><b>shordge:</b> i think its like making the notes go slower</p>
                    <p class="speakera"><b>hvoisin:</b> yeah it seems complicated </p>
                    <p class="speakera"><b>hvoisin:</b> i dont' think we use that </p>
                    <p class="speakera"><b>hvoisin:</b> i'll check tho</p>
                    <p class="speakerb"><b>shordge:</b> yea i don't think so eitehr</p>
                    <p class="speakerb"><b>shordge:</b> yes thanks</p>
                    <p class="speakerb"><b>shordge:</b> lmao must be cheaper than fuckign hiring pianists all the time</p>
                    <p class="speakera"><b>hvoisin:</b> should i sign up for a demo account</p>
                    <p class="speakerb"><b>shordge:</b> yeah</p>
                    <p class="speakerb"><b>shordge:</b> try it</p>
                    <p class="speakerb"><b>shordge:</b> does it look fucked up to use?</p>
                    <p class="speakera"><b>hvoisin:</b> no seems p straightforward idk</p>
                    <p class="speakerb"><b>shordge:</b> wow there's an api for every thing lamo</p>
                    <p class="speakerb"><b>shordge:</b> yes let me know how it is</p>
                    <p class="speakerb"><b>shordge:</b> spend the next day or two </p>
                    <p class="speakerb"><b>shordge:</b> seems like just what we need</p>
                    <p class="speakera"><b>hvoisin:</b> yeah seem s good</p>
                    <p class="speakera"><b>hvoisin:</b> ok i'll try ti out </p>
                    <p class="speakera"><b>hvoisin:</b> and let you know</p>
                    <p class="speakera"><b>hvoisin:</b> fingers crossed !</p>
                    <p class="speakerb"><b>shordge:</b> awesome </p>
                    </section>
                </section>
                <section id="medialinks">
                    <h2>media links</h2>
                    <p>we were asked to create a presentation of a selection of our previous work at itp, however we did not present these to each other in class, which was a relief because making this presentation brought me feel Great Shame. it is embedded below for posterity.</p>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTYGbobRWmQEGi4NtEH4V4AkNq3Fp6R9x3mpQkBnVF9sP7Rs2ooLHAvfUUiWc85n2BOspasyGcvYxBA/embed?start=false&loop=false&delayms=30000" frameborder="0" width="100%" height="300px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p>below is a scan of the mindmap exercise mentioned above</p>
                    <CaptionedImage src={assets.mindmap} caption="a mindmap with the word encapsulation in the middle" width="100%"/>
                    <p>i had to leave the session early to run to my piano tuning class. because the piano tuning and repair world seems to exist mostly via paper media than online, i am trying to document as much as i can via blog posts. <a href="http://luminghao.com/2020-02-02-tuneclass00/">here is a blog post about the first week (2020-01-21 a week prior to this thesis session)</a> and <a href="http://luminghao.com/2020-02-02-tuneclass01/">here is a blog post about the class i went to about this thesis section (2020-01-28)</a></p>

                </section>
            </article>
        </PageCentered>,
        document.getElementById("main")
    )
})
