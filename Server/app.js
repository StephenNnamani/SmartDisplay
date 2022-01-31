const express           = require('express');
const express_session   = require('express-session');
const ejs               = require('ejs')
const bodyParse         = require('body-parser');
const mongoose          = require('mongoose').mongoDB 
const port              = '3000'
const app               = express();

app.get('/',  (req, res, err) =>{
    res.send({title: "hello world"})
})

app.listen(port, () => {
    console.log(`The Smart Flight Booking is listening on port ${port}`)
})