let nome = "eduardo"
/* // CASO EU FAÇA NO CHROMO OUTRA VARIAVEL nome = 'ana', o que ficara sera a 'ana'.
PARA QUE NAO HAJA ESSES CONFLITOS, É BOM DECLARAR TUDO DENTRO DE FUNÇÃO */
function teste() {
    alert("eduardo franco")// para essa funçao funcionar no chrome, preciso chama-la

}

//PARA RESOLUÇÃO DO EXERCICIO
// 1 COISA - SELECIONAR O FORMULARIO. VER A CLASSE DELE. FAZER DENTRO DA FUNÇÃO

function meuEscopo() {
    const form = document.querySelector(".form");//jeito mais moderno do que getElementById
    const resultado = document.querySelector(".resultado");
    const pessoas = [];
    /* form.onsubmit = function(evento){ // funçao anonima
        evento.preventDefault();    // retira os eventos padroes. a pagina nao atualizara
        alert(10)
        console.log("foi enviado");// para monstar que toda vez que o submit é selecionado, restarta a aplicaçao. 
                                //milesimos de segundo e desaparece o clg. comportamento padrao do navegador
    }; */
    function receberEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push({

            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura : altura.value


        });
        console.log(pessoas);
        resultado.innerHTML += ` <p>  ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener("submit", receberEventoForm);// retira a funçao do submit de resetar o documento
}
meuEscopo();