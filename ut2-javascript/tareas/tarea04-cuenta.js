/*## js0603. Cuenta
Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.

Crea sus métodos get, set y toString.

Tendrá dos métodos especiales:

- ingresar: se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
- retirar: se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
- **Será imposible dejarla con un importe negativo**.
- Tendrá un constructor para indicar el titular y el saldo inicial.
 */

let prompt = require('prompt-sync')();

class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    get titular() {
        return this._titular;
    }

    get cantidad() {
        return this._cantidad;
    }

    set titular(titular) {
        this._titular = titular;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    toString() {
        return `Cuenta de ${this.titular} con saldo ${this.cantidad}`;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad -= cantidad;
        }
    }
}

let pepe = new Cuenta("pepe", 1000);

console.log(pepe.toString());

pepe.ingresar(500);
console.log(pepe.toString());

pepe.retirar(2000);
console.log(pepe.toString());
