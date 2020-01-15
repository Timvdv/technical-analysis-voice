export interface IPredictionResult {
  success: boolean,
  exchange: string,
  date: Date,
  price_btc: number,
  recommendation: string,
  description: string,
  sentiment: number,
  patterns: {
    predicted: string,
    indicators: {
      bullish: string[],
      bearish: string[]
    }
  }
}