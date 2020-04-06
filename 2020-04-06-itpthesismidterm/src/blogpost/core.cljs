(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.components :as c]))

(def app-state (r/atom {:count 0
                        :sections []}))
(defn up! [] (swap! app-state update-in [:count] inc))

(c/new-section!
 :interaction
 [(fn [] [:div {:style {:margin-bottom 16}} [:span (str "count: " (:count @app-state))]])]
 [:button {:on-click up!} "up"])

(c/new-section!
 :lorem
 [:div {:style {:display "flex" :flex-direction "column" :align-items "center"}}
  (map #(-> [:p {:style {:width "auto"} :key %} %])
       ["Clatter, crash, clack!"
        "Racket, bang, thump!"
        "Rattle, clang, crack, thud, whack, bam!"])]
 (c/captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image"))




(def nbsp "\u00A0")

(def nbspspan [:span nbsp])
(def br [:div {:style {:width "100%" :height 8}}])
(defn lhspan [text]
  (concat
   (map #(-> [:span %])
        (interpose nbsp (str/split text " ")))
   [nbspspan]))

(defn lhlink [href text]
  (concat
   (map #(-> [:a {:href href} %])
        (interpose nbsp (str/split text " ")))
   [nbspspan]))

(defn lhsection [sec-title & args]
  (concat
   [[:div {:id sec-title
           :style {;  :position "sticky"
                  ;  :top 0
                  ;  :background-color "white"
                   :padding 2}}

     [:a {:href sec-title
          :style {:color "black"
                  :text-decoration "none"}}

      [:h2 {:style {:position "relative"
                    :top 0
                    :margin 8
                    :left 0}}
       (str "#" sec-title nbsp)]]]]
   args))

(defn lhimg [src]
  (let [inline (r/atom true)]
    (fn []
      [:div {:style {:cursor (if @inline "zoom-in" "zoom-out")
                     :display "flex"
                     :width (if @inline 128 "100%")
                     :max-height (if @inline 128 "60vh")
                     :flex-direction "row"
                     :justify-content "center"}}

       [:img {:src src
              :style {:max-width "100vw"
                      :width (if @inline "100%" "60vh")
                      :max-height "120vh"
                      :object-fit "contain"}
              :on-click (fn []
                          (swap! inline not)
                        ;  (js/console.log "dsijofds")
                          )}]])))


(def slides-iframe
  [:iframe {:src "https://docs.google.com/presentation/d/e/2PACX-1vTFTrv8q53LTDR3LZknMgVGNdPXzQCirvkB6uqvRV4wOQ-WDBC-XHVE8RCuCPu6uSLgAzRTWiTzlTGz/embed?start=false&loop=false&delayms=3000"
            :frameborder "0"
            :width "960"
            :height "569"
            :allowfullscreen "true"
            :mozallowfullscreen "true"
            :webkitallowfullscreen "true"}])
(defn app []

  [:main

   [:article
    {:style {:display "flex"
             :flex-direction "row"
             :flex-wrap "wrap"
             :align-content "flex-start"
             :align-items "baseline"}}

    [:h1 "2020-04-06-itpthesismidterm"]


    ; add to new-section
    [:div {:style {:position "sticky"
                   :top 0
                   :margin-left 4
                   :padding 2
                   :background-color "white"}}
     [:span "("]
     [:span [:b "sections: "]]
     (interpose [:span " / "]
                [[:span [:a {:href "#feedback"} "feedback"]]
                 [:span [:a {:href "#blogdesign"} "blogdesign"]]
                 [:span [:a {:href "#transcript"} "transcript"]]
                 [:span [:a {:href "#slides"} "slides"]]])
     [:span ")"]]


    (lhspan "this is a very belated post trying to satisfy a belated assignment to publish some responsive thoughts to the guest critic feedback given to use during our thesis midterm presentations, which happened 2020-03-10. obviously, the situation has dramatically changed since then. i'm unlikely to be able pursuing what i felt like were the most crucial aspects of the project, (both of which i think only interesting in relation to the other): 1. basing the majority of my research focus on the language piano tuners use to describe their craft and 2. putting the presentation on this research adjacent to a concrete ('the unity of diverse aspects') overlapping of conventional computation and piano maintenance. ")
    br

    (lhsection "slides"
               (lhspan "i also wanted to publish the slides i made for this midterm, as well as the transcript i wrote. i'd like to publish the slides because i do feel like i made an aesthetic personal achievement towards a visual language that i think will suit this project well. however, because of the rushed nature of the presentation format and being unable to print out my transcript beforehand because the change in printer configuration, i think it alarmed some people into thinking it was a technical mistake.")
               slides-iframe)
    (lhsection "transcript"
               (lhspan "i also wanted to post my transcript because, after being a firm opponent of presentation transcripts for many years, i finally observed enough examples of audience reactions to realize when a transcript is more effective. i have long been a believer that in the contrived format of slideshow presentations, each slide should simply be some small visual aids that equally benefit the audience (as a slightly less dynamic version of the highly dynamic medium of speech) as well as the speaker, as a collection of mnemonic aids for the speaker to tailor the tone and brevity for the audience members the only time it can truly be even partially observed.")
               [:iframe {:style {:width "95vw" :height "80vh"}
                         :src "https://docs.google.com/document/d/e/2PACX-1vRftenxNinJfsM_M8BSNIkhicslrLCYKGi_LdFXsXS5owNt_iQowxZGmL1BbOszXMj1qpGTF4InZ7OO/pub?embedded=true"}]
               (lhspan "for a long time, i have sometimes received this feedback for this pseudo-professional medium of attempted-semi-self-legitimizing rhetorical delivery:")
               br
               (lhspan "\"it was cool to be there in the moment just as you were thinking up these ideas\"")
               br
               (lhspan "this would initially offend me for a brief moment, feeling like all of the work i put into trying to think of a reasonable chain of logic to make an argument, and do so in a robust enough way where i could feel comfortable tailoring it to the social context, the formality or informality, the logistical pressures and the possible acoustical challenges of the space in an possibly infinitely improvisation way was bas being dismissed in favor of practiced sequences of formalisms that i felt like could border on the  disingenuously canned.")
               br
               (lhspan "however, after hearing this description applied to other lectures where i recognized the same aspirations, i began to feel like maybe my aesthetics were based on an assumption that improvisation requires more rehearsal than recitation. this assumption is ingrained in me, but from spaces typical of music. it is one thing to learn to play something beautifully, precisely, theatrically quickly, but it requires additional layers of interpretation, conceptual association, and investment of physicality to not only modify \"on the fly\", but modify while upholding aesthetic fidelity.")
               br
               (lhspan "this assumption is fundamentally based on the thorny mythology of improvisation, which is not absolute. the jazz soloist is not the defacto artist of highest calibre no matter what cultural imagery of self-lacerative pedagogical methods and analytical dexterity is associated with them. in short, i realized i was fighting an uphill battle, forcing values around ideas of dissembling formality and demonstrations of scales of possibility spaces over actual paths taken into a format built for formality and against generative explorations possibility.")
               br
               (lhspan "when i decided to use this presentation as a way to test a transcript-focused approach, it was immediately apparent that it was fitting for talking about this particular project. one of the criticisms i received was exactly the reverse of the previous 'coming up with the argument on the fly', that i ought to have researched enough to not warrant a transcript by this point in the semester, however, as i mention below, i think this was more along the lines of conflating ambiguity with lack of rigor, which i don't agree with and think is an essential ground for possibility for this project."))

    (lhsection "feedback"
               (lhspan "i partially do feel compelled to respectfully reject what i view as flawed value systems for creative research work that i think were used to give me feedback. granted, i do not think the criticisms or views of the critiques were invalid themselves, i just disagree that the frameworks used were appropriate towards my particular aspirations for this project.")
               br (lhspan "for example, one of the critics urged me to utilize the effective tool archetypal and familiar imagery during times of explicitly illustrating the context around the piece. i think this is a very legitimate and pragmatic tactic, however, my intent is to demonstrate by example an area of inquiry that i find not only interesting, but crucially dangerous because of its lack of familiar self-evident imagery to describe it and its reliance on designed palatable imagery to legitimize it. i would like to call into question not only these weaponized methods of legitimization but highlight the pervasiveness of these methods, which i think can do by simply avoiding usage at moments particularly high expectation.")
               br (lhspan "another piece of feedback i found very interesting began with the critic saying they could think of many possible project ideas while i was trying to iterate through the thought process that led to my current state of progress. i initially took this as a compliment, as this is very commonly how i describe the effect of work that find most powerful or inspirational. however, the critic then arguing that the ideal thesis project should try to minimize the number of possible interpretations if possible. i found this odd because it sounded like saying that all interpretations of a piece are \"misinterpretations\" if they not the creator's intent, and part of the duty of the creator is to clearly define preference for one particular interpretation. i think aesthetically, i had trouble relating to this objective (the topic of relatability also came up but i think term is too charged right now) . there is certainly a lot of ground i would like to, and also think is worthy, of covering adjacent to the topics of this thesis. part of it is to contrast how vast the ground is in comparison to the lack of ready language to discuss it. i am still trying to find a possible scenario where optimizing for reducing the range of possible ways of engaging with a work could be thought of somehow \"improving\" it, but i am still struggling."))


    (lhsection "blogdesign"
               (lhspan "i also wanted to do this post test more ideas around text-like wrapping of visual designs that repeatedly seem like the only thing that interest me adjacent to \"web design \". here is a test expandable image.")
               [lhimg "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg"])]])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
