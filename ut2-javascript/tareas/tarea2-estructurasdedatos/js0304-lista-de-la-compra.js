/*## js0304. Lista de la compra.
Crea un programa que pida al usuario los nombres de elementos a añadir a la lista de la compra. El programa los va a ir añadiendo hasta recibir una cadena vacía. Debe además:

- En caso de que el elemento suministrado exista, Deberá indicarlo. Sino, mostrará un mensaje indicando que se ha añadido.
- Cuando se finalice la introducción (cadena vacía). Mostrará los artículos en la lista en orden alfabético. */

const prompt = require('prompt-sync')();
// inicio el array que el usuario va a rellenar
const listaCompra =[];
let ingrediente
do {
    // el usuario introduce los elementos
    ingrediente = prompt("introduce un elemento para la lista de la compra. (no escriba para terminar) ")
    // si el usuario no escribe nada termina el bucle
    if(ingrediente===""){
        break;
    }
    // si el usuario repite un producto se ejecuta esta parte para indicar que ya ha añadido ese producto y se salta la parte donde lo añaden a la lista de la compra
    if(listaCompra.includes(ingrediente)){
        console.log("ese producto ya esta en la lista");
        continue;
    }
    // si no se ha repetido el producto se añade a la lista de la compra
    listaCompra.push(ingrediente);

} while (true);
// se ordena el array en orden alfabetico
listaCompra.sort();
// se imprime el array
console.log("esta es tu lista de la compra: " + listaCompra);