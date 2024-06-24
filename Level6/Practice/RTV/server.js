const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

const secret = process.env.SECRET;
const app = express();
const port = 9000;

app.use(cors())

// Check if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file.")
    process.exit(1)
}

//middleware
app.use(express.json());
app.use(morgan("dev"));

// MongoDB connection
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the MongoDB");
    } catch (error) {
        console.error("Error connecting to the MongoDB: ", error);
        console.error("Error stack: ", error.stack)
        process.exit(1)
    }
};

//calls connection to mongoDB
connectToDb();

//routes
app.use('/api/User', require('./routes/authRouter.js'))
app.use('/api/Issues', require('./routes/currentIssuesRouter.js'))

// Error handling
//this keeps the headers from being sent multiple times.
app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) {
        return res.status(500).send({ errMsg: err.message });
    }
    next(err)
});

// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});