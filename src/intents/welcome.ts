import { IBasicResponse } from "common/interfaces/IBasicResponse";
import { IResponseAttributes } from "common/interfaces/IResponseAttributes";
import { createBasicResponse } from "common/responseStructures/basicResponse";
import { generalMessages } from "common/messages/generalMessages";

/**
 * When the user launches the app
 * @param responseBuilder
 */
const welcomeIntent = async (attributes: IResponseAttributes, responseBuilder: Function) => {
  // Get the response message
  const { text, ssml } = generalMessages.welcome;

  // Create the response
  const response: IBasicResponse = createBasicResponse(text, ssml);

  // Return the response
  return responseBuilder(response);
};

export { welcomeIntent };