const expensesService = require("../services/expenses.service");

class ExpensesController {
  // ------------   category
  async categoryCreate(req, res) {
    try {
      const ownerId = req.user.id
      const name = req.body.name;
      const data = await expensesService.createCategory({ ownerId, name })
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }

  async categoryUpdate(req, res) {
    try {
      const name = req.body.name;
      const id = req.params.id;
      const data = await expensesService.updateCategory(id, name,);
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }

  async categoryDelete(req, res) {
    try {
      const id = req.params.id;
      const data = await expensesService.deleteCategory(id);
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }

  async getAllCategory(req, res) {
    try {
      const ownerId = req.user.id
      const data = await expensesService.getAllCategories(ownerId)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }

  //-----------Items

  async createItem(req, res) {
    try {
      const ownerId = req.user.id
      const { categoryId, name } = req.body
      const data = await expensesService.createItem(categoryId, { ownerId, name })
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async updateItem(req, res) {
    try {
      const { name, categoryId } = req.body
      const id = req.params.id
      const data = await expensesService.updateItem(id, { name, categoryId })
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async deleteItem(req, res) {
    try {
      const id = req.params.id
      const data = await expensesService.deteleItem(id)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async getAllItem(req, res) {
    try {
      const ownerId = req.user.id
      const data = await expensesService.getAllItem(ownerId)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  //----------- Expenses

  async createExpenses(req, res) {
    try {
      // const {itemId,name,description,price,date,paymentMethod} =  req.body
      const ownerId = req.user.id
      const data = await expensesService.expensesCreate({ ...req.body, ownerId })
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async updateExpenses(req, res) {
    try {
      const id = req.params.id
      const data = await expensesService.updateExpenses(id, { ...req.body })
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async deleteExpenses(req, res) {
    try {
      const id = req.params.id
      const data = await expensesService.deleteExpenses(id)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async findOneExpenses(req, res) {
    try {
      const id = req.params.id
      const data = await expensesService.findOneExpenses(id)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async getAllExpenses(req, res) {
    try {
      const ownerId = req.user.id
      const role = req.user.role
      const filter = {ownerId}
      const { page, size, categoryId, itemId } = req.body
      if(categoryId) filter.categoryId = categoryId
      if(itemId) filter.itemId = itemId
      const start = (page - 1) * size
      console.log(filter);
      
      const data = await expensesService.getAllExpenses(start, size, filter,role)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }
}


module.exports = new ExpensesController();