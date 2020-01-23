import { IPredictionResult } from "common/interfaces/IPredictionResult";

const config = {
  url: "https://technical-analysis-api.com",
  apiKey: process.env.TA_API_KEY,
  paths: {
    coinPredictionPath: "api/v1/analysis",
  }
}

const getCoinPrediction = (coinSymbol: String): Promise<IPredictionResult> =>
  fetch(`${config.url}/${config.paths.coinPredictionPath}/${coinSymbol}?apiKey=${config.apiKey}`)
    .then(data => data.json())
    .catch(error => error);

export { getCoinPrediction };