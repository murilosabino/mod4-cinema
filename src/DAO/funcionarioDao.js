class FuncionarioDao{
    constructor(db){
        this.db = db
    }

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

createFuncionario(newFuncionario){
    return new Promise((res, rej)=>{
        this.db.run(`INSERT INTO funcionarios (nome, sexo, idade, cpf, dataAdmissao)
        VALUES (?,?,?,?,?)`, [newFuncionario.nome, newFuncionario.sexo, newFuncionario.idade,
        newFuncionario.cpf, newFuncionario.dataAdmissao],
        (err)=>{
            if(err){
                rej(err)
            }else{
                res({'resultado': true})
            }
        })
    })
}

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

}

module.exports = FuncionarioDao