import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "express-async-errors";

import { HttpServer } from "./HttpServer";
import { UserControllerHttp } from "./controller/UserControllerHttp";

export class ExpressAdapter implements HttpServer {
  private readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    const userController = new UserControllerHttp();
    this.app.use("/api/user", userController.create);

    this.app.use("/api", (req, res) => {
      res.json({ message: "Mikasa" });
    });
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  }
}
