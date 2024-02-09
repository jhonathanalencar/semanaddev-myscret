import { QuestionRepository } from "@application/repository/QuestionRepository";
import { Registry } from "@infra/di/Registry";

export class ListQuestion {
  private readonly questionRepository: QuestionRepository;

  constructor() {
    const registry = Registry.getInstance();
    this.questionRepository = registry.resolve("QuestionRepository");
  }

  async execute(input: InputListQuestion): Promise<OutputListQuestion> {
    const questions = await this.questionRepository.list(input.userId);
    const outputQuestions = questions.map((question) => {
      return {
        questionId: question.questionId,
        question: question.question,
        createdAt: question.createdAt,
      };
    });
    return outputQuestions;
  }
}

type InputListQuestion = {
  userId: string;
};

type OutputListQuestion = {
  questionId: string;
  question: string;
  createdAt: Date;
}[];
