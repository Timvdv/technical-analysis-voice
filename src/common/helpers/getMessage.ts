const getMessage = (message, parameters?) => {
  if (hasSSML(message)) {
    if(typeof message.ssml === "function") {
      return message.ssml(parameters);
    }

    return message.ssml;
  }

  if(typeof message.text === "function") {
    return message.text(parameters);
  }

  return message.text;
}

const hasSSML = message => {
  return message.ssml || false;
}


export { getMessage }