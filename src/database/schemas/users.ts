import { mysqlTable, serial, varchar, text } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  vezeteknev: varchar("vezeteknev", { length: 255 }).notNull(),
  keresztnev: varchar("keresztnev", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  uuid: text("uuid").notNull(),
});
