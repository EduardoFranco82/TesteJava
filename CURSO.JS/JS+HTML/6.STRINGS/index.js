// TESTES COM STRINGS ////
// pegando um índice no array//
// qualquer busca fora do range da undefined//
let nomeDaCidade = "itanhandu minhas gerais terra do \"queijo\""
console.log(nomeDaCidade [-1]);// undefined
console.log(nomeDaCidade [1]); // pegando com array // fora do range undefined
console.log(nomeDaCidade.charAt(1)); // pegando com funçao charat// fora do range valor vazio
console.log(nomeDaCidade.concat("fica em minas gerais"));
console.log(`${nomeDaCidade} fica em minas gerais`);
console.log(nomeDaCidade.indexOf('minhas'));

let umaString = 'um texto'
console.log(umaString.indexOf('o', 4));// encontrar "o" a partir do indice 4
console.log(umaString.indexOf('x', 4));// encontrar "o" a partir do indice 4
console.log(umaString.lastIndexOf('m', 4));// mesma funçao de tras pra frente
console.log(umaString.replace("um", "outra"));// troca
//match// ver pra que serve com expressoes regulares
//um exemplo//
console.log(umaString.replace('t', 'k'));// so substituiu um
console.log(umaString.replace(/t/g, 'k'));// com expressao regular substitui todos acrescentando g
console.log(umaString.length);//tamanho
console.log(umaString.slice(3,7));//tamanho
console.log(umaString.slice(-3));//tamanho negativo
console.log(umaString.slice(-3, -1));//tamanho negativo
console.log(umaString.substring(umaString.length -1));//tamanho negativo
console.log(umaString.split(" "));// retorna um array com os elementos
console.log(nomeDaCidade.split(" ", 2));// retorna os espaços 2 vezes
console.log(umaString.toUpperCase());// tudo maiusculo
console.log(umaString.toLowerCase());// tudo maiusculo
///olhar os documentos/// sites da mozila e w3schools