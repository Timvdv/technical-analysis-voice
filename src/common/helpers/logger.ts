import * as path from "path";
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    format.colorize(),
    format.prettyPrint(),
    format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`)
  ),
  transports: [
    new transports.Console({ level: process.env.LOG_LEVEL } ),
  ]
});

export { logger };