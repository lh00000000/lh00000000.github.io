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

(def pixurls (str/split "https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1901.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1915.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1929.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1900.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1876.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1916.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1903.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1898.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1913.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1906.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1912.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1899.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1904.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1910.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1911.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1883.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1908.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1921.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1882.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1896.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1880.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1894.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1923.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1881.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1885.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1926.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1890.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1919.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1924.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1918.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1887.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1893.jpg
https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/2020-04-03-bsteeltour/IMG_1878.jpg
" "\n"))
(c/new-section!
 :pix
 (apply c/flexcols 4
             (map 
              #(c/captioned-img % "")
              pixurls
              )
             )
 )

(defn app []
  [c/toc-article {:title "2020-04-03-bsteeltour"
                  :summary [:p "finally did tour of bethlehem steel area on 2020-12-28. tour did not go into a lot of detail but it was it was my first time seeing the completed trestle since it was completed. "]
                  :sections [
                             :pix
                            ;  :interaction :lorem :something
                             ]}])

(defn stop [] (js/console.log "Stopping..."))
(defn start []
  (js/console.log "Starting...")
  (rdom/render [app] (.getElementById js/document "app")))
(defn ^:export init [] (start))
