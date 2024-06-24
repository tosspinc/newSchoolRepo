const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 9000;

app.use(cors());

if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file.");
    process.exit(1);
}

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// MongoDB connection
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the MongoDB");
    } catch (error) {
        console.error("Error connecting to the MongoDB: ", error);
        process.exit(1);
    }
};

connectToDb();

// Routes
//app.use('/api/User', require('./routes/authRouter.js'));
app.use('/auth/User', require('./routes/authRouter.js'))
app.use('/api/issues', require('./routes/currentIssuesRouter.js'));
app.use('/api/comments', require('./routes/CommentsRouter.js'));

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) {
        return res.status(500).send({ errMsg: err.message });
    }
    next(err);
});

// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
