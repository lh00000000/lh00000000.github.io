(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.constants :as c]
            [blogpost.lh :as lh]
            [blogpost.draw :as draw]
            [blogpost.signal :as signal]
            [shadow.resource :as rc]
            [clojure.zip :as z]
            ; [hickory.core :as hick]
            ))

(def app-state (r/atom {:windowScrollY 0
                        :scrollPercent 0
                        :elapsed 0}))





(defn app []
  [lh/spilled
   "2020-05-07-itpthesis-pres"

   (lh/sectitle "#video")
   [lh/breakout {:height 640
                 :max-height "60vw"} (lh/yt-iframe {:width 1080
                                                    :max-width "100vw"
                                                    :height 640
                                                    :max-height "60vw"}
                                                   "5kE30bZmiyw")]
   (lh/sectitle "#transcript")
   (lh/as-md (rc/inline "./transcript.md"))

   ])


(defn pull-scroll! []
  (swap! app-state
         update-in [:windowScrollY]
         #(aget js/window "scrollY"))
  (swap! app-state
         update-in [:scrollPercent]
         #(aget js/window "scrollY")
         #(/ (* -1 (:windowScrollY @app-state))
             (aget js/window "outerHeight"))))

(defn stop []
  (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (js/window.addEventListener "scroll" pull-scroll!)
  (js/window.addEventListener
   "resize"
   (fn []
     (swap! app-state
            update-in [:windowHeight]
            #(aget js/window "outerHeight"))
     (swap! app-state
            update-in [:windowWidth]
            #(aget js/window "outerWidth"))))
  (js/setInterval
   (fn [] (swap! app-state
                 update-in [:elapsed]
                 #(+ % 8)))
   8)

  (rdom/render [app] (.getElementById js/document "app"))
  (.forEach (.querySelectorAll js/document "pre code")
            js/window.hljs.highlightBlock))
(defn ^:export init [] (start))
