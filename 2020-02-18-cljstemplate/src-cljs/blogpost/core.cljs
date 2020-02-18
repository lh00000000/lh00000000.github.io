(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)
(def sample-code "(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width \"100%\"}]]
   [:figcaption [:span [:i caption]]]])

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 \"2020-02-18-cljstemplate\"]

    [:section
     [:h2 \"blogpost update\"]
     [:p \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"]
     (captioned-img \"https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg\" \"test image\")]

    [:section
     [:h2 \"interaction\"]
     [:p (str \"count: \" (:count @app-state))]
     [:button {:on-click up!} \"up\"]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document \"root\")))
")
(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-cljstemplate"]

    [:section
     [:h2 "blogpost format update"]
     [:p [:span "i don't know if this post is really necessary but i guess i just wanted a record of me switching from react js and lazily transpiled jsx to clojurescript."]]
     [:p "why use react for some crappy looking blog posts? well i was all pro raw html and/or vanilla javascript for a long time, but i found myself constantly doing functions or extra copy and pasting for templates for things, like captioned images, that i ended up spending a lot of time workign on a little javascript library to help me generate html in a nested-call fashion. i noticed i was spending a ton of time trying to copy versions of it to newer and newer blog posts so i figured i should just give up and use react and gain some Marketable Skills in the process"]
     [:p "well i guess that was okay but then i found out the hard way that react is not very fun to use if you don't really plan to have any reactive or interactivity built into the thing you're doing, so i was constantly rewriting components and not really feeling i could use 99% of react without redux. i had a version with a baby-template of redux used, but on the best days i just felt like writing html all over again"]
     [:p "eventually i forced myself to try to switch to clojurescript. i've been hyping myself up on clojure for a while but too lazy to figure out the ecosystem. i found a tutorial for reagent that seemed to be easy enough for me and made the switch. i'm really into the hiccup syntax now, feel like it is an ease-improvement over html writing (or at least easier to look through), and feel like the weird-atom observable pattern is more straightforward and/or ignorable than adding in redux / risking small direct state changes in react getting too annoying to deal with."]
     [:p "i'm still getting used to the ecosystem though. for example, to dev these posts, i am still using node's 'live-server' and running lein in another iterm tab. i don't really know how to figure figwheel + ring + lein configs yet so idk. i guess that's next. i'm also into calva and paraedit in vscode, but i am definitely still weirded out by it and vscode in general (still opening up sublime for a lot of things)"
      ]
     [:p "it does feel a little more lightweight to use. im using a script to upload all the images in the folder for the blog post to s3 (need to switch soon...), then put a bunch of clojure maps into my clipboard to use them. it feels okay to use. "]
     [:p "idk maybe this isn't interesting to anyone. i don't even know if anyone reads this blog besides itp adjuncts that are required to. i just thought it'd be fun to look back on a couple of months from now"]]
    [:section
     [:p "below is what my template code looks like for now:"]
     [:pre [:code sample-code]]]
    [:section
    [:p "here's what that template looks like (without the lorem ipsum where this paragraph would be lol)"]
    (captioned-img "https://www.northerntool.com/images/product/2000x2000/415/41593_2000x2000.jpg" "test image")]

    [:section
     [:h2 "interaction"]
     [:p (str "count: " (:count @app-state))]
     [:button {:on-click up!} "up"]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
