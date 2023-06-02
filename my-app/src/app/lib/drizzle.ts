import {
    integer,
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";
  
  export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {length: 250}).notNull(),
    product_id: varchar("product_id",{length: 250}).notNull(),
    quantity: integer("quantity").notNull()
  });
  
  export type Todo = InferModel<typeof cartTable>;
  export type NewTodo = InferModel<typeof cartTable, "insert">; // insert type
  
  export const db = drizzle(sql);