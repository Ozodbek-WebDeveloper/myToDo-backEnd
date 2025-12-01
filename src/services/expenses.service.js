const expensesModel = require("../models/expenses.model");
const mongoose = require('mongoose')
const authEnums = require('../enums/auth.enum')
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
    const res = await expensesModel.Item.find({ ownerId: id })
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














async getAllExpenses(start, end, filter, role) {
  const agg = [
    { $match: { ownerId: filter.ownerId } },

    // ITEM GET
    {
      $lookup: {
        from: "expenseitems",
        localField: "itemId",
        foreignField: "_id",
        as: "item"
      }
    },
    { $unwind: { path: "$item", preserveNullAndEmptyArrays: true } },

    // CATEGORY GET
    {
      $lookup: {
        from: "categories",
        localField: "item.categoryId",
        foreignField: "_id",
        as: "category"
      }
    },
    { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
  ];

  // ⭐ CategoryId bo‘lsa Faqat shunda filter qo‘shamiz
  if (filter.categoryId) {
    agg.push({
      $match: {
        $or: [
          { "category._id": new mongoose.Types.ObjectId(filter.categoryId) },
          { category: null } // ⭐ Category NULL bo‘lsa — yo‘qotmaydi
        ]
      }
    });
  }

  // TOTAL
  const total = await expensesModel.Expense.aggregate([
    ...agg,
    { $count: "total" }
  ]);

  const count = total[0]?.total ?? 0;

  // PAGINATION
  const res = await expensesModel.Expense.aggregate([
    ...agg,
    { $skip: start },
    { $limit: end - start }
  ]);

  return { total: count, res };
}










}

module.exports = new ExpensesService();