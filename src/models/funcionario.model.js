const moment = require('moment')

//Classe funcionario com algumas validações
class Funcionario{
    constructor(nome, sexo, idade, cpf){
        if(nome.length > 2){
            this.nome = nome
        }else{
            throw new Error('Nome inválido')
        }

        if(sexo.toLowerCase() == 'masculino' || sexo.toLowerCase() == 'feminino' || 
        sexo.toLowerCase() == 'outros'){
            this.sexo = sexo.toLowerCase()
        }else{
            throw new Error('Sexo inválido. Digite uma das opções: "masculino", "feminino" ou "outros" ')
        }

        if(typeof idade == 'number' && idade > 0){
            this.idade = idade
        }else{
            throw new Error('Idade inválida')
        }

        if(cpf.toString().length == 11){
            this.cpf = cpf.toString()
        }else{
            throw new Error('CPF inválido. O CPF precisa conter 11 dígitos, sem pontuação')
        }
        //Data de admissão do funcionario
        this.dataAdmissao = moment(new Date()).format('DD/MM/YYYY')
        
    }
}

//Teste de novo funcionario
/*let murilo = new Funcionario('murilo', 'MASCULINO', 24, 12345678900)
console.log(murilo)*/

//Export
module.exports = Funcionario;