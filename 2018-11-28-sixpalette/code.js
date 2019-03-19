const clojureCode = `(ns vislangpalette.core)
(use 'mikera.image.core)
(use 'clojure.math.numeric-tower)
(require '[mikera.image.colours :as mik])
(require '[com.evocomputing.colors :as evo])

(defn look [x] (do (println x) (println (type x)) x))

(defn getLumi
  "in is int color"
  [evoColor]
  (nth (:hsl evoColor) 2))

(defn mikJavaIntToEvo
  [mji]
  (evo/create-color
   [(mik/extract-red mji)
    (mik/extract-green mji)
    (mik/extract-blue mji)
    (mik/extract-alpha mji)]))

(defn evoToMikJavaInt
  [evoC]
  (let [evoAsVec (:rgba evoC)]
    (let
     [r (get evoAsVec 0)
      g (get evoAsVec 1)
      b (get evoAsVec 2)
      a (get evoAsVec 3)]
      (unchecked-int
       (bit-or
        (bit-shift-left r (* 8 2))
        (bit-shift-left g (* 8 1))
        (bit-shift-left b (* 8 0))
        (bit-shift-left a (* 8 3)))))))

(defn diffSq
  [a b]
  (expt
   (- a b)
   2))

(defn applyFilter!
  [makeFunc mImage]
  (let [pixels (get-pixels mImage)]
    (let [armedFunc (makeFunc pixels)]
      (do
        (dotimes [i (count pixels)]
          (aset pixels i (armedFunc (aget pixels i))))
        (set-pixels mImage pixels)))))

(defn intToLumi
  [inInt]
  (getLumi (mikJavaIntToEvo inInt)))

(defn scaleTo
  [x inMin inMax outMin outMax]
  (let [outRange (- outMax outMin)]
    (+
     (*
      (/ (- x inMin) (- inMax inMin))
      (- outMax outMin))
     outMin)))

(defn breakpoints [arr divisions]
  (let [sortedarr (sort arr)]
    (map (fn [i] (nth sortedarr (* i (/ (count sortedarr) divisions)))) (range divisions))))

(defn first-ith-where
  [func arr]
  (first (keep-indexed
          (fn [i x] (when (func x) i))
          arr)))

(defn makeFilterFunc
  [localPalette allPixels]
  (let [inputLumiBreakPoints (conj (apply vector (breakpoints (map intToLumi allPixels) (count localPalette))) 256)]
    (fn [pixInt]
      (let [usePaletteColorI (first-ith-where #(< (intToLumi pixInt) %1) inputLumiBreakPoints)]
        (let [usePaletteColor (nth (sort-by getLumi localPalette) (- usePaletteColorI 1))]
          (evoToMikJavaInt usePaletteColor))))))

(defn slice
  [arr from to]
  (drop from (drop-last (- (count arr) to) arr)))

(defn rectCoors
  [x y rWidth rHeight]
  (mapcat (fn [x] (map (fn [y] [x y]) (range y (+ y rHeight)))) (range x (+ x rWidth))))

(defn coorToIdx
  [x y scansize]
  (+ (* y scansize) x))

(defn fillRect!
  [evoColor x y rectWidth rectHeight img]
  (let [pixels (get-pixels img)
        scansize (width img)
        targetRectCoors (rectCoors x y rectWidth rectHeight)]
    (do
      (doall (map (fn [coor]
                    (let [idxToSet (coorToIdx (nth coor 0) (nth coor 1) scansize)]
                      (aset pixels idxToSet (evoToMikJavaInt evoColor))))
                  targetRectCoors))
      (set-pixels img pixels))))

(def palette
  (list
   (evo/create-color 0xFFEFEFEF)
   (evo/create-color 0xFFDEDEDE)
   (evo/create-color 0xFF404040)
   (evo/create-color 0xFF202020)
   (evo/create-color 0xFF000000)))

(def compositionSize 64)

(def imageOrdering
  (list
   (resize (load-image-resource "saturn.png") compositionSize compositionSize)
   (resize (load-image-resource "monolith.png") compositionSize compositionSize)
   (resize (load-image-resource "mountain.png") compositionSize compositionSize)
   (resize (load-image-resource "rocky.png") compositionSize compositionSize)
   (resize (load-image-resource "nose.png") compositionSize compositionSize)
   (resize (load-image-resource "staircase.png") compositionSize compositionSize)))

(defn roundData
  [i]
  (let [rotatedPalette (take (count palette) (drop i (cycle palette)))]
    {:img (nth imageOrdering i)
     :outerBorderColor (nth rotatedPalette 0)
     :innerBorderColor (nth rotatedPalette 1)
     :quantizedPalette (drop 2 rotatedPalette)
     :outputFilename (clojure.string/join (concat (str i) ".png"))}))

(defn doOne
  [i]
  (let [thisRoundData (roundData i)]
    (let [img (:img thisRoundData)
          outerBorderColor (:outerBorderColor thisRoundData)
          innerBorderColor (:innerBorderColor thisRoundData)
          quantizedPalette (:quantizedPalette thisRoundData)
          outputFilename (:outputFilename thisRoundData)
          imgWidth (width (:img thisRoundData))
          imgHeight (height (:img thisRoundData))
          outerLen compositionSize
          innerLen (- compositionSize 4)
          borderWidth 2]

      (let [coors {:x {:a 0
                       :b 2
                       :c 4
                       :d (- imgWidth (* 2 borderWidth))
                       :e (- imgWidth borderWidth)}

                   :y {:a 0
                       :b 2
                       :c 4
                       :d (- imgHeight (* 2 borderWidth))
                       :e (- imgHeight borderWidth)}}]

        (do
          (applyFilter!
           (partial makeFilterFunc (:quantizedPalette thisRoundData))
           (:img thisRoundData))
          (comment "outer borders")
          (fillRect! outerBorderColor (:a (:x coors)) (:a (:y coors)) borderWidth outerLen img)
          (fillRect! outerBorderColor (:e (:x coors)) (:a (:y coors)) borderWidth outerLen img)
          (fillRect! outerBorderColor (:a (:x coors)) (:a (:y coors)) outerLen borderWidth img)
          (fillRect! outerBorderColor (:a (:x coors)) (:e (:y coors)) outerLen borderWidth img)
          (comment "inner borders")
          (fillRect! innerBorderColor (:b (:x coors)) (:b (:y coors)) borderWidth innerLen img)
          (fillRect! innerBorderColor (:d (:x coors)) (:b (:y coors)) borderWidth innerLen img)
          (fillRect! innerBorderColor (:b (:x coors)) (:b (:y coors)) innerLen borderWidth img)
          (fillRect! innerBorderColor (:b (:x coors)) (:d (:y coors)) innerLen borderWidth img)
          (comment "palletSquares")
          (fillRect! (nth quantizedPalette 0) (:c (:x coors)) (- imgHeight (* borderWidth 3)) borderWidth borderWidth img)
          (fillRect! (nth quantizedPalette 1) (:c (:x coors)) (- imgHeight (* borderWidth 4)) borderWidth borderWidth img)
          (fillRect! (nth quantizedPalette 2) (:c (:x coors)) (- imgHeight (* borderWidth 5)) borderWidth borderWidth img)
          (save (:img thisRoundData) (:outputFilename thisRoundData)))))))

(defn -main
  [& args]
  (doall (map doOne (range (count imageOrdering)))))`