const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      //doesnt allow null
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references Product model's id.
      references: {model: "product", key: "id"} //key = primary key
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //references Tag model's id
      references: {model: "tag", key: "id"}
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
