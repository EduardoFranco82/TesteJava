//FICARIA MAIS DIFICIL DE CRIAR UMA VARIAVEL PARA CADA PESSOA, ENTAO SE FAZ O OBJETO
/*
 const nome1= 'edu'
const sobrenome1 = 'franco'
const idade1 = 22

const nome2= 'carls'
const sobrenome2 = 'silva'
const idade2 = 30

const nome3= 'mario'
const sobrenome3 = 'souza'
const idade3 = 29 */

// PARA CRIAR OBJETO, SE CRIA COM CHAVEZ

/* const pessoa1 = {
    nome :'edu',
    sobrenome : 'franco',
    idade : 22,

    falar(){
        console.log("ola desenvolvedor"); criando um metodo dentro do objeto
    }
};
console.log(pessoa1.nome); */

//CRIAR UMA FUNÇAO PARA CRIAR PESSOAS

function criarPessoas(nome, sobrenome, idade){
    return{nome, sobrenome, idade};//assim fica mais simples
/*     return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; */
}

const individuo1 = criarPessoas('edu', 'franco',39)
const individuo2 = criarPessoas('carlos', 'silva',29)
const individuo3 = criarPessoas('paulo', 'souza',36)
const individuo4 = criarPessoas('pedro', 'franco',20)
console.log(individuo1);
console.log(individuo1.sobrenome);
console.log(individuo3.idade);

console.log(individuo1.sobrenome, individuo2.idade);

const pessoa1 = {
    nome :'edu',
    sobrenome : 'franco',
    idade : 22,

    falar(){
        console.log( `ola desenvolvedor ${this.nome} ${this.sobrenome}. minha idade atual é ${this.idade} ` );// criando um metodo dentro de um objeto
    },
    adicionarIdade(){
        this.idade++
    }
};
pessoa1.falar()//metodo ja e um console.log
pessoa1.adicionarIdade()
pessoa1.falar()