const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    redis_url: process.env.REDIS_URL,
    database_type: "postgres",
    store_cors: "*",
    admin_cors: "*",
  },
  modules: {},
}
