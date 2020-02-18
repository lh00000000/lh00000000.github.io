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
(def assets (hash-map "IMG_2714" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2714.jpg" "IMG_2728" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2728.jpg" "IMG_2729" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2729.jpg" "IMG_2715" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2715.jpg" "IMG_2717" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2717.jpg" "IMG_2716" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2716.jpg" "IMG_2713" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2713.jpg" "IMG_2739" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2739.jpg" "IMG_2738" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2738.jpg" "IMG_2735" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2735.jpg" "IMG_2721" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2721.jpg" "IMG_2720" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2720.jpg" "IMG_2734" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2734.jpg" "IMG_2722" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2722.jpg" "IMG_2736" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2736.jpg" "IMG_2737" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2737.jpg" "IMG_2723" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2723.jpg" "IMG_2727" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2727.jpg" "IMG_2733" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2733.jpg" "IMG_2732" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2732.jpg" "IMG_2718" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2718.jpg" "IMG_2730" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2730.jpg" "IMG_2724" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2724.jpg" "IMG_2725" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2725.jpg" "IMG_2731" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2731.jpg" "IMG_2719" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2719.jpg" "IMG_2742" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2742.jpg" "IMG_2743" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2743.jpg" "IMG_2741" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2741.jpg" "IMG_2740" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2740.jpg" "IMG_2744" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-pptreasury/IMG_2744.jpg"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-pptreasury"]

    [:section
     [:p 
      [:span "lucky to find out nyu's library had a copy of 'Player Piano Treasury: The Scrapbook History of the Mechanical Piano in America'"]
      [:span "wanted to post some weird/fucked-up things i saw while flipping through it initially"]
      ]
     (asset-img "IMG_2714" "")
     (asset-img "IMG_2715" "")
     (asset-img "IMG_2716" "")
     (asset-img "IMG_2717" "")
     (asset-img "IMG_2718" "")
     (asset-img "IMG_2719" "")
     (asset-img "IMG_2720" "")
     (asset-img "IMG_2721" "")
     (asset-img "IMG_2722" "")
     (asset-img "IMG_2723" "")
     (asset-img "IMG_2724" "")
     (asset-img "IMG_2725" "")
     (asset-img "IMG_2727" "")
     (asset-img "IMG_2728" "")
     (asset-img "IMG_2729" "")
     (asset-img "IMG_2730" "")
     (asset-img "IMG_2731" "")
     (asset-img "IMG_2732" "")
     (asset-img "IMG_2733" "")
     (asset-img "IMG_2734" "")
     (asset-img "IMG_2735" "")
     (asset-img "IMG_2736" "")
     (asset-img "IMG_2737" "")
     (asset-img "IMG_2738" "")
     (asset-img "IMG_2739" "")
     (asset-img "IMG_2740" "")
     (asset-img "IMG_2741" "")
     (asset-img "IMG_2742" "")
     (asset-img "IMG_2743" "")
     (asset-img "IMG_2744" "")
     ]

    ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
