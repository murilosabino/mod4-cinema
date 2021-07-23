class FuncionarioDao{
    constructor(db){
        this.db = db
    }

//Lista todos os funcionarios
getTodosFuncionarios(){
    return new Promise((res, rej)=>{
        this.db.all('SELECT * FROM funcionarios', (err, rows)=>{
            if(err){
                rej(err)
            }else{
                res(rows)
            }
        })
    })
}

//Lista 1 funcionario buscando pelo seu CPF
getFuncionario(CPF){
    return new Promise((res, rej)=>{
        this.db.all('SELECT * FROM funcionarios WHERE CPF = ?', CPF, (err, rows)=>{
            if(err){
                rej(err)
            }else{
                res(rows)
            }
        })
    })
}

//Cria 1 funcionario
createFuncionario(newFuncionario){
    return new Promise((res, rej)=>{
        this.db.run(`INSERT INTO funcionarios (nome, sexo, idade, CPF, dataAdmissao)
        VALUES (?,?,?,?,?)`, [newFuncionario.nome, newFuncionario.sexo, newFuncionario.idade,
        newFuncionario.CPF, newFuncionario.dataAdmissao],
        (err)=>{
            if(err){
                rej(err)
            }else{
                res({'resultado': true})
            }
        })
    })
}

//Deleta 1 funcionario especifico pelo seu CPF
deleteFuncionario(CPF){
    return new Promise((resolve, reject)=>{
        this.db.run(`DELETE FROM funcionarios WHERE CPF = ?`, CPF,(err)=>{
            if(err){
                reject({"resultado" : 'Erro ao deletar'})
            }else{
                resolve({"resultado" : 'Funcionario deletado'})
            }
        })
        })
    }

//Atualiza funcionario
updateFuncionario(nome, sexo, idade, CPF, id){
    return new Promise((resolve, reject)=>{

    let mudanca = [];
    let params = [id];
    let query = "UPDATE funcionarios SET"
//Altera o nome caso o body.nome seja diferente de null
    if(nome != null){
        params.unshift(nome)
        mudanca.unshift(" NOME =?")
//Altera o sexo caso o body.sexo seja diferente de null        
    }
    if(sexo != null){
        params.unshift(sexo)
        mudanca.unshift(" SEXO =?")
//Altera idade caso o body.idade seja diferente de null          
    }
    if(idade != null){
        params.unshift(idade)
        mudanca.unshift(" IDADE =?")
//Altera o CPF caso o body.CPF seja diferente de null           
    }
    if(CPF != null){
        params.unshift(CPF)
        mudanca.unshift(" CPF =?")
        
    }

    query += mudanca.join(',') + " WHERE ID = ?"

    
        this.db.run(query, params, (err)=>{
            if(err){
                reject({"resultado" : err})
            }else{
                resolve({"resultado" : 'Alterações realizadas'})
            }
        })
        })
    }

}

module.exports = FuncionarioDao