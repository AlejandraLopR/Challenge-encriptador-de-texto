let palabraEncriptada = "harena"
let textoDesifrado = ""
const copiarButton = document.querySelector(".boton__copiar");
const textoElement = document.getElementById('texcopiar');
const copiarTextoButton = document.getElementById('copiar');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(".visible__Texto", elemento);
    elementoHTML.innerHTML = texto;

}

function mostrarBoton() {
    copiarButton.style.display = "flex"; // O "flex" si usas un diseño flexible

}

function condicionesIniciales() {
    asignarTextoElemento('p', 'Ningún mensaje fue encontrado');

}

function verificarEncriptar() {
    let palabra = document.getElementById('textOrigin').value;
    //document.querySelector(".boton__copiar").style.display ="flex";
    var textoCifrado = palabra.replace(/e/gi, "ser").replace(/i/gi, "aire").replace(/a/gi, "pz").replace(/o/gi, "rm").replace(/u/gi, "prt");
    asignarTextoElemento('p', textoCifrado)
    mostrarBoton()
    //document.querySelector("#encripar").addEventListener("click", mostrarBoton);

}

function verificarDesencriptar() {
    textoDesifrado = document.getElementById('textOrigin').value;
    textoDesifrado = textoDesifrado.replace(/ser/gi, "e").replace(/aire/gi, "i").replace(/pz/gi, "a").replace(/rm/gi, "o").replace(/prt/gi, "u");
    asignarTextoElemento('p', textoDesifrado)
}



function copiarTexto() {
    navigator.clipboard.writeText(textoElement.textContent)
        .then(() => console.log('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}

copiarTextoButton.addEventListener('click', copiarTexto)


const flexContendio = document.getElementById('textOrigin');
 
function ajustarTexto(){
    flexContendio.style.height = 'auto';
    flexContendio.style.height = `${flexContendio.scrollHeight}px`;
}

flexContendio.addEventListener('input', ajustarTexto);

// Ajusta la altura inicial al cargar la página
ajustarTexto();