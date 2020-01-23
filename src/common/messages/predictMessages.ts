import { IPredictionResult } from "common/interfaces/IPredictionResult";

const predictMessages = {
  noCoinFound: {
    text: `
      I could not find this any results for this coin.
      You can try another coin like Ethereum for example.
    `,
  },
  result: {
    text: (result: IPredictionResult) => `Got it! ${result.recommendation}`
  }
};

export { predictMessages }