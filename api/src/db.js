require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DogModel = require("./models/Dog");
const TemperamentModel = require("./models/Temperaments");

const sequelize = new Sequelize(
  `postgres://dogdatabase_0vag_user:qoypINbBwAMs59w2b0Q4glywuKpWbeDi@dpg-cjrqnegjbais73f9tsvg-a.oregon-postgres.render.com/dogdatabase_0vag`,
  {
    logging: false,
    native: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true, // Requiere una conexión SSL/TLS
      },
    },
  }
);

DogModel(sequelize);
TemperamentModel(sequelize);

const { dog, temperament } = sequelize.models;

dog.belongsToMany(temperament, { through: "dog_temperament" });
temperament.belongsToMany(dog, { through: "dog_temperament" });

module.exports = {
  ...sequelize.models,
  dog,
  temperament,
  conn: sequelize,
};
