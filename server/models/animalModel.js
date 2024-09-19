const { client } = require('../config/db');

const animalCollection = client.db("animalDB").collection("animal");

const getAllAnimals = async () => {
  const cursor = animalCollection.find();
  return await cursor.toArray();
};

const getAnimalById = async (id) => {
  return await animalCollection.findOne({ _id: id });
};

const addAnimal = async (animal) => {
  return await animalCollection.insertOne(animal);
};

module.exports = {
  getAllAnimals,
  getAnimalById,
  addAnimal,
};
