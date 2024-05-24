import express from "express"; 
import morgan from "morgan";   
import bountyHunterRouter from "./routes/bountyHunterRouter.js";

const app = express();   

// Middleware
app.use(express.json());
app.use(morgan("dev"));


// Route handling
// app.use("/api/bounties", require('./routes/bountyHunterRouter.js'));
app.use("/api/bounties", bountyHunterRouter)

// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something Broke!");
});

// Server listen
app.listen(9000, () => {
    console.log("Server is running on port: 9000");
});
