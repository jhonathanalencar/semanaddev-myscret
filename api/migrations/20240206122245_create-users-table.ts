import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // cria uma tabela no banco de dados
  return knex.schema.createTable("users", (table) => {
    table.uuid("userId").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.text("password").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  // deleta a tabela se algum error acontecer
  return knex.schema.dropTable("users");
}
