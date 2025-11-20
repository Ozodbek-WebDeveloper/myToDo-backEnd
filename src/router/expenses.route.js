const express = require('express');
const router = express.Router();
const expensesController = require('../controller/expenses.controller');

router.post('/expenses/category', expensesController.categoryCreate)
router.put('/expenses/category/:id', expensesController.categoryUpdate)
router.delete('/expenses/category/:id', expensesController.categoryDelete)
router.get('/expenses/allCategory', expensesController.getAllCategory)

router.post('/expenses/item', expensesController.createItem)
module.exports = router;