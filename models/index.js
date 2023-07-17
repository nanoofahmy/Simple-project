// const {sequelize,Sequelize} = require('../config/db');
// const db={};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// import sequelize & schemas


// var Sequelize = require('sequelize');
// const {sequelize} = require('../config/db');
// const db={};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// const UserModel = require("./User")(sequelize,Sequelize)
const Sequelize = require("sequelize")
const db = require("../config/db")
// create models

const UserModel = require("./User")
// create models

const User = UserModel(db, Sequelize)
// db.UserModel.associate(db);

// generate tables in DB
db.sync({ force: false }).then(() => {
    console.log("Tables Created!")
  })
  
  module.exports = {
    User,
  }
module.exports = db;
