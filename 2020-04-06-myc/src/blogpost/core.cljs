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
      (str "(" alt ")")
      ]]]
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
:max-height "120vh"
      }}
    [:img {:src src
           :alt alt
           :style {
                   :width "100%"
                   :height "auto"
                   :object-fit "contain"}}]
    [:div
    
     [:figcaption
      {:style {:color "gray" :text-align "center"
               :font-size "18px"}}
      [:span alt]]
     ]]])


(defn lhimg [src alt]
  (let [inline (r/atom true)]
    (fn []
      (apply (if @inline lhimg-inline lhimg-zoomed)
             [(fn [] (swap! inline not))
             src
             alt]
             ))))



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
             :align-items "center"}}

    [:h1 "2020-04-06-myc"]

    [:div {:style {:position "sticky"
                   :top 0
                   :margin-left 4
                   :padding 2
                   :max-width 250
                  ;  :background-color "white"
                   }}
     [:span "("]
     [:span [:b "sections: "]]
     (interpose [:span " / "]
                [[:span [:a {:href "#smugtown"} "#smugtown"]]
                 [:span [:a {:href "#plastimyc"} "#plastimyc"]]
                 ])
     [:span ")"]]
    (lhspan "some kind-of disappointing experiments with mycelium. putting here for future reference.")

    ; (lhsection 
    ;  "smugtown"
    ;  (lhspan "i never tried a spawn kit before so i ordered two from smugtown after hearing rave-reviews for so long. unfortunately i was super lazy and took a week to cut the bags open because it was hard to get enough solo kitchen time to avoid possible roommate drama.")
    ;  )
    
    (lhsectitle "smugtown")
    (lhspan "i used this sorcher thing to etch line into plastic: ")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-06-myc/IMG_3561.jpg" "flat thing metal tool with small axe-like blade at end"]
    (lhspan "i ran the scorcher a few times and then just bend the plastic to snap it cleanly. using scissors on the plastic made it crack randomly.")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-06-myc/IMG_3562.jpg" "plastic sheet on cutting mat with metal ruler"]
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-06-myc/IMG_3563.jpg" "holding a strip of plastic"]
    (lhspan "i cut piece of plastic to protect wood shelf above the shelf where i had the spawn kits and a humidifier.")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-06-myc/IMG_3568.jpg" "two shelves. bottom has two bags of mycelium and a humidifier blowing mist over them"]
    
    (lhsectitle "plastimyc")
    (lhspan "another thing i wanted to try was using mycelium to deal with film plastics. this is because i heard that film plastics are really difficult to recycle for similar reasons that fabric is difficult to recycle: they are energy intensive to break down and getting new material is already so cheap, so its hard to get a scaled-up operation going. i collected a bunch of film plastics, from mostly plastic bags and wrapping things, then shred a bunch of it and threw it into a bag of ecovative stuff, which i picked because i wanted something hearty and didn't want to mix or innoculate substrate in my apt at the time.")
    [lhimg "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-06-myc/IMG_3559.jpg" "plastic tray of white mycelium with some strips of film plastic sticking out"]
    (lhspan "i think my proportions were too off to do anything exciting. i can't really tell if the mycelium or plastic is adding anything to the equation. i guess if one had a lot of shreded plastic, this is one kind of semi-fiberous and hard to rip material to add some stretchiness to a block of baked mycelium that otherwise could just be broken off in chunks? who knows")
    ; [:span (str/join (map (constantly "-") (range 8))) nbsp]
    [:span (str/join [nbsp  nbsp  nbsp  nbsp "§" nbsp nbsp nbsp nbsp])]
    (lhspan "i also wanted to try out seeing if i could use mycelium to fasten pieces of dried mycelium together, but i think my ratio of mycelium was too small to surface area. i have some pictures but i'm sure how to maintain the correct environment to make small welds like this feasible. oh well. i guess saving these dumb failures for ")
    
    ]])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")

  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
