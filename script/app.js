let textoOriginal;
let textoCodificado;
let caracteresACambiar = ['a','e','i','o','u'];
let nuevosCaracteres = ["ai","enter","imes","ober","ufat"];

function botonCodificar(){
    textoOriginal = obtenerValor('areaDeTexto');
    console.log(textoOriginal, typeof(textoOriginal));
    if(verificarMinusculas(textoOriginal)){
        volverInvisibleElementoHTML('advertenciaMinusculas');
        desplegarEncriptacion(codificar(textoOriginal))
    }else{
        asignarValorElementoHTML('areaDeTexto','');
        volverVisibleElementoHTML('advertenciaMinusculas');
    }
    
}

function asignarValorElementoHTML(elemento,texto){
    document.getElementById(elemento).value = texto;
}

function insertarTextoElementoHTML(elemento,texto){
    document.getElementById(elemento).innerHTML = texto;
}

function volverInvisibleElementoHTML(elemento) {
    document.getElementById(elemento).style.visibility = "hidden";
}

function volverVisibleElementoHTML(elemento) {
    document.getElementById(elemento).style.visibility = "visible";
}

function obtenerValor(elemento){
    return document.getElementById(elemento).value;
}

function codificar(textoOriginal){

    textoCodificado = "";
    for (let i = 0; i < textoOriginal.length; i++) {
        if(caracteresACambiar.includes(textoOriginal[i])){
            textoCodificado = textoCodificado+nuevosCaracteres[caracteresACambiar.indexOf(textoOriginal[i])];
        }else{
            textoCodificado = textoCodificado+textoOriginal[i];
        }
    }
    return textoCodificado;
}

function verificarMinusculas(textoOriginal){
    let todoMinusculas = true;
    let caracter;
    for(let i = 0; i < textoOriginal.length; i++){
        caracter = textoOriginal[i];
        if(!(caracter.charCodeAt() == 32)){
            if(caracter.charCodeAt() <97 || caracter.charCodeAt() >122 ){
                todoMinusculas = false;
                break;
            }
        }
    }
    console.log(todoMinusculas);
    return todoMinusculas;
    
}

function alinearTexto(elemento, alineacion){
    document.getElementById(elemento).style.textAlign = alineacion;
}

function desplegarEncriptacion(textoCodificado){
    volverInvisibleElementoHTML('imagenResultado');
    volverInvisibleElementoHTML('tituloNingunMensaje');
    volverInvisibleElementoHTML('ingresaTexto');
    volverVisibleElementoHTML('botonCopiar');
    insertarTextoElementoHTML('textoResultado',textoCodificado);
}
