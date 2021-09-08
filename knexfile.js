require("dotenv").config();
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}
// sharedConfig variables are shared between the development and production environments
const sharedConfig = {
  // sets client as pg & sets migrations / seeds directory
  client: "pg",
  migrations: { directory: "./db/migrations" },
  seeds: { directory: "./db/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connnection: {
      port: 5433,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};
