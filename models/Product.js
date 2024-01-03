// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
// define columns
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      validate: {isDecimal: true}, // validates the value is a decimal
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {isNumeric: true}
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {model: "category", key: "id"} //references the Category model's id.
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);

module.exports = Product;
