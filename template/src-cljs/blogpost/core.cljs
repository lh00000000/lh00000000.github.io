(ns blogpost.core
  (:require [clojure.string :as string]
  [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0 }))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn layout []
  [:div {:id "layout"}
    [:article {:id "mainarticle"}
      [:h1 "{{blogId}}"]

      [:section
        [:h2 "hello"]
        [:p "wahoo"]
      ]

      [:section
        [:h2 "interaction"]
        [:p (str "count: " (:count @app-state))]
        [:button {:on-click up!} "up"]
      ]
    ]
  ]
)

(defn start []
  (r/render-component
    [layout]
    (.getElementById js/document "root")))
