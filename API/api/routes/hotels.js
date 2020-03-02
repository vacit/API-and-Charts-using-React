const express = require('express');
const Papa = require('../papaparse.min.js');
const fs=require('fs');
const path=require('path');
const config ={
    header: true, 
    dynamicTyping: true, 
    skipEmptyLines:true,
    preview:2,
    // download:true,
    /*uncomment this to do replace null values with whitespace string */
    // transform: (value) => {
    //     if (value==='') { return ' ' }
    //     else { return value }
    // },
}
const router = express.Router();

// const csv = require(path.join(__dirname, '../../test.js'))
console.log(process.cwd())

console.log(path.join(__dirname, '../../test.js'))


let papa
fs.readFile('./hotellist.csv','utf8',(error,data)=>{ papa= Papa.parse(data, config);})
console.log(papa)
// const papa = Papa.parse(data, config);

// const sub = csv.forEach((element) => { console.log('first',element.split(',')) })
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'working',
        value: papa.data,
        fields: papa.meta.fields
    });
});

router.get('/:hotelName', (req, res, next) => {
    const hotelName = req.params.hotelName;
    res.status(200).json({
        message: 'hotel name',
        value: hotelName
    });
});


module.exports = router;