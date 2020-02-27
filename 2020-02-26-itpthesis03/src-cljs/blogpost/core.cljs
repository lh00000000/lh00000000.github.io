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

(def assets (hash-map "Screen-Shot-2020-02-25-at-2" "https://lh00000000-public.s3.us-east-1.amazonaws.com/2020/siteassets/2020-02-26-itpthesis03/Screen-Shot-2020-02-25-at-2.00.27-PM.png"))
(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))


(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-26-itpthesis03"]
     (asset-img "Screen-Shot-2020-02-25-at-2" "")

    [:section
     [:h2 "homework "]
     [:h5 {:class "c8", :id "h.v45zc6sqhi4q"}
      [:span {:class "c2"} "this is week 4&#39;s &quot;Homework&quot;:"]]
[:p {:class "c6"}
 [:span {:class "c0"} "Find 9 experts in your field of research.  Identify 3 as your preferred targets."]]
[:ol {:class "c5 lst-kix_skbh211vwlrm-0 start", :start "1"}
 [:li {:class "c1"}
  [:span {:class "c7"} "Tung-Hui Hu "]
  [:span {:class "c3 c9"} "&quot;PREFERRED&quot;"]]
 [:li {:class "c1"}
  [:span {:class "c7"} "Edwin M. Good "]
  [:span {:class "c3"} "&quot;PREFERRED&quot;"]]
 [:li {:class "c1"}
  [:span {:class "c7"} "Shannon Mattern "]
  [:span {:class "c3"} "&quot;PREFERRED&quot;"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Lilly Irani"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Jennifer Gabrys"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Geoffrey Bowker"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Mierle Ukeles"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Yuk Hui"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Arthur Reblitz"]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Explain why you chose these experts as your targets and what you hope to gain, overall, once the 3 interviews are complete"]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0 start"}
 [:li {:class "c1"}
  [:span {:class "c0"} "Tung-Hui Hu is the author of &quot;Prehistory of the Cloud&quot;, a critical historiographical account of the material origins of cloud computing. I think the opportunity to talk to Hu could really help me refine my thoughts on the role encapsulation plays into my project as a thematic core."]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Edwin M. Good is the author of &quot;Giraffes, Black Dragons, and Other Pianos: A Technological History from Cristofori to the Modern Concert Grand&quot;. There have been many works tracing the development of piano design, but Good&#39;s project is considered the main one that sustains the lens of describing the piano as a machine."]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Shannon Mattern&#39;s work on maintenance, particularly as it relates to systems of categorical knowledge and urban technologies, is what started me on my intellectual journey towards theorizing quantization, calibration, and technicality."]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Prepare a script, including 5 questions for 1 of the 3 preferred targets "]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0"}
 [:li {:class "c1"}
  [:span {:class "c3"} "(the following is a script I used for the piano tuners I have interviewed so far. Obviously I&#39;d want to modify my questions depending on if I am talking to an academic vs a full-time tuner nearing retirement, however, I have found these questions effective at framing my intent, especially for leading to subsequent conversations. This script is what I plan to continue using more frequently than a script I would create for someone like Good vs Mattern, so it is what I&#39;m presenting here). "]
  [:span {:class "c0"} "What kind of work do you do? (for tuners, I would ask, do you do tuning for privately owned pianos? repairs? appraisals? etc. For non-tuners, I would use this question to see if there are some areas of their work I have been previously unfamiliar with)"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Do you think you have a different relationship with music (i.e. their field) than if you had not pursued this profession (work about maintenance of technology if it is not a tuner)?"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Do you see the piano as a technology?"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Do you think doing your work has led you to view technology differently?"]]
 [:li {:class "c1"}
  [:span {:class "c0"} "Do you think the piano has any commonalities with the computer? (I would ask this of all, regardless of profession)"]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Describe the scenario for the expert interview including location, tone, equipment needed, travel time, etc."]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0"}
 [:li {:class "c1"}
  [:span {:class "c0"} "It would happen on a wednesday, thursday, or friday when they are free, because that is when I am free. It would happen at the nearest coffee shop I find on the internet near their location during the acceptable meeting time. I would bring my phone to record the conversation, as I have found taking notes on my phone or notebook is too slow to not distract the interviewee. It would take N minutes to get there, where N is a number that citymapper tells me given context of current location, walking distance, weather, transit system delays."]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Brainstorm ways to contact the 3 experts, justifying why the method is best"]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0"}
 [:li {:class "c1"}
  [:span {:class "c0"} "I will email them all. I might DM one on twitter asking if they have enough bandwidth at the moment to speak with me. "]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Draft 3 correspondence letters"]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0"}
 [:li {:class "c1"}
  [:span {:class "c0"} "Hello. My name is luming hao and I&#39;m a 2nd year masters student of NYU&#39;s Interactive Telecommunications Program. I&#39;m trying to do a project on the maintenance labors of computation by focusing on piano servicing and tuning industry (I am also currently training to be a tuner at the &quot;New York School of Piano Tuning, Service, and Repair&quot;). My argument is partially based on how the separation between instrument maintainer and instrumentalist influenced/is a result of the design history of the piano. "]]
 [:li {:class "c1"}
  [:span {:class "c0"} "I&#39;m emailing you because to see if you would be willing ot share your thoughts on piano tuning/maintenance/technology for my project. I was wondering if you&#39;d be up for a short 20-30 minute interview (via any method you&#39;d prefer, phone, skype, coffee etc). I&#39;d really greatly appreciate it, or any advice on other people you&#39;d think might be interested in the project. "]]]
[:p {:class "c6"}
 [:span {:class "c0"} "Find a public location relevant to your research and track the positions and movements of people within this space over time. Recording the pathways and traffic patterns of occupants of a space helps to define zones of different spatial behaviors. This reveals how artifacts and environments figure in people&#39;s lives, highlighting aspects of their lifestyle, habits, priorities, and values."]]
[:ul {:class "c5 lst-kix_g5z87ai5yt4l-0"}
 [:li {:class "c1"}
  [:span {:class "c0"} "Last friday, I visited the Sims Municipal Recycling Center in Sunset Park. This was my second visit, but fortunately, this time, the room of sorting machinery was turned off for maintenance tasks. The guide guesses that they were switching out conveyor belts. At that moment, the was a cherry picker driver and cherry picker operator, surveying a narrow region between two large shafts a couple of yards away from the viewing balcony. I couldn&#39;t tell what they were looking at. I thought it was particularly demonstrative that they were using a cherry picker to simply assess the situation. The conveyor belts of the machinery reach up 2-3 stories. It makes sense that one needs special equipment to simply achieve visibility when mechanism has expanded larger than individual-human-scale, or is it when mechanism allows for the extension of human-scale vision that one develops faith in structures of mechanism beyond familiar scale. "]]]]

    [:section
     [:h2 "interaction"]
     [:p (str "count: " (:count @app-state))]
     [:button {:on-click up!} "up"]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
