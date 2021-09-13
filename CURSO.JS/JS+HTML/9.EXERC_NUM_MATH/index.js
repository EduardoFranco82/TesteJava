let numero = Number(prompt(" digite um numero"))// retorna sempre string

const numeroTitulo = window.document.getElementById("numero-titulo")
const texto = window.document.getElementById("texto")

numeroTitulo.innerHTML = numero
//atencao se fizer so com igual ele faz 1 e apaga o resto. tem que fazer +=
texto.innerHTML = ''
texto.innerHTML += ` <p> Raíz quadrada é ${numero ** 0.5}</p>`
texto.innerHTML += ` <p> ${numero} é inteiro: ${Number.isInteger(numero) }</p>`
texto.innerHTML += ` <p> É NaN :${Number.isNaN(numero) }</p>`
texto.innerHTML += ` <p> Arredondando para baixo ${Math.floor(numero) }</p>`
texto.innerHTML += ` <p> Arredondando para cima ${Math.ceil(numero) }</p>`
texto.innerHTML += ` <p> Com duas casas decimais ${numero.toFixed(2) }</p>`
