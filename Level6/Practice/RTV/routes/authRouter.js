const express = require('express');
const authRouter = express.Router();
const user = require('../models/user.js');
const jwt = require('jsonwebtoken');



module.exports = authRouter