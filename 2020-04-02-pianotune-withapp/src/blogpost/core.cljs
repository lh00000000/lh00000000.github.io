(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.components :as c]))

(def app-state (r/atom {:count 0
                        :sections []}))
(defn up! [] (swap! app-state update-in [:count] inc))

(c/new-section!
 :interaction
 [(fn [] [:div {:style {:margin-bottom 16}} [:span (str "count: " (:count @app-state))]])]
 [:button {:on-click up!} "up"]) =

(c/new-section!
 :lorem
 [:div {:style {:display "flex" :flex-direction "column" :align-items "center"}}
  (map #(-> [:p {:style {:width "auto"} :key %} %]) 
       ["Clatter, crash, clack!"
        "Racket, bang, thump!"
        "Rattle, clang, crack, thud, whack, bam!"])]
 (c/captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image"))

(c/new-section!
 :essay
 [:iframe 
  {:src "https://docs.google.com/document/d/e/2PACX-1vRpEWCDCszBwYknd9wzoG7M8R8NJS4yKYjTv2MUraqdGwAjDDUwxin_m1Xov6kChaSmIRxgyXImc3b_/pub?embedded=true"
   :style {
           :width "98vw"
           :max-width "720px"
           :height "80vh"
           }
   }
  ]
 )
(defn app []
  [c/toc-article {:title "2020-04-02-pianotune-withapp"
                  :summary [:p "i tried to summarize what i know about piano tuning so far by trying to imagine someone asking me if it is possible to tune a piano with an iphone tuning app (and a tuning hammer from amazon or something)."]
                  :sections [
                             :essay
                            ;  :interaction :lorem :something
                             ]}])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
