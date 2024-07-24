let textoOriginal;
let textoEncriptado;
let textoDesencriptado;
let caracteresACambiar = ['a','e','i','o','u'];
let nuevosCaracteres = ["ai","enter","imes","ober","ufat"];

function botonEncriptar(){
    textoOriginal = obtenerValor('areaDeTexto');
    console.log(textoOriginal, typeof(textoOriginal));
    if(verificarMinusculas(textoOriginal)){
        volverInvisibleElementoHTML('advertenciaMinusculas');
        desplegarEncriptacion(encriptar(textoOriginal));
    }else{
        asignarValorElementoHTML('areaDeTexto','');
        volverVisibleElementoHTML('advertenciaMinusculas');
        insertarTextoElementoHTML('textoResultado','');
    }
    
}

function botonDesencriptar(){
    textoEncriptado = obtenerValor('areaDeTexto');
    if(verificarMinusculas(textoEncriptado)){
        volverInvisibleElementoHTML('advertenciaMinusculas');
        desplegarEncriptacion(desencriptar(textoEncriptado));
    }else{
        asignarValorElementoHTML('areaDeTexto','');
        volverVisibleElementoHTML('advertenciaMinusculas');
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('textoResultado').innerText).then(function() {
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
    asignarValorElementoHTML('areaDeTexto','');
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

function encriptar(textoOriginal){

    textoEncriptado = "";
    for (let i = 0; i < textoOriginal.length; i++) {
        if(caracteresACambiar.includes(textoOriginal[i])){
            textoEncriptado = textoEncriptado+nuevosCaracteres[caracteresACambiar.indexOf(textoOriginal[i])];
        }else{
            textoEncriptado = textoEncriptado+textoOriginal[i];
        }
    }
    return textoEncriptado;
}


function desencriptar(textoEncriptado){
    textoDesencriptado="";

  for (let i = 0; i < textoEncriptado.length; i++) {
      // Verificar si la secuencia actual es una de las posibles secuencias encriptadas
      if (textoEncriptado.substring(i, i + 5) === 'enter') {
          textoDesencriptado += 'e';
          i += 4; // Avanzar el índice para saltar el texto encriptado
      } else if (textoEncriptado.substring(i, i + 4) === 'imes') {
          textoDesencriptado += 'i';
          i += 3; // Avanzar el índice para saltar el texto encriptado
      } else if (textoEncriptado.substring(i, i + 2) === 'ai') {
          textoDesencriptado += 'a';
          i += 1; // Avanzar el índice para saltar el texto encriptado
      } else if (textoEncriptado.substring(i, i + 4) === 'ober') {
          textoDesencriptado += 'o';
          i += 3; // Avanzar el índice para saltar el texto encriptado
      } else if (textoEncriptado.substring(i, i + 4) === 'ufat') {
          textoDesencriptado += 'u';
          i += 3; // Avanzar el índice para saltar el texto encriptado
      } else {
          // Si no es una secuencia encriptada, agregar el carácter tal cual
          textoDesencriptado += textoEncriptado[i];
      }
  }

  return textoDesencriptado;
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
    insertarTextoElementoHTML('textoResultado','');
    volverInvisibleElementoHTML('imagenResultado');
    volverInvisibleElementoHTML('tituloNingunMensaje');
    volverInvisibleElementoHTML('ingresaTexto');
    volverVisibleElementoHTML('botonCopiar');
    insertarTextoElementoHTML('textoResultado',textoCodificado);
}
