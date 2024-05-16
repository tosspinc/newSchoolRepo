const express = require("express")
const app = express()   //app now has everything to become a server from express.

//first argument is the endpoint (mount path)
//second argument is the callback function
app.get("/", (req, res) => {
    res.send({name: "Joe", age: 30})
}) 


app.listen(9000, () => {
    console.log("Server is running on port: 9000")
})