import { config } from "dotenv";
config();

export const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/merndb";
export const PORT = process.env.PORT || 4000;