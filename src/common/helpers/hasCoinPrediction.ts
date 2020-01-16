import { Maybe } from "tsmonad";

const hasCoinPrediction = (coinPredictionData: object) => Maybe
  .just(coinPredictionData)
  .caseOf({
    just: (data: any) => data && data.description,
    nothing: () => false
  });

export { hasCoinPrediction }