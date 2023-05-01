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

  [:article
   {:style {:display "flex"
            :flex-direction "column"
            :align-items "center"}}

   [:section {:id "summary" 
              :style {
                      :display "flex" 
                      :flex-direction "column" 
                      :align-items "center"}}
    [:h1 post-title]
    [:div  summary]]
   [:div
    {:id "table-of-contents"
     :style {:position "sticky"
             :top "0"}}
    (let [titlecodes (cons "summary" (map :title sections))]
      [:p {:style {:text-align "center"}}
       (interpose [:span " / "]
                  (map
                   #(-> [:span [:a {:href (str "#" %)} %] ])
                   titlecodes))])]
   (map :section sections)
   [:div {:style {:height "300px"}}]])

(defn tsection [titlecode & contents]
  {:title titlecode
   :section
   [:section
    {:id titlecode
     :class "tsection"
     :style {:display "flex"
             :flex-direction "column"
             :align-items "center"}}
    [:h3 {:style {:position "sticky"
                  :top "40"}} titlecode]
    contents]})

(def lorem
  (tsection "lorem"
            [:p "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
            (captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image")))

(def interaction
  (tsection "interaction"
            [:p (str "count: " (:count @app-state))]
            [:button {:on-click up!} "up"]))

(def pix
  (tsection
   "pix"
   (flexcols 4 (captioned-img
                "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2213.jpg"
                "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2212.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2215.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2214.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/B91DD900-BA91-45D6-BC85-1A5F3BC04A95.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2217.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2219.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2224.png"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2220.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2221.jpg"
              "")
             (captioned-img
              "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-03-31-containerhome/IMG_2222.jpg"
              ""))))
(def notes
  (tsection "notes"
            [:div
             (map (fn [s] [:p {:style {:margin 0}} s])
                  ["hanging system for plants on roof"
                   "many solar panels. to battery. windmill to grid. "
                   "center floor is large living room office space"
                   "concrete heating system repeated"
                   "emphasis on thermal and insulate paint. not much treatment."
                   "soft roof problem. added concrete and other containers. "
                   "high insulation -> humid and hot with slow change"
                   "regular basement living quarters"
                   "lotek said \"other house is just a bunch of containers\""
                   "gave me \"intermodal shipping container small steel buildings by paul sawyers\""
                   "michele bertomen - NYIT architecture prof. \"Waste, Michele believe, is *the* problem of our times; it is also one that cannot adequately be addressed through the curtailing of consumption.\" - Vossoughian obit. died 2013. moved in 2012?"
                   "2008 bought land. "
                   "2010 (two years) built. "
                   "2013 bertomen passes. "
                   "2inch concrete left -> slate (fire containment code)"])]))

(defn start []
  (r/render-component
   (toc "2020-03-31-containerhome"
        [:p [:span "on 2020-01-03 i stayed in "]
         [:a {:href "https://www.airbnb.com/rooms/699472?source_impression_id=p3_1585631084_XFJcLGCoyEb00INA"} "\"NYC 1st Shipping Container Home\""]
         [:span " by booking it on airbnb. after walking by it many times and repeatedly looking at the airbnb listing, i noticed one day that the rate was $99 when it is normally around $220."]]
        notes
        pix)
   (.getElementById js/document "root")))
