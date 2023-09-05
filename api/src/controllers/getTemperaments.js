const axios = require("axios");
const { temperament } = require("../db");
const { API_URL } = process.env;

const getTemperaments = async (req, res) => {
  
  try {
    const { data } = await axios(API_URL);
    const info = data
      .map((dog, index) => {
        return dog.temperament;
      })
      .join(",")
      .split(",");

    const temperaments = info.map((element) => {
      return element.trim();
    });
    for (let i = 0; i < temperaments.length; i++) {
      await temperament.findOrCreate({
        where: { Nombre: temperaments[i] },
        defaults: {
          Nombre: temperaments[i],
        },
      });
    }
    const dbTemperaments = await temperament.findAll()
    
    res.status(201).json(dbTemperaments);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getTemperaments;
