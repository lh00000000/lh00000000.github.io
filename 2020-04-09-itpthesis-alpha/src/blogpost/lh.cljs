(ns blogpost.lh
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [blogpost.lhimg :as lhimg]
            [blogpost.constants :as c]))

(defn with-keys
  ([keyextract children] (map-indexed (fn [i c] [:<> {:key (keyextract i c)} c]) children))
  ([children] (with-keys (fn [i c] i) children)))


(defn img [src alt]
  (let [inline (r/atom true)]
    (fn []
      (apply (if @inline lhimg/inline lhimg/zoomed)
             [(fn [] (swap! inline not))
              src
              alt]))))


(defn flexcols [cols & items]
  [:div
   {:class "flexcols"
    :style
    {:display "flex"
     :flex-wrap "wrap"}}
   (map
    #(-> [:div {:style {:flex (str (/ 98 cols) "% 0 1")}} %])
    items)])


(defn extension [s]
  (str (last (str/split s #"\."))))

(defn iframe [src]
  
  [:iframe {:src src
            :style {:width "100%"
                    :height "100%"
                    }
            }]
  )

(defn audio [src]
  [:audio {:controls "controls" :style {:width "100%"}}
   [:source {:src src :type (str "audio/" (extension src))}]])

(defn video [src]
  (let [video-type (str "video/ " ((extension src)
                                   (hash-map "mov" "mp4")))]
    [:video {:width "100%" :controls "controls"}
     [:source {:src src :type video-type}]]))

(defn code
  ([lang wrap codestr]
   (let [wrap-style (if wrap {:word-break "break-word" :white-space "pre-wrap"} {})
         code-style (merge {:display "block" :width "100%"} wrap-style)]
     [:pre {:style {:width "100%"}}
      [:code {:style code-style
              :class lang} codestr]]))
  ([lang codestr] (code lang false codestr)))

(def -s- [:span (str/join
                 (concat
                  (repeat 4 c/nbsp)
                  [c/paragraph-symbol]
                  (repeat 4 c/nbsp)))])


(defn span [text]
  [:<> (with-keys (concat
              (map
               #(-> [:span %])
               (interpose c/nbsp (str/split text " ")))
              [[:span {:key (str text "-endspan ")} c/nbsp]])
    )]
  )

(def br [:div {:style {:width "100%" :height 8}}])

(defn link [href text]
  (with-keys (concat
              (map #(-> [:a {:href href :target "_blank"} [:span %]])
                   (interpose c/nbsp (str/split text " ")))
              [[:span c/nbsp]])))

(defn blankdiv [width height]
  [:div {:style {:width width :height height}}])

(defn sectitle [sec-title]
  [:div {:id (subs sec-title 1)
         :class "sectitle"
         :style {:padding 2}}

   [:a {:href sec-title
        :style {:color "black"
                :text-decoration "none"}}

    [:h2 {:style {:position "relative"
                  :top 0
                  :margin 8
                  :left 0}}
     (str sec-title c/nbsp)]]])
(defn is-sectitle? [vec]
  
  (and
   (= (count vec) 3)
   (= "sectitle" (get-in vec [1 :class]))
  ;;  (= js/Function (type (vec 0)))
  ;;  (= (count vec) 2)
  ;;  (= js/String (type (vec 1)))
  ;;  (= "#" (get-in vec [1 1]))
   )
  )

(defn section-menu [section-titles]
  [:div {:style {:position "sticky"
                 :top 0
                 :margin-left 4
                 :padding 2
                 :max-width 300
                 :text-align "center"}}
   [:span "("]
   [:span [:b "sections: "]]
   (with-keys (interpose [:span " / "]
                         (map
                          (fn [section-title]
                            (let [hashed (str "#" section-title)]
                              [:span [:a {:href hashed} hashed]]))
                          section-titles)))
   [:span ")"]])

(defn breakout []
  (fn [& children]
    [:div {:style {:width "100%"
                   :height "100%"
                   :display "flex"
                   :flex-direction "row"
                   :justify-content "center"
                   :align-items "flex-start"
                   :align-content "flex-start"
                   :overflow "visible"}}
     
     [:div
      {:style {:position "relative"
               :top 0
               :left 0}}
      [:div {:style {:position "absolute"
                     :left "-50vw"
                     :top 0
                     :width "100vw"
                     :display "flex"
                     :flex-direction "row"
                     :justify-content "center"
                     :align-items "flex-start"}}

       (with-keys children)]]
     [:div ""]
     ]))


(defn spilled [ title & children]
  (let [section-titles 
        (->> children
             (filter is-sectitle?)
             (map #(get-in % [1 :id]))
             )
        ]
   [:main
    [:article
     {:style {:display "flex"
              :flex-direction "row"
              :flex-wrap "wrap"
              :align-content "flex-start"
              :align-items "center"}}
     [:h1 title]
     (section-menu section-titles)
     (with-keys children)]
    (blankdiv 10 300)])
  )
