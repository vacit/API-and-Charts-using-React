const express =require('express');
const app=express()

const hotels=require('./api/routes/hotels')


app.use('/hotels',hotels);

module.exports=app