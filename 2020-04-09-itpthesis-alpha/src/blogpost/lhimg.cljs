(ns blogpost.lhimg
  (:require [clojure.string :as str]
            [blogpost.constants :as c]
            ))

(defn inline [on-click src alt]
  [:div {:style {:cursor "zoom-in"
                 :display "flex"
                 :width 128
                
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
   [:span c/nbsp]
   ])

(defn zoomed [on-click src alt]
  [:div {:style {:cursor "zoom-out"
                 :display "flex"
                 :width "100%"
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
