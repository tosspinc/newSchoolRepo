const express = require("express");
    const { v4 : uuidv4} = require("uuid");
    const morgan = require("morgan");
    const app = express();

    //middleware
    app.use(express.json());
    app.use(morgan("dev"));

    app.use("/products", require("./routes/productRouter.js"))