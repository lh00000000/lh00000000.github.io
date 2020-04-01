(ns blogpost.components
  (:require [clojure.string :as str]))
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
  (str (last (str/split s #"\."))))

(defn audio [src]
  [:audio {:controls "controls" :style {:width "100%"}}
   [:source {:src src :type (str "audio/" (extension src))}]])

(defn video [src]
  (let [video-type (str "video/ " ((extension src)
                                   (hash-map "mov" "mp4")))]
    [:video {:width "100%" :controls "controls"}
     [:source {:src src :type video-type}]]))



(defn article-section [{:keys [title]} children]
  (fn []
    [:section
     {:id title
      :class "tsection"
      :style {:display "flex"
              :flex-direction "column"
              :align-items "center"
              :border-top "4px solid black"
              :padding-bottom 16
              :margin-bottom 8
              }}
     
     [:h3 {:style {:position "sticky"
                   :top 30}} title]
     
     (for [[idx item] (map-indexed vector children)]
      ^{:key (str "article-section-child" title idx)}
       item
       )
     ]
    )
  )


(def sections-atom (atom {}))
(defn new-section! [title-keyword & contents]
  (swap! sections-atom
         #(merge %
                 {title-keyword {:title (name title-keyword)
                                 :contents [article-section
                                            {:title (name title-keyword)}
                                            contents]}})))


(defn toc-article [{:keys [sections title summary]}]
  (fn []
    (let [section-records (map #(% @sections-atom) sections)]
      [:article
       {:style {:display "flex"
                :flex-direction "column"
                :align-items "center"}}

     ;top section
       [:section {:id "summary"
                  :style {:display "flex"
                          :flex-direction "column"
                          :align-items "center"}}
        [:h1 title]
        [:div summary]]

     ; sticky toc 
       [:div
        {:id "table-of-contents"
         :style {:position "sticky"
                 :top 0}}
        (let [titlecodes (cons "summary" (map :title section-records))]
          [:p {:style {:text-align "center"}}
           (let [spancontents (interpose " / "
                                         (map
                                          #(-> [:a {:href (str "#" %)} %])
                                          titlecodes))]

             (map-indexed (fn [idx itm] ^{:key (str "jumper-" idx itm)} [:span itm]) spancontents))])]


       (for [{:keys [title contents]} section-records]
         ^{:key (str "toc-article-section-" title)} contents)
       
       [:div {:style {:height 80}}]
       ])
    ))
