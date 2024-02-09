import { QuestionRepository } from "@application/repository/QuestionRepository";
import { QuestionEntity } from "@domain/entity/QuestionEntity";
import { QuestionDAO } from "../dao/QuestionDAO";
import { QuestionModel } from "@domain/model";

export class QuestionRepositoryDatabase implements QuestionRepository {
  constructor(private readonly questionDAO: QuestionDAO) {}

  private toEntity(question: QuestionModel): QuestionEntity {
    return new QuestionEntity(
      question.questionId,
      question.userId,
      question.question,
      question.createdAt,
      question.updatedAt
    );
  }

  private toModel(question: QuestionEntity): QuestionModel {
    return {
      questionId: question.questionId,
      userId: question.userId,
      question: question.question,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    };
  }

  async create(question: QuestionEntity): Promise<QuestionEntity> {
    await this.questionDAO.create(this.toModel(question));
    return question;
  }

  async list(userId: string): Promise<QuestionEntity[]> {
    const questions = await this.questionDAO.list(userId);
    const listQuestion = questions.map(this.toEntity);
    return listQuestion;
  }

  async delete(questionId: string): Promise<void> {
    await this.questionDAO.delete(questionId);
  }
}
