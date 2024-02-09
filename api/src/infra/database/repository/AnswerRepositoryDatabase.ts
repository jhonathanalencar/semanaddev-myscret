import { AnswerRepository } from "@application/repository/AnswerRepository";
import { AnswerEntity } from "@domain/entity/AnswerEntity";
import { AnswerDAO } from "../dao/AnswerDAO";
import { AnswerModel } from "@domain/model";

export class AnswerRepositoryDatabase implements AnswerRepository {
  constructor(private readonly answerDAO: AnswerDAO) {}

  private toEntity(answer: AnswerModel): AnswerEntity {
    return new AnswerEntity(
      answer.answerId,
      answer.questionId,
      answer.userId,
      answer.answer,
      answer.createdAt,
      answer.updatedAt
    );
  }

  private toModel(answer: AnswerEntity): AnswerModel {
    return {
      answerId: answer.answerId,
      questionId: answer.questionId,
      userId: answer.userId,
      answer: answer.answer,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    };
  }

  async create(answer: AnswerEntity): Promise<AnswerEntity> {
    await this.answerDAO.create(this.toModel(answer));
    return answer;
  }

  async list(questionId: string): Promise<AnswerEntity[]> {
    const answers = await this.answerDAO.list(questionId);
    const listAnswer = answers.map(this.toEntity);
    return listAnswer;
  }
}
