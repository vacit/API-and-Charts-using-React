const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'working'
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