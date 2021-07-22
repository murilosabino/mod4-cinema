const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const bd = new sqlite3.Database(caminho);

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "funcionarios" (
    "Id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(50),
    "sexo" varchar(10),
    "idade" int,
    "CPF" varchar(11)
  );`;

function criaFuncionario(criacao){
    bd.run(criacao, (err)=>{
        if(err){
            console.log(err)
        }
    })
}

criaFuncionario(FUNCIONARIOS_SCHEMA)