// TESTES COM LET //
nome = "eduardo"
let sobrenome //UNDEFINED
console.log(nome," foi na igreja");
console.log(sobrenome + " foi na casa dele");
console.log("eduardo foi na farmacia");

////////////////////////////////////////////////////////
// TESTES COM CONST //

const primeiroNumero = 10
const segundoNumero = 20
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
const nomeAlterado = 'eduardo'
console.log(typeof primeiroNumero);
console.log( resultadoTriplicado);
console.log( primeiroNumero + segundoNumero + nomeAlterado);

/////////////////////////////////////////////////////
// DIFERENÇA ENTRE VAR E LET//
// COM VAR É POSSIVEL DECLARAR A MESMA VARIAVEL 2X//
 var nome = "edu"
 var nome = "joao"
 console.log(nome);

 //COM LET NAO E POSSIVEL//////
 let sobrenome = "franco"
 let sobrenome = "franco da rosa" // da erro