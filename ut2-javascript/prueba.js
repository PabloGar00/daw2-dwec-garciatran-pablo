  const NumerosAleatorios= []
  let mayor=0;
  let menor=101;
    for (let i = 0; i < 10; i++) {
    NumerosAleatorios.push(Math.floor(Math.random() * 101));
    }
  
    for (let i = 0; i < NumerosAleatorios.length; i++) {
    if(NumerosAleatorios[i]>mayor){
        mayor = NumerosAleatorios[i]
    }
    if (NumerosAleatorios[i]<menor) {
        menor = NumerosAleatorios[i]
    }
    
    
}
let suma = 0
for (let i = 0; i < NumerosAleatorios.length; i++) {
    suma = i + suma
}

let media = suma/10
NumerosAleatorios.sort
console.log("el número mayor es "+ mayor + " el numero menor es " + menor)
console.log("este es el array"+ NumerosAleatorios)
console.log("la media es "+ media)
