//Require dos arquivos necessários
const express = require('express')
const app = express()
const port = 3003
const funcionarioModel = require('../src/models/funcionario.model');
const funcionarioControl = require('../src/controllers/funcionario.controller');
const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const bd = new sqlite3.Database(caminho);

//Middleware para "tradução" da resposta
app.use(express.json());

//Teste simples para verificar se a rota funciona
app.get('/', (req, res) => {
    res.send(`Rota ativada`)
  });

funcionarioControl(app, bd)

//Abrir o servidor 
app.listen(port)