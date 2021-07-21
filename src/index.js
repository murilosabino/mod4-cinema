//Require dos arquivos necessários
const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3003

//Middleware para "tradução" da resposta
app.use(express.json());

//Teste simples para verificar se a rota funciona
app.get('/', (req, res) => {
    res.send(`Rota ativada`)
  });

//Abrir o servidor 
app.listen(port)