import { IBasicResponse } from "common/interfaces/IBasicResponse";

/**
 * Model for passing conversation logic result to the responsebuilders.
 */
const createBasicResponse = (text: string, ssml?: string): IBasicResponse => {
  return {
    text,
    ssml: ssml || `<speak> ${text} </speak>`
  }
};

export { createBasicResponse }