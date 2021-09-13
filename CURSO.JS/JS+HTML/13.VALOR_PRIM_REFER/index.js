/* PRIMITIVOS IMUTAVEIS - STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, (BIGINT, Symbol) 
valores copiados*/

let nome = 'eduardo'
nome[0] = 'i'
console.log(nome[0], nome);// o valor da variavel nao muda . eduardo eduardo


let a = "a"
let b = a; // apenas faz uma copia
console.log(a, b);

a = 'eduardo'
console.log(a,b);// b manteve o valor

/* VALORES MUTAVEIS - ARRAY, OBJECT, FUNCTION valores passados por referencia*/

let c = [1,2,3]
let d = c
console.log(c,d);

c.push(4)
console.log(c);
console.log(c,d);

d.pop();
console.log(d , c);
// os 2 apontam para mesmo lugar na memoria. ambos sao afetados

/* PARA PASSAR OS VALORES DE UM ARRAY PARA OUTRO DEFINITIVAMTNE USA-SE SPREAD */

let e = [1,2,3]
let f = [...e] // spread copia o valor de um array identico
console.log(f);
e.push('eduardo')
console.log(e,f);// nesse caso deu valores diferentes pelo spread 

const pessoa = {
nome: 'edu',
idade : 22
};
const pessoa2 = pessoa

pessoa.idade = 55
console.log(pessoa2);

