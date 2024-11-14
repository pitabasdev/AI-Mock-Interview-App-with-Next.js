import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schems.js",
  out: "./drizzle",
  dbCredentials:{
    url:'postgresql://db_owner:7NMYA8eDsQvp@ep-jolly-sun-a5imscxm.us-east-2.aws.neon.tech/db?sslmode=require'
  }
});
