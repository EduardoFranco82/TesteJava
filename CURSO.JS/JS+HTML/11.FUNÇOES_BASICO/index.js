function saudacao (nome) {

console.log(`Bom dia ${nome}`);
return 123
console.log("PARABENS EDUARDO");// NAO SERA EXECUTADO
}
saudacao('eduardo');
// ATENCAO . DEPOIS DO RETURN, NAO EXECUTA MAIS NADA NO CODIGO

const variavel = saudacao('eduardo');
console.log(variavel); // isso é undefined pq a funcao nao tem retorno// fiz com retorno ai da 123

// outra maneira de fazer a de cimag
function saudacao2(nome) {
    return `Bom dia ${nome}`
    }
const testeSaudacao2 = saudacao2('Ana livia')
console.log(testeSaudacao2);

//testando tipo9 de retorno
function teste(){
console.log("teste realizado");
    return 1
}
const test1 = teste();
console.log(test1);

//funcao soma com 2 valores
function soma2Valores(valor1,valor2){
return valor1 + valor2
}
console.log(soma2Valores(1,5));

// ATENÇAO OS ESCOPOS DENTRO DAS FUNÇOES SAO UNICOS. NAO MISTURAM COM OS DE FORA
// declarei 2 constantes iguais
function subtracao(valor1, valor2){
const resultado = valor1 - valor2
return resultado
}
const resultado = subtracao(5,1)
console.log(resultado);

// SE NAO COLOCAR OS 2 VALORES NO PARAMETRO, O RESULTADO SAI COMO NaN

const resultado2 = subtracao()
console.log(resultado2)//nan

console.log(soma2Valores('edu','li'));// na adicaçao da pra concatenar strings
console.log(subtracao('edu',' li')); // na subtracao o resltado da nan


// posso colocar valor padrao nos argumentos, caso nao seja passado

function multiplicacao(valor1 = 1, valor2 = 2){

    return valor1 * valor2
    }
console.log(multiplicacao());// deu 2 pq pegou os valores padrao
console.log(multiplicacao(3,10));// deu 30 

//FAZENDO UMA FUNÇAO ANONIMA

const raizQuadrada = function(numero){
return numero ** 0.5    
};// funçao anonima e obrigatorio fechar com ;
console.log(raizQuadrada(25));

//FAZENDO UMA ARROW FUNCTIONO
const divisaoDeNumero = (numero1 = 1, numero2 =1) => {// fazendo entre chaves
return numero1/numero2
}
console.log(divisaoDeNumero(10,2));

raizTipoArrow = numero => numero ** 0.5 // fazendo sem as chaves
console.log(raizTipoArrow (9))

saudacao3 = nome => `bem vindo ${nome}`
console.log(saudacao3('eduardo de jesus'));

