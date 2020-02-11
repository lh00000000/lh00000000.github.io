(ns blogpost.core
  (:require [clojure.string :as string]
  [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0 }))
(defn up! [] (swap! app-state update-in [:count] inc))


(def assets (hash-map "IMG_2670" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2670.png" "IMG_2666" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2666.jpg" "IMG_2667" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2667.jpg" "IMG_2665" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2665.jpg" "IMG_2669" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2669.jpg" "IMG_2668" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2668.jpg" "IMG_2850" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/IMG_2850.JPG" "expensive" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-10-tuneclass02/expensive.png"))
(defn asset-img [assetsrc caption] [:figure [:img {:alt caption :src (assets assetsrc) :width "100%"} ] [:figcaption caption] ])



(defn layout []
  [:div {:id "layout"}
    [:article {:id "mainarticle"}
      [:h1 "2020-02-10-tuneclass02"]
      [:section
        [:h2 "cybertuner"]
        [:p "this week's class was our introduction to cybertuner"]
        (asset-img "expensive" "")
        [:p "we were all loaned ipads in 'locked' mode meaning the app can't be exited. i don't really understand the rationale for the app being $999 but their site claims its the own app that takes into consideration that when one tunes any string up or down on an piano, it throws all of the other strings out of whack (think of two straps on a bag with one hand on each strap. pull one up and the other one is looser and vice versa)"]
        (asset-img "IMG_2850" "")
        [:p "half of the class was spent using cybertuner to tune the leftmost string (most of the keys on a piano hit three strings) and then tuning the other two strings of a key according to the leftmost one"]
        (asset-img "IMG_2665" "classmate using cybertuner to tune reference octave")
        (asset-img "IMG_2666" "row of hammers")
        [:p "the other half of class was focused on more restringing practice."]
        (asset-img "IMG_2667" "tuning pins")
        (asset-img "IMG_2669" "row of bridge pins")
        (asset-img "IMG_2668" "bunch of tools on red felt inside grand. felt is improptu work area that avoids fucking up people's finishes.")
        [:p
          [:span "i also invited everyone to my "]
          [:a {:href "http://luminghao.com/2020-02-10-karaliao"} "album release party "]
          [:span "lol"]
        ]
        (asset-img "IMG_2670" "email to piano tuning teacher asking him to guilt my classmates into going to my album release party (no one came lol)")
      ]
    ]
  ]
)

(defn start []
  (r/render-component
    [layout]
    (.getElementById js/document "root")))
