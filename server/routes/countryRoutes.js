const express = require('express');
const { fetchAllCountries } = require('../controllers/countryController');
const router = express.Router();

router.get('/', fetchAllCountries);

module.exports = router;
