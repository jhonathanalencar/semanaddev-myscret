import { UserController } from "@application/controller/UserController";
import { CreateUser } from "@application/usecase/user/CreateUser";
import type { Request, Response } from "express";

export class UserControllerHttp implements UserController {
  async create(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;
    const userData = { email, password };
    const newUser = await new CreateUser().execute(userData);
    response.status(201).json(newUser);
  }
  updateProfile(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  authenticate(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
