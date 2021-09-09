require("dotenv").config();
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}


module.exports = {
  development: {
    client: "pg",
    connection: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" },
  },
};
