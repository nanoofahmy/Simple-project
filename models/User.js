
const { DataTypes } = require("sequelize");

module.exports = (db, DataTypes) => {
    return db.define('users', {
      id: {
        type:  DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
      { freezeTableName: true, timestamps: true });
      return User;
}
