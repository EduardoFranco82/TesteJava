// função sem retorno

function imprimirSoma (a,b){
    console.log(a + b);
}

imprimirSoma(2,3)// 5
imprimirSoma(2) // NaN
imprimirSoma(2,10,4,54,9)// 12 e ignora os demais
imprimirSoma() //NaN pois nao passou os parametros

//função com retorno

function soma (a, b=1){
    return a + b;
}

console.log(soma(2,3));// 5. mesmo tendo setado o parametro b=1
console.log(soma(2));// 3. porque o segundo parametro esta pre setado.