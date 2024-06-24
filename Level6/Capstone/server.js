const mongoose = require("mongoose")
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

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

// Calling connection to database function
connectToDb();

//routes
//page routes
app.use("/api/books", require("./routes/bookRouter.js"));
app.use("/api/authors", require("./routes/authorRouter.js"));
app.use("/api/pets", require("./routes/petProductsRouter.js"));
app.use("/api/appliance", require("./routes/appliancePartRouter.js"))

//login & create account route.
app.use("/auth/userName", require("./routes/userNameRouter.js"))


// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
});

// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});