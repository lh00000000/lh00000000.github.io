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
            <figure style={{ width: this.props.width, margin: 0, maxWidth: "100%"}}>
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

const pics = {
    IMG_1433:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1433.jpg",
    IMG_1432:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1432.jpg",
    IMG_1431:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1431.jpg",
    IMG_1435:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1435.jpg",
    "hashed":
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/59726615985__803A6BE9-58B8-4887-9DCC-AE9ADCC1176C.jpg",
    IMG_1434:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1434.jpg",
    IMG_1448:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steintour/IMG_1448.jpg"
}

const mappics = {"steinwaymap-03": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-03.png", "steinwaymap": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap.png", "steinwaymap-02": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-02.png", "steinwaymap-01": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-01.png", "steinwaymap-05": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-05.png", "steinwaymap-04": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-04.png", "steinwaymap-06": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-06.png", "steinwaymap-07": "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-20-steinmap/steinwaymap-07.png"}

const nbt = txts => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
        <div style={{paddingLeft: 600}}>
            <img style={{ width: "200vw", maxWidth: 1600}} src={mappics.steinwaymap} />
        </div>

        <div
            style={{
                backgroundColor: "rgba(250,250, 250, 0.9)",
                width: 500,
                position: "fixed",
                maxWidth: "95%",
                left: 0,
                top: 0,
                height: "100%",
                overflow: "scroll",
                padding: 8,
                zIndex: 999
            }}
        >
            <div>
                <h1>2019-12-19-steintour</h1>
                <i>note: on a desktop, the layout of this post has the text in the left column and on the right is a scrollable map i tried to make of what i remembered of the five floors we went to on the tour. if you're on mobile you probably wont't see it but you can just <a href={mappics.steinwaymap} target="_blank">click here to see the giant picture</a> directly if you want. i can't guarantee it will be useful or fun in any way. </i>
                <p>
                    a couple of weeks ago (2019-12-05), i was extremely lucky to
                    have gotten a spot on one of steinway's factory tours.
                </p>
                <p>

                    it was Quite a Doozy. i am still mad at myself for not
                    thinking to take my notebook out before they took my bag, as
                    phones ("equipment") were strictly prohibited.
                </p>
                <section>
                    <h2>office</h2>
                    <p>

                        the tour begins with perhaps a debriefing or some
                        background information in one of the office conference
                        rooms. i don't know because i was late after taking a
                        $60 lyft that i was told would get me there half an hour
                        early and cost $20. i was a bit flustered so i
                        immediately took the offer to put my coat and bag away
                        and joined the crowd. i did snap a forbidden pic of a
                        framed office autograph by regina spektor though.
                    </p>
                    <CaptionedImage src={pics.IMG_1432} caption="autographed picture of regina spektor hanging on office wall" />
                </section>
                <section>
                    <h2>selection area</h2>
                    <p>

                        the tour begins in an area that still has finished
                        floors. there are two "art" pianos and a bunch of rooms.
                        some with supplies. one, we later see to be a selection
                        room. one with lab-like double doors and safety warnings
                        in german. some office-like rooms. the walls have floor
                        to ceiling photographs of "steinway artists". one of the
                        hallways is the notorious fingerprint-"protected" piano
                        vault.
                    </p>
                    <p>

                        here the guide (i forgot his name but he seems to have
                        worked for steinway for quite a while) explained the
                        usual boilerplate for piano history. it's a harp.
                        christofori. harpsichords. pianos are better because
                        dynamics. etc etc.
                    </p>
                </section>
                <section>
                    <h2>loading area</h2>
                    <p>

                        the next stop was white room with unfinished floors. the
                        room had a row of different pianos, arranged by model
                        letter code. the leftmost was their largest "D" model
                        (it goes S &lt; M &lt; L. L is a grand, but then it goes
                        A &lt; B &lt; C &lt; D towards bigger and bigger
                        grands).
                    </p>
                    <p>

                        i don't remember what was said here but i think it was
                        something along the lines of the "99%" (i sometimes seem
                        98% thought) "of concert pianos choose steinway". i kind
                        of wish i had time to do a project on who this 1% is
                        that refuses the steinway hegemony. it really does seem
                        like a pain in the butt to be to try to have a career
                        bouncing between concert halls that are majority hooked
                        into the steinway maintenance and mutual marketing
                        system.
                    </p>
                    <p>

                        there was a little bit of talk posing the loud and
                        coarse cnc'd "furniture" bits as opposite of the
                        completely "hand"-crafted "instrument" parts. the
                        steinway factory architecturally structures the piano
                        making process in a way that enforces that the
                        phenomenological dichotomies of the instrument's
                        components are consistently industrially reproduced by
                        arranging the labor that materializes it in the same
                        way. we were told to put on our goggles after this.
                    </p>
                </section>
                <section>
                    <h2>01</h2>
                    <p>

                        after the garage room, we ended the actual "factory". as
                        in a lot of tools and rows of different pieces of wood
                        for pianos became visible. we walk to the end of a large
                        working space to an area of crates and one exposed
                        upright piano.
                    </p>
                    <p>

                        the guide points out the document affixed to the side of
                        the crate and explains it is a spreadsheet of every
                        craftsperson responsible for that instrument.
                    </p>
                    <p>

                        steinway produces 3000 grands a year. from what i
                        gathered, it is a 50/50 split between this queens
                        factory andtheir factory in hamburg.
                    </p>
                    <p>

                        it is claimed that new york is responsible for the
                        "innovation" of steinway uprights. only a few hundred
                        are made a year. the guide explains that uprights are
                        fundamentally inferior to grands because of their
                        rectangular bodies, as opposed to the mathematical
                        perfection of the curve of the grands, which are the
                        result of centuries of scientific observation towards
                        mirroring the sound as a natural phenomena.
                    </p>
                </section>
                <section>
                    <h2>-02</h2>
                    <p>

                        we walk down two floors to the area where veneers are
                        layered on the top cover piece, but didn't talk about
                        that yet. we walk down a hallway to a room that can fit
                        a second floor balcony. this is where long and thin plys
                        of supple wood are layered to form the curvy shell of
                        grands. there is a long table where the strips of wood
                        are projected onto and a line of workers collectively
                        handle it as it is fed down the line. the machine is
                        apparently flattening and covering the ply in glue? i am
                        not sure i remember
                    </p>
                    <p>

                        we walk over to see the clamp rigs after hearing the
                        story of how the layered wood technique was an
                        iconoclastic innovation in the piano building world, and
                        again how the curve is the result of following the
                        absolute limits of scientific knowledge on acoustics.
                    </p>
                    <p>

                        this is where i am told i cannot use my phone to take
                        notes because "the workers don't like equipment"
                    </p>
                    <p>

                        then we return to the area used to apply layers of
                        veneering wood to the top cover pieces of the piano. we
                        are told that the wood used for the cover is a wood
                        imported for its intense resistance to warping, but
                        because its not considered attractive and the cover
                        occupies a great deal of the visual real estate, extra
                        care is taken to apply a thin layer of some kind of more
                        traditional, or sometimes more exotic wood. the policy
                        is to only use a single tree in the construction of this
                        layer of veneer, so it is the task of the specialist to
                        carefully glue disparate pieces of wood from this
                        singular tree in a way where the grain is reconstructed
                        and made as seamless as possible.
                    </p>
                    <p>

                        on the topic of exoticism and americanisms, this is
                        where most european vs american piano market
                        observations are made in the form of the usual classical
                        music stereotypes. europeans are said to rarely express
                        market interest in audacious veneers, whereas in
                        america, they are apparently sought after and celebrated
                        to the point of extremity where this is where steinways
                        environmental sustainability policy is most expressed.
                        what is this policy? after carefully monitoring all of
                        their supplies (steinway has publicized the close
                        relationship its had with its keyboard and iron plate
                        manufactures over the years before eventually purchasing
                        them for more control in the 90s), if an exotic source
                        is deemed in danger of global exhaustion, steinway
                        responds by initially purchasing as much stock as
                        possible before beginning efforts to research future
                        developments in the resource, or begin planning for
                        discontinuing and replacing the offering in their
                        catalog.
                    </p>
                    <p>

                        also the topic of americanism frames the entire tour,
                        but this is where the topic of american aesthetics is
                        most discussed, which is interesting considering the
                        space is dedicated to the bizarre work of creating
                        illusions of continuity from depthless artefacts of
                        standardized international extraction. here, the guide
                        claims europeans to not only prefer conservatism in the
                        visual appearance, construction, and material, but also
                        musically. americans are posed as a foil, aggressively
                        demanding greater and greater advancements in
                        expressiveness, from timbric brilliance to hysteric
                        dynamic range. american musicianship is said to crave
                        constant innovation, from ease of action to achieve
                        faster music, to increased resiliency to be able to
                        perform in larger and larger venues. although the
                        individuality of each particular piano is stressed, a
                        major point of evidence to claims of personalized
                        individualized and particularized skilled manual labor,
                        steinway also makes claims of consistency and ubiquity,
                        where no matter what location or venue one of their
                        products is found, a luxurious level of quality can
                        simply be assumed.
                    </p>
                    <p>

                        this is where the story of steinway hall are reiterated
                        as a story of "customer is always right" business
                        strategy. steinway hall was a concert venue in midtown
                        created to showcase steinway pianos, but to also
                        establish partnerships with pianists. the guide
                        explained that steinway's legacy is the result of
                        constantly querying artists for technical requests,
                        following a social philosophy of the role of the artist
                        in leading society in general.
                    </p>
                    <p>

                        as it is almost impossible to talk about american
                        aesthetics without framing it as some sort of rebellion
                        or contrast with other international stereotypes, this
                        is also the part of the tour where china was mentioned
                        the most, as the object of steinway's future focus.
                        steinway piano sales have dropped in the western world
                        for many years, sometimes showcasing small recoveries,
                        but overall following a century long trend. "the future
                        is china" the guide explained, in terms of purchasers,
                        users, and manufacturers. the guide briefly touched on
                        the rise of wealth feeding growing demand for new pianos
                        in china, but also lamented the disappearance of music
                        and vocational programs in american education. the guide
                        painted a portrait of china as teaching droves of
                        children learning piano as part of the standard
                        curriculum, then progressing to vocational literacy in a
                        variety of advanced and traditional manufacturing. the
                        guide stressed the number of piano students but also the
                        difficulty of sourcing piano making labor in america,
                        where even rudimentary knowledge of vocational skills
                        that used to be assumed of the general population is
                        increasingly becoming rare. this is "steinway thinking
                        outside the box" says the guide.
                    </p>
                    <p>

                        as some machinery turns on, we move up a floor, and
                        midway down into a hallway, in front of the service
                        elevator, to hear more on the steinway theory of artists
                        as the source for social change. i wish i could remember
                        more. there was also the first of many mentions of
                        steinweg as story of american dream, with an emphasis on
                        the steinweg's preference for immigrant labor. also
                        foreshadowing later topics is the brief mention of a
                        question of gendered labor. the guide hypes up the
                        latter section of the tour where we observe the labor
                        behind creating the keys and action, which he points out
                        is a completely female workforce because it is
                        "intricate work that can only be done by nimble
                        fingers". this is contrasted with the supposedly more
                        laborious and hence masculine labor of "bending wood all
                        day" (i.e. the shells). "not going to see a woman
                        there"the guide says.
                    </p>
                </section>
                <section>
                    <h2>0N</h2>
                    <p>

                        another dichotomy of steinway manufacturing is the
                        "instrument" vs "furniture". pianos that do not exhibit
                        to steinway's ideal balance are said to be "piano-shaped
                        objects" according to the guide.
                    </p>
                    <p>

                        after walking through the racks used to store wood, each
                        labeled by the part of the piano they are intended fore,
                        the next section of the tour is a walk through of the
                        cnc'd based area for making all of the sections of the
                        piano deemed 'furniture' and thus acceptable to use
                        "technology" for. one example is the legs of the piano,
                        which are now made five at a time in parallel. there are
                        two room sized cncs that are said to have cost multiple
                        millions of dollars each. i am not sure what other parts
                        are created here, but there is equipment to hoist entire
                        piano frames up from the ground and rotate them. later
                        in the tour, the guide stresses that steinway has never
                        and will never make piano benches, as they strongly
                        dismiss it as furniture, not an instrument. i now
                        realize this is probably a direct criticism of other
                        piano manufacturers.
                    </p>
                </section>
                <section>
                    <h2>0N+1</h2>
                    <p>

                        i am now a little confused thinking about the order of
                        the next two floors we went to. by now i was pretty
                        hungry and really wished i had one of my notebooks on me
                        and had sneaked a shot of coffee or something. but i
                        think next we went up a different stairway to a floor
                        where a large scale model of the action steinway
                        currently uses (i should know this but i'm not sure if
                        the action is the same for all of the models. when i
                        asked, i was told "every part of a steinway does is
                        unique and handmade to perfection.").
                    </p>
                    <p>

                        we waited outside a small office. the guide returned
                        with a box of hammers for us to take as a souvenir,
                        which made me very happy.
                    </p>
                    <CaptionedImage src={pics.IMG_1448} caption="lone piano hammer" />
                    <p>

                        we walked by the equipment used to clamp the felt into
                        the hammers and were given a chance to touch one of the
                        long contiguous pieces of felt used for a single
                        keyboard action. the density and thickness varies along
                        the keyboard based on pitch.
                    </p>
                    <p>

                        the "delicate" and "intricate" labor of creating the
                        actions was indeed an completely female workforce. this
                        was also the most parallelized section of the process.
                        we only spent a few seconds here before going to the
                        back area used to stage pianos before shipping. we stood
                        by a piano that was scheduled to go through a repair and
                        refurbishing job. the guide said that the ownership of
                        majority of steinway pianos, allowing for maintenance to
                        be followed.
                    </p>
                    <p>

                        this is where steinway's spirio product is also
                        mentioned. the third "steinway out-of-the-box
                        thinking"mention. steinway's focus seems to be
                        differentiating itself from other player piano offerings
                        with a campaign of cataloguing and creating digitized
                        versions of famous performances, positing this modern
                        piano as a piece of equipment for recreating historic
                        events, rather than a tool for an ideal owner to
                        cultivate artistry. the online marketing of the spirio
                        stresses that it is the first player piano to prioritize
                        high resolution playback, presenting itself as the
                        musical equivalent of "the megapixel revolution". i'd be
                        interested to find out how they are making these digital
                        versions of performances from audio recordings,
                        especially how they do so in order to justify that its a
                        "high resolution" recreation.
                    </p>
                    <p>

                        steinway out-of-the-box thinking is the segue into
                        speaking about steinway village, steinway's company town
                        project. the guide makes a case for steinway as model
                        american citizenship, responding to movements labor
                        organizations of lower manhattan by purchasing political
                        escape to avoid the threat of regulation. at one point
                        in time, apparently this town had 5000 residents, a
                        sizable library later (more on this later), a streetcar
                        line, a bus line, and a ferry system between astoria and
                        brooklyn. other places document that steinway was able
                        to add after-work surveillance and evictions to its
                        union busting efforts.
                    </p>
                    <p>

                        steinway's operation of its streetcar service led them
                        being asked by a nearby municipality to take over
                        operations for their streetcar service as well. the
                        guide points to astoria's high concentration of german
                        cabinetry craftsman and mercedes' personal relationship
                        with steinway inspiring their attempt to start
                        manufacturing in new york as evidence to the large role
                        steinway as a company has allegedly had in building new
                        york. apparently steinway engineers made several
                        proposals for the design of the queensboro bridge, which
                        allegedly improved their reputation amongst city
                        affairs, although i'm not really sure how to go about
                        checking if any of these engineering ideas were
                        approved.
                    </p>
                    <p>

                        i snuck a picture of the action model on the way out of
                        this floor. will i be banned by steinway if they find
                        this blogpost?
                    </p>
                    <CaptionedImage src={pics.IMG_1433} caption="model of action" />
                </section>
                <section>
                    <h2>0N+3</h2>
                    <p>

                        we go up two floors to the area where the iron frames
                        are placed inside of the piano. this is done by a single
                        worker per station, each station equipped with an
                        interesting overhead hoisting system. i can't exactly
                        remember but either the guide said that if the entire
                        process was outsourced and only one step of the process
                        could be done in-house, it would be this installation
                        and calibration process. or maybe that when steinway and
                        sons was really a steinway and a bunch of his sons
                        companies as independent companies making parts of
                        pianos, this is the part that Father Steinway would
                        insist on doing himself. or when the process was
                        factorized, this is the step that steinway continued to
                        do single handedly for the longest. either way, it makes
                        sense that if this step is botched, the piano is
                        essentially a bunch of pistons whacking a loose or
                        crooked harp. it's also the step getting the harp in
                        contact with the soundboard / resonating body of the
                        piano.
                    </p>
                    <p>

                        we walked a little more towards the back of this floor
                        where apparently the soundboards are sanded into their
                        well-marketed diaphramic shape using a sanding machine
                        with a sanding bed that looked about 15 feet wide.
                    </p>
                </section>
                <section>
                    <h2>0N+2</h2>
                    <p>

                        we go back down to the area where the keyboard action is
                        installed. we stand by a piano with its action exposed
                        and told about the immense amount of labor spent
                        calibrating the action in addition to the expected
                        process of tuning, although this tour session did not
                        showcase this (from what i could find online, this is
                        sometimes shown on tours). we are also told about the
                        machine used to "break in" the action, pressing every
                        key thousands of times before it is ready. sad i didn't
                        get to see this
                    </p>
                    <p>

                        we take a walk around this floor, where, among other
                        things, stringing is done. someone installing a spirio
                        system on to a otherwise normal model B or M.
                    </p>
                    <p>
                        then we get our one allotted photo of the tour, of a
                        section of shells, where we are told that we will have
                        to delete the photo if any employee, or curiously,
                        equipment is in frame.
                    </p>
                    <CaptionedImage src={pics.IMG_1434} caption="a bunch of empty frames of pianos" />

                </section>
                <section>
                    <p>
                        we go down a set of stairs and end up in the first shop
                        room we saw somehow. maybe it was the same stairwell,
                        but it really didn't feel so.
                    </p>
                    <p>
                        we go to the selection room. one and only one of the
                        tour attendees is allowed to play a few of the pianos.
                    </p>
                                    <CaptionedImage src={pics.IMG_1435} caption="steinway selection room. featuring a bunch of tour attendees standing around. one person playing a piano while standing." />
                    <p>
                        we get the full story on steinweg here. living in
                        impoverished house when a lighting strike killed both of
                        his parents at the same time and also deafened him.
                        german social services led him to carpentry vocational
                        training. the guide says that latter, records showed
                        that he passed every evaluation with full scores and
                        graduated the multi-year program in one or so.
                    </p>
                    <p>
                        the guide continues with the usual story about steinweg
                        then emigrating to new york city, taking the sons with
                        him
                    </p>
                    <p>
                        the guide brings up the "kitchen piano", the legend that
                        steinweg built his first pianos in the kitchen. the
                        legend is disputed by some, but the guide says
                    </p>
                    <blockquote>
                        <i>
                            personally, i did think he did those pianos in his
                            kitchen. you know why? because they were socialist.
                            and socialists didn't like this deaf guy from
                            nowhere excelling at a craft their families had
                            devoted their lives to. so they didn't want him in
                            the guild. luckily, there was america, where if you
                            work hard...
                        </i>
                    </blockquote>
                    <p>
                        the guide then lists more of the features of steinway
                        villages, from the housing, fire house, school, post
                        office, amusement park, pool, german beer garden, as
                        well as the previously mentioned streetcar, trolleys,
                        and ferries. the library amassed a large enough
                        collection that the guide claims it was the basis for
                        the nypl performing arts library, and today the building
                        still exists as a branch of the nypl. the guide stresses
                        the importance of this, since upon examining the
                        historical archives of steinway, they found that
                        steinweg signed everything with a simple "X", leading to
                        research campaignj that concluded died illiterate,
                        requiring family to translate all legal documents orally
                        in german. steinweg and the steinway company are posited
                        as emblematic of the essence of the american promise,
                        from poor immigrant to monopolistic industrial emperor,
                        via nothing more than a resistance towards the
                        collectivism and the lack of work ethic it disguises.
                    </p>
                    <p>
                        on the way out, you also get a really nice water bottle
                        with the steinway logo on it.
                    </p>
                    <CaptionedImage src={pics.hashed} caption="steinway branded water bottle closeup lol" />
                                    <CaptionedImage src={pics.IMG_1431} caption="outside parking lot of steinway factory and office" />

                </section>
            </div>
        </div>

        </div>,
        document.getElementById("main")
    )
})
