import { IResponseAttributes } from "common/interfaces/IResponseAttributes";

/**
 * This makes sure the Google attributes are in the same format
 * as all of the other platforms.
 * @param conversation
 */
const googleAttributeBuilder = (conversation: any): IResponseAttributes => {
  const attributes: IResponseAttributes = {
    userId: null, // @TODO: fetch userId from conversation context
    parameters: conversation.parameters
  }

  return attributes;
};

export { googleAttributeBuilder }