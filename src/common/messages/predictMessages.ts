const predictMessages = {
  noCoinFound: {
    text: `
      I could not find this any results for this coin.
      You can try another coin like Ethereum for example.
    `,
  },
  result: {
    text: result => `I found something! ${result.recommendation}`
  }
};

export { predictMessages }