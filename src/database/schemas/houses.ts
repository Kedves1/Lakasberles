import {
  mysqlTable,
  serial,
  varchar,
  text,
  tinyint,
  json,
} from "drizzle-orm/mysql-core";

export const houses = mysqlTable("house", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  uuid: text("uuid").notNull(),
  time: varchar("time", { length: 255 }),
  owner: varchar("owner", { length: 255 }).notNull(),
  owner_uuid: text("owner_uuid").notNull(),
  image: text("image").notNull(),
  description: varchar("description", { length: 500 }).notNull(),
  coords: varchar("coords", { length: 255 }).notNull(),
  price: varchar("price", { length: 255 }).notNull(),
  inUse: tinyint("inUse").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  popular: tinyint("popular").notNull(),
  sponsored: tinyint("sponsored").notNull(),
  rateing: json("rateing"),
});
