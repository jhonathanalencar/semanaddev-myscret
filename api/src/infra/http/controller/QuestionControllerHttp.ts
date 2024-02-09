import { QuestionController } from "@application/controller/QuestionController";
import { CreateQuestion } from "@application/usecase/question/CreateQuestion";
import { DeleteQuestion } from "@application/usecase/question/DeleteQuestion";
import { ListQuestion } from "@application/usecase/question/ListQuestion";
import type { Request, Response } from "express";

export class QuestionControllerHttp implements QuestionController {
  async create(request: Request, response: Response): Promise<void> {
    const { question, userId } = request.body;
    const questionData = { question, userId };
    const newQuestion = await new CreateQuestion().execute(questionData);
    response.status(201).json(newQuestion);
  }

  async list(request: Request, response: Response): Promise<void> {
    const { userId } = request.params;
    const questions = await new ListQuestion().execute({ userId });
    response.status(200).json(questions);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params;
    await new DeleteQuestion().execute({ questionId });
    response.status(204).send();
  }
}
