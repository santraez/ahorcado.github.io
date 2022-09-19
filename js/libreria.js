var palabras = ['casa', 'perro', 'viento', 'automovil'];

var palabraClave = palabras[Math.floor(Math.random() * 4)];
console.log(palabraClave);
// 1. Seleccionar una palabra al azar
// Reemplazar el número "2" por un índice obtenido al azar

var palabraConGuiones = palabraClave.replace(/[a-z]/g, '_ ');
console.log(palabraConGuiones);
// 2. Generar de forma dinámica una cadena conformada por guiones
//    y que tenga la misma longitud de la palabra clave

var contadorDeFallas = 0;

document.getElementById('salida').innerHTML = palabraConGuiones;

function validar() {
    var letra = document.getElementById('letra').value;

    var encontrado = false;

    for (var i = 0; i < palabraClave.length; i++) {
        if (letra == palabraClave[i]) {
            encontrado = true;
            palabraConGuiones = reemplazar(palabraConGuiones, i, letra);
            document.getElementById('salida').innerHTML = palabraConGuiones;
        }
    }

    if (!encontrado) {
        // Mover la imagen del ahorcado
        contadorDeFallas++;
        console.log(contadorDeFallas);
        if (contadorDeFallas == 1) {
            document.getElementById('ahorcado').style.backgroundPosition = "-199px 0";
        } else if (contadorDeFallas == 2) {
            document.getElementById('ahorcado').style.backgroundPosition = "-398px 0";
        } else if (contadorDeFallas == 3) {
            document.getElementById('ahorcado').style.backgroundPosition = "-597px 0";
        } else {
            document.getElementById('ahorcado').style.backgroundPosition = "-796px 0";
            alert('PERDISTE');
        };
        // 4. Hacer que la imagen del ahorcado se mueva de forma dinámica
        //    Es decir, que dependa de la cantidad de fallas

    }
    else {
        if (palabraConGuiones.indexOf("_ ") < 0) {
            document.getElementById('victoria').style.display = 'block';
        }
    }

    // 5. Colocar el código que limpie el campo de texto "letra"
    //    y coloque el foco en dicho campo
    document.getElementById('letra').value = "";
    document.getElementById('letra').focus();


}

function reemplazar(palabraBase, indice, caracter) {
    var palabra = palabraBase.split(' ');
    palabra[indice] = caracter;
    return palabra.join(' ');

    // 3. Desarrollar la función "reemplazar"
    //    que reemplaza un caracter por otro
    //    Ejemplo:
    //    - palabraBase = "-i--to"
    //    - indice = 2
    //    - caracter = 'e'
    //    - Resultado = "-ie-to"

}