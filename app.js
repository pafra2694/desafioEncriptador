
//Función encriptarTexto, recorre la cadena ingresada por el usuario en busca de vocales y construye otra cadena textoEncriptado utilizando el código de encriptación.

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


//Función desencriptarTexto, revisa la cadena ingresada por el usuario y la modifica reemplazando los patrones de encriptación encontrados por las vocales correspondientes.

function desencriptarTexto() {
    let texto = document.getElementById("textoUsuario").value;
    texto = texto.replace(/ai/g,"a");
    texto = texto.replace(/enter/g,"e");
    texto = texto.replace(/imes/g,"i");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g,"u");
    
    mostrarTexto("textoProcesado", texto);
}

//Función mostrarTexto modifica el div de salida para mostrar los resultados.
function mostrarTexto(idElemento, texto){
    let elementoHTML = document.getElementById(idElemento);
    if(texto == ""){
        elementoHTML.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar.";
        document.getElementById("imagen_lupa").style.display="";
        document.getElementById("mensaje_salida").style.display="";
        document.getElementById("boton_copiar").style.display = "";
        document.querySelector(".contenido__salida__div").style.justifyContent = '';
    }
    else{
        document.getElementById("imagen_lupa").style.display="none";
        document.getElementById("mensaje_salida").style.display="none";
        elementoHTML.innerHTML = texto;
        document.getElementById("boton_copiar").style.display = "block";
        document.querySelector(".contenido__salida__div").style.justifyContent = 'space-around';
    }
    return;
}


//este eventListener se encarga de revisar si en el textArea se cumplen las condiciones de no usar mayúsculas o palabras con acento, en caso de encontrar este caso se muestra el mensaje de aviso y se desactivan los botones.
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


//Esta función async se usa para copiar en portapapeles el texto encriptado o desencriptado.
  const copiarTexto = async () => {
    let textoCopiar = document.getElementById('textoProcesado').innerHTML;
    try {
      await navigator.clipboard.writeText(textoCopiar);
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar: ', err);
    }
  }