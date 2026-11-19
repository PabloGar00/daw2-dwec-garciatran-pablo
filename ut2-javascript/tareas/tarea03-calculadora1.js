/*## js0402. Definición de funciones. Calculadora I. 
En este y los siguientes ejercicios, vamos a implementar una calculadora utilizando diferentes formas de utilizar las funciones. De ese modo, la lógica será la misma y únicamente tendréis que cambiar la forma de trabajar. La calculadora tendrá las siguientes características:

- El menú principal debe ser una función.
- Tendra una pantalla o acumulador. El valor inicial será 0.
- Implementará los siguientes operadores con 2 operandos. (pantalla más uno solicitado)
   - +,-,*,/,%
   - factorial
   - x elevado a y
- Implementará los siguientes operadores con 1 operando. (pantalla)
- El resultado de las operaciones se almacenará en el acumulador o pantalla.
- Tendrá una memoria que permitirá almacenar el contenido de la pantalla. El operador será 
  M
- Tendrá una operación que permitirá cargar el valor en memoria en la pantalla. R
- Tendrá una operación para poner a 0 tanto la pantalla como la memoria.

Será necesario también que exista un programa de prueba que realize al menos una vez cada una de las operaciones. */

let prompt = require('prompt-sync')();

// Variables globales para mantener el estado entre operaciones
let resultado = 0;
let memoria = 0;

function ejecutarCalculadora() {
    let continuar = true;

    while (continuar) {
        console.log(`\n--- Resultado actual: ${resultado} ---`);
        let entrada = prompt("Introduce una opción (+, -, *, /, %, !, ^, M, R, C, S): ");

        switch (entrada) {
            case '+': {
                let num1 = Number(prompt("Introduce un número para sumar: "));
                resultado += num1;
                break;
            }
            case '-': {
                let num1 = Number(prompt("Introduce un número para restar: "));
                resultado -= num1;
                break;
            }
            case '*': {
                let num1 = Number(prompt("Introduce un número para multiplicar: "));
                resultado *= num1;
                break;
            }
            case '/': {
                let num1 = Number(prompt("Introduce el dividendo: "));
                if (num1 === 0) {
                    console.log("Error: No se puede dividir entre cero.");
                } else {
                    resultado /= num1;
                }
                break;
            }
            case '%': {
                let num1 = Number(prompt("Introduce el número base: "));
                resultado %= num1;
                break;
            }
            case '!': {
                if (resultado < 0) {
                    console.log("Error: El factorial no está definido para números negativos.");
                } else {
                    let factorial = 1;
                    for (let i = 1; i <= resultado; i++) {
                        factorial *= i;
                    }
                    resultado = factorial;
                }
                break;
            }
            case '^': {
                let base = resultado;
                let exponente = Number(prompt("Introduce el exponente: "));
                resultado = Math.pow(base, exponente);
                break;
            }
            case 'M':
                memoria = resultado;
                console.log(`Valor almacenado en memoria: ${memoria}`);
                break;
            case 'R':
                resultado = memoria;
                console.log(`Valor recuperado de memoria: ${resultado}`);
                break;
            case 'C':
                resultado = 0;
                memoria = 0;
                console.log("Pantalla y memoria puestas a cero.");
                break;
            case 'S':
                console.log("Saliendo de la calculadora...");
                continuar = false;
                break;
            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
                break;
        }
    }
}

ejecutarCalculadora();