const express = require('express')
const movieRouter = express.Router()
const {v4 : uuidv4 } = require('uuid')
const app = express()

const movies = [
    { title: "Die Hard", genre: "action", _id: uuidv4() },
    { title: "Star Wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "Lion King", genre: "fantasy", _id: uuidv4() },
    { title: "Friday the 13th", genre: "horror", _id: uuidv4() }    
]

//get all
movieRouter.get("/", (req, res, next) => {
    res.status(200)
    res.send(movies)
})

//get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if (!foundMovie) {
        const error = new Error(`The Item with id ${movieId} was not found!`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})

module.exports = movieRouter