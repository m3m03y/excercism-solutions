(ns leap)

(defn leap-year? [year]
  (and (or (not= (mod year 100) 0) (= (mod year 400) 0)) (= (mod year 4) 0))
)
