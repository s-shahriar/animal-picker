const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/db');
const animalRoutes = require('./routes/animalRoutes');
const countryRoutes = require('./routes/countryRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/animals', animalRoutes);
app.use('/country', countryRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
