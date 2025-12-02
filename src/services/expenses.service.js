const expensesModel = require("../models/expenses.model");
const mongoose = require('mongoose')
const authEnums = require('../enums/auth.enum')
const ObjectId = mongoose.Types.ObjectId;

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
      {
        $match: { ownerId: new ObjectId(filter.ownerId) }
      },
      {
        $lookup: {
          from: "expenseitems",
          localField: "itemId",
          foreignField: "_id",
          as: "item"
        }
      },
      { $unwind: "$item" },
      ...(filter.categoryId ? [{
        $match: {
          "item.categoryId": new ObjectId(filter.categoryId)
        }
      }] : []),
      {
        $lookup: {
          from: "categories",
          localField: "item.categoryId",
          foreignField: "_id",
          as: "item.category"
        }
      },
      { $unwind: "$item.category" },
      ...(filter.itemId ? [{
        $match: {
          "item._id": new ObjectId(filter.itemId)
        }
      }] : []),
      {
        $facet: {
          total: [{ $count: "count" }],
          res: [{ $skip: start }, { $limit: end }]
        }
      }
    ];

    const data = await expensesModel.Expense.aggregate(agg);
    const total = data[0].total[0]?.count || 0;
    const res = data[0].res;
    return { total, res };
  }


}

module.exports = new ExpensesService();