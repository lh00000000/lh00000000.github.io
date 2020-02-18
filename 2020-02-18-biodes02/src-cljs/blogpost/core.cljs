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

(def assets (hash-map "IMG_3103" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-18-biodes02/IMG_3103.JPG"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-biodes02"]

    [:section
     [:p
      [:span "third class focused on a mind-mapping exercise. we were instructed to choose some biodesign-y futuristic-food word and then mind map from there. "]

      [:span "the rest of the class focused on switching these things around to get feedback from our classmates."]
      [:span "this was to be the basis of our final project."]]
     (asset-img "IMG_3103" "results of class mind mapping. black is my writing. ")
     [:p
      [:span " i struggled to come up with a central topic idea. i put down food manufacturing but i think this was misinterpreted as an interest in automating or optimizing industrial processes for the sake of accessibility, or efficiency (in usage of resources or cost) which not really my interest (or in the realm of things i think would be any particular progressive benefit to this taylorist world, especially after my experience at itp has left me uncontrollably conflating the idea of 'design' with visually polished yet completely unconsidered fictitious image renders). "]
      [:span "i put 'food manufacturing' as my central topic down mainly from recent inspiration with some cursory listens to the 'farm to taber' podcast and a lack of sleep. majority in Taber's emphasis on debunking the idea that industrialization did not originate from agriculture and thus industrialization is something that has corrupted the virtuous naturalism inherent in agriculture. "]
      [:span "i think this is somewhat related to my interest in figuring out why i feel like i keep seeing more of what i have tentatively been calling nostalgic/neo-primitivism. i'm not sure though."]]
     [:p [:span "for now, i am settling on aiming for looking at the historical roots of mechanization in agricultural techniques (is this what people always say stigler is talking about, with 'cultural techniques' and whatnot? need to catch up) with an emphasis on how thought propagated by material adoption could explain the roots of modern conceptualization of 'the industrial'. i think research like this would also be helpful for my 'labors of maintenance explain the origin of technology more than the idea of inventive thought' thesis."]
     ]
     ]
     [:div#disqus_thread]
     ]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
