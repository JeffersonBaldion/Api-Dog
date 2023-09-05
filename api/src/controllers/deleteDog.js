const {dog} = require('../db')

const deleteDog = async(req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        await dog.destroy({where:{ID:id}})
        res.status(200).send('The dog has been deleted')
    } catch (error) {
        res.status(500).json({"message":"The id is not found"})
    }
}

module.exports = deleteDog