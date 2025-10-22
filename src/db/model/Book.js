import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1450,
      max: new Date().getFullYear(),
    },
  },
});

// Book.sync({alter: true});

export default Book;
