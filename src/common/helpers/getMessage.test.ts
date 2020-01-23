import { assert } from "chai";
import { generalMessages } from "common/messages/generalMessages";
import { getMessage } from "common/helpers/getMessage";

suite("getMessage() ", () => {
  test("Should get error message", () => {
    const message = getMessage(generalMessages.error, {
      errorMessage: "test error message"
    });

    assert.isString(message);
  });
});