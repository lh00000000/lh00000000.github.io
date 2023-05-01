(ns blogpost.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [blogpost.components :as c]))

(def app-state (r/atom {:count 0
                        :sections []}))
(defn up! [] (swap! app-state update-in [:count] inc))

(c/new-section!
 :interaction
 [(fn [] [:div {:style {:margin-bottom 16}} [:span (str "count: " (:count @app-state))]])]
 [:button {:on-click up!} "up"]) =

(c/new-section!
 :lorem
 [:div {:style {:display "flex" :flex-direction "column" :align-items "center"}}
  (map #(-> [:p {:style {:width "auto"} :key %} %])
       ["Clatter, crash, clack!"
        "Racket, bang, thump!"
        "Rattle, clang, crack, thud, whack, bam!"])]
 (c/captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image"))


(def aug-sims ["https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9292.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9286.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9279.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9325.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9319.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9318.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9324.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9287.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9293.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9285.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9291.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9326.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9327.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9290.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9284.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9280.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9294.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9323.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9322.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9295.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9281.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9297.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9283.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9308.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9320.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9321.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9309.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9282.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9296.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9304.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9310.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9311.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9305.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9298.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9313.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9307.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9306.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9312.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9299.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9289.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9316.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9302.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9303.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9317.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9288.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9329.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9301.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9315.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9314.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9300.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2019-08-09-sims/IMG_9328.jpg"])


(def feb-sims ["https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3185.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3184.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3190.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3179.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3186.png"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3178.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3183.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3168.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3169.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3182.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3180.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3181.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3173.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3167.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3166.jpg"
              ;  "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3172.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3164.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3170.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3171.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3165.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3175.png"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3174.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3189.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3176.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3163.jpg"
               "https://lh00000000-public.s3.amazonaws.com/do/siteassets/2020-02-21-sims/IMG_3177.jpg"])
(c/new-section!
 :notes
 [:div {:style {:max-width "99vw" :width 800}} (c/code "markdown" true "
* glass prices are low. recycling glass not profitable for city
* education efforts at sims are high because they know its a highly transient population
* sims is a sorter. MRF sells to \"converters\"
* after freshkills closed, waste sent to north carolina, ohio, pennsylvania
	* which costs NYC $350 million (a year?)
	* estimated that 200 million is compostable (....forgot to write unit)
* textiles are mostly not recyclable -> need to break down into fiber which is energy intensive
* 34% of waste stream is compostable
* concern is the methane that leaks into soil and air (greenhouse gas)
* paper/plastic recycled in sunset park. others in jersey
* NYC is the only major city with a dual stream (plastic is separated from paper)
	* single stream is normally chosen to get over recycling rate up
	* but then the quality of the recycled materials is lower, meaning the program is less likely to pay for itself
* sims is double redundant (there are two conveyor belt paths, exactly the same, so one can keep going if the other is down)
* The Liberator
	* a bag ripper and vacuum system to ripping open the plastic bags recycling is required to come in
	* why require plastic bags? there's not enough space for bins
* disc screens
	* row of spinning metal rods that whack open glass bottles
	* this is how the glass is separated
	* glass in paper product really destroys the price
	* advice: keep caps on all bottles. plastic bottles without caps can get shoved though, ruining the glass product. glass bottles with caps on are expected by the system.
	* metal is magnetized by drum magnet, which means it's flown into a catcher that expects metal
* trommel
	* rotating porous barrel
	* separate small metal from larger
* ballistic separater 
	* treated to get 2d from 3d (don't remember what this means)
	* so cartons shouldn't be flattened before putting them in recycling 
	* film plastics (like LDPE shopping bags) are hard to recycle. they're stretchy and clog the system, but so light in material it's hard to justify the energy needed to collect and recycle them. they're also very cheap to produce new so no one wants to buy it recycled
* optical sorter
	* uses spectroscopic camera (i think?) to guess material 
	* controls air pumps which flings items into proper catcher
	* if a bottle is 85% covered w paper, for example, the sorter might get confused
		* however, it samples objects at multiple points so avoid this
* cartons 
	* go into a \"delayer\" which turns it into a product of fluffy paper
	* this really only goes into making tissue paper, so it's a \"one-recycle cycle\" thing
* glass
	* mostly goes into construction aggregate
* coffee cups
	* not recyclable. they're paper but they're coated with polyetheyne (? or wax? i don't remember) . separating these two substances is very energy intensive, so the outcome is low quality paper and low quality plastic despite high electricity/fuel costs. so most places don't try to recycle them. ")])

(c/new-section!
 :febsims
 [:p "photos from 2020-02-21"]
 (apply c/flexcols
        3
        (map #(c/captioned-img % "") feb-sims)))
(c/new-section!
 :augsims
 [:p "photos from 2019-08-09"]
 (apply c/flexcols
        3
        (map #(c/captioned-img % "") aug-sims)))
(defn app []
  [c/toc-article {:title "2020-04-04-simsmuni"
                  :summary [:p "notes from doing the municipal recycling tour on 2019-08-09 and 2020-02-21."]
                  :sections [:notes
                             :augsims
                             :febsims
                             ]}])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
