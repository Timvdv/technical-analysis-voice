import { createBasicResponse } from "common/responseStructures/basicResponse";
import { IBasicResponse } from "common/interfaces/IBasicResponse";

const newResponse = (message: string, responseBuilder: Function) => {
  const response: IBasicResponse = createBasicResponse(message);
  return responseBuilder(response);
}

export { newResponse }