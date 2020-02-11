(defproject blogpost "0.1.0-SNAPSHOT"
  :description "a blogpost on luminghao.com"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [reagent "0.2.0"]]
  :plugins [[lein-cljsbuild "1.0.1"] [lein-cljfmt "0.6.6"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs"]
                        :compiler {:output-to "app.js"
                                   :optimizations :whitespace
                                   :preamble ["reagent/react.js"]
                                   :pretty-print true}}]})
