import { IResponseAttributes } from "../common/interfaces/IResponseAttributes";
import { logger } from "../common/helpers/logger";

import { getCoinPrediction } from "../api/analysisApi";
import { hasApiError } from "../common/helpers/hasApiError";
import { hasCoinSymbol } from "../common/helpers/hasCoinSymbol";
import { newResponse } from "../common/helpers/newResponse";

import { getMessage } from "../common/helpers/getMessage";
import { generalMessages } from "../common/messages/generalMessages";
import { predictMessages } from "../common/messages/predictMessages";


/**
 * When user asks to predict the price of a certain coin
 * @param attributes
 * @param responseBuilder
 */
const predictIntent = async (attributes: IResponseAttributes, responseBuilder: Function) => {
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
    if(!hasCoinSymbol(coinPredictionData, coinPredictionData.symbol)) {
      const message = getMessage(predictMessages.noCoinFound);

      return newResponse(message, responseBuilder);
    }

    // Return the response when everything went okay
    const message = getMessage(predictMessages.result, { recommendation: coinPredictionData.recommendation });

    return newResponse(message, responseBuilder);
  } catch(error) {
    logger.error(error)

    const message = getMessage(generalMessages.error, { error: error.message });

    return newResponse(message, responseBuilder);
  }
};

export { predictIntent };