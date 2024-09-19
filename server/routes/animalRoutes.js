const express = require('express');
const { fetchAllAnimals, fetchAnimalById, createAnimal } = require('../controllers/animalController');
const router = express.Router();

router.get('/', fetchAllAnimals);
router.get('/:id', fetchAnimalById);
router.post('/', createAnimal);

module.exports = router;
