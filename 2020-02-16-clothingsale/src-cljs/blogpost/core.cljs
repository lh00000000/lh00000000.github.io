(ns blogpost.core
  (:require [clojure.string :as string]
  [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0 }))
(defn up! [] (swap! app-state update-in [:count] inc))
(def assets (hash-map "IMG_2289" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2289.jpg" "IMG_2288" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2288.jpg" "IMG_2292" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2292.jpg" "IMG_2286" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2286.jpg" "IMG_2287" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2287.jpg" "IMG_2293" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2293.jpg" "IMG_2285" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2285.jpg" "IMG_2291" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2291.jpg" "IMG_2290" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2290.jpg" "IMG_2284" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2284.jpg" "IMG_2294" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2294.jpg" "IMG_2295" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2295.jpg" "IMG_2283" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2283.jpg" "IMG_2282" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2282.jpg" "IMG_2296" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-16-clothingsale/IMG_2296.jpg"))
(defn asset-img [assetsrc caption] [
:figure [:a {:href (assets assetsrc)} [:img {:alt caption :src (assets assetsrc) :width "100%"} ]]
[:figcaption caption]
])

(asset-img "IMG_2296" "")


(defn layout []
  [:div {:id "layout"}
   [:div {:style {:display "flex" :flex-direction "row" :flex-wrap "wrap"}}
    (asset-img "IMG_2289" "00LONGSLEEVE")
    (asset-img "IMG_2288" "01SHAWL")
    (asset-img "IMG_2292" "02TURTLENECK")
    (asset-img "IMG_2286" "03SHAWL")
    (asset-img "IMG_2287" "04SCARF")
    (asset-img "IMG_2293" "05TSHIRT")
    (asset-img "IMG_2285" "06LONGSLEEVE")
    (asset-img "IMG_2291" "07LONGSLEEVE")
    (asset-img "IMG_2290" "08LONGSLEEVE")
    (asset-img "IMG_2284" "09SCARF")
    (asset-img "IMG_2294" "10TSHIRT")
    (asset-img "IMG_2295" "11LONGSLEEVE")
    (asset-img "IMG_2283" "12SCARF")
    (asset-img "IMG_2282" "13SCARF")
    [:div {:style {
     :width "25vw" :height "25vw" :background-color "black"
     :position "relative"
     :top 0
     }}

     [:p {:style {:word-break "break-all" :color "white"
     :position "absolute"
     :bottom "0"
     :margin "0"

     }} "EMAIL:LH00000000@GMAIL.COM"]
    ]
   ]
  ]
)

(defn start []
  (r/render-component
    [layout]
    (.getElementById js/document "root")))
