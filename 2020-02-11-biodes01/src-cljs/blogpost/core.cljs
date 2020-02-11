(ns blogpost.core
  (:require [clojure.string :as string]
  [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0 }))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn layout []
  [:div {:id "layout"}
   [:article {:id "mainarticle"}
    [:h1 "2020-02-11-biodes01"]

    [:section
     [:p "for this blog post, we are supposed to list some ideas for projects we would like to do as part of the course."]
     [:p "i took this course to learn more about food systems, as my knowledge of how the industrial/political/cultural infrastructure shapes what i eat is limited so i am not as enthusiatic about speculative design work proposing alternative foods without more confidence in my awareness of the technicalities that perpetuate the current system."]
     [:p "i am doing a thesis on the relationship between maintenance and technics, so i would really like to do a study of the calibration and regulation labor of current food manufacturing automation equipment, especially if it is possible to study cases before and after, like Zuboff's 'In the Age of the Smart Machine: The Future of Work and Power'"]
     [:p "hopefully this is not the future of food for humans, but i have also been very curious about biomining and struggling to find resources/literature on it."]
     [:p "i have also been interested in vertical/urban growing systems, but i am repeatedly confused (and sometime disappointed) by the dependence on the amount of electrical energy necessary to implement them. "]
     [:p "i have also been at a loss thinking about film plastics, which i mostly encounter via food related experiences. i am not that enthuastic about alternative plastics that, because i think when there lack of durability or high cost of manufacturer, the inevitability is that it the research is mostly productionized in the form of a new luxury commodity market that further develops the sophistication and longevity of the green capitalism / greenwashing complex. i guess on one end, i'm interested in experimenting with discarded film plastics (although all my informal experiments with it and mycelium have failed) and learning more about the regulation or economics that sustain the plastic packaging industry."]]
    [:div {:id "disqus_thread"}]]]
)

(defn start []
  (r/render-component
    [layout]
    (.getElementById js/document "root")))
