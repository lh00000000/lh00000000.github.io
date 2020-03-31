(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [cljsjs.moment :as m]
            ))

(enable-console-print!)
(def app-state (r/atom {:count 0 :stopwatches []}))
(defn up! [] (swap! app-state update-in [:count] inc))
(defn another-starttime! [] (swap! app-state update-in [:stopwatches]
(fn [old] (conj old
{
  :starttime (js/moment)
  :ss 0
}
))
))

(defn tick! [] ())


(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])

(defn flexcols [cols & items]
  [:div {:style {:max-width "90vw"
                 :display "flex"
                 :flex-wrap "wrap"}}
   (map (fn [d] [:div {:style {:flex (str (/ 98 cols) "% 0 1")}} d]) items)])



(defn stopwatch [{:keys [starttime]}]
[:div
 [:p
 starttime
 ]
]
)
(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-03-26-timers"]
    [:section
     [:h2 "debug"]
     [:p (str (:stopwatches @app-state))]
    ]

    [:section
    [:h2 "app"]
     (for [st (:stopwatches @app-state)]
      (stopwatch st)
     )

     [:button {:on-click another-starttime!} "another"]
     ]


    ]

     ])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
