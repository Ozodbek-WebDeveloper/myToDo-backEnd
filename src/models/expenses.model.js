const mongoose = require('mongoose');

const db_url =  process.env.DB_URL_EXPENSES
const expensesConnection = mongoose.createConnection(db_url)

const expenseCategory = new mongoose.Schema({
    name: {type: String, required: true},
})

const  expenseItem = new mongoose.Schema({
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category',required: true},
    name: {type: String, required: true},
})

const expense = new mongoose.Schema({
    itemId: {type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseItem',required: true},
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true},
    paymentMethod: {type: String, required: true},
    receipt_image: {type: String},
},{ timestamps: true })

const Category = expensesConnection.model('Category', expenseCategory);
const Item = expensesConnection.model('ExpenseItem', expenseItem );
const Expense = expensesConnection.model('Expense', expense);

module.exports ={
    Category,
    Item,
    Expense,
};