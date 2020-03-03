const express = require('express');
const Papa = require('../papaparse.min.js');
const fs=require('fs');
const config ={
    header: true, 
    dynamicTyping: true, 
    skipEmptyLines:true,
    preview:10,
    // download:true,
    /*uncomment this to do replace null values with whitespace string */
    // transform: (value) => {
    //     if (value==='') { return ' ' }
    //     else { return value }
    // },
}

const router = express.Router();




let papa
fs.readFile('./hotellist.csv','utf8',(error,data)=>{ papa= Papa.parse(data, config);})
console.log(papa)
// const papa = Papa.parse(data, config);

// const sub = csv.forEach((element) => { console.log('first',element.split(',')) })


router.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json({
        result: papa.data,
        rowNames: papa.meta.fields
    });
});

router.get('/:hotelName', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const hotelName = req.params.hotelName;
    res.status(200).json({
         hotelName
    });
});


module.exports = router;