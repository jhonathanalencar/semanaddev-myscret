import { QuestionEntity } from "@domain/entity/QuestionEntity";

export interface QuestionRepository {
  create(question: QuestionEntity): Promise<QuestionEntity>;
  list(userId: string): Promise<QuestionEntity[]>;
  delete(questionId: string): Promise<void>;
}
