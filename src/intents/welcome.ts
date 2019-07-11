import { createBasicResponse } from "../common/responseStructures/basicResponse";
import { IBasicResponse } from "../common/interfaces/IBasicResponse";
import { IResponseAttributes } from "../common/interfaces/IResponseAttributes";

/**
 * When the user launches the app
 * @param responseBuilder
 */
const welcomeIntent = async (attributes: IResponseAttributes, responseBuilder: Function) => {
  // Set the user input
  const text = `Hello there user!`;

  // Create the response
  const response: IBasicResponse = createBasicResponse(text);

  // Return the response
  return responseBuilder(response);
};

export { welcomeIntent };