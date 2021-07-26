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
<p>Lista 1 funcionário especificado pelo seu CPF: localhost:3003/funcionarios/<CPF></p>


### POST
<p>Envia um novo funcionário para o banco de dados, por meio de um objeto contendo "nome", "sexo", "idade" e "CPF": localhost:3003/funcionarios/</p>

### PUT
<p>Atualiza 1 funcionário pelo seu ID, por meio de um objeto que pode conter "nome", "sexo", "idade" e "CPF": localhost:3003/funcionarios/<ID></p>

### DELETE
<p>Deleta 1 funcionário pelo seu CPF: localhost:3003/funcionarios/<CPF></p>

## Como executar?
1. Clone o projeto.
2. Abra o projeto em uma IDE de sua preferência.
3. Execute o comando "npm install".
4. Rodar o arquivo (por meio do node) "create.js" para criar o banco de dados.
5. Inserir no terminal o comando "npm run start" ou "npm run dev".
6. No Postman ou Insomnia, testar as rotas descritas acima.

## Testes Insomnia
#### GET Todos os funcionários:	
![image](https://user-images.githubusercontent.com/77418279/127014379-7566ab0b-e441-4bbf-b670-49d8edbc6fc7.png)
	
#### GET 1 funcionário:
![image](https://user-images.githubusercontent.com/77418279/127014485-fdaecaee-4b41-4734-9ca6-ed625c07beea.png)

#### POST:
![image](https://user-images.githubusercontent.com/77418279/127014641-d81783db-d5bd-424d-8e54-b6073584daa1.png)

#### PUT:
![image](https://user-images.githubusercontent.com/77418279/127014736-6ca13d8f-95bc-4773-9b7f-502eaf07ce04.png)

#### DELETE:
![image](https://user-images.githubusercontent.com/77418279/127014833-84f5d530-042f-4675-b703-c291bf030d9e.png)
