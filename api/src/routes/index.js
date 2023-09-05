const { Router } = require('express');
// Importar todos los routers;

const getDogs = require('../controllers/getDogs')
const postDogs = require('../controllers/postDogs')
const getDogName = require('../controllers/getDogName')
const getTemperaments = require('../controllers/getTemperaments')
const getDogDetail = require('../controllers/getDogDetail')
const deleteDog = require('../controllers/deleteDog')





const router = Router();



router.get('/dogs', getDogs)
router.post('/dogs', postDogs)
router.get('/dogs/name', getDogName)
router.get('/temperaments', getTemperaments)
router.get('/dogs/:id', getDogDetail)
router.delete('/dogs/:id', deleteDog)


module.exports = router;
