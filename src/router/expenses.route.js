const express = require( 'express');
const router = express.Router();
const expensesController = require( '../controller/expenses.controller' );

router.post('/expenses/category', expensesController.categoryCreate)
router.put('/expenses/category', expensesController.categoryUpdate)
router.delete('/expenses/category', expensesController.categoryDelete)
router.post('/expenses/allCategory', expensesController.getAllCategory)
module.exports = router;