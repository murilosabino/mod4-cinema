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
            this.sexo = sexo
        }else{
            throw new Error('Sexo inválido. Digite uma das opções: "masculino", "feminino" ou "outros" ')
        }

        if(typeof idade == 'number' && idade > 0){
            this.idade = idade
        }else{
            throw new Error('Idade inválida')
        }

        if(cpf.length == 11){
            this.cpf = cpf
        }else{
            throw new Error('CPF inválido. O CPF precisa conter 11 dígitos, sem pontuação')
        }
        }

        }
    }


}