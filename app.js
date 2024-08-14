
function encriptarTexto() {
    let texto = document.getElementById("textoUsuario").value;
    let textoEncriptado = "";
    for (const char of texto) {
            switch (char) {
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "o":
                    textoEncriptado += "ober";
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += char;
                    break;
            }
        }
        mostrarTexto("textoProcesado", textoEncriptado);       
}

function desencriptarTexto() {
    let texto = document.getElementById("textoUsuario").value;
    texto = texto.replaceAll(/ai/g,"a");
    texto = texto.replaceAll(/enter/g,"e");
    texto = texto.replace(/imes/g,"i");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g,"u");
    
    mostrarTexto("textoProcesado", texto);
}

//Función mostrarTexto
function mostrarTexto(idElemento, texto){
    let elementoHTML = document.getElementById(idElemento);
    if(texto == ""){
        elementoHTML.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar.";
        document.getElementById("imagen_lupa").style.display="";
        document.getElementById("mensaje_salida").style.display="";
        document.getElementById("boton_copiar").style.display = "";
    }
    else{
        document.getElementById("imagen_lupa").style.display="none";
        document.getElementById("mensaje_salida").style.display="none";
        elementoHTML.innerHTML = texto;
        document.getElementById("boton_copiar").style.display = "block";
    }
    return;
}

document.getElementById("textoUsuario").addEventListener("input", function() {
    const textarea = this.value;
    const regex = /^[a-z\s]+$/;

    if (textarea === "") {
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("boton_encriptar").removeAttribute("disabled");
        document.getElementById("boton_desencriptar").removeAttribute("disabled");
    } else if (!regex.test(textarea) || textarea.trim() === "") {
        document.getElementById("mensaje").style.display = "flex";
        document.getElementById("boton_encriptar").setAttribute("disabled","true");
        document.getElementById("boton_desencriptar").setAttribute("disabled","true");
    } else {
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("boton_encriptar").removeAttribute("disabled");
        document.getElementById("boton_desencriptar").removeAttribute("disabled");
    }
});



  const copiarTexto = async () => {
    let textoCopiar = document.getElementById('textoProcesado').innerHTML;
    try {
      await navigator.clipboard.writeText(textoCopiar);
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar: ', err);
    }
  }