document.getElementById("numForm2").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    let listaElement = document.getElementById("numerosLista");
    let inputElement = document.getElementById("numeroInput");
    let numeros = [];

    let numero = parseFloat(inputElement.value);

    // Codigo
    // Crea un bucle `while` que solicite al usuario ingresar un número hasta que
    // ingrese un número negativo.




    listaElement.innerText += " \nSe ingresó un número negativo. Fin del programa.";
    inputElement.disabled = true;
    event.target.querySelector("button").disabled = true;
});