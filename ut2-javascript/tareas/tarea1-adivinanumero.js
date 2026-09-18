const prompt = require('prompt-sync')();


const numeroAdivinar = Math.floor(Math.random() * 11);
let adivinado = false;
let intentos = 0;

do {
    let entrada = prompt("Adivina un número aleatorio del 0 al 10");
    
    
    if (entrada === null || entrada.trim() === "") {
        console.log('No se ha proporcionado ningún número');
        continue;
    }
    
    let intento = Number(entrada);
    intentos++; 

    if (intento === numeroAdivinar) {
        console.log('¡Has adivinado el número!');
        adivinado = true;
    } else {
        console.log('No has adivinado el número');
    }

} while (!adivinado && intentos < 5); 

if (!adivinado) {
    console.log(`Perdiste. El número era el ${numeroAdivinar}`);
}
