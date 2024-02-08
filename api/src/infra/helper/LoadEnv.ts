import path from "node:path";
import * as dotenv from "dotenv";

export class LoadEnv {
  static load(): void {
    if (!process.env.NODE_ENV) throw new Error("NODE_ENV is not defined");

    try {
      const fileName =
        process.env.NODE_ENV === "development" ? "development" : "production";

      dotenv.config({
        path: path.resolve(__dirname, `./../../../.env.${fileName}`),
      });
    } catch (error) {
      throw new Error("Error loading .env file");
    }
  }
}
