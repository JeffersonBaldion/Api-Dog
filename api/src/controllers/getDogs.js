const axios = require('axios')
const { API_URL, API_KEY} = process.env;
const { dog, temperament } = require("../db");

const config = {
    headers: {'x-api-key': API_KEY}
}

const getDogs = async(req,res) => {
    

    try {
        const {data} = await axios(API_URL, config)
        const dbData = await dog.findAll({include: temperament})
        const dogs = [...data, ...dbData]
        

        res.status(201).json(dogs)
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = getDogs