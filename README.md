# PROJETO FINAL - MÓDULO 4: API Cinema

## Descrição do Projeto
<p>API do curso resilia com a temática de um Cinema. Este repositório trata da parte de funcionários da empresa</p>

<h4> 
	Status do projeto: ✅ Concluído
</h4>

### Requisitos

- [x] Rotas
- [x] MVC
- [x] Verbos HTTP
- [x] CRUD
- [x] DAO
- [x] README.md
- [x] Async/Await
- [x] Código fonte no GitHub
- [ ] Testes
- [ ] Hospedagem
- [x] TValidação de dados
- [ ] ORM/ODM

## Rotas

### GET
#### GET Todos os funcionários:
<p>Lista todos os funcionários do banco de dados: localhost:3003/funcionarios</p>


#### GET 1 funcionário:
<p>Lista 1 funcionário especificado pelo seu CPF: localhost:3003/funcionarios/INSIRA_CPF_AQUI</p>


### POST
<p>Envia um novo funcionário para o banco de dados: localhost:3003/funcionarios/</p>

### PUT
<p>Atualiza 1 funcionário pelo seu ID: localhost:3003/funcionarios/INSIRA_ID_AQUI</p>

### DELETE
<p>Deleta 1 funcionário pelo seu CPF: localhost:3003/funcionarios/INSIRA_CPF_AQUI</p>

## Como executar?
1. Abrir o projeto em uma IDE de sua preferência.
2. Rodar o arquivo (por meio do node) "create.js" para criar o banco de dados.
3. Inserir no terminal o comando "npm run start" ou "npm run dev".
4. No Postman ou Insomnia, testar as rotas descritas acima.
