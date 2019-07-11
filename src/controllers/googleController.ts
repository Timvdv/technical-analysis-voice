import { dialogflow } from "actions-on-google";
import { welcomeIntent } from "../intents/welcome";
import { predictIntent } from "../intents/predict";
import { googleResponse } from "../common/helpers/googleResponse";

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

    this.endpoint.intent("Should I buy this coin", conversation =>
      googleResponse(conversation, predictIntent)
    );
  };
};