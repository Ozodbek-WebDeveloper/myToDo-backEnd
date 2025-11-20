const  expensesModel = require("../models/expenses.model");

class  ExpensesService {
    async createCategory(name) {
        const  res = await  expensesModel.Category.create({name});
        return res
    }
    async updateCategory(id, name) {
      const  res = await  expensesModel.Category.findByIdAndUpdate(id, {name}, {new: true});
      return res
    }
    async deleteCategory(id) {
      const  res = await  expensesModel.Category.findByIdAndDelete(id);
      return res
    }
    async getAllCategories() {
      const  res = await expensesModel.Category.find();
      return res
    }
}

module.exports = new ExpensesService();