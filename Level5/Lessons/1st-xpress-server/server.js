const express = require("express")
const app = express()   //app now has everything to become a server from express.

//data to be used for now.
const users = [
    { name: "Joe", age: 30 },
    { name: "Sam", age: 29 },
    { name: "Barbara", age: 48 },
    { name: "Jackie", age: 32 },
    { name: "Bill", age: 60 },
]

//first argument is the endpoint (mount path)
//second argument is the callback function
app.get("/users", (req, res) => {
    res.send(users)
}) 


app.listen(9000, () => {
    console.log("Server is running on port: 9000")
})  