import * as Speech from "ssml-builder";

const generalMessages = {
  welcome: {
    text: `
      Welcome to the Crypto predictor. I can analyse different cryptocurrencies.
      You can ask me to predict the value of any coin. Just remember,
      use this information at your own risk.
    `,
    ssml: new Speech()
      .say(`Welcome to the Crypto predictor.`)
      .paragraph("I can analyse different cryptocurrencies.")
      .paragraph("You can ask me to predict the value of any coin. Just remember,")
      .paragraph("use this information at your own risk.")
      .ssml(),
  },

  stop: {
    text: "Alright. Talk to you again soon.",
  },

  error: {
    text: error => `Oof. That did not go right. ${error.errorMessage}`,
  },

  help: {
    text: `You can ask me to make a prediction for you coin of choice.`,
  },

  didNotUnderstand: {
    text: `I am sorry, I didn't get that. Could you say that again?`,
  },

  canceledActivity: {
    text: `Ok. I've cancelled our last activity.`,
  },

  nothingToCancel: {
    text: `I have no activities to cancel.`,
  },

  thanksMessage: {
    text: `No problem! Anything else I can do for you?`,
  },

  noMessageSetMessage: {
    text: `Something went wrong, try again later.`,
  },
};

export { generalMessages }