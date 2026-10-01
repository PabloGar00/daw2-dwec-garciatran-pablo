/*Crea un programa que:

- Genere 10 númneros aleatorios de 0 a 20. (Utiliza Math)
- Pida al usuario 5 números.
- Al final, compruebe el número de aciertos. Mostrando al usuario:
- Número de aciertos
- Los números que ha acertado*/
  
// se inician las constantes
  const prompt = require('prompt-sync')();

  const numerosAleatorios = [];

  const numerosUsuario = [];

  const adivinado=[];
  for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 21));
  }
  
  for (let i = 0; i < 5; i++) {
    // se pide al usuario que introduzca un numero
    let entrada = prompt("Adivina un número aleatorio del 0 al 20 ");
    
    // si el usuario no pone un numero tiene que repetir ese intento
    if (entrada === null || entrada.trim() === "") {
        console.log('No se ha proporcionado ningún número');
        i--;
        continue;
    }
    // pasamos el numero del usuario a numero y se añade al array
    let intento = Number(entrada);
    numerosUsuario.push(intento)
    
  }
  // se inicia la comparación por si hay un número adivinado
for (let j = 0; j < numerosUsuario.length; j++) {
  // Si el número del usuario está en los aleatorios...
  if (numerosAleatorios.includes(numerosUsuario[j])) {
    // ...lo guardamos en el array de aciertos (evitando duplicados en los aciertos si quieres)
    if (!adivinado.includes(numerosUsuario[j])) {
      adivinado.push(numerosUsuario[j]);
    }
  }
}

// Ahora adivinado solo tiene los números que SÍ coincidieron
if (adivinado.length === 0) {
  console.log("No has acertado ningún número. ¡Suerte la próxima vez!");
} else {
  console.log("Número de aciertos: " + adivinado.length);
  console.log("Los números que has acertado son: " + adivinado.join(", "));
}

console.log("Estos son los números generados aleatoriamente: " + numerosAleatorios.join(", "));