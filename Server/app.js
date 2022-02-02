const express           = require('express');
const express_session   = require('express-session');
const ejs               = require('ejs')
const bodyParse         = require('body-parser');
const mongoose          = require('mongoose').mongoDB 
const port              = '3000'
const app               = express();

let name = "chinaemenma"
let hotel = "Golden Royal"
let visa = `You have been issued a 5 years H1B visa ${23 + 7}`
app.get('/',  (req, res) =>{
    res.send(`My name is ${name}`)
})

// Mongoose connect
mongoose.connect(process.env.DB_CONNECTION)

//Routes are here
const flightRoute = require("./routes/flights");
const hotelRoute  = require("./routes/hotels")
const visaRoute   = require("./routes/visa")

app.use('/flights', flightRoute)
app.use('/hotels', hotelRoute)
app.use('/visa', visaRoute)



app.listen(port, () => {
    console.log(`The Smart Flight Booking is listening on port ${port}`)
})