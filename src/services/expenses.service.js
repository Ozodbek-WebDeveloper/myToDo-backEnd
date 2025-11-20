const expensesModel = require("../models/expenses.model");

class ExpensesService {
  // -------------  category
  async createCategory(name) {
    const res = await expensesModel.Category.create({ name });
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
  async getAllCategories() {
    const res = await expensesModel.Category.find();
    return res
  }
  // items
  async createItem(categoryId, name) {
    const res = await expensesModel.Item.create(categoryId, name)
    return res
  }

  async updateItem(id, name) {
    const res = await expensesModel.Item.findByIdAndUpdate(id, { name }, { new: true })
    return res
  }

  async deteleItem(id) {
    const res = await expensesModel.Item.findByIdAndDelete(id)
    return res
  }

  async getAllItem() {
    const res = await expensesModel.Item.find()
    return res
  }
}

module.exports = new ExpensesService();