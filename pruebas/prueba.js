const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
        console.log(numeros[i] + " es par");
    } else {
        console.log(numeros[i] + " es impar");
    }
    switch (numeros[i]) {
        case 1:
            console.log("inicio de la cuenta");
            break;
        case 5:
            console.log("mitad de la cuenta");
            break;
        case 10:
            console.log("fin de la cuenta");
            break;
            default:
            console.log("sin mensaje especial");
            break;
    }
}
console.log("Números pares:", pares);