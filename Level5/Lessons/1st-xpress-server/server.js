const express = require("express")
const app = express()   //app now has everything to become a server from express.

//Middleware (happens for every request)//
app.use(express.json())    //looks for a request body, turns it into 'req.body' and fires on every request.

//initial stuff.//
    //data to be used for now. Fake Data.//
    // const users = [
    //     { name: "Joe", age: 30 },
    //     { name: "Sam", age: 29 },
    //     { name: "Barbara", age: 48 },
    //     { name: "Jackie", age: 32 },
    //     { name: "Bill", age: 60 },
    // ]

    //first argument is the endpoint (mount path)
    //second argument is the callback function
    // app.get("/users", (req, res) => {
    //     res.send(users)
    // }) 

const movies = [
    { title: "Die Hard", genre: "action" },
    { title: "Star Wars IV", genre: "fantasy" },
    { title: "Lion King", genre: "fantasy" },
    { title: "Friday the 13th", genre: "horror" }
]

//routes //
app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    const newMovie = req.body
    movies.push(newMovie)
    res.send(`successfully added ${newMovie.title} to the database.`)
    
})

//server listen //
app.listen(9000, () => {
    console.log("Server is running on port: 9000")
})  