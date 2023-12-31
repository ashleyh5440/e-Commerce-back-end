// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      //doesnt allow null
    },
    product_name: {
      type: DataTypes.STRING
      //doesnt allow null
    },
    price: {
      type: DataTypes.DECIMAL
      // validates the value is a decimal?
      //doesnt allow null
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    category_id: {

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
