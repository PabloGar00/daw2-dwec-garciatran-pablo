let numeros =[];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

let minimo = 999;
let maximo = 0;
let suma = 0;
    
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    if (numeros[i] < minimo) {
        minimo = numeros[i];
    }
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}
console.log("Mínimo:", minimo);
console.log("Máximo:", maximo);
let media = suma / numeros.length;
console.log("Media:", media);