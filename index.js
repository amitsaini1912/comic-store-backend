
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const comicRoutes = require('./routes/comicRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api', comicRoutes);

// Database Connection
main()
  .then( () => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
  await mongoose.connect(process.env.DB_URL);
};


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
