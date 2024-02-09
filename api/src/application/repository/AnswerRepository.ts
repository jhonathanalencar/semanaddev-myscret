import { AnswerEntity } from "@domain/entity/AnswerEntity";

export interface AnswerRepository {
  create(answer: AnswerEntity): Promise<AnswerEntity>;
  list(questionId: string): Promise<AnswerEntity[]>;
}
