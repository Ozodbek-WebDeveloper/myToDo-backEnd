const  expensesService = require("../services/expenses.service");

class ExpensesController {
    async categoryCreate(req, res) {
        try {
            const  name = req.body.name;
            const  data = await  expensesService.createCategory(name)
            return res.status(200).json(data)
        } catch (err){
            console.log(err);
            return res.status(400).send({message: err});
        }
    }

    async categoryUpdate(req, res) {
      try {
        const  name = req.body.name;
        const id = req.params.id;
        const  data = await  expensesService.updateCategory(id,name,);
        return res.status(200).json(data)
      } catch (err){
        console.log(err);
        return res.status(400).send({message: err});
      }
    }

    async categoryDelete(req, res) {
      try{
        const id = req.params.id;
        const  data = await  expensesService.deleteCategory(id);
        return res.status(200).json(data)
      }catch(err){
        console.log(err);
        return res.status(400).send({message: err});
      }
    }

    async getAllCategory(req, res) {
      try{
        const  data = await  expensesService.getAllCategories()
        return res.status(200).json(data)
      } catch (err){
        console.log(err);
        return res.status(400).send({message: err});
      }
    }
}

module.exports = new  ExpensesController();