// SELECIONAR ELEMENTOS H1 FOOTER BODY


// FUNÇAO PARA  MUDAR ESTADO
function changeModo (){
	changeClasses()
	changeText ()


}
// FUNÇAO PARA MUDAR CLASSES 
function changeClasses(){
h1.classList.toggle(darkModeClass);
button.classList.toggle(darkModeClass);
footer.classList.toggle(darkModeClass);
body.classList.toggle(darkModeClass);

}

// FUNÇAO PARA MUDAR TEXTO

function changeText (){
const lightMode = "Light Mode"
const darkMode = "Dark Mode"

if (body.classList.contains(darkModeClass)){
button.innerHTML = lightMode
h1.innerHTML = darkMode + " ON"

return
}

button.innerHTML = darkMode
h1.innerHTML = lightMode + " ON"

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector'); // selecionando o botao
//console.log(button);  vendo o elemento no console na pagina
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]// vai retornar um array , da um clg e ve qual e o indice
//console.log(body);
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', changeModo)