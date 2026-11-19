const frutas = ["manzana", "pera", "manzana", "platano"];

const frutasUnicas = new Set(frutas);
console.log(frutasUnicas); 

const cantidadFrutas = new Map();
cantidadFrutas.set("manzana", 3);
cantidadFrutas.set("pera", 2);
cantidadFrutas.set("platano", 5);

console.log("Cantidad de manzanas:", cantidadFrutas.get("manzana"));