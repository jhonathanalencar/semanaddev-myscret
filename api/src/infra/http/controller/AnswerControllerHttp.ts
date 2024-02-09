import { AnswerController } from "@application/controller/AnswerController";
import { CreateAnswer } from "@application/usecase/answer/CreateAnswer";
import { ListAnswer } from "@application/usecase/answer/ListAnswer";
import type { Request, Response } from "express";

export class AnswerControllerHttp implements AnswerController {
  async create(request: Request, response: Response): Promise<void> {
    const { answer, userId } = request.body;
    const { questionId } = request.params;
    const answerData = { questionId, answer, userId };
    const newAnswer = await new CreateAnswer().execute(answerData);
    response.status(201).json(newAnswer);
  }

  async list(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params;
    const answers = await new ListAnswer().execute({ questionId });
    response.status(200).json(answers);
  }
}
