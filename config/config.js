require('dotenv').config({path:'../.env'})

module.exports = {
  development: {
    username: "postgres",
    password: "123456789",
    database: "user",
    dialect: "postgres",
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DIALECT,
    logging: false
  },
}