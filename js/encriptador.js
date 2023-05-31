function encriptar() {
    var Texto = document.getElementById("mensajeEncriptar").value;
    if (Texto !== "") {
        var regex = /^[a-z\s]+$/;

        if (regex.test(Texto)) {
            document.getElementById("cuadroEncriptador").style.display = 'none';
            document.getElementById("Encriptado").style.display = 'flex';

            // var textoM = Texto.replaceAll("a", "ai").replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("u", "ufat");

            let encriptado = "";
            let letra = "";
            //recorremos letra por letra del texto ingresado, desde la posición 0 al tamaño total del parrafo
            for (i = 0; i < Texto.length; i++) {
                letra = "";
//comparamos si coincide con alguna vocal, la cambiamos segun corresponda en caso contrario devolvemos la misma letra
                switch (Texto.charAt(i)) {
                    case 'a':
                        letra = "ai"
                        break;
                    case 'e':
                        letra = "enter"
                        break;
                    case 'i':
                        letra = "imes"
                        break;
                    case 'o':
                        letra = "ober"
                        break;
                    case 'u':
                        letra = "ufat"
                        break;
                    default:
                        letra = Texto.charAt(i);
                }
//concatemos cada letra
                encriptado = encriptado + letra;
            }

            //mostramos el texto encriptado
            document.getElementById("textoEncriptado").innerHTML = encriptado;

        } else {
            alert('Solo letras minúsculas y sin acentos');
        }

    } else {
        alert('Debe ingresar el mensaje a encriptar');
    }
}

function desencriptar() {
    var Texto = document.getElementById("mensajeEncriptar").value;
    if (Texto !== "") {
        var regexD = /^[a-z\s]+$/;

        if (regexD.test(Texto)) {
            document.getElementById("cuadroEncriptador").style.display = 'none';
            document.getElementById("Encriptado").style.display = 'flex';

            let prueba = "";
            //reemplazamos cada coincidencia segun corresponda, se utiliza /g para que sea buscado en todo el parrafo
            prueba = Texto.replace(/ai/g, 'a');
            prueba = prueba.replace(/enter/g, 'e');
            prueba = prueba.replace(/imes/g, 'i');
            prueba = prueba.replace(/ober/g, 'o');
            prueba = prueba.replace(/ufat/g, 'u');

            document.getElementById("textoEncriptado").innerHTML = prueba;

            // document.getElementById("textoEncriptado").innerHTML = textoMD;
            // console.log(textoMD)
        }
    } else {
        alert('Debe ingresar el mensaje a desencriptar');
    }
}

function copiarT() {
    var copiar = document.getElementById("textoEncriptado").innerText;

    document.getElementById("mensajeEncriptar").value = copiar;
    document.getElementById("textoEncriptado").innerText = "";
}
