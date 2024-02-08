import { UUIDGenerator } from "@domain/entity/UUIDGenerator";
import { KnexAdapter } from "@infra/database/KnexAdapter";
import { UserDAO } from "@infra/database/dao/UserDAO";
import { UserRepositoryDatabase } from "@infra/database/repository/UserRepositoryDatabase";
import { Registry } from "@infra/di/Registry";
import { LoadEnv } from "@infra/helper/LoadEnv";
import { ExpressAdapter } from "@infra/http/ExpressAdapter";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryDatabase(userDAO);
const registry = Registry.getInstance();
registry.register("UserRepository", userRepository);

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3333);
