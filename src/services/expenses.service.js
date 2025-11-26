const expensesModel = require("../models/expenses.model");

class ExpensesService {
  // -------------  category
  async createCategory(data) {
    const res = await expensesModel.Category.create({ ...data });
    return res
  }

  async updateCategory(id, name) {
    const res = await expensesModel.Category.findByIdAndUpdate(id, { name }, { new: true });
    return res
  }
  async deleteCategory(id) {
    const res = await expensesModel.Category.findByIdAndDelete(id);
    return res
  }
  async getAllCategories(id) {
    const res = await expensesModel.Category.find({ ownerId: id });
    return res
  }
  // items
  async createItem(categoryId, data) {
    const res = await expensesModel.Item.create({ categoryId, ...data })
    return res
  }

  async updateItem(id, data) {
    const res = await expensesModel.Item.findByIdAndUpdate(id, { ...data }, { new: true })
    return res
  }

  async deteleItem(id) {
    const res = await expensesModel.Item.findByIdAndDelete(id)
    return res
  }

  async getAllItem(id) {
    const res = await expensesModel.Item.find({ownerId:id})
    return res
  }
  // expenses
  async expensesCreate(data) {
    const res = await expensesModel.Expense.create({ ...data })
    return res
  }

  async updateExpenses(id, data) {
    const res = await expensesModel.Expense.findByIdAndUpdate(id, { ...data }, { new: true })
    return res
  }

  async deleteExpenses(id) {
    const res = await expensesModel.Expense.findByIdAndDelete(id)
    return res
  }

  async findOneExpenses(id) {
    const res = await expensesModel.Expense.findById(id).populate({ path: 'itemId', populate: { path: 'categoryId' } })
    return res
  }

  async getAllExpenses(id) {
    const res = await expensesModel.Expense.find({ownerId:id}).populate({ path: 'itemId', populate: { path: 'categoryId' } })
    return res
  }
}

module.exports = new ExpensesService();