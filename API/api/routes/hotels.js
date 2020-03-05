const express = require("express");
const Papa = require("../papaparse.min.js");
const fs = require("fs");
const config = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    // preview: 10,
    // download:true,
    /*uncomment this to do replace null values with whitespace string */
    // transform: (value) => {
    //     if (value==='') { return ' ' }
    //     else { return value }
    // },
};

const router = express.Router();

let papa;
fs.readFile("./hotellist.csv", "utf8", (error, data) => {
    papa = Papa.parse(data, config);
});
// console.log(papa)
// const papa = Papa.parse(data, config);

// const sub = csv.forEach((element) => { console.log('first',element.split(',')) })
const getFieldValues = (data, field) => {
    let values = [];
    data.forEach(obj => {
        values.push(obj[field]);
    });
    return values;
};

router.get("/", (req, res, next) => {
    let result = {}

    if (req.query.fields) {
        const fieldsArr = req.query.fields.split(',');
        fieldsArr.forEach(el => {
            result[el] = getFieldValues(papa.data, el);
        });
        // console.log('result:', result)
    }

    res.status(200).json({
        result,
        tableTitles: papa.meta.fields
    });
});

// router.get('/', (req, res, next) => {

//     res.status(200).json({
//         result: papa.data,
//         rowNames: papa.meta.fields
//     });
// });

// router.get('/:hotelName', (req, res, next) => {

//     const hotelName = req.params.hotelName;
//     res.status(200).json({
//          hotelName
//     });
// });

module.exports = router;
