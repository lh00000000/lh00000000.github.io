(ns blogpost.core
  (:require [clojure.string :as string]
  [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0 }))
(defn up! [] (swap! app-state update-in [:count] inc))


(defn layout []
  [:div {:style: {:display: "flex" :justify-content "center"}}
    [:article {:style {:width "480px"}}
      [:h1 "2020-02-10-karaliao"]

      [:section
        [:p "the album release party for liao was was held on 2020-02-06 during karaoke night at rebecca's in bushwick. will update this post later presumably."]
        [:img {
         :src "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/karaliao/gp.png"

         }]
      ]
    ]
  ]
)

(defn start []
  (r/render-component
    [layout]
    (.getElementById js/document "root")))
