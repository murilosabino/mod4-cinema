//Requisição da model Funcionario
const Funcionario = require('../models/funcionario.model');
const FuncionarioDao = require('../DAO/funcionarioDao');


function funcionario(app, bd){
    let funcDAO = new FuncionarioDao(bd);
    app.get('/funcionarios', async (req, res) => {

      try{
        let rows = await funcDAO.getTodosFuncionarios()
        res.json({'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })

    app.get('/funcionarios/:CPF', async (req, res) => {

        try{
          let CPF = req.params.CPF;
          let rows = await funcDAO.getFuncionario(CPF)
          res.json({'result': rows})
        }
        catch(e){
          res.json({'erro': e.message})
        }
        })

    app.post('/funcionarios', async (req, res, next) => {
      try{
        let {nome, sexo, idade, CPF} = req.body
        let newFuncionario = new Funcionario(nome, sexo, idade, CPF)
        let rows = await funcDAO.createFuncionario(newFuncionario)
        res.json({
          'message': 'funcionario criado',
          'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })

    app.delete('/funcionarios/:CPF', async (req, res)=>{
      try{
        let CPF = req.params.CPF
        let rows = await funcDAO.deleteFuncionario(CPF)
        res.json({
          'message': 'funcionario deletado',
        'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })

    app.put('/funcionarios/:id', async (req, res)=>{
      try{
        let id = req.params.id
        let {nome, sexo, idade, CPF} = req.body
        let rows = await funcDAO.updateFuncionario(nome, sexo, idade, CPF, id)
        res.json({
          'message': 'funcionario atualizado',
          'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
    })
}


module.exports = funcionario