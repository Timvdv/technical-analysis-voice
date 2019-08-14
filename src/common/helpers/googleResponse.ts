import { googleAttributeBuilder } from "../attributeBuilders/googleAttributesBuilder";
import { googleResponseBuilder } from "../responseBuilders/googleResponseBuilder";

/**
 * Each intent gets the arguments & conversation in the same format
 * @param conversation
 * @param intent
 */
const googleResponse = (conversation: object, intent: Function) => intent(
  googleAttributeBuilder(conversation),
  googleResponseBuilder(conversation)
);

export { googleResponse }