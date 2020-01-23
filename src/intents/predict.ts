import { logger } from "common/helpers/logger";
import { getCoinPrediction } from "api/analysisApi";
import { hasCoinPrediction } from "common/helpers/hasCoinPrediction";
import { hasApiError } from "common/helpers/hasApiError";
import { newResponse } from "common/helpers/newResponse";

import { IResponseAttributes } from "common/interfaces/IResponseAttributes";
import { IPredictionResult } from "common/interfaces/IPredictionResult";

import { getMessage } from "common/helpers/getMessage";
import { predictMessages } from "common/messages/predictMessages";
import { generalMessages } from "common/messages/generalMessages";


/**
 * When user asks to predict the price of a certain coin
 * @param attributes
 * @param responseBuilder
 */
const predictIntent = async (attributes: IResponseAttributes, responseBuilder: Function) => {
  // Fetch the coin symbol from the question
  const coinSymbol = attributes.parameters.coin.toUpperCase();

  try {
    logger.debug(`Fetching prediction for ${coinSymbol}.`);
    const coinPredictionData: any = await getCoinPrediction(coinSymbol);
    logger.debug(`Got prediction data.`);

    // Check if there is an error in the API response
    if(hasApiError(coinPredictionData)) {
      logger.error(`
        Error in API response. coinPredictionData: ${JSON.stringify(coinPredictionData)}
      `);

      const message = getMessage(generalMessages.error, {
        errorMessage: coinPredictionData.error || coinPredictionData.message
      });

      return newResponse(message, responseBuilder);
    }

    // When there is no error but also no result.
    if(!hasCoinPrediction(coinPredictionData)) {
      const message = getMessage(predictMessages.noCoinFound);

      return newResponse(message, responseBuilder);
    }

    const coinPredictionDataResult: IPredictionResult = coinPredictionData;

    // Return the response when everything went okay
    const message = getMessage(predictMessages.result, { recommendation: coinPredictionDataResult.description });

    return newResponse(message, responseBuilder);
  } catch(error) {
    logger.error(error)

    const message = getMessage(generalMessages.error, { error: error.message });

    return newResponse(message, responseBuilder);
  }
};

export { predictIntent };