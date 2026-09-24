# Estructuras

## Arrays

Permite almecenar una colección de datos a los que permite acceder de forma aleatoria

### Métodos

| Método                                                               | Descripción                                 |
| -------------------------------------------------------------------- | ------------------------------------------- |
| `let arrayEjemplo = ["elemento1", "elemento2"]`                      | crear un array                              |
| `arrayEjemplo.push("elemento3"), arrayEjemplo.pop("elemento3")`      | añadir o eliminar elementos al final        |
| `arrayEjemplo.unshift("elemento0"), arrayEjemplo.shift("elemento0")` | añadir o eliminar elementos al inicio       |
| `let posicion2 = arrayEjemplo[2]`                                    | obtener el valor almacenado en una posición |
| `arrayEjemplo.short()`                                               | ordenar el array                            |
| `arrayEjemplo.includes("elemento2")`                                 | saber si contiene un elemento               |
| `arrayEjemplo.arraylength`                                           | conocer la longitud del array               |

## Mapas

Permite almacenar pares de clave-valor donde cualquier valor (tanto objetos como valores primitivos) puede ser usado como clave o como valor.

### Métodos

| Método                                                                    | Descripción                                      |
| ------------------------------------------------------------------------- | ------------------------------------------------ |
| `let mapaEjemplo = new Map([["clave1", "valor1"], ["clave2", "valor2"]])` | crear un mapa                                    |
| `mapaEjemplo.set("clave3", "valor3")`, `mapaEjemplo.delete("clave3")`     | añadir o eliminar elementos por su clave         |
| `mapaEjemplo.get("clave2")`                                               | obtener el valor almacenado asociado a una clave |
| `mapaEjemplo.has("clave2")`                                               | saber si contiene una clave                      |
| `mapaEjemplo.size`                                                        | conocer el número de elementos del mapa          |
| `mapaEjemplo.clear()`                                                     | vaciar todos los elementos del mapa              |

## Sets

Permite almacenar una colección de valores únicos de cualquier tipo, evitando que existan elementos duplicados.

### Métodos

| Método                                                          | Descripción                            |
| --------------------------------------------------------------- | -------------------------------------- |
| `let setEjemplo = new Set(["elemento1", "elemento2"])`          | crear un set                           |
| `setEjemplo.add("elemento3")`, `setEjemplo.delete("elemento3")` | añadir o eliminar elementos del set    |
| `setEjemplo.has("elemento2")`                                   | saber si contiene un elemento          |
| `setEjemplo.size`                                               | conocer el número de elementos del set |
| `setEjemplo.clear()`                                            | vaciar todos los elementos del set     |
