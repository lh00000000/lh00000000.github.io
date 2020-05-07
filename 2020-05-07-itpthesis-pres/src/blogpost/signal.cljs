(ns blogpost.signal
    (:require [clojure.string :as str])
  )


(defn sig [{:keys [a hz fs dur offset]}]
  (let [len (* dur fs)]
    (map
     #(* a (js/Math.sin
            (+ offset
               (* 2 js/Math.PI hz (/ % fs)))))
     (range len))))

(defn quick-sig [a hz dur]
  (sig {:a a
        :hz hz
        :dur dur
        :fs 512
        :offset 0}))

(defn svg-sig-path [{:keys [ampx ampy]} sig]
  (str/join " " (cons
                 "M 0 0"
                 (map-indexed
                  (fn [idx y] (str/join " " ["L" (* idx ampx) (* ampy y)]))
                  sig))))

(defn complex-sig [ampFunc]
  (apply
   map +
   (map #(quick-sig
          (ampFunc (/ % 256))
          (+ 1 %) 1) (range 256)))
  )
