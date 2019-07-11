import { Maybe } from "tsmonad";

const hasCoinSymbol = (coinPredictionData: object, symbol: string) => Maybe
  .just(coinPredictionData)
  .caseOf({
    just: (data: any) => data && data.symbol === symbol,
    nothing: () => false
  });

export { hasCoinSymbol }