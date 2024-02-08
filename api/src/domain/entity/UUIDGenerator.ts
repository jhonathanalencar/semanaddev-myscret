import crypto from "node:crypto";

export class UUIDGenerator {
  static generate(): string {
    return crypto.randomUUID();
  }
}
