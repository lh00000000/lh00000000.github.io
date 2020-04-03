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


(def pycode "import itertools

for x in range(1, int(261.63 * 4)):
    hz = x
    dur = 500 / hz
    asyncio.run(output_midi(
        itertools.chain.from_iterable([
            {'ts': ((2 * i) + 0) * dur , 'type': 'key_down', 'note': 60, 'velocity': 60},
            {'ts': ((2 * i) + 1) * dur , 'type': 'key_up', 'note': 60, 'velocity': 60},
            ] for i in range(int(100 / dur)))
        ))")

(defn audioo [src]
  [:div [:p (last (string/split src "/"))]
   [:audio {:controls "controls"}
    [:source {:src src :type "audio/wav"}]]])

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-03-16-itpthesis04"]

    [:section
     [:h2 "computers"]
     [:p "not sure if this matters anymore but i noticed i never publised this until today (2020-04-03). created quick script that outputs midi to selected midi output port as well as records audio for selected audio interface device and have it reading note sequences from mongodb. "]
     [:p "not posting the code for that because it connects to the database directly and i'm not going to work on anonymizing the database connection because i am going to move that logic to a backend."]
     [:p "here is some python code that generates random note sequences. these are then pushed to the job queue database."]

     [:pre [:code {:class "python"} pycode]]
     [:p "here is a recording of my laptop microphone recording laptop speaker playing (software) midi device (ableton lol)"]
     (audioo "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-16-itpthesis04/2020-03-16-test.wav")
     [:p "here are some experiments to see how slow my midi output event code was by using python. seems to get into \"audio rate\" so that seems fine."]
     (map
      audioo
      ["https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-16-itpthesis04/2020-03-16-midobuzz0.wav"
       "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-16-itpthesis04/2020-03-16-midobuzz1.wav"
       "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-03-16-itpthesis04/2020-03-16-midobuzz2.wav"])]
    [:section 
     [:p "might as well put other updates here. switched from someone's template for using lein to get clojurescript builds for my blog to shadowcljs, which saves me some commands and hopefully takes some hassle out of my asset to object store workflow. working on that workflow got me some util functions i plan to use to upload the records to digital ocean spaces. tried to look into using loopback js but got scared off by it opening up ibm cloud user registration pages and now looking into using feathers js. also generally trying to work through my queue of semi-useless things to document (i.e. by posting them in this blog). partially telling myself that these externally hosted, although shittily formatted, documents will be easier to remember long-term-memory-wise in the future. 
"]
     ]
    ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
