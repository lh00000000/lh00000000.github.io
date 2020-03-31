(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [blogpost.quotes :as q]
            ))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure {:class "captioned-img"}
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])

(defn flexcols [cols & items]
  [:div {:style {:max-width "90vw"
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

(def assets (hash-map "IMG_3093" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3093" "IMG_3087" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3087" "IMG_3080" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3080" "IMG_3082" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3082" "Photo-Feb-3,-2020-at-25025-PM" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/Photo-Feb-3,-2020-at-25025-PM" "IMG_3628" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3628" "IMG_3089" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3089" "IMG_3101" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-30-movepiano/IMG_3101"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))



(defn start []
  (r/render-component
   (toc "2020-03-30-movepiano"
        [:div
          [:p "some notes on moving a \"free\" craiglist piano."]
          [:div
            {:class "clpost"}
            (asset-img "Photo-Feb-3,-2020-at-25025-PM" "here's the CL post for the piano")
           ]
        ]
        (tsection "quotes" q/quotes-div)
        (tsection "load"
          [:p "move took place on 2020-02-16 (lol late posting)"]
          (flexcols 3
            (asset-img "IMG_3080" "prev owner taking parts off")
            (asset-img "IMG_3087" "cool truck")
            (asset-img "IMG_3082" "strapping up")
            (asset-img "IMG_3089" "into the truck")
            (asset-img "IMG_3093" "in destination")
            (asset-img "IMG_3101" "opened up")
            (asset-img "IMG_3628" "w tuning tools")
          )
        )
        )
   (.getElementById js/document "root")))
