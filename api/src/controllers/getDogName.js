const axios = require("axios");
const { Op } = require("sequelize");
const { API_URL, API_KEY} = process.env;

const config = {
    headers: {'x-api-key': API_KEY}
}

const getDogName = async (req, res) => {
  const { name } = req.query;

  try {
    const { data } = await axios(API_URL, config);

    const dogFiltered = data.filter((element) => {
      return (element.name).toLowerCase().includes(name.toLowerCase());
    });

    res.status(200).json(dogFiltered);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getDogName;
