(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(def assets (hash-map "IMG_2659" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2659.jpg" "IMG_2658" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2658.jpg" "IMG_2655" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2655.jpg" "IMG_2654" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2654.jpg" "IMG_2656" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2656.jpg" "IMG_2657" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2657.jpg" "IMG_2653" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2653.jpg" "IMG_2650" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2650.jpg"))
(defn asset-img [assetsrc caption] [:figure [:img {:alt caption :src (assets assetsrc) :width "100%"}] [:figcaption caption]])


(def talkingtopeople 
  [:section {:id "talkingtopeople"}
   [:h2 "talking to people"]
   [:p "i went into the music inn to try to ask them about their instrument repair services / piano tuners. "]
   (asset-img "IMG_2659" "top shelf celtic harps")
   (asset-img "IMG_2658" "mechanical metronomes")
   (asset-img "IMG_2655" "i forgot what these instruments are called")

   (asset-img "IMG_2656" "rig of 3 camcorders")
   (asset-img "IMG_2657" "guitas, lukes, and dulcimers hanging from ceiling")
   (asset-img "IMG_2653" "drums, shakers, and a toy piano")

   [:p "unfortunately they were not that into my thesis idea and kind annoyed i would want to focus on a twelve tone instrument"]
   [:p [:span "i also tried interviewing "]
    [:a {:href "https://wp.nyu.edu/antonioitp/"} "antonio"]
    [:span " about his experience doing piano tuning lessons in school in the 6th grade"]]
   [:p "his lessons were offered as an elective in his all-blind school in brazil. he said he took it because he an interest in mechanics and music"]
   [:p "i asked him if he thought doing tuning at that age changed how he thought about maintenance of technology and he said he thought it mostly influenced his understanding of intervallic relationships in music and was perhaps the start of his theory on the importance of in-person mentorship and tacit knowledge when learning technology"]
   [:p "we were also asked to 'Identify 3 people who are interested in or work in your thesis field and be ready to share who these people are'. one of my top priorities for this project is for the theoretical work to be informed by the experiences of people who have performed the types of technological maintenance labor i am trying to analyze. some people i have considered/approached so far are"]
   [:ul [:li "piano tuners (obviously). although i've had three failed attempts so far. i am hoping my instructor lou tasciotti will be supportive though"]
    [:li "someone involved closer to the more immediately obvious images of technological maintenance. i am thinking of a site reliability engineer at one of my old jobs, a software job that consists of a lot considerations for preventative maintence"]
    [:li "shannon mattern"]]
   [:p "we were also supposed to 'Have 1 conversation with someone who does not know about your topic of interest. Video tape this conversation and upload it to your research page.' but it felt rude to bring up my thesis + ask to video-record whenever i went out to meet someone new. so i tried chatroulette. but i was too ugly. so i tried omegle (not the video, because i was still too ugly)."]
   [:iframe {:width "100%" :height "315" :src "https://www.youtube.com/embed/ko-HUnqYZoI" :frameborder "0" :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" :allow "fullscreen"}
    
    ]
   ])
(def paperresponse 
  [:section {:id "paperresponse"}
   [:h2 "\"respond to scholarly paper\""]
   [:p "another thing we were asked to do was 'Find a scholarly paper in your topic of research. Read the paper and write a reaction on the blog  https://scholar.google.com/"]
   [:p [:span "i have had Jennifer Gabrys'"]
    [:a {:href "http://research.gold.ac.uk/18074/"} "Re-Thingifying the Internet of Things"]
    [:span " on my reading list for a while so read that."]]
   [:p "it wasn't really the paper i thought it would be and instead was more of the paper its title said it would be. there is one section where Gabrys recalls:"]
   [:blockquote " in an early assessment of Digital Rubbish, one reviewer commented that such technologies, even if fitted with electronic capacities, should not be assessed or discussed as computational devices. Why? Because, unlike a computer, a toaster quite obviously does not have storage capacity."]
   [:p "which resonated with me because of my difficulties using the piano as my computational form-factor of choice for this project. maybe spelling out how the piano does conform to the von-neumann model (if one really wants to) will save me time in the future"]
   [:p "in another section: "]
   [:blockquote "Rather than attempting to settle a case for or against things, I contend that the way in which particular things are mobilized and animated within the Internet of Things has consequences for the sorts of materiality that are addressed, the processes of materialization that are attended to, and the material relations that are animated or obscured. In this sense, I make the case that the Internet of Things requires us to attend not to one version of materiality, but to many; and to consider how things are never fully formed and fixed objects, but always on the go, generating effects that are never without consequence.
"]
   [:p "much of my initial inspiration for this project has been the 'material turn' Gabrys refers to, that i have since begun to feel is a redundant process of underscoring the physicality of the virtual towards nothing much more than increased consumptive sophisication. Gabrys posits that 'thingification' reintroduces the mass, waste, and exploitation of the virtual back into the picture, but also these reappearances emanate virtualities themselves, in the form of new relationalities, lost hypotheticals, and inconsistant understandings"]
   [:blockquote "As Smithson has suggested, sediment reveals the often-overlooked aspects of technology. He prefers to think of technology less as “‘extensions’ of man,” and more as “aggregates of elements,” or “raw matter of the earth”; he also considers how rust—the apparent decline of technology—is a “fundamental property” of that technology."]
   [:p "i have been reseraching the topic of e-waste by treating it as synonymous with technological materiality, mainly thinking of the gradient between utility and discard as a process of revealing. In this revealing, i've been trying to draw out formations of maintenance, my thesis basically being the claim that there are no aspects at the core of what technology is beyond these formations. Gabrys' quoting of Smithson points out that disposal is not just an inevitability of computation, it is part of its original state. declination is solidified at the beginning, but what occludes unslightly signs of decay? i think this is where nets of maintenance collect."]])

(defn sevenl [what items]
  [:div
   [:p what]
   [:ol
    (map (fn [item] [:li item]) items)]])

(def seven 
  [:section {:id "seven"}
   [:h2 "seven"]
   [:p "the class exercise was a bunch of 'brainstorming' things in groups of seven. we had to pick some keyword, which i picked 'maintenance' although i struggled to pick that vs 'encapsulation'. i am putting this here because i am hoping it will speed up the thesis statement process."]

   (sevenl "verbs" ["ignore" "block" "compare" "note" "mute" "finish" "forget"])
   (sevenl "places" ["shipping container storage yard" "warehouse shceduled for something else" "in the cloud" "in a targeted digital ad" "underground" "virginia" "in a refridgerator"])
   (sevenl "people" ["peter thiel" "luthier" "someone alone" "bitcoin owner" "score engraver" "professional welder" "operating system"])
   (sevenl "questions" ["is there technicality without maintenance" "why do we value the de-encapsulation of some forms of labor over others?" "why does the word 'weightlessness' recur around technology" "what are the different sides of quantization" "is there interface without violence" "can computation be silent" "do fantasies of labor exists outside the technology discourse?"])
   (sevenl "quotes" ["'Automation doesn't replace labor. It displaces it.' - Justice for Data Janitors" "'techne - all technical practices, whether creating technology, or simply rational, symbolic, logic thought. as opposed to organic thought.'' - yuk hui - throughout recursivity and contingency" "'Just as the accumulation of error in the PLANEX program required feedback from the world in order to re-establish the robot's location, the error response from the user in Sacerdoti's system required that NOAH somehow repair its representation of the user's situation:' - Suchman" "'Former newspaper buildings have been recycled into a CubeSmart self-storage facility'" "'The domain of machine and non-machine non-humans (the unhuman in my terminology) joins people in the building of the artifactual collective called nature. None of these actants can be considered as simply resource, ground, matrix, object, material, instrument, frozen labor; they are all more unsettling than that.' —donna haraway, “The Promises of Monsters”" "'These fossils are then partial evidence of the materiality of electronics—a materiality that is often only apparent once electronics become waste. In fact, electronics involve an elaborate process of waste making, from the mining of metals and minerals, to the production of microchips through toxic solvents, to the eventual recycling or disposal of equipment. These processes of pollution, remainder, and decay reveal other orders of materiality that have yet to enter the sense of the digital.'" "'standardization must itself be understood as a process that transforms the subject and not just the object. Standardization participates in shaping our thoughts and not just our things. 'Vossoughian, “Standardization Reconsidered.”"])
   (sevenl "books" ["the loser" "recursivity and contingency" "sorting things out" "prehistory of the cloud" "digital rubbish" "piano servicing, tuning, and rebuilding: for the professional, the student, and the hobbyist" "code clay data dirt"])
   [:div
    [:p "\"songs\""]
    [:ol
     [:li [:a {:href "https://davidlangmusic.bandcamp.com/track/for-glenn-gould-bonus-track"} "for glenn gould bonus track | David Lang"]]
     [:li [:a {:href "https://www.youtube.com/watch?v=Hegzm-9az6k&list=PLGfWxFKdye0zK0AYYCKO-5nkR12mpymJ0&index=3&t=0s"} "playing piano with backhoe - YouTube"]]
     [:li [:a {:href "https://open.spotify.com/track/2pZqoV7j3jMEZniXMHdhsn?si=x_dzOFs7TR6EKHq87MUgxQ"} "Piano Phase, a song by Steve Reich, Norrbotten NEO, Mårten Landström on Spotify"]]
     [:li [:a {:href "https://open.spotify.com/track/6Wei2NUSG66WzLiqSuQAy5?si=UiKz1wEtQt-CiLyi-H4UsQ"} "Nanou2, a song by Aphex Twin on Spotify"]]
     [:li [:a {:href "https://vimeo.com/149079243"} "Hotline Bling - MP3 to MIDI and Back on Vimeo"]]
     [:li [:a {:href "https://open.spotify.com/track/5HTYeL2VmLmdM1Ffjxm3XC?si=HyhnY3BAT-qLjbJCX2xv7g"} "六(liu), a song by Li Daiguo on Spotify"]]
     [:li [:a {:href "https://open.spotify.com/track/4d4d0BFlA87pfTRN1f6JwT?si=K8U-Sh7gT0mpWsb70_FD2Q"} "Among Red Mountains, a song by John Luther Adams, Stephen Drury on Spotify"]]
     [:li [:a {:href "https://open.spotify.com/track/2265joFQlsabSonWhbPCPK?si=2lxZslvLQ4KgziKllErqDw"} "Recognition, a song by Aaron Grad on Spotify"]]]]])

(def precedents 
  [:section {:id "precedents"}
   [:h2 "precedents"]

   [:p "were were asked to find '3 precedents for your topic of interest... '"]
   [:blockquote "Video Screening: “Untuning of Six Steinway Pianos at Three Times During the Day“, by Warren Neidich. Duration: 23 min.
Three professional piano tuners were asked to untune a black Steinway piano at three different times during the day to a point they considered maximally entropic. Each event was live-video recorded. Their audio streams were mashed together as one single recording which will accompany the three-screen projection."]
   [:p "i think this piece would hypothetically have better seo than my project if one were to search the internet for my project"]
   [:blockquote "LAUREN: 'I attempt to become a human version of Amazon Alexa, a smart home intelligence for people in their own homes. The performance lasts up to a week. It begins with an installation of a series of custom designed networked smart devices (including cameras, microphones, switches, door locks, faucets, and other electronic devices) . I then remotely watch over the person 24/7 and control all aspects of their home. I aim to be better than an AI because I can understand them as a person and anticipate their needs. The relationship that emerges falls in the ambiguous space between human-machine and human-human.'"]
   [:p "i think of this as an aspiration example of rhetorical system building. the placement of technology in society today is frequently in the form of adversarial and symbiotic flux and i think discourse on it is difficult without creating material examples, which is what i aim to do with my project."]
   [:blockquote "It’s clear that finance has colonized the art world many times over. That’s just a condition of the art economy. But it doesn’t happen the other way around, where artworks have any significant financial footprint. So that’s another idea that we’re working with, the possibility of a project actually influencing the markets and causing some sort of change in this vast pool of circulating capital."]
   [:p "there are many aspects of the nonfood project that have interested and inspired me even though i don't enjoy eating it."]])

(def experiment 
  [:section {:id "experiment"}
   [:h2 "\"experiment\""]
   [:p "one thing were were asked to do this week was 'Conduct one weekly experiment in visual audio or other material in your subject of interest. This can include sketches, material or physical experiments but should have a component of engagement with another human being.'"]
   [:p "i couldn't think of anything i could complete in a week so i thought it would be a productive idea to see if reserving a piano practice room could be an option to get more piano tuning practice / if passerbys would snitch on me"]
   [:video {:width "100%"}
    [:source {:src "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-itpthesis01/IMG_2849.MOV"  :type "video/mp4"}]]
   [:p "not very exciting but i guess useful for me. i think another experiment i'd like to try is creating the api as stated before, but playing the piano music myself (or at least attempting to). i did not do this because i did not think i could whip up the promotional website in time"]])

(defn layout []
  [:div {:id "layout"}
   [:article {:id "mainarticle"}
    [:h1 "2020-02-10-itpthesis01"]
    [:section
     [:ul
      [:li [:a {:href "#talkingtopeople"} "talking to people"]]
      [:li [:a {:href "#experiment"} "\"experiment\""]]
      [:li [:a {:href "#paperresponse"} "paper response"]]
      [:li [:a {:href "#precedents"} "precedents"]]
      [:li [:a {:href "#seven"} "seven"]]]]




    experiment
    paperresponse
    talkingtopeople
    precedents
    seven]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
