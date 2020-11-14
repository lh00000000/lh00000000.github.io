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
(def assets (hash-map "s-l1600-(5)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(5).jpg" "s-l1600-(4)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(4).jpg" "s-l1600-(8)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(8).jpg" "s-l1600-(3)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(3).jpg" "s-l1600-(2)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(2).jpg" "s-l1600-(1)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(1).jpg" "s-l1600" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600.jpg" "s-l1600-(7)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(7).jpg" "s-l1600-(6)" "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-07-pptd/s-l1600-(6).jpg"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-03-07-pptd"]

    [:section
     [:h2 "pianodisc cpu"]
     [:p "branson piano selling pianodisc cpu unit on ebay. "]
     [:a {:href "https://web.archive.org/web/20200308032907/https://www.ebay.com/itm/PianoDisc-CPU-Removed-from-working-system-Hard-to-find-Upgrade-about-2000-/202916667473?ul_noapp=true&nma=true&si=eeMUSZAnz9SjJH1gPbH3m3oqCew%253D&orig_cvip=true&nordt=true&rt=nc&_trksid=p2047675.l2557"} "wayback"]
     (asset-img "s-l1600-(5)" "")
     (asset-img "s-l1600-(4)" "")
     (asset-img "s-l1600-(8)" "")
     (asset-img "s-l1600-(3)" "")
     (asset-img "s-l1600-(2)" "")
     (asset-img "s-l1600-(1)" "")
     (asset-img "s-l1600" "")
     (asset-img "s-l1600-(7)" "")
     (asset-img "s-l1600-(6)" "")

     (captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image")]

    [:section
     [:h2 "interaction"]
     [:p (str "count: " (:count @app-state))]
     [:button {:on-click up!} "up"]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
