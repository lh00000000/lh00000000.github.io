(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))


(defn layout []
  [:div
   [:article

    {:style {:width "100vw"
             :display "flex" :align-items "center"
             :flex-direction "column"}}
    [:h1 "2020-02-10-karaliao"]

    [:section
     [:p "the album release party for liao was was held on 2020-02-06 during karaoke night at rebecca's in bushwick. "]
     [:p "updated: 2020-03-31"]]
    [:section
     [:iframe {:src "https://www.youtube.com/embed/videoseries?list=PLGfWxFKdye0xjZi6rPJmVb6x-E0RhI9T3"
               :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               :style {:max-width "100%"
                       :width "640px"
                       :height "480px"}
               :allowfullscreen "allow"}]]
    [:section
     [:h2 "WORKS CITED"]
     [:p "Hanna, Caroline. Video Games - Lana Del Rey (Karaoke). Bob & Barbara's, Philadelphia, 2019."]
     [:p "Shvarts, Aliza. Disconsent. Art In General, NYC, 2020."]
     [:p "Tongson, Karen. “Empty Orchestra: The Karaoke Standard and Pop Celebrity.” Public Culture 27, no. 1 (75) (January 1, 2015): 85–108. https://doi.org/10.1215/08992363-2798355."]]
    [:img {
           :style {
                   :max-width "80vw"
                   :max-height "80vh"
                   }
           :src "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/karaliao/gp.png"}]
    [:section
     [:div {:style {:height "80px"}}]]
    ]])


(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
