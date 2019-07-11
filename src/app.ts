import * as express from "express";
import {Routes} from "./routes/routes";

/**
 * Express application for handling API behavior.
 */
class App {
  public app: express.Application;
  public router: Routes = new Routes();

  /**
   * Constructor
   */
  constructor() {
    this.app = express();
    this.config();
    this.router.routes(this.app);
  };

  /**
   * Setup function for the express application.
   */
  private config(): void {
    this.app.use(express.json());
  }
};

export default new App().app;