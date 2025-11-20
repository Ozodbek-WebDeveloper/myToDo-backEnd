const expensesService = require("../services/expenses.service");

class ExpensesController {
  // ------------   category
  async categoryCreate(req, res) {
    try {
      const name = req.body.name;
      const data = await expensesService.createCategory(name)
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
      const data = await expensesService.getAllCategories()
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }

  //-----------Items

  async createItem(req, res) {
    try {
      const { categoryId, name } = req.body
      const data = await expensesService.createItem(categoryId, name)
      return res.status(200).json(data)
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async epdateItem(req, res) {
    try {
      const name = req.body.name
      const id = req.params.id
      const data = await expensesService.updateItem(id, name)
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
    } catch (error) {
      console.log(err);
      return res.status(400).json({ message: err })
    }
  }

  async getAllItem(req,res){
    
  }
}

module.exports = new ExpensesController();