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

      

        /*bd.all("SELECT * FROM funcionarios", (err, rows) =>{
          if(err){
            res.json({message: 'erro'})
          }
          else{
            res.json({
              result: rows
            })
          }
        })*/
      })

    app.post('/funcionarios', async (req, res, next) => {
      try{
        let newFuncionario = new Funcionario('murilo', 'MASCULINO', 24, 12345678900)
        let rows = await funcDAO.createFuncionario(newFuncionario)
        res.json({'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
        /*const {nome, sexo, idade, cpf, dataAdmissao} = req.body
        let newFuncionario = new Funcionario(nome, sexo, idade, cpf, dataAdmissao);
        bd.funcionarios.push(newFuncionario)*/
        res.json({'message':'Funcionário criado'})
      })

    app.delete('/funcionarios/:CPF', (req, res)=>{
        let parametroCPF = req.params.CPF
        bd.funcionarios = bd.funcionarios.filter((item)=>{
          return item.CPF !== parametroCPF
        })
        res.json({
          message: `O usuario ${parametroCPF} foi deletado`
        })
      })

    app.put('/funcionarios/:CPF', (req, res)=>{
        let parametroCPF = req.params.CPF
        let bodyCPF = req.body.CPF
        bd.funcionarios = bd.funcionarios.map((item)=>{
          if(parametroCPF === item.CPF){
            item.CPF = bodyCPF
            return item
          }
          else{
            res.json({
              message: `Não existe nenhum usuário com o CPF ${parametroCPF}`
            })
          }
           
        })
        res.json({
          message: `O id ${parametroCPF} foi alterado para ${bodyCPF}`
        })
      })
}

module.exports = funcionario