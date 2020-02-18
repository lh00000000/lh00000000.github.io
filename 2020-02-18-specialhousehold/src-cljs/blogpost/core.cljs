(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:img
    {:alt caption :src imgsrc :width "100%"}]
   [:figcaption [:span [:i caption]]]])

(def assets (hash-map "IMG_3045" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3045.jpg" "IMG_3051" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3051.jpg" "IMG_3044" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3044.jpg" "IMG_3047" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3047.jpg" "IMG_3057" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3057.jpg" "IMG_3043" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3043.jpg" "IMG_3056" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3056.jpg" "IMG_3040" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3040.jpg" "IMG_3054" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3054.jpg" "IMG_3055" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3055.jpg" "IMG_3058" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3058.jpg" "IMG_3064" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3064.jpg" "IMG_3067" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3067.jpg" "IMG_3066" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3066.jpg" "IMG_3062" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3062.jpg" "IMG_3063" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3063.jpg" "IMG_3049" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3049.jpg" "IMG_3060" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-specialhousehold/IMG_3060.jpg"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-specialhousehold"]

    [:section
     [:p 
      [:span "i want to do more photo slideshow posts about tourist-y things i do."]
      [:span "so here's one about when i went to visit the two bridges dsny special household waste shipping container architecture buildings on 2020-02-15"]
      ]
(asset-img "IMG_3040" "fortunate to see this cool trolley before")
(asset-img "IMG_3043" "weird building in front of it. what is this?")
(asset-img "IMG_3044" "are the holes in the building for sliding in block-y mini buildings?")
(asset-img "IMG_3045" "peeking at the two-container stack through aggressively prohibitive fence")
(asset-img "IMG_3047" "how did the dsny end up approving of this aesthetic")

(asset-img "IMG_3051" "i think the top container is an office. bottom was for dropping off e-waste")
(asset-img "IMG_3054" "visited left single-story container first. for bulbs and latex paint.")
(asset-img "IMG_3055" "battery acid drop off. ")
(asset-img "IMG_3056" "drop off for fluorescent lamps")
(asset-img "IMG_3057" "oil drop off pump-y machine")
(asset-img "IMG_3058" "going to the other sTaCk")
(asset-img "IMG_3060" "looking through doorway. employee or volunteer questioned why we were here and taking so many pictures at first but left us alone")
(asset-img "IMG_3062" "microwaves, pumps, and tvs. thought about getting the keyboard but was afraid of scary liquids being on it ")
(asset-img "IMG_3063" "ecycle <-> eri")
(asset-img "IMG_3064" "oh maybe the second story isn't an office. there's an eye wash station there.")
(asset-img "IMG_3066" "pasted on logo")
(asset-img "IMG_3067" "close up of stylishly bent-up dsny circle logo")
     ]
    

    ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
