/* 
&& -> false && true -> false 'o valor mesmo'
|| -> false || true -> vai retornar o valor verdadeiro 
*/

console.log('eduardo' && 0 && 'paulo');// retornou o 0
console.log('eduardo' && true && 'paulo');// retornou o ultimo valor
console.log('eduardo' && true && NaN);// retornou o valor falso que é nan

// VALORES FALSOS EM JAVASCRIPT
//FALSY 
//false 0 '' " " ` ` null undefined NaN

console.log('edu' && '' && 'pedro');//retorno nao da nada, ou seja, uma string vazia
console.log('edu' && ' ' && 'pedro');//retorno  da pedro, ou seja, o ultimo valor, pois " " é valor verdadeiro

function falaOi(){

    return 'Oi'
}

let valor = 'edu';
console.log(valor && falaOi());


let cidade;// valor undefined = falso
console.log(cidade && falaOi());

console.log(0 || false || NaN || undefined || 'eduardo' || true);// RETORNA O PRIMEIRO VALOR VERDADEIRO QUE ENCONTAR

let corUsuario = null;
let corPadrao = corUsuario || 'black';

console.log(corPadrao);

let corUsuario2 = 'yellow';
let corPadrao2 = corUsuario2 || 'black';

console.log(corPadrao2);
console.log(0 || false || NaN || undefined)// resultado ultimo valor falso
