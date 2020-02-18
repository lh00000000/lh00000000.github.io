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
(def assets (hash-map "IMG_3092" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3092.jpg" "IMG_3093" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3093.jpg" "IMG_3087" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3087.jpg" "IMG_3091" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3091.jpg" "IMG_3085" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3085.jpg" "IMG_3084" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3084.jpg" "IMG_3090" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3090.jpg" "cl" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/cl.jpg" "IMG_3094" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3094.jpg" "IMG_3080" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3080.jpg" "IMG_3081" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3081.jpg" "IMG_3109" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3109.jpg" "IMG_3082" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3082.jpg" "IMG_3089" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3089.jpg" "IMG_3102" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3102.jpg" "IMG_3088" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3088.jpg" "IMG_3101" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3101.jpg" "IMG_3100" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-piano56202/IMG_3100.jpg"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-piano56202"]

    [:section
     [:h1 "i finally got a piano!"]
     [:p [:span "i finally got one of those ''''''''free'''''''' craiglist pianos everyone references in supposedly interesting conversational trivia. "]
      [:span "as you can guess from that first sentence, it was not free. it was $420 (including tip) to move it."]
      [:span "that was by-far the cheapest rate i could find after calling seven places (one, as i keep complaining about irl , chargers $66 per stair step). "]
      [:span "so honestly it seems like a good deal, considering it only took them an hour to get it down from a third story apartment, drive for 35 minutes, and then move it to specifically the place i wanted the piano to go. "]
      [:span "shout out to 'big piano movers'. thanks frank !"]
      
      ]
     [:p 
      [:span "shown here is how fucked the piano is, which is what i wanted but now i'm afraid. "]
      [:span "definitely an upgrade from being afraid that my inexperience with changing out strings will be punished with nyu drama from breaking one of their practice room piano's strings"]
      ]
     ]

    [:section 
     (asset-img "IMG_3092" "")
     (asset-img "cl" "the original listing. just want to say that someone else got to it before me, scheduled a mover, but then the mover bailed or something. a tip for anyone trying to schedule a piano mover to get a piano they aren't standing in front of is to ask for the height right away, as most movers price mostly based on upright height / grand length + number of stairs involved")
     (asset-img "IMG_3080" "the top of the piano had a bunch of felt and foam for muting strings that had fucked up alignments")
     (asset-img "IMG_3081" "found out later that this is called a skid board. the board was leaned on the stairs to be slid down slowly, i guess taking some of the weight downwards.")
     (asset-img "IMG_3082" "strapping in the piano on to the skid board")
     (asset-img "IMG_3084" "the piano was wrapped in saran wrap which seemed funny")
     (asset-img "IMG_3085" "watching ppl under a piano angled down towards them on a flight of stairs wasn't funny")
; (asset-img "IMG_3087" "")
     (asset-img "IMG_3088" "")
; (asset-img "IMG_3089" "")
     (asset-img "IMG_3090" "")
     (asset-img "IMG_3091" "")
     (asset-img "IMG_3093" "")
    ;  (asset-img "IMG_3094" "")
     (asset-img "IMG_3100" "")
     (asset-img "IMG_3101" "")
; (asset-img "IMG_3102" "")
     (asset-img "IMG_3109" "felt was jabbed into some strings because i guess their alignments were deemed to be lost causes. ")

     ]
    [:section [:p "if you are wondering, the piano was a little more than a half step down and i haven't tuned it yet because i'm trying to gradually raise everything together because i don't know how to do a proper pitch raise yet lmao. wish me luck"]]
    ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
