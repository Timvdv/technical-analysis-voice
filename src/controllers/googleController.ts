import { dialogflow } from "actions-on-google";
import { googleResponse } from "common/helpers/googleResponse";
import { welcomeIntent } from "intents/welcome";

/**
 * Class for handling Google traffic.
 */
export class GoogleController {
  public endpoint: any = dialogflow({
    debug: false,
  });

  /**
   * Constructor
   */
  constructor() {
    this.setupIntentHandlers();
  };

  /**
   * Setup intent logic for Dialogflow request.
   * This is pretty much the router of the app
   */
  private setupIntentHandlers(): void {
    this.endpoint.intent("Default Welcome Intent", conversation =>
      googleResponse(conversation, welcomeIntent)
    );
  };
};