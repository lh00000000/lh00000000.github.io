(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [blogpost.another :as ano]))

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
                 :display "flex"
                 :flex-wrap "wrap"}}
   (map (fn [d] [:div {:style {:flex (str (/ 98 cols) "% 0 1")}} d]) items)])

; todo: upstream
(defn extension [s]
  (string/lower-case (last (string/split s #"\."))))

; todo: upstream
(defn audio [src]
  [:audio {:controls "controls" :style {:width "100%"}}
   [:source {:src src :type (str "audio/" (extension src))}]])

; todo: upstream
(defn video [src]
  (let [video-type (str "video/ " ((extension src)
                                   (hash-map "mov" "mp4")))]
    [:video {:width "100%" :controls "controls"}
     [:source {:src src :type video-type}]]))


(defn toc [post-title summary & sections]
  [:div#layout
   [:article#mainarticle
    [:h1 post-title]

    [:section
     [:div summary]
     
     [:div
      
      (interpose [:span " / "] (map
                                (fn [{:keys [title]}] [:span [:a {:href (str "#" title)}
                                                              title]])
                                sections))]]
    (map :section sections)
    [:div {:style {:height "300px"}}]
    ]])

(defn tsection [titlecode & contents]
  {:title titlecode
   :section
   [:section {:id titlecode}
    [:h3 titlecode]
    contents]})


(def wavdemo
  (tsection
   "2chandemo"
   [:p "for the performance, i did a composition of linear interpolation between 8 breakpoints. here it is configured for a 2 channel system (stereo)."]
   [:div {:style {:width "80vw"}} (audio "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-27-compmusfinal-volley/2019-12-18-volley.wav")
    ]))

(def essay
  (tsection "essay"
  [:p [:i "below is an essay also submitted with the patch"]]
  [:p ano/essay])
  )

(def download
  (tsection "download"
            [:a {:href "https://lh00000000.nyc3.digitaloceanspaces.com/siteassets/2020-03-27-compmusfinal-volley/2020-03-28-volleypatch.zip"}
             "download max patch as zip"])
  )

(defn start []
  (r/render-component
   (toc "2020-03-27-compmusfinal-volley"
        [:p "things sent in on 2019-12-10 as my final assignment computer music fall 2019 nyu GSAS music dept."]
        wavdemo
        essay
        download
        )
   (.getElementById js/document "root")))
