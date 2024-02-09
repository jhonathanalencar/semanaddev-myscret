import { AnswerRepository } from "@application/repository/AnswerRepository";
import { AnswerEntity } from "@domain/entity/AnswerEntity";
import { Registry } from "@infra/di/Registry";

export class ListAnswer {
  private readonly answerRepository: AnswerRepository;

  constructor() {
    const registry = Registry.getInstance();
    this.answerRepository = registry.resolve("AnswerRepository");
  }

  async execute(input: InputListAnswer): Promise<OutputListAnswer> {
    const answers = await this.answerRepository.list(input.questionId);
    const output = answers.map((answer) => {
      return {
        answerId: answer.answerId,
        userId: answer.userId,
        answer: answer.answer,
        createdAt: answer.createdAt,
      };
    });
    return output;
  }
}

type InputListAnswer = {
  questionId: string;
};

type OutputListAnswer = {
  answerId: string;
  userId: string | null;
  answer: string;
  createdAt: Date;
}[];
