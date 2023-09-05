const axios = require("axios");
const {dog, temperament} = require('../db')
const { API_URL, API_KEY} = process.env;

const config = {
    headers: {'x-api-key': API_KEY}
}

const getDogDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id)

  try {
    const { data } = await axios(API_URL, config);

    if(id.length==36){
      const dbDetail = await dog.findOne({where:{ID:id}})
    
      if(dbDetail){
        const temp = await dbDetail.getTemperaments();
        dbDetail.dataValues.temperamentos = temp.map(temp => temp.Nombre);
        return res.status(200).json(dbDetail);
    }}
    
    else{
      console.log('API')
      const detail = data.filter((ele) => {
        return ele.id == id;
    }); 
      return res.status(200).json(detail);
    }    
    
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getDogDetail;
