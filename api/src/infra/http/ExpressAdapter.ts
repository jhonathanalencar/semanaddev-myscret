import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "express-async-errors";

import { HttpServer } from "./HttpServer";
import { RouterFactory } from "./RouterFactory";

export class ExpressAdapter implements HttpServer {
  private readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    const routerFactory = new RouterFactory();
    this.app.use("/api", routerFactory.register());
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  }
}
