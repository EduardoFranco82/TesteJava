/* 
> MAIOR QUE
< MENOR QUE
= RECEBE ATRIBUIÇAO
>= MAIOR OU IGUAL QUE
<= MENOR OU IGUAL QUE
== IGUAL (VALOR) ****** NAO RECOMENDADO
=== IGUALDADE ESTRITA (VALOR E TIPO)
!= DIFERENTE
!==  DIFEREÇA ESTRITA
*/

console.log(10 > 5); // retorna boolean

const comparacao = 10 > 5 // retorna boolean
console.log(comparacao);

// PORQUE NAO UTILIZAR == OU  =!

const num1 = 10;
const num2 = 10;
const comp = num1 == num2;
console.log(comp);

const num3 = 11; // number
const num4 = '11'; // string o js colocou como igual 11 '11'
const comp2 = num1 == num2; // ISSO SE CHAMA CONVERSAO DE TIPO EM JS
console.log(comp2);

console.log(num1 < num2);