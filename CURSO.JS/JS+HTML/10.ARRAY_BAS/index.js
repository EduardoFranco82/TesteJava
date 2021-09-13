const qualquer = [ 'edu' , 'ana', 'alice', 1, null, true] // pode -se fazer assim, mas o ideal e fazer com um so tipo de dado
const nome = 'eduardo '
console.log(nome[1]);// para relembrar
const nomes = [ 'edu' , 'ana', 'alice' ]
console.log(nomes[1]);
nomes [2] = 'livia'
console.log(nomes);
nomes[3] = 'alice'
console.log(nomes);
console.log(nomes.length);
nomes[nomes.length] = 'paulo'
nomes[nomes.length] = 'ricardo'// ADICIONA
nomes[nomes.length] = 'jose'
nomes[nomes.length] = 'maria'
console.log(nomes);
console.log(nomes.length);
nomes.push('agnaldo', 'ulisses')// ADICIONA NO FINAL DO ARRAY
console.log(nomes);
nomes.unshift('luiza') // ADICIONA NO INICIO DO ARRAY
console.log(nomes);
const removido =  nomes.pop();// guardando o nome removido numa variavel
console.log(removido);
console.log(nomes);
const removidoInicio = nomes.shift();// remover o primeiro valor
console.log(removidoInicio);
console.log(nomes);
delete nomes[2]// deleta um nome e mantem o indice sem valor undefined

console.log(nomes)
nomes[2]= 'gustavo'
console.log(nomes[50]);// da um undefined
console.log(nomes.slice(0,3));// fatiar o array
console.log(nomes.slice(0,-3));// fatiar o array tirando os ultimos indices -3
console.log(nomes[1], nomes[3], nomes[4]);//para pegar nomes diferentes no array
console.log(typeof nomes);//MUITO IMPORTANTE..... ARRAYS É UM OBJETO A UNICA DIFERENÇA E QUE ARRAY E INDEXADO AUTOMATICAMENTE
console.log(nomes instanceof Array);// confirmando se alunos é instancia de array

/* Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo.
 Alguns tipos de valores são imutáveis, como number, string, boolean, undefined,
  null, symbol e bigint (os primitivos todos são imutáveis).
   Outros tipos são mutáveis, como arrays e objetos 
   (objetos em geral são mutáveis, com exceção de null). */
