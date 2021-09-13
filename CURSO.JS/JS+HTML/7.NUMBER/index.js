/* let num1 = 10
let num2 = 15
let num3 = 12.263484958
console.log(num1.toString() + num2);// to string transforma numero em string
console.log(num2.toString(2));// representaçao binaria do numero0
console.log(num3.toFixed(2));// fixar em 2 casas de3cimais nao altera valor real

console.log(Number.isInteger (num1));
console.log(Number.isInteger (num3));

let temp = num1 + '5'
console.log(Number.isNaN (temp));
console.log(temp); */

/// js segue o padra IEEE 754-2008
//PORTANTO TEM ALGUMAS OBS

let num100 = 0.7
let num101 = 0.1 // 0.7999999999
num100 += num101 
num100 += num101  
num100 += num101  // restposta disto deu .99999


// pra resolver

/* num100 = Number(num100.toFixed(2))// Melhor forma pra resolver. passar pra Number. se nao passar o log da linha 31 da false


console.log(Number.isInteger(1.00)); // fazendo o teste de forma literal
console.log(Number.isInteger(num100));// sabendo que num100 dara 1.00 e mesmo assim nao sera integer

console.log(num100 ); */

//teste
let casa1 = 0.7
let casa2 = 0.1

casa1 += casa2
casa1 = Number(casa1.toFixed(2)) // forma para transformar em numero mesmo
console.log(casa1);
console.log(casa1.toFixed(2)); // só pra exibir pode ser assim

console.log(100 / 0); // nao vai dar erro. vai dar infinito em outras linguagens da erro