import { AnswerRepository } from "@application/repository/AnswerRepository";
import { AnswerEntity } from "@domain/entity/AnswerEntity";
import { Registry } from "@infra/di/Registry";

export class CreateAnswer {
  private readonly answerRepository: AnswerRepository;

  constructor() {
    const registry = Registry.getInstance();
    this.answerRepository = registry.resolve("AnswerRepository");
  }

  async execute(input: InputCreateAnswer): Promise<OutputCreateAnswer> {
    const answer = AnswerEntity.create(
      input.questionId,
      input.userId,
      input.answer
    );
    await this.answerRepository.create(answer);
    return {
      answer: answer.answer,
      answerId: answer.answerId,
      createdAt: answer.createdAt,
    };
  }
}

type InputCreateAnswer = {
  questionId: string;
  userId: string | null;
  answer: string;
};

type OutputCreateAnswer = {
  answerId: string;
  answer: string;
  createdAt: Date;
};
