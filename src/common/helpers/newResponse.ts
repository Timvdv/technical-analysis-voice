import { IBasicResponse } from "../interfaces/IBasicResponse";
import { createBasicResponse } from "../responseStructures/basicResponse";

const newResponse = (message: string, responseBuilder: Function) => {
  const response: IBasicResponse = createBasicResponse(message);
  return responseBuilder(response);
}

export { newResponse }