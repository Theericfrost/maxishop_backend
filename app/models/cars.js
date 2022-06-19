const Sequelize = require("sequelize");
const db = require("../util/database");

const Car = db.define("cars", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true,
  },
  model: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    alowNull: false,
    unique: true,
  },
  color: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  fuel: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  price: {
    type: Sequelize.BIGINT,
    alowNull: false,
  },
  discount: {
    type: Sequelize.BIGINT,
    alowNull: true,
  },
  img_card: {
    type: Sequelize.TEXT,
    alowNull: false,
  },
  img_slider: {
    type: Sequelize.TEXT,
    alowNull: false,
  },
  decription: {
    type: Sequelize.TEXT,
    alowNull: false,
  },
  creationYear: {
    type: Sequelize.STRING,
    alowNull: false,
  },
});

module.exports = Car;
