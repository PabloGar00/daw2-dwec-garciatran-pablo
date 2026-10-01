/*## js0306. Football Manager
Vamos a crear un programa que permita gestionar las alineaciones de un equipo de fútbol. Para ello, vamos a tener dos partes:

- Primera. Donde se va a introducir la configuración del equipo. Se van a pedir los pares número, nombre de los jugadores del equipo hasta introducir una cadena vacía.
- Segunda. Donde se va a poder consultar. Se va a pedir que se introduzca el número y se va a mostrar el jugador que lo tiene. Esto se va a hacer hasta que se introduzca un cero.*/

const prompt = require("prompt-sync")();

const equipo = new Map();

let numero;
let nombre;

// PRIMERA PARTE: introducir jugadores

do {
    numero = prompt("Introduce el número del jugador (vacío para terminar): ");

    if (numero !== "") {
        nombre = prompt("Introduce el nombre del jugador: ");

        equipo.set(numero, nombre);

        console.log("Jugador añadido.");
    }

} while (numero !== "");


// SEGUNDA PARTE: consultar jugadores

do {
    numero = prompt("Introduce el número del jugador (0 para terminar): ");

    if (numero !== "0") {
        if (equipo.has(numero)) {
            console.log(`El jugador es ${equipo.get(numero)}`);
        } else {
            console.log("No existe ningún jugador con ese número.");
        }
    }

} while (numero !== "0");
