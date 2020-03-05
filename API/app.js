const express = require('express');
const app = express()

const hotels = require('./api/routes/hotels')



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
        return res.status(200).json({});
    }
    next();
});

app.use('/hotels', hotels);




module.exports = app