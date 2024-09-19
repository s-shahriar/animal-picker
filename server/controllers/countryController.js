const { getAllCountries } = require('../models/countryModel')

const fetchAllCountries = async (req, res) => {
  try {
    const countries = await getAllCountries();
    res.status(200).send(countries);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch countries' });
  }
};

module.exports = {
  fetchAllCountries,
};
