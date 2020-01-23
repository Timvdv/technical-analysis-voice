import { IBasicResponse } from "common/interfaces/IBasicResponse";

/**
 * The Google response builder. This formats the general response
 * into a response which google understands
 * @param conversation
 */
const googleResponseBuilder = (conversation: any) => {
  return (response: IBasicResponse) => {
    conversation.ask(response.text);
  }
};

export { googleResponseBuilder }