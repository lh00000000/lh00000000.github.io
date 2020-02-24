(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])


(defn byline [title author href]
  [:p
   [:span "next, we were asked to read \""]
   [:span [:a {:href href} title]]
   [:span " by "]
   [:span [:a {:href href} author]]])

(defn idsection
  [title
   & children]
  (let [spaceless
        (string/join "" (filter (fn [c] (not= c " ")) (seq title)))]
    [:section {:id spaceless} [:h3 title]
     children]))

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-24-biodes03"]

    [:section
     [:h2 "readings"]
     [:p
      [:span "these are reactions to the last two weeks of readings referenced in stefani bardin’s "]
      [:span [:a {:href "http://www.stefanibardin.net/biodesign2020/"} "“biodesigning the future of food”"]]
      [:span " class. i did not post my initial reactions to the previous weeks readings because i found them slightly difficult to accept, but i am posting now for posterity and to aid my process for my work in this class. i initially proposed a traditional research paper attempting look for origins of western/euro industrial ideology in early instances of agricultural technology, but i guess the class does say “biodesign” in it and i eventually gave up trying to figure out a design-y way to approach presenting the research, being already intimidated with the reach and depth of previous literature out there on such a vague and ill-defined topic."]]
     [:p "in class, we briefly contrasted the advantages of diagrammatic graphic design (i.e. infographics) over the traditional institutional methods of publishing scientific research (i.e. papers in journals difficult to access without university connections, usually dense with industry-specific language) . the greatest weakness (i interpreted the class discussion to posit) was that the specialized training and professional resources required to interpret scientific papers was too rare, leading most scientific research to reach the public through sensationalist-focused internet media forms, aka “clickbait”. Clickbait, in the form of “dramatic headlines” and/or video content produced by  high-throughput content creation teams (like those produced by media agencies such as nowthis, vox, and buzzfeed), is said to be “bad”, in the context of scientific content, because its reputation for presentations that range from reductive (at best), misleading, or extremely falsified (at “worst”) . Clickbait is positioned as a nonproductive/detrimental social force because of its perception of misleading a ”greater” public (greater, being a population larger than the group discussing “clickbait” using its solidly derogatory moniker) towards falsehoods, fictions, or simply over abundance in confidence about nuanced and complex concepts. However, clickbait is usually described by its visual characteristics, bold headlines, attractive and animated charts, clear/direct language, etc. What I wondered during class is what differentiates clickbait from “infographics”, besides an implied accusation of illegitimacy."] \
 [:p "over the week i have struggled to rise to the assignment of “the need to design” a solution, in the realm of food systems or otherwise. What I ended up settling on was a partially “tongue-in-cheek” imagination focused on one, of many (most of which i suspect i will never become appropriately familiar with without a more disciplined commitment to agricultural studies), obstacles towards enthusiasm  that i see across many projects categorized as “biodesign”. because i am pretty late to proposing the project, i am going to simply link to the draft (it will be a “design proposal” (with renders, which, if i have learned anything at itp, are a currency in the realm of “design” more valuable than any other material form)) here and pedantically focus this post on my reading responses."]
     [:div
      [:p "week n-2"]
      [:ul [:li [:a {:href "#whitman"} "whitman"]]
       [:li [:a {:href "#nextbig"} "next big"]]
       [:li [:a {:href "#slowideas"} "slow ideas"]]
       [:li [:a {:href "#makespace"} "make space"]]
       [:li [:a {:href "#cosmicqueries"} "cosmic queries"]]]
      [:p "week n-1"]
      [:ul
       [:li [:a {:href "#nationalinit"} "national init"]]
       [:li [:a {:href "#sayhello"} "say hello"]]
       [:li [:a {:href "#astromushrooms"} "astro mushrooms"]]
       [:li [:a {:href "#fungifight"} "fungi fight"]]
       [:li [:a {:href "#woodwideweb"} "wood wide web"]]
       [:li [:a {:href "#treessocial"} "trees social"]]]]]


    [:section
     [:h2 "week n-2"]
     [:section#whitman [:h3 "whitman"]
      [:p "we were asked to read the first chapter of Lehrer’s “Proust was a neuroscience”: on Walt Whitman"]
      [:p "what i mainly couldn’t stop thinking about is Lehrer’s own relationship to the the text (and maybe premise of the book (i am not claiming to be intimately familiar with the work as a whole. my opinions are based on cultural expectations re: placement of “forthcomingness” in nonfiction english text work)). Lehrer seems to, sometimes conflict with, but most of the time affirm the assumption that ultimate validation for cultural though is acceptance into the scientific institution, Lehrer then critiques scientific institution as resistant to intuition. instead, intuition is present as the domain of artists, Lehrer (most in the introduction of the book) presents artists being producers of media ideologically distant from his industry, implying his careful consumption marks him as distinct voice in his field, of which he never rejects the social connotations of respectability and rigor of. i found this relationship between Lehrer and “neuroscience”, complicated with the associations with the “pop science” genre that the work undeniable self-classifies as, extremely interesting, almost oedipal. Lehrer does acknowledge institutional acceptance of Whitman’s insistence on the body, through his mention of Antonio Damsio, but only in “‘modern neuroscience”. Whitman is presented as paternal inventor (surprisingly straight depiction of Whitman) of a theory of embodiment, and liberator of reason against (what Lehrer presents as) the unchallenged hegemony is dualism."]
      [:p "i found Lehrer putting themselves into a weird position, tasking theirself with presenting various (maybe too varied to avoid accusation of ahistoricality) figures defined by their outsider status, relative institutional science, yet through the methods of their fields (characterized by virtues undervalued by that same scientific institution), “arrive” sooner to “truths” (validated by their eventual institutional acceptance) than those institutions. meanwhile, Lehrer continuously reminds us of their established position of respectable establishment within this ideologically stunted field. I don’t think I’d be saying anything shocking when evaluating Lehrers description of Whitman, James, and Emerson as myopic and shallow. The basis of Lehrer’s project might be uncontroversially interesting, but I thought Lehrer’s strange and almost tortured subtext about their conflicted relationship to their source of legitimacy was far weirder."]]
     [:section#nextbig [:h3 "next big thing"]
      [:p
       [:a {:href "http://www.stefanibardin.net/wp-content/uploads/2017/01/Microbiomics-The-Next-Big-Thing-.pdf"} "next, we were asked to read “MICROBIOMICS: THE NEXT BIG THING?”"]]
      [:p  "my summary : new sequencing has enabled a new possibility for scientific field dujour. this field being previously limited with lack of tooling for visibility. there’s already some early promising results of success, which is good for propelling the field’s hype, its too early to say how immediately practically applicable the field will be. in my opinion, this is a very succinct example of all of the features to make a “next big thing”. "]
      [:p "one thing i thought was interesting is the strong sense of causality the article presents between technological affordance (batch genetic sequencing) and conceptual exploration. whenever there is a supposed epoch of scientific understanding that is entirely credited with the proliferation of a particular material technology, there is a reasonable argument for the increased visibility of the human sense prior to the technology, being highlighted by supposed insufficience, e.g. Vogt’s “Becoming media: Galileo’s Telescope”. the next article even quotes a researcher for this same parallel with the telescope."]]
     [:section#slowideas [:h3 "slow ideas"]
      [:p
       [:a {:href "http://www.stefanibardin.net/wp-content/uploads/2015/08/Slow-Ideas-The-New-Yorker.pdf"}
        "next, we were asked to read \"slow ideas\" by Atul Gawande"]]
      [:p "this article seems to argue the obvious fact that one thing that is slower than turnkey solutions is the process of in-person sociability. the article seems to argue that the effectiveness (and relative ineffectiveness of alternatives) of one-on-one oral persuasion is undervalued because of perceived lack of technological complexity, and not because the slow-and-expensive-but-certain is simply slow-and-expensive-but-certain."]
      [:p "one positive example presented is a drug sales rep asking personal questions about a doctors daughter to create the illusion of trust in order to sell their employer’s products over competitors."]
      [:p "i don’t discredit the analog-ly social over the containerization of analog sociality over digital and tabulated mechanisms. what bothers me about these rallying cries for conversationality is their implicit enforcement of adherence to the idealized neoliberal subject, a citizenship that is denied consciousness of structures of class / power, denies the politics of objects, and confined to an arena of distributed collaborative policing of linguistic mannerisms."]]
     [:section#makespace [:h3 "make space"]
      (byline "FARMING MAKE SPACE FOR NATURE?" "Sam Knight" "https://www.newyorker.com/magazine/2020/02/17/can-farming-make-space-for-nature")
      [:p "this reminded me of the previous article, where i felt that both articles could be summarized as “the higher the labor investment, the greater the value of the product”."]]
     [:section#cosmicqueries [:h3 "cosmic queries"]
      [:p
       [:span
        [:a
         {:href
          "https://www.startalkradio.net/all-access/cosmic-queries-art-science"} "next we were asked to listen to the podcast episode “Cosmic Queries: Art and Science”"]]]
      [:p "i found this very difficult to listen to. i understand Tyson’s expertise to be in the realm of science-advocacy. my awareness of his name is probably a testament to his success in his field. i’m not as aware of his specialties in astrophysics, the field he presents himself an expert of in the podcast. i am also not aware of his previous experiences with “art” (as he thinks of it), which he is forthcoming in admitting his lack of involvement in."]
      [:p "Tyson begins by talking about the lack of emotionality in computational art, or any art that heavily references highly accepted formulations from science. i would argue that the main reason he has seen these pieces is because there is an audience that “emotionally” resonates with that type of work, and that that type of work would not be created if there were not an instance of “emotional” relation involved similar to more traditional mediums. Tyson seems to be operating using tropes about “scientific” adjacently branded “art” rather than considering either subject in any detail. Tyson primarily uses musical cliches about music to make his point. when listing pieces he thinks are ideal examples of an effective “blend” of “art and science”, he references “those big sculptures outside of buildings” that integrate some similarity to a utilitarian function. Tyson presents awareness of this utilitarian function in accurate measurement instruments as an intimacy with the scientific institution and does not draw attention to his exercise in listing grandiose structures funded by finance (or other mass-capital agents) towards appeals to towards public approval and municipal rewards for integrating semi-public-private space into their allocations of privatized city land."]]]
    [:section [:h2 "week n-1"]
     [:p "the readings discussed furthermore refer to preparatory readings for week five of the class"]
     [:section#nationalinit [:h3 "national init"]
      (byline "Scientists Urge National Initiative on Microbiomes" "Carl Zimmer" "https://www.nytimes.com/2015/10/29/science/national-initiative-microbes-and-microbiomes.html")
      [:p "the concentrated hopes (towards blame and cure) reminds me of toxicity panics explored by Michelle Murphy in “Sick Building Syndrome” but for synthetic compounds in the built environments of white-collar work"]]
     [:section#sayhello [:h3 "say hello"]
      (byline "Say Hello to the 100 Trillion Bacteria That Make Up Your Microbiome" "Michael Pollan" "https://www.nytimes.com/2013/05/19/magazine/say-hello-to-the-100-trillion-bacteria-that-make-up-your-microbiome.html")
      [:blockquote "\"The microbiome researchers don’t want to make the mistake of overpromising, as the genome researchers did. They are also concerned about feeding a gigantic bloom of prebiotic and probiotic quackery and rightly so: probiotics are already being hyped as the new panacea, even though it isn’t at all clear what these supposedly beneficial bacteria do for us or how they do what they do. \""]
      [:p "i liked that this highlighted the social power of scientific research to create tendencies to want to immediately extrapolate that research towards personal gain, whether in the form of health benefits or conspicious consumption"]]
     (idsection "astro mushrooms"
                (byline "Astronauts on the moon and Mars may grow their homes there out of mushrooms, says NASA" "Ashley Strickland" "https://www.cnn.com/2020/01/17/world/nasa-moon-mars-fungus-scn/index.html")
                [:p "my only question is how oxygen would be provided to the mycelium while it is growning structures on mars"])
     (idsection "fungi fight"
                (byline "When Fungi Fight Back"
                        "JoAnna Klein"
                        "https://www.nytimes.com/2019/01/15/science/fungus-threat-detection.html")
                [:p "i don't really have a comment on this article. seems like an introduction to the fact that fungus as an immune system."])
     (idsection "wood wide web"
                (byline "THE SECRETS OF THE WOOD WIDE WEB"
                        "Robert Macfarlane"
                        "https://www.newyorker.com/tech/annals-of-technology/the-secrets-of-the-wood-wide-web")
                [:p "descriptions of mycorrhizal colonies range from socialist / capitalist / banking etc. exchange is typically thought of in the western world as changes in ownership. nature doesn't really map to possession. so exchange without states of possession just sound really out of place."])
     (idsection "trees social"
                (byline "German Forest Ranger Finds That Trees Have Social Networks, Too"
                        "Sally McGrane"
                        "https://www.nytimes.com/2016/01/30/world/europe/german-forest-ranger-finds-that-trees-have-social-networks-too.html")
                [:blockquote "\"People who spend most of their time in front of computers want to read about nature.\""]
                [:p "i have been wondering why so many biodesign projects firmly aim at the luxury conspicuous commodity market. maybe a lot of it is bioengineering is simply the newest form of aesthetic communication of technological advancement. "])]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
