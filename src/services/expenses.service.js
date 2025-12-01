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
    // 1. Dastlabki qidiruv
    { $match: { ownerId: filter.ownerId } },
    
    // 2. expenseitems bilan bog'lash
    {
      $lookup: {
        from: "expenseitems",
        localField: "itemId",
        foreignField: "_id",
        as: "item"
      }
    },
    { $unwind: { path: "$item", preserveNullAndEmptyArrays: true } },
    
    // 3. categories bilan bog'lash
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

  // 🛑 DIQQAT: Filtrlash bosqichini massivga qo'shish (push)
  if (filter.categoryId) {
    agg.push({
      $match: {
        // `$unwind`dan keyin `category` ichidagi `_id`ga murojaat qilish kerak
        "category._id": filter.categoryId
      }
    });
  }

  // Bu aggregation pipeline ma'lumotlar bilan ishlash uchun ishlatiladi.
  // Agar siz faqat pipeline ni qaytarmoqchi bo'lsangiz:
  return { agg };
  
  // Agar ma'lumotlar bazasida bajarmoqchi bo'lsangiz:
  // return ExpenseModel.aggregate(agg); // Agar ExpenseModel mavjud bo'lsa
}









}

module.exports = new ExpensesService();