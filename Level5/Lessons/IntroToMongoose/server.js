const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
//const mongoose = require('mongoose')
const app = express();
const port = 9000;
const mongoUrl = 'mongodb+srv://tosspi:rqsaxOgv8352izWo@cluster0.2awqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use("/movies", require("./movieRouter.js")) 

// MongoDB connection
let db;

MongoClient.connect(mongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('tosspi');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

// Server listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = { app, db }; // Export app and db for testing or further use
