(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.constants :as c]
            [blogpost.lh :as lh]
            [blogpost.draw :as draw]
            [blogpost.signal :as signal]
            ["showdown" :as showdown]))

(def app-state (r/atom {:windowScrollY 0
                        :scrollPercent 0
                        :elapsed 0
                        :windowHeight 0
                        :windowWidth 0}))

(def oneone (str "#" (str/join " " (repeat 88 1))))
;; (def badline "M10 0 L206.34 44.24L203.37 54.13L200.41 64.01L205.35 72.91L211.28 82.79L211.28 94.65L206.34 104.53L201.4 113.43L200.41 124.3L204.36 135.17L204.36 147.03L202.38 156.92L200.41 167.79L199.42 181.63L198.43 193.49L199.42 204.36L203.37 214.24L207.33 225.12L210.29 235.99L213.26 245.87L214.24 256.74L211.28 266.63L207.33 276.51L206.34 287.38L204.36 298.26L200.41 308.14L202.38 320L203.37 331.86L203.37 344.71L201.4 354.59L199.42 364.48L197.44 375.35L197.44 388.2L196.45 400.06L192.5 409.94L192.5 420.81L197.44 432.67L198.43 445.52L199.42 457.38L199.42 472.21L196.45 489.01L195.47 502.85L195.47 523.6L196.45 541.4L198.43 554.24L201.4 568.08L201.4 580.93L203.37 592.79L205.35 602.67L206.34 615.52L188.55 620.47")

(def badline (str
              "M 0 0 "
              (str/join " " (map
                             #(str "L " (* 10 (js/Math.random)) " " (* 2 %))
                             (range 800)))))
(defn medium-post [href]
  [:div
   {:style {:max-width "1080px"
            :width "100%"
            :height "50vh"}}

   (lh/iframe href)
   ])


(defn app []
  [lh/spilled "2020-04-09-itpthesis-alpha"
   [:div
    {:style {:position "fixed"
             :top 0
             :left 10}}

    (draw/black-line badline)
    ]
   (lh/span "last tuesday (2020-04-06), guest critics were invited to give feedback on the current state of our theses. ")


   (lh/sectitle "#frontpage")
   (lh/span "i decided to focus on getting the initial state of the non-backend software stuff going. ")
   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Photo-Apr-5,-2020-at-92946-PM.jpg" "sketch of page i wanted to do"]
   (lh/span "which included making the website (which was my first time using next js. wish i had known about it when i was fumbling about trying to get a lightweight usage of react for my blog posts before i switched to reagent) and some state of the blog posts. the next js took me a long time, because i couldn't decided if i wanted to try leaning into my new experience with reagent, keep things simple with gatsby js, or use next js hoping to also use the same repo for the admin stuff for managing the piano jobs later. i going with next.js for now.")

   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Screen-Shot-2020-04-07-at-7.49.22-AM.png" "front page w background of piano hammers"]
   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Screen-Shot-2020-04-07-at-7.49.32-AM.png" "loser.io as true genius"]
   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Screen-Shot-2020-04-07-at-7.49.29-AM.png" "three icons. computer keyboard, piano keyboard, analytics dashboard."]
   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Screen-Shot-2020-04-07-at-7.49.27-AM.png" "page w customer testimonial"]
   [lh/img "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-04-09-itpthesis-alpha/Screen-Shot-2020-04-07-at-7.49.33-AM.png" "public beta coming soon"]

   (lh/sectitle oneone)
   (lh/span "one of the three posts was a brief points-of-interest i'd like to do for a point on sampling/tapping/aliasing.")
   (medium-post "https://medium.com/loser-io-engineering-blog/1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-d4a686025d65")


   (lh/sectitle "#keycent")
   (lh/span "one of the three posts was a loose attempt for a piece i'd like to do on the parallels of centrality between the piano keyboard, the digital computer computer, logistical market / urban centers, and analytical epicenters of quantitative empires")
   (medium-post "https://medium.com/loser-io-engineering-blog/keyboard-at-the-center-f6bcd7c5d813")


   (lh/sectitle "#pianotechne")
   (lh/span "one of the three posts was a distillation of a couple of earlier attempts to outline the advantages of using the piano as a case study for the study of technology in general (i want to keep avoiding saying essence but it is very hard)")
   (medium-post "https://medium.com/loser-io-engineering-blog/the-piano-is-aharp-with-the-industrial-revolution-bolted-on-898d354a26b0")

   (lh/sectitle "#feedback")
   (lh/span "most of my feedback revolved around the question of designing instructively. we briefly discussed the riskiness of making the initial visual of a project the least content rich. i personally think placing a 'false facade' for this project is too fitting to otherwise focus on 'explaining the idea' too prematurely. opinions differed")])



(defn pull-scroll! []
  (swap! app-state
         update-in [:windowScrollY]
         #(aget js/window "scrollY"))
  (swap! app-state
         update-in [:scrollPercent]
         #(/ (:windowScrollY @app-state)
             (aget js/window "outerHeight"))))

(defn stop []
  (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (js/window.addEventListener "scroll" pull-scroll!)
  (js/window.addEventListener
   "resize"
   (fn []
     (swap! app-state
            update-in [:windowHeight]
            #(aget js/window "outerHeight"))
     (swap! app-state
            update-in [:windowWidth]
            #(aget js/window "outerWidth"))))

  (js/setInterval
   (fn [] (swap! app-state
                 update-in [:elapsed]
                 #(+ % 8)))
   8)
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
