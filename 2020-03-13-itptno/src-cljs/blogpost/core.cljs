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


(def assets (hash-map "8" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/8" "9" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/9" "12" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/12" "11" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/11" "10" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/10" "4" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/4" "5" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/5" "7" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/7" "6" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/6" "2" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/2" "3" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/3" "1" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/1"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))

(def assets (hash-map "09BA0B48-9F08-45B3-98AA-A817211F7749" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/09BA0B48-9F08-45B3-98AA-A817211F7749" "IMG_3018" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/IMG_3018" "IMG_3021" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/IMG_3021" "IMG_3015" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/IMG_3015" "IMG_3014" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/IMG_3014" "IMG_3017" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/IMG_3017" "CB16F8F8-4061-47B5-87DE-6B6751BA5F33" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/CB16F8F8-4061-47B5-87DE-6B6751BA5F33" "8" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/8" "9" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/9" "12" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/12" "11" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/11" "10" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/10" "4" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/4" "5" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/5" "7" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/7" "6" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/6" "2" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/2" "3" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/3" "1" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-13-itptno/1"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn minigallery [cols & items]
  [:div {:style {;;  :border "1px solid blue"
                 :max-width "90vw"
                ;;  :width "90%"
                 :display "flex"
                 :flex-wrap "wrap"}}
   (map (fn [d] [:div {:style {:flex (str (/ 98 cols) "% 0 1")}} d]) items)])

(def corona [:section
             [:h2 "2020-03-12-remoteno"]
             (minigallery 3
                          (asset-img "8" "")
                          (asset-img "9" "")
                          (asset-img "12" "")
                          (asset-img "11" "")
                          (asset-img "10" "")
                          (asset-img "4" "")
                          (asset-img "5" "")
                          (asset-img "7" "")
                          (asset-img "6" "")
                          (asset-img "2" ""))])
(def karaoke [:section
              [:h2 "2020-02-06-karaoke"]
              
              [:img {:alt "" :src (assets "3") :width "100%"}]
              [:a {:href "https://luminghao.com/2020-02-10-karaliao"} "2020-02-10-karaliao"]
              ])
(def wegno [:section
            [:h2 "2020-02-11-wegmans"]
            (asset-img "1" "")


            (asset-img "CB16F8F8-4061-47B5-87DE-6B6751BA5F33" "")

            (minigallery 4
                         (asset-img "IMG_3014" "")
                         (asset-img "IMG_3015" "")
                         (asset-img "IMG_3018" "")
                         (asset-img "IMG_3017" "")
                         (asset-img "09BA0B48-9F08-45B3-98AA-A817211F7749 " ""))
            (asset-img "IMG_3021" "")])
(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-03-13-itptno"]

    karaoke
    wegno
    corona
    ]
   [:div {:style {:height "400px"}} [:p ""]]
   ])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
