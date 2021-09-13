// DOM   document objet model
// BOM   browser objet model
// window é o pai - onde esta o BOM e document é filho de window, onde esta o DOM

// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName

// isso faz uma busca no HTML, retornando os valores correspondentes  # retorna id     . retorna classe
//document.querySelectorAll('.primeira-classe  .segunda-classe')
//document.querySelectorAll('li.opção') retorna todas li que tem na classe opçao

//ADICIONAR E REMOVER ELEMENTOS

// document.createElement(element) cria um novo elemento HTML
// document.removeChild(element)   remove um elemento
// document.appendChild(element)   adiciona um elemento
// document.replaceChild(new, old) substitui um elemento

// TRABALHANDO COM ESTILOS Element.classList
// Dada uma classe HTML sem codigo classe
// const meuElemento = document.getElementById('meu-elemento')

// meuElemento.classList.add("novo-estilo")
// adiciona uma classe
// meuElemento.classList.remove("classe")
// remove uma classe
// meuElemento.classList.toggle("dark-mode")
// adiciona a classe caso ela nao faça parte da lista, e remove ela caso ela faça


// CSS ACESSANDO DIRETAMENTE O CSS DE UM ELEMENTOS
// document.getElementsByTagName("p").style.color = 'black'
// document.getElementsByTagName("p").style.border = '1px solidblack'
// document.getElementsByTagName("p").style.fontSize = '15'

// EVENTOS 
// eventos do mouse 
// mouseover, mouseout
// click, dblclick
// change, load

// const botao = document.getElementById("meu-botao")
// botao.addEventListener("click", outra funçao)
// botao.addEventListener("load", outra funçao)

// PEGANDO DIRETO NO HTML  vai mudar atraves do onclick o nome clique aqui por mudei
// ESPECIFICA A FUNÇAO A SER CHAMADA DIRETAMENTE NO ELEMENTO HTML 

// <h1> onclick="mudaTexto(this)"Clique aqui </h1>

// <script>
//     function mudaTexto(id) {
//         id.innerHTML = "Mudei"

//     }
// </script>
function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
