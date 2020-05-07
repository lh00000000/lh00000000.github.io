(ns blogpost.draw
  (:require [clojure.string :as str]))

(defn black-line []
  (fn [{:keys [d]}]
    [:svg {:style {:width 10
                   :height 10
                   :display "inline-block"
                   :overflow "visible"}}
     [:path
      {:d d
       :stroke "black"
       :fill "none"
       :stroke-width 1}]]))
