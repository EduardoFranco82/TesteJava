//CAPTURAR EVENTO DO SUBMIT DO FORMULÁRIO

const form = document.querySelector('#formulario');// criar uma constante e atribuir a ela valores do form
form.addEventListener('submit', function (e) { //(e) capturar um evento. isso e padrao
e.preventDefault(); //conseguir pegar dados escritos por ussuarios
//RETIROU PARA FAZER UM CODIGO PARA PEGAR OS VALORES
/* console.log("evento previnido");
setResulatado("ola mundo") */
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');// PEGANDO OS DADOS DE DENTRO DO FORMULARIO. PODERIA SER form.target


const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
 if (!peso){
    setResulatado("Peso inválido", false);
    return;
 }
 if (!altura){
    setResulatado("Altura inválida", false);
    return;
 }
const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `Seu IMC  e ${imc} (${nivelImc}).`;
setResulatado (msg, true);

} );

/*
MENOS QUE 18,5 ABAIXO DO PESO 
ENTRE 18,5 E 24,9 PESO NORMAL
ENTRE 25 E 29,9 SOBREPESO
ENTRE 30 E 34,9 OBESIDADE GRAU1
ENTRE 35 E 39,9 OBESIDADE GRAU2
MAIS DO QUE 40   OBESIDADE GRAU3

*/

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau1',
    'Obesidade Grau2','Obesidade Grau3'];
if (imc>= 39.9) return nivel[5];

if (imc>= 34.9) return nivel[4];

if (imc>= 29.9) return nivel[3];

if (imc>= 24.9) return nivel[2];

if (imc>= 18.5) return nivel[1];

if (imc< 18.5) return nivel[0];

}

function getImc(peso, altura){
const imc = peso / altura ** 2; 
return imc.toFixed(2);
}
function criaP(){
    const p = document.createElement('p');
    return p;

}
function setResulatado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
/*     resultado.innerHTML = `<p>${msg}</p>`; **** RESULTADO EM FORMA DE PARAGRAFO
 */
    resultado.innerHTML = ''; // LIMPA O HTML
    //TIROU TUDO ABAIXO PARA CRIAR UMA FUNÇAO ESPECIFICA criaP()
   /*  const p = document.createElement('p');//CRIA UM PARAGRAFO
    p.classList.add('paragrafo-resultado')//CRIA UMA CLASSE PRO ELEMENTO
    p.innerHTML = 'Qualquer coisa';// COLOCA ALGO DENTRO DO PARAGRAFO
    resultado.appendChild(p);//INSERIR UM FILHO NO ELEMENTO */
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');

    }

    p.innerHTML = msg; 
    resultado.appendChild(p);
}
