(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.constants :as c]
            [blogpost.lh :as lh]
            [blogpost.draw :as draw]
            [blogpost.signal :as signal]
            ["showdown" :as showdown]
            [shadow.resource :as rc]
            [markdown-to-hiccup.core :as md2hic]
            [clojure.zip :as z]
            ))

(def app-state (r/atom {:windowScrollY 0
                        :scrollPercent 0 
                        :elapsed 0
                        }))

(def markdowntest (rc/inline "./markdowntest.md"))
(defn app []
  [lh/spilled {:title "{{blogId}}"
               :section-titles ["thestore"  "floozies" "thestory" "history" "faq"]}


   [lh/sectitle "thestore"]
   
   
   (lh/span "We speak in the store, I'm a sensitive bore")
   (lh/span "You seem markedly more and I'm oozing surprise")
   (-> (md2hic/md->hiccup markdowntest)
       (md2hic/component))
   lh/-s-
   (lh/span "But it's late in the day and you're well on your way")
   [draw/black-line
    {:d (signal/svg-sig-path
         {:ampx 3 :ampy 3}
         (signal/complex-sig (fn [perc] (/ (mod (* 30 perc) 12) 12) )))}]
   (lh/span "What was golden went gray and I'm suddenly shy")

   [lh/sectitle "floozies"]
   (lh/span "And the gathering floozies afford to be choosy")
   
   [lh/img "https://ephemeralnewyork.files.wordpress.com/2009/01/sailorsandflooziesfit.jpg" "floozy"]
   (lh/span "And all sneezing darkly in the dimming divide")
   
   lh/-s-
   (lh/span "And I have read the right book to interpret your look")
   (lh/span "You were knocking me down with the palm of your eye")

   [lh/sectitle "thestory"]
   (lh/span "This is unlike the story, it was written to be")
   (lh/span "I was riding its back when it used to ride me")
   lh/-s-
   (lh/span "And we were galloping manic to the mouth of the source")
   (lh/span "We were swallowing panic in the face of its force")
   [lh/img "https://images.homedepot-static.com/productImages/42523fba-6d7d-4968-a559-ecbc891cc59f/svn/dewalt-power-tool-batteries-dcb200-64_1000.jpg" "the force"]
   
   [lh/sectitle "history"]
   (lh/span "And I am blue")
   (lh/span "I am blue and unwell")
   (lh/span "Made me bolt like a horse")
   lh/-s-
   (lh/span "Now it's done")
   (lh/span "Watch it go")
   (lh/span "You've changed so")
   (lh/span "Water runs from the snow")
   
   [lh/sectitle "faq"]
   (lh/span "And am I so dear?")
   (lh/span "Do I run rare?")
   (lh/span "You've changed so")
   (lh/link "https://www.mcmaster.com/" "Peach, plum, pear")
   lh/-s-
   (lh/link "https://www.mcmaster.com/" "Peach, plum")
   
   (lh/code "python"  "print('hello')")
   ]
  )


(defn pull-scroll! []
  (swap! app-state
         update-in [:windowScrollY]
         #(aget js/window "scrollY"))
  (swap! app-state
         update-in [:scrollPercent]
         #(aget js/window "scrollY")
         #(/ (* -1 (:windowScrollY @app-state))
             (aget js/window "outerHeight")
             )
         )
  )

(defn stop []
  (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (js/window.addEventListener "scroll" pull-scroll!)
  
  (js/setInterval 
   (fn [] (swap! app-state 
                 update-in [:elapsed]
                 #(+ % 8)
                 ))
   8
   )
  (rdom/render [app] (.getElementById js/document "app"))
  
  (.forEach (.querySelectorAll js/document "pre code")
            js/window.hljs.highlightBlock
            )
  )
(defn ^:export init [] (start))
