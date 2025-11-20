const express = require('express');
const router = express.Router();
const expensesController = require('../controller/expenses.controller');

router.post('/expenses/category', expensesController.categoryCreate)
router.put('/expenses/category/:id', expensesController.categoryUpdate)
router.delete('/expenses/category/:id', expensesController.categoryDelete)
router.get('/expenses/allCategory', expensesController.getAllCategory)

router.post('/expenses/item', expensesController.createItem)
router.put('/expenses/item/:id', expensesController.epdateItem)
router.delete('/expenses/item/:id', expensesController.deleteItem)
router.get('/expenses/item', expensesController.getAllItem)

router.post('/expenses/expens', expensesController.createExpenses)
router.put('/expenses/expens/:id', expensesController.updateExpenses)
router.delete('/expenses/expens/:id', expensesController.deleteExpenses)
router.get('/expenses/expens/:id', expensesController.findOneExpenses)
router.get('/expenses/allExpens', expensesController.getAllExpenses)
module.exports = router;