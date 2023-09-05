const axios = require("axios");
const { API_URL, API_KEY} = process.env;
const config = {
    headers: {'x-api-key': API_KEY}
}
const { dog } = require("../db");
const { temperament } = require("../db");

const postDogs = async (req, res) => {
  const createdDog = req.body;
  const altura = `${createdDog.altura_min} a ${createdDog.altura_max} Cm`;
  const peso = `${createdDog.peso_min} a ${createdDog.peso_max} Kg`;
  const temperaments = createdDog.temperamento;
  
  
  
  try {
    const { data } = await axios(API_URL, config);
    const imagen = data[Math.floor(Math.random() * data.length)].image.url;

    
      const dogUser = await dog.findOrCreate({where:{name:createdDog.nombre}, defaults:{
          name: createdDog.nombre,
          Imagen: imagen,
          Altura: altura,
          Peso: peso,
          AñosDeVida: `${createdDog.años_vida} years`},})
     
      const [user, created] = dogUser
      const temp = await temperament.findAll({where:{Nombre: temperaments}})

      user.setTemperaments(temp)
      
      if(created){
        return res.status(200).send("The dog has been created succesfully");
      }else{
        return  res.status(409).send('Already exist a dog with the same name');
      }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = postDogs;
