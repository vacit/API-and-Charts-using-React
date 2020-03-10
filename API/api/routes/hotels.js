const express = require("express");
const PaParser = require("../papaparse.min.js");
const fs = require("fs");
const config = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    // preview: 2000,
    // download:true,
    /*uncomment this to do replace null values with whitespace string */
    // transform: (value) => {
    //     if (value==='') { return ' ' }
    //     else { return value }
    // },
};

const router = express.Router();
console.time('readFilePapa')
let papa;
fs.readFile("./hotellist.csv", "utf8", (error, data) => {
    papa = PaParser.parse(data, config);
});
console.timeEnd('readFilePapa')




const getFieldValues = (data, field) => {
    let values = [];
    let formattedValue;
    let currentValue;
    data.forEach(obj => {
        currentValue = obj[field]
        // console.log(currentValue)
        if (currentValue && currentValue.toString().includes(',')) {

            formattedValue = parseFloat(currentValue.replace(/,/g, '.'));

            values.push(formattedValue);
        }
        else
            values.push(currentValue);

        // if(currentValue===null){
        //     console.log(obj.field);
        // }
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
