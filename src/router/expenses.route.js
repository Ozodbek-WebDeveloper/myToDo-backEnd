const express = require('express');
const router = express.Router();
const expensesController = require('../controller/expenses.controller');

router.post('/expenses/category', expensesController.categoryCreate)
router.put('/expenses/category/:id', expensesController.categoryUpdate)
router.delete('/expenses/category/:id', expensesController.categoryDelete)
router.get('/expenses/allCategory', expensesController.getAllCategory)

router.post('/expenses/item', expensesController.createItem)
router.put('/expenses/item/:id', expensesController.updateItem)
router.delete('/expenses/item/:id', expensesController.deleteItem)
router.get('/expenses/allItem', expensesController.getAllItem)

router.post('/expenses/expense', expensesController.createExpenses)
router.put('/expenses/expense/:id', expensesController.updateExpenses)
router.delete('/expenses/expense/:id', expensesController.deleteExpenses)
router.get('/expenses/expense/:id', expensesController.findOneExpenses)
router.get('/expenses/allExpense', expensesController.getAllExpenses)
module.exports = router;