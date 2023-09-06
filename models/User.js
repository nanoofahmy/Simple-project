
const { DataTypes } = require("sequelize");
//const { User } = require(".");

module.exports = (db, DataTypes) => {
    return db.define('User', {
      id: {
        type:  DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        // validate: {
        //   is: ["^[a-z]+$", 'i']
        // }
    }
        ,
        phoneNumber: {
            type: DataTypes.STRING(14),
            required: true,
            unique: true
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'not specified',
          },
          password: {
            type: DataTypes.STRING,
            required: true,
          },
          createdAt: {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.Sequelize.fn('NOW'),
          },
          updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.Sequelize.fn('NOW'),
          },
     },
      { freezeTableName: true, timestamps: true })


     

}

// User.beforeCreate(async (user, options) => {
//     const hashedPassword = bcrypt.hashSync (user.password,8)
//     user.password = hashedPassword;
//   })

