const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}
//initializing the category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize, //connecting the mmodel to the sequelize instance
    modelName: 'category',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Category; //exporting category 
