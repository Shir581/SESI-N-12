document.getElementById("numForm1").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Capturar los valores y convertirlos a números
    let numeros = [
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value),
        parseFloat(document.getElementById("num4").value),
        parseFloat(document.getElementById("num5").value),
        parseFloat(document.getElementById("num6").value)
    ];

    // Validar si los valores son números
    for (i = 0; i < numeros.length; i++){
       if( isNaN (numeros[i])) {
        return "Ingrese un valor numérico";
        }
    }
  

    // Generar código
    // Escribe un código que recorra un arreglo de números y calcule la suma total.
    let Sumatoria = 0.0;

    for(Let i = 0; i < numeros.length; i++) {
        Sumatoria = Sumatoria + numeros[i];
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerText = `El resultado de la operación es: ${Sumatoria}`;
});