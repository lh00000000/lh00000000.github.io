(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.components :as c]))

(def app-state (r/atom {:count 0
                        :sections []}))
(defn up! [] (swap! app-state update-in [:count] inc))
(def srcs  (str/split "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2978.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2993.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2987.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2986.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2992.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2945.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2951.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2979.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2947.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2953.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2984.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2990.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2991.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2985.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2952.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2946.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2942.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2956.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2981.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2995.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2994.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2957.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2943.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2955.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2996.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2982.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2983.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2968.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2954.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2933.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2927.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2926.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2918.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2924.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2930.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2931.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2925.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2919.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3008.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2935.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2908.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2920.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2936.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2922.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2923.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2937.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3007.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2912.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2907.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2913.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3006.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3004.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2939.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2911.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3005.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3001.jpg

https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2914.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2928.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2929.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_3002.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2917.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2903.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2916.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2959.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2971.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2965.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2964.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2970.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2958.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/8C896035-078F-4410-B6DE-2F8A9E6BC967.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2966.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2972.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2999.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2973.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2963.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2977.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2988.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2989.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2976.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2974.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2960.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2948.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/IMG_2961.jpg"
                      "\n"))
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

; https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-02-13-treasuresinthetrash/story.txt

(def title "TREASURES IN THE TRASH")


(defn rand-size-img [src]
  [:img {:src src
         :style {:position "relative"
                 :left (->
                        (rand-int 4)
                        (* 16))
                 :top (->
                       (rand-int 4)
                       (* 16))
                 :width (->
                         (rand-int 8)
                         (+ 3)
                         (* 64))}}])

(defn sticky-letter [letter i]
  [:div {:style {:flex-basis "100vw"
                 :position "sticky"
                 :top "40vh"
                 :z-index 999}}
   [:div {:style {:margin-left  (str (* i (/ 100 (count title))) "vw")

                  :background-color "black"
                  :width "30px"
                  :height "30px"
                  :display "flex"
                  :justify-content "center"
                  :align-items "center"
                  :border-radius "50%"}}
    [:p {:style {:font-family "Helvetica"
                 :color "white"
                 :text-align "center"}} letter]]])


(defn stream-to-picks [type-stream]
  (:buffer (reduce
            (fn [before r]
              (let [current-count (get before r 0)]
                (merge before {r (+ 1 current-count)

                               :buffer (conj (:buffer before) [r current-count])})))

            {:buffer []}
            type-stream)))
(def scrambled (shuffle (concat (map #(-> :letter) (str/split title "")) (map #(-> :image) srcs))))
(def notelookup
  {:letter (into (vector) (map-indexed (fn [i l] (sticky-letter l i)) (str/split title "")))
   :image  (into (vector) (map rand-size-img srcs))})
(defn app []

  [:div {:style {:min-height "100vh"}}
   [:div {:style {:position "fixed"
                  :bottom 0
                  :z-index 999
                  :width 300
                  :font-size 10
                  :background-color "rgba(255,255,255, 0.7)"
                  :border-radius "0px 16px 0px 0px "}}
    [:p [:span "2020-02-13 i was luckily invited to a showing of the treasureds in the trash museum as a thank you for donating to the dsny's nonprofit \""]
     [:a {:href "https://www.nycstrongest.org/"} "The Foundation for New York's Strongest"]
     [:span "\". the museum is a collection of curated thematic displays of items mongo'd by Nelson Molina over his multi-decade career as a new york sanitation worker. "]]]


   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :flex-wrap "wrap"

                  :justify-content "space-evenly"
                  :align-items "center"}}
    (map
     (fn [[key idx]]
       (get-in notelookup [key idx]))
     (stream-to-picks scrambled))
    [:div {:style {:height "800px"}}]]]

  ; [c/toc-article {:title "2020-04-03-treasuresintrash"
  ;                 :summary [:p "summary"]
  ;                 :sections [:interaction :lorem :something]}]
  )

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
