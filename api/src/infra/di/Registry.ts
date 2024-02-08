export class Registry {
  private dependencies: Map<RegistryKeys, any>;
  private static instance: Registry;

  private constructor() {
    this.dependencies = new Map();
  }

  register<T>(key: RegistryKeys, value: T): void {
    this.dependencies.set(key, value);
  }

  resolve<T>(key: RegistryKeys): T {
    if (!this.dependencies.has(key)) {
      throw new Error(`Dependency ${key} not found`);
    }
    return this.dependencies.get(key);
  }

  static getInstance(): Registry {
    if (!Registry.instance) Registry.instance = new Registry();
    return Registry.instance;
  }
}

type RegistryKeys =
  | "AnswerRepository"
  | "QuestionRepository"
  | "UserRepository";
