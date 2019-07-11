import { Request, Response } from "express";
import { GoogleController } from "../controllers/googleController";

/**
 * Class for setting up URL routes in the application.
 */
export class Routes {
  private googleController: GoogleController;

  /**
   * Constructor
   */
  constructor() {
    this.googleController = new GoogleController();
  }

  /**
   * Setup the API routes for the application.
   * @param app express app.
   */
  public routes(app): void {
    app.get("/", (req: Request, res: Response) => {
        res.json({
          message: "Voice hub running."
        })
    });

    app.post("/google", this.googleController.endpoint);
  };
}