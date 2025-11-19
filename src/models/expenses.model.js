const {mongoose} = require('mongoose');

const expenseCategory = new mongoose.Schema({
    name: {type: String, required: true},
})

const  expenseItem = new mongoose.Schema({
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    name: {type: String, required: true},
})

const expense = new mongoose.Schema({
    itemId: {type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseItem'},
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true},
    paymentMethod: {type: String, required: true},
    receipt_image: {type: String, required: true},
},{ timestamps: true })

const Category = mongoose.model('Category', expenseCategory);
const Item = mongoose.model('ExpenseItem', expenseItem );
const Expense = mongoose.model('Expense', expense);

module.exports ={
    Category,
    Item,
    Expense,
};