const mongoose = require('mongoose');

const db_url = process.env.DB_URL_EXPENSES
const expensesConnection = mongoose.createConnection(db_url)

const expenseCategory = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
}, { timestamps: true })

const expenseItem = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
}, { timestamps: true })

const expense = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.ObjectId, ref: 'users', required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseItem', required: true },
    name: { type: String, required: true },
    description: { type: String, },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    paymentMethod: { type: String, required: true },
    receipt_image: { type: String },
}, { timestamps: true })

const Category = expensesConnection.model('Category', expenseCategory);
const Item = expensesConnection.model('ExpenseItem', expenseItem);
const Expense = expensesConnection.model('Expense', expense);

module.exports = {
    Category,
    Item,
    Expense,
};