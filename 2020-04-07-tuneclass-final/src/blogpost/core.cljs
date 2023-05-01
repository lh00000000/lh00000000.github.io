(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.components :as c]
            ["showdown" :as showdown]))

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
(defn text [text] (lhspan text))
(defn lhlink [href text]
  (concat
   (map #(-> [:a {:href href} %])
        (interpose nbsp (str/split text " ")))
   [nbspspan]))

(defn blankdiv [height]
  [:div {:style {:height height}}])
(defn lhsectitle [sec-title]
  (concat
   [[:div {:id sec-title
           :style {:padding 2}}

     [:a {:href (str "#" sec-title)
          :style {:color "black"
                  :text-decoration "none"}}

      [:h2 {:style {:position "relative"
                    :top 0
                    :margin 8
                    :left 0}}
       (str "#" sec-title nbsp)]]]]))


(defn lhimg-inline [on-click src alt]
  [:div {:style {:cursor "zoom-in"
                 :display "flex"
                 :width 128
                 :max-height 128
                 :flex-direction "row"
                 :justify-content "center"}
         :on-click on-click}
   [:figure
    {:style
     {:margin 0
      :position "relative"
      :top 0
      :left 0
      :width "100%"
      :display "flex"
      :flex-direction "column"
      :align-items "center"}}
    [:img {:src src
           :alt alt
           :style {:max-width "100vw"
                   :width "100%"
                   :max-height "120vh"
                   :object-fit "contain"}}]
    [:div
     {:style {:width "100%"
              :height "100%"
              :position "absolute"
              :top 0
              :display "flex"
              :flex-direction "row"
              :justify-content "center"
              :align-items "center"}}
     [:figcaption

      {:style {:color "white"
               :text-align "center"
               :font-size "12px"}}
      (str "(" alt ")")]]]
   nbspspan])

(defn lhimg-zoomed [on-click src alt]
  [:div {:style {:cursor "zoom-out"
                 :display "flex"
                 :width "100%"
                ;  :max-height "60vh"
                 :flex-direction "row"
                 :justify-content "center"}
         :on-click on-click}

   [:figure
    {:style
     {:margin 0
      :max-width "100vw"
      :width "60vh"
      :max-height "120vh"}}
    [:img {:src src
           :alt alt
           :style {:width "100%"
                   :height "auto"
                   :object-fit "contain"}}]
    [:div

     [:figcaption
      {:style {:color "gray" :text-align "center"
               :font-size "18px"}}
      [:span alt]]]]])


(defn lhimg [src alt]
  (let [inline (r/atom true)]
    (fn []
      (apply (if @inline lhimg-inline lhimg-zoomed)
             [(fn [] (swap! inline not))
              src
              alt]))))



(def feb-div

  [:div {:class "note-wrapper"}
   [:div [:h1 {:id "tuneclass-2020-02-25"} "tuneclass-2020-02-25"]
   [:p "notes on my lesson with Lou Tasciotti on 2020-02-25"]
   [:br]]
   [:div [:h2 {:id "stretching octaves"} "stretching octaves"]
   [:ul
    [:li "cybertuner "
     [:span {:class "arrow"}
      [:svg {:width "11px", :height "10px", :viewbox "0 0 11 10", :version "1.1", :xmlns "http://www.w3.org/2000/svg", :xmlns:xlink "http://www.w3.org/1999/xlink"}
       [:g {:id "right-arrow"}
        [:path {:d "M1.77635684e-14,5 L9,5", :id "rod", :stroke "#000000", :stroke-width "2"}]
        [:path {:d "M11,5 L6,0.5 L6,9.5 L11,5 Z", :id "point", :fill "#000000"}] "    "]]] " chameleon "
     [:span {:class "arrow"}
      [:svg {:width "11px", :height "10px", :viewbox "0 0 11 10", :version "1.1", :xmlns "http://www.w3.org/2000/svg", :xmlns:xlink "http://www.w3.org/1999/xlink"}
       [:g {:id "right-arrow"}
        [:path {:d "M1.77635684e-14,5 L9,5", :id "rod", :stroke "#000000", :stroke-width "2"}]
        [:path {:d "M11,5 L6,0.5 L6,9.5 L11,5 Z", :id "point", :fill "#000000"}] "    "]]] " OTS P calculates stretch"
     [:ul
      [:li "\tP is for slightly narrow perfect fifth"
       [:ul
        [:li "\t\tin perfect even temperament, all intervals except the fifth are slightly wider than just intonation"]]]]]
    [:li "partials vs overtones"]]
   [:p
    [:img {:src "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-25/D8630BA0-1B1C-4A75-8E0B-F6EF7B4FE28E.png"}]]
   [:ul
    [:li "piano tuners use partials "]
    [:li "lou starts are middle and goes out"
     [:ul
      [:li "\tsome start at leftmost bass string, "]]]]
   [:br]]
   [:div [:h2 {:id "tuning the temperament"} "tuning the temperament"]
   [:ul
    [:li "temperament is an octave or so range tuned by ear in isolation, usually to one reference note (popularly A440 but sometimes a C4 or something)"]
    [:li "the temperament strip is a long piece of felt you stick between the the triplets of strings to only expose one string per key"]
    [:li "prep a newly purchased strip by stretching it a little by hand"]
    [:li "start with wider side of felt for lower strings first"]]
   [:br]
   [:h3 {:id "on the Sanderson accutuner"} "on the Sanderson accutuner"]
   [:ul
    [:li " one of the firs electronic tuning devices designed address the additional complexities of piano tuning vs other instruments"]
    [:li "used a spinner interface to denote sharpness or flatness"]
    [:li "tuner would calculate the stretch appropriate for the piano, then bunch in desired parameters"
     [:ul
      [:li "\tlou said this took most people 2 hours to do something that the ear of most tuners do coudl in 45 minutes"]]]
    [:li "franz moore "
     [:ul
      [:li "\tspoke with and was interviewed for Piano Quarterly by Lou Tasciotti "]
      [:li "\twas against electronic tuners simply on the basis that most listeners agreed that they sounded bad in comparison to other methods"]
      [:li "\t&quot;like golf, it&#39;s about getting it in&quot; - hearing something is out of tune is one of the easier steps"]
      [:li "\tmoore would challenge other guild members to tuning duals"]
      [:li "\tLou started using cybertuner when his hands couldn&#39;t comfortably stretch to play tenths anymore , which let him to experience that the stretches it calculated were pretty good"]]]]
   ][:div [:h2 {:id "concert temperament"} "concert temperament"]
   [:ul
    [:li "many methods. many different endorsements. one is to tune A4 to a fork, then F3 and A3 such that"
     [:ul
      [:li "\tF3 beats* at about 9 beats per second compared to A4"]
      [:li "\tF3 beats about 8 beats per second compared to A3"]
      [:li "\t"
       [:code {:class "code-inline"} "* what are beats"]
       [:ul
        [:li "\t\tbeats are fluctuations in volume when two pitches are very close to each other. their rate decreases the closer they are"]
        [:li "\t\tlistening for perfect unions of beats is time consuming and difficult. literally gets harder the closer you are to correctness (you could have something beating every 10 seconds. you&#39;d just have to wait and listen carefully and try to do so in a way where the natural volume decay of the notes isn&#39;t confusing your ear)"]
        [:li "\t\tone popular method is to listen to the beat patterns of major thirds, where the 5th partial of the lower note (two octaves and a major third up) is beating against the 4th partial of the higher note (two octaves up) which is faster, but not so fast that it can&#39;t be compared to metronome rates"]
        [:li "\t\tother method, usually used in tandem with 3rds, is to compare 5th partials with 3rd partial of a major sixth above the root, e.g. F3 and D4, where you are listening to the beating of A5-ish partial of F3 compared to the A5-ish 3rd partial of D4"]]]]]
    [:li "after these three keys are tuned, the A3 and A4 will not be a perfect octave from each other, but should "
     [:i "aurally"] " sound like a harmonious octave"]
    [:li "from the F3, one moves up in a sequence of sixths and major thirds, each newly tuned key check so that the follow prosperities are exhibited"
     [:ul
      [:li "\tperfect fifths are almost beatless (but on the narrower side)"]
      [:li "\twhere beatlessness of perfect fourths results in a degradation of the beatlessness of fifths, the beatlessness of fifths is prefered"]
      [:li "\tascending major sixths should exhibit gradual increase of beat rate"]
      [:li "\tascending major this should exhibit gradual increase of beat rates"]]]
    [:li "one pattern, assuming F3, A3, and A4 can be used as reference is to "
     [:ul
      [:li "\ttune D4 using F3 as reference, optionally checking using the fourth/fifth relationships to A3 and A4 mentioned above"]
      [:li "\tnow that D4 is satisfactory, tune Bb3 using D4 as the main reference, making sure that the beat rate of F3 and A3 is slower than Bb3 D4"]
      [:li "\tnow tune F#3 (Gb3) using Bb3 and the previous relationships"]
      [:li "\tnow tune D# 4 (a major sixth from F# 3). check all available relationships, particularly that the F3-D4 major sixth beat rate is slightly slower than the F# 3-D #3 beat rate"]
      [:li "\trepeat the pattern of down a major third, down a major third, up a major sixth (where the main reference is the most recently tuned key) etc until everything between F3 and A4 is tuned. "]]]]
   [:br]]])

(def slides-iframe
  [:iframe {:src "https://docs.google.com/presentation/d/e/2PACX-1vTFTrv8q53LTDR3LZknMgVGNdPXzQCirvkB6uqvRV4wOQ-WDBC-XHVE8RCuCPu6uSLgAzRTWiTzlTGz/embed?start=false&loop=false&delayms=3000"
            :frameborder "0"
            :width "960"
            :height "569"
            :allowfullscreen "true"
            :mozallowfullscreen "true"
            :webkitallowfullscreen "true"}])

(def para [:span (str/join [nbsp  nbsp  nbsp  nbsp "§" nbsp nbsp nbsp nbsp])])
(defn app []

  [:main

   [:article
    {:style {:display "flex"
             :flex-direction "row"
             :flex-wrap "wrap"
             
             :align-content "flex-start"
             :align-items "center"}}

    [:h1 "2020-04-07-tuneclass-final"]

    [:div {:style {:position "sticky"
                   :top 0
                   :margin-left 4
                   :padding 2
                   :max-width 250
                   :text-align "center"}}
     [:span "("]
     [:span [:b "sections: "]]
     (interpose [:span " / "]
                [[:span [:a {:href "#2020-02-11"} "#2020-02-11"]]
                 [:span [:a {:href "#2020-03-03"} "#2020-03-03"]]
                 [:span [:a {:href "#2020-02-25"} "#2020-02-25"]]
                 ])
     [:span ")"]]
    (lhspan "as you probably could have predicted, my piano tuning class has been cancelled until further notice. i've been behind on posting notes so here are notes from the last three sessions i attened")



    (lhsectitle "2020-02-11")
    (lhspan "there three rails in a steinway: 1. hammer 2. letoff 2. damper.")
    (lhspan "the rails look like this:")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-11/6F5C59FE-1D72-49D4-BD52-1EEEC36CC857.png" "drawing of the notches of a steinway rail. the notches are to keep the stuff aligned, even with frequent reassembly."]
    (lhspan "here are the all the cushions of a hammer:")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-11/7C6DABE2-C0D3-42EE-9B20-01BB997D125A.png" "bad illustration of the little wood barrel covered in buckskin on the back of a piano hammer shank."]
    (lhspan "parts of a jack, an L that kicks the hammer: ")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-11/914D8496-F79C-4E12-8ED1-8E6F3B5DD6E0.png" "illustration of a piano jack, a little l piece of wood that directly flings the hammer towards the string."]
    (lhspan "the sugarcube is a cushion that catches the hammer on a key up. the back check is where the hammer lands after hitting the string while the key is still down.")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-11/BCF9E6FE-B053-4440-B5DC-760D378DE5A9.png" "illustration of where the sugarcube is on a grand piano action whippen"]
    (lhspan "interesting fact: steinway calls the whipped the repetition. everyone else calls it a whippet.")
    para
    (lhspan "dampers have a tab that is to be caught by a giant fin controlled by the sostenuto pedal")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-07-tuneclass-final/tuneclass-2020-02-11/Screen%20Shot%202020-04-07%20at%2010.35.24%20PM.png" "bad drawing of where where the tab is on the the damper assembly for a sostenudo flipper to catch and keep up."]
    para
    (lhspan "lou mentioned a term called \"factory float\" which are weird processes that arise when everyone is being trained mostly by word of mouth.")
    para
    (lhspan "we also worked on bedding the keyframe. i didn't know this but the surface under the keys are slightly concave. the amount of concave-ness is extremely precise. not getting things lighted up and screwed in perfectly can cause knocking sounds while playing, or hammers to hit the wrong strings when using the una corda pedal. aligning this involves a lot of hitting things with your palm and slight tightening of screws and knockings of pegs and things.")
    para
    (lhspan "we also worked on key easing, which is opening or tighting the holes under the actual keys, so that they aren't too sticky or loose when pressing them. this is done with a special spear-like tool sized for that manufacture's design of key.")

    (lhsectitle "2020-02-25")
    [:div
     {:style {:width "100vw"
              ; :width 800
              :height "60vh"
              :overflow "scroll"
              :border "1px solid black"}}
     feb-div]

    (lhsectitle "2020-03-03")
    (lhspan "for this class we went over chameleon feature of cyber tuner, which calculates the appropriate stretch (pitch) for a piano based on taking multiple samples of different A keys in different octaves. we also talked about squaring keys, which is done by lightly knocking pins with a wooden dowel and mallet.")
    
    ]
   (blankdiv 300)])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")

  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
