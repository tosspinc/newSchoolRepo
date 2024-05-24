const express = require("express"); 
const app = express();              
const morgan = require("morgan");   

// Middleware
app.use(express.json());
app.use(morgan("dev"));


// Route handling
app.use("/api/bounties", require('./routes/bountyHunterRouter.js'));


// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something Broke!");
});

// Server listen
app.listen(9000, () => {
    console.log("Server is running on port: 9000");
});
