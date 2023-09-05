require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DogModel = require('./models/Dog')
const TemperamentModel = require('./models/Temperaments')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogdatabase`,
    { logging: false, native: false }
 );

 DogModel(sequelize);
 TemperamentModel(sequelize);

 const {dog, temperament} = sequelize.models;

dog.belongsToMany(temperament, { through: 'dog_temperament' });
temperament.belongsToMany(dog, { through: 'dog_temperament' });

 module.exports = {
    ...sequelize.models,
    dog,
    temperament,
    conn: sequelize,
 }