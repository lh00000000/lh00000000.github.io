(ns blogpost.draw
  (:require [clojure.string :as str]))

(defn black-line [d]
  
    [:svg {:style {:width 1
                   :height 1
                   :display "inline-block"
                   :overflow "visible"}}
     [:path
      {:d d
       :stroke "black"
       :fill "none"
       
       :stroke-width 1}]
     ])
