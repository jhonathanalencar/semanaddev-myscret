import { UUIDGenerator } from "@domain/entity/UUIDGenerator";
import { KnexAdapter } from "@infra/database/KnexAdapter";
import { AnswerDAO } from "@infra/database/dao/AnswerDAO";
import { QuestionDAO } from "@infra/database/dao/QuestionDAO";
import { UserDAO } from "@infra/database/dao/UserDAO";
import { AnswerRepositoryDatabase } from "@infra/database/repository/AnswerRepositoryDatabase";
import { QuestionRepositoryDatabase } from "@infra/database/repository/QuestionRepositoryDatabase";
import { UserRepositoryDatabase } from "@infra/database/repository/UserRepositoryDatabase";
import { Registry } from "@infra/di/Registry";
import { LoadEnv } from "@infra/helper/LoadEnv";
import { ExpressAdapter } from "@infra/http/ExpressAdapter";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryDatabase(userDAO);
const questionDAO = new QuestionDAO(knexAdapter.instance);
const questionRepository = new QuestionRepositoryDatabase(questionDAO);
const answerDAO = new AnswerDAO(knexAdapter.instance);
const answerRepository = new AnswerRepositoryDatabase(answerDAO);
const registry = Registry.getInstance();
registry.register("UserRepository", userRepository);
registry.register("QuestionRepository", questionRepository);
registry.register("AnswerRepository", answerRepository);

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3333);
