function soBoaNoticia(nota){
    if (nota > 7) {
        console.log('aprovado com ' + nota);
    }

}

soBoaNoticia(5);
soBoaNoticia(9);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade de ' + valor);
    }

}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo([1,2])