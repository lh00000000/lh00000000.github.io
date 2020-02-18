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

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "{{blogId}}"]

    [:section
     [:h2 "hello"]
     [:p "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
     (captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image")]

    [:section
     [:h2 "interaction"]
     [:p (str "count: " (:count @app-state))]
     [:button {:on-click up!} "up"]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
