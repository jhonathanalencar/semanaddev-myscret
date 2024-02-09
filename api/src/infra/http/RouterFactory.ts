import { AnswerController } from "@application/controller/AnswerController";
import { QuestionController } from "@application/controller/QuestionController";
import { UserController } from "@application/controller/UserController";
import { UserControllerHttp } from "./controller/UserControllerHttp";
import { QuestionControllerHttp } from "./controller/QuestionControllerHttp";
import { AnswerControllerHttp } from "./controller/AnswerControllerHttp";
import { Router } from "express";

export class RouterFactory {
  private userController: UserController;
  private questionController: QuestionController;
  private answerController: AnswerController;

  constructor() {
    this.userController = new UserControllerHttp();
    this.questionController = new QuestionControllerHttp();
    this.answerController = new AnswerControllerHttp();
  }

  register() {
    const router = Router();

    router.post("/question", this.questionController.create);
    router.delete("/question", this.questionController.delete);
    router.post("/question/:questionId/answer", this.answerController.create);
    router.get("/question/:questionId/answer", this.answerController.list);

    router.post("/user", this.userController.create);
    router.get("/user/:userId/questions", this.questionController.list);

    return router;
  }
}
