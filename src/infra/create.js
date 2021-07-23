const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const bd = new sqlite3.Database(caminho);

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE 'funcionarios' (
    "Id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(50),
    "sexo" varchar(10),
    "idade" int,
    "CPF" int,
    "dataAdmissao" date
  );`;

const ADD_FUNCIONARIO = `
INSERT INTO funcionarios (Id, nome, sexo, idade, CPF, dataAdmissao)
VALUES
    (1, 'Cristiano Ronaldo', 'masculino', 36, 12345678977, "20/07/2021"),
    (2, 'Michelle Obama', 'feminino', 57, 12345678900, "21/07/2021" ),
    (3, 'Luan de Oliveira', 'masculino', 30, 12345678911, "22/07/2021")
`  

function criaTabela(){
    bd.run(FUNCIONARIOS_SCHEMA, (err)=>{
        if(err){
            console.log(err)
        }
    })
}

function populaTabela(){
    bd.run(ADD_FUNCIONARIO, (err)=>{
        if(err){
            console.log(err)
        }
    })
}

bd.serialize(()=>{
    criaTabela();
    populaTabela();
});