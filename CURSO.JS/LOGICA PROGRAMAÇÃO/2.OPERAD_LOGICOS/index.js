/* OPERDADORES LOGICOS
&& AND E 
|| OR OU 
! NOT NÃO  */

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(true || false);

const usuario ='eduardo' // formulario recebido do cliente digitou
const senha = '123456' // formulario recebido do cliente digitou

const vaiLogar = usuario === 'eduardo' && senha === '123456'
console.log(vaiLogar);

const naovaiLogar = usuario === 'uardo' && senha === '123456' // nome eduardo esta errado
console.log(naovaiLogar);

console.log(!true);// negaçao
console.log(!!true);// negaçao