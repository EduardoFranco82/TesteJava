/* ENTRE 0 - 11 BOM DIA 
ENTRE 12 - 17 BOA TARDE 
ENTRE 18 - 23 BOA NOITE */
const hora = 13;

if (hora >= 0 && hora <= 11){
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log("boa tarde");

} else if (hora >= 18 && hora <= 23){
    console.log("boa noite");
} else{
    console.log('hora indefinida');
}
const tenhoGrana = true;
if(tenhoGrana){
    console.log("sair de casa")
}else{
    console.log('nao sair');
}