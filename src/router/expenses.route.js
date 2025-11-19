const express = require( 'express');
const router = express.Router();

router.post('/expenses', (req, res) => {
    res.status(200).send({msg: 'Expense'})
})

module.exports = router;