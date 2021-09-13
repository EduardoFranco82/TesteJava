/* const tresHoras = 60 * 60 * 3 * 1000 // 3 horas em milisegundos.  hora do Brasil tem 3 de diferença.     
const umDia = 60 * 60 * 24 * 1000    // um dia
const data = new Date(0+ tresHoras + umDia);// 01/01/1970 Timestamp unico ou epoca unica
//ACIMA SO UMA DEMONSTRAÇAO DO MARCO 0



const data2 = new Date(2019 , 3, 20 , 15 , 14 , 60)// cada casa representa um campo da data. 60 no final acrescenta 1 segundo
const data3 = new Date(2021 , 6) // junho de 2021 // começa com indice 0. a/m/d/h/M/s/ms
const data4 = new Date();//Data atual

const data5 = new Date('1982-6-18 20:20:59')// hora padrao de brasilia

console.log('Dia', data5.getDate());
console.log('Mes', data5.getMonth() +1);
console.log('Ano', data5.getFullYear());
console.log('Horas', data5.getHours());
console.log('Minutos', data5.getMinutes());
console.log('Segundo', data5.getMilliseconds());
console.log('Dia da semana', data5.getDay());

console.log(Date.now());// retorna o milesimo de segundo de agora desde o marco 0 */

function formataData(data){
const dia = zeroAesquerda (data.getDate());
const mes = zeroAesquerda(data.getMonth());
const ano = zeroAesquerda(data.getFullYear());
const hora = zeroAesquerda(data.getHours());
const minutos = zeroAesquerda(data.getMinutes());
const segundos = zeroAesquerda(data.getSeconds());

return ` ${dia}/${mes}/${ano} hora de brasilia ${hora}:${minutos}:${segundos} ` 

}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`

}

