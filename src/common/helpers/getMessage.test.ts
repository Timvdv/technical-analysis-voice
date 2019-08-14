import { assert } from "chai";
import { getMessage } from "./getMessage";
import { generalMessages } from "../messages/generalMessages";

suite("getMessage() ", () => {
  test("Should get error message", () => {
    const message = getMessage(generalMessages.error, {
      errorMessage: "test error message"
    });

    assert.isString(message);
  });
});