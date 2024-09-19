const { client } = require('../config/db');

const countryCollection = client.db("spotsDB").collection("countryDB");

const getAllCountries = async () => {
  const cursor = countryCollection.find();
  return await cursor.toArray();
};

module.exports = {
  getAllCountries,
};
