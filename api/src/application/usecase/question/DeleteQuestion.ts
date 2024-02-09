import { QuestionRepository } from "@application/repository/QuestionRepository";
import { Registry } from "@infra/di/Registry";

export class DeleteQuestion {
  private readonly questionRepository: QuestionRepository;

  constructor() {
    const registry = Registry.getInstance();
    this.questionRepository = registry.resolve("QuestionRepository");
  }

  async execute(input: InputDeleteQuestion): Promise<void> {
    await this.questionRepository.delete(input.questionId);
  }
}

type InputDeleteQuestion = {
  questionId: string;
};
