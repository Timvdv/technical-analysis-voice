import 'isomorphic-fetch';
import * as dotenv from "dotenv";

// Enable environment variables
const result = dotenv.config()

if (result.error) {
  throw result.error
}

// Setup the webserver
import app from "./app";
import { logger } from "./common/helpers/logger";

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Express Server listening on port: ${PORT}`);
});