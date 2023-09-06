
const Sequelize = require("sequelize")
const db = require("../config/db")
const UserModel = require("./User")

const User = UserModel(db, Sequelize)

db.sync({ force: false }).then(() => {
    console.log("Tables Created!")
  })
  
  module.exports = {
    User,
  }
