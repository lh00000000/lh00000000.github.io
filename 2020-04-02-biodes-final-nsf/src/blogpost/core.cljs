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
 :transcript
 [:iframe
  {:style {:max-width "800px"
           :width "98vw"
           :height "800px"}
   :src "https://docs.google.com/document/d/e/2PACX-1vThWxed-ikeVtAaSS_83WM9rAvTYNGvmj-ZzW857ArL8ofZf3fcMVs_PwLhceaWYZFfRlyDxNS6hpMv/pub?embedded=true"}])

(c/new-section!
 :slides
 [:iframe {:src "https://docs.google.com/presentation/d/e/2PACX-1vQgZvu6pW4pgNfwJU0JVkoFOE0SEG0PEeSg-trY95OvoRvA7S4IRZbFPKGZOteAfJxvAbyxGpn_eBBg/embed?start=true&loop=true&delayms=500", :frameborder "0"
           :style {:max-width "98vw"}
           :width "960"
           :height "569"
           :allowfullscreen "true"
           :mozallowfullscreen "true"
           :webkitallowfullscreen "true"}])

(def pixsrcs
  ["https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/3dfillpedlip-png"
   "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/2020-03-05-png"
   "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/multi-stl-png"
   "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/papersketch.jpg"
   "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/attempt-wegmans-png"
   
;    "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/3dfillpedlip-png"
; "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/2020-03-05-png"
; "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/multi-stl-png"
; "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/papersketch.jpg"
; "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/attempt-wegmans-png"
   ]
  )


(def downloadsrcs 
(str/split "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/iso-01.3dm
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-02-biodes-final-nsf-files/iso-one.3dm" #"\n")
  
  )

(c/new-section!
 :downloads
 [:p "i used this as incentive to finally finish tutorials of using rhino (although i now know that i should have probably went with a traditional CAD system like fusion360 or something)"]
 
 (map #(-> [:a {:href %} (str
                          
                          (last (str/split % #"/"))
                          )]) downloadsrcs)
 )
(c/new-section!
 :pix
 (apply c/flexcols
        (cons 2 (map #(c/captioned-img % "") pixsrcs))))

(defn app []
  [c/toc-article {:title "2020-04-02-biodes-final-nsf"
                  :summary [:p [:span "documentation of what i presented for my final project for "]
                            [:a {:href "http://www.stefanibardin.net/biodesign2020/"} "biodesigning the future of food"]
                            [:span " a truncated version of the typical class offered regularly at ITP. "]]
                  :sections [
                             :slides
                             :transcript
                             :pix
                             :downloads
                             ]}])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
