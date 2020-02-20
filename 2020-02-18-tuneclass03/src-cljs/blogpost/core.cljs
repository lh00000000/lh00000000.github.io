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

(def assets (hash-map "IMG_2865" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-tuneclass03/IMG_2865.jpg" "IMG_2862" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-tuneclass03/IMG_2862.jpg"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-tuneclass03"]
    (asset-img "IMG_2862" "pointing at bridge pins")
    [:p "this fourth week, i finally got a chance to practice restringing."]
    [:section
     [:ol
      [:li "remove old string. cut pieces off as much as necessary."]
      [:li "get the tuning pins in the right position. line them up so they are the same height + loosen them by three turns. end with the hole at 1pm, so bending tension will hold string in place"]
      [:li "measure a bunch of string, more than enough, to reach from the edge of the plate to the hitch pin. use old string and micrometer to check for right gauge"]
      [:li "make a bend in the string"]
      [:li "cut double length string, cut off excess (four fingers from tuning pin) and thread through hitch pin + bridge + under capo etc"]
      [:li "thread through pin so it's flush. use string winding tool to guide string into three tight coils"]
      [:li "use pliers to squeeze bend in coil back in (called the beckett). "]
      [:li "tight coil by briefly loosening tension then using a coil lifter tool"]
      [:li "repeat process with other side of string"]
      [:li "when both sides are into coils (but without correct-pitch tension), tap coil with screwdriver and hammer to get them flat. and also tap the bend at the hitch pin (LIGHTLY) to 'set' the string"]]]
    
    (asset-img "IMG_2865" "my first coils (mine are the bad ones.)")]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
