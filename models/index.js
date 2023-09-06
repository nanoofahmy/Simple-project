// import sequelize & schemas
const Sequelize = require("sequelize")
const db = require("../config/db")
const UserModel = require("./User")

// create models

const User = UserModel(db, Sequelize)


// generate tables in DB
db.sync({ force: false }).then(() => {
  console.log("Tables Created!")
})

module.exports = {

  User,
  
}