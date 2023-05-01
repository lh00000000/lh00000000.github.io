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

(def imgs (map #(-> [lh/img % (-> %
                                  (str/split "/")
                                  (last))])
               (str/split-lines (rc/inline "./imgs.txt"))))
(def quotes (map #(-> [:p.inline [:i (str/trim-newline %)]])
                 (str/split-lines (rc/inline "./quotes.txt"))))


(defn app []
  [lh/spilled
   "2020-05-28-quar"
   (lh/sectitle "#nosec")
   (->> imgs (take 12))
   (nth quotes 0)
   (->> imgs (drop 12) (take 4))
   [lh/audio "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-05-28-quar/2020-05-19-grad-alley.wav"]
   (->> imgs (drop 16) (take 8))
   (nth quotes 1)
   (->> imgs (drop 24) (take 6))
   [lh/audio "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-05-28-quar/2020-05-23-harp-bluebird.wav"]
   (->> imgs (drop 30) (take 2))
   (nth quotes 2)
   (->> imgs (drop 32) (take 10))
   (nth quotes 3)
   (->> imgs (drop 42) (take 10))
   
   
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
