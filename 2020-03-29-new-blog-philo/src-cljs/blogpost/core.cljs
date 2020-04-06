(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])

(defn flexcols [cols & items]
  [:div {:style {:max-width "90vw"
                 :width "100%"
                 :display "flex"
                 :flex-wrap "wrap"}}
   (map (fn [d] [:div {:style {:flex (str (/ 98 cols) "% 0 1")}} d]) items)])

(defn extension [s]
  (string/lower-case (last (string/split s #"\."))))

(defn audio [src]
  [:audio {:controls "controls" :style {:width "100%"}}
   [:source {:src src :type (str "audio/" (extension src))}]])

(defn video [src]
  (let [video-type (str "video/ " ((extension src)
                                   (hash-map "mov" "mp4")))]
    [:video {:width "100%" :controls "controls"}
     [:source {:src src :type video-type}]]))
(def tweet "<blockquote class= \"twitter-tweet \" data-dnt= \"true \" data-theme= \"dark \"><p lang= \"en \" dir= \"ltr \">embed</p>&mdash; 00000000000000000000000000000000000000000000000000 (@lh00000000) <a href=\"https://twitter.com/lh00000000/status/1244181471314804737?ref_src=twsrc%5Etfw\">March 29, 2020</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>")
(def gist [:script {:src "https://gist.github.com/lh00000000/2250b8e23d362e11c0b32fc561528639.js"}]
  
  
  
  )

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-03-29-new-blog-philo"]
    [:iframe {:src "./iframing"
              :style {
                      :max-width "90vw"
                      :width "800px" 
                      :height "50vh"
                      }

              }]
    [:div {:style {:width "80vw"}}
     (flexcols 2 [:div [:p {:style {:width "100%"}} "🤞"]
                  [:div {:dangerouslySetInnerHTML {:__html tweet}}]
                  [:div [:iframe  {
                                   :class "noborder"
                                   :style {:height "300px"} :src "https://www.are.na/luming-hao/infrastructure-memes/embed"}]]
                  ; [:div gist]
                  ]
               [:div 
                
                [:iframe {
                          :src "https://docs.google.com/presentation/d/e/2PACX-1vSB8PzMU5-oOvPgTAqgizRicibPYnUpn7gGtsiOxZYeierTTqs72gOC6fLymEyz3eo2E73pqqHrz7S5/embed?start=false&loop=false&delayms=3000"
                          :width "100%"
                          :style { :height "50vh"}
                          }]
                ]
               )]
    ; [:div ()]
    ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
