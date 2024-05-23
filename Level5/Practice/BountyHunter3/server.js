    const express = require("express");
    const app = express();
    const morgan = require("morgan");

    //middleware
    app.use(express.json());
    app.use(morgan("dev"));

    //basic error handler
    app.use((err, req, send, next) => {
        console.error(err.stack)
        res.status(500).send("Something Broke!")
    })

    //route handling
    // app.use(/api, require( expressjwt({algorithm})))
    app.use( "/api/bounties", require('./routes/bountyHunterRouter.js'))

    //server listen
    app.listen(9000, () => {
        console.log("Server is running on port: 9000")
    })