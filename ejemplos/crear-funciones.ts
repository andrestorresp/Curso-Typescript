//numero: number declara el tipo del parámetro.
//: number después de los paréntesis declara el tipo de retorno.
//duplicar(5) devuelve 10.

function duplicar(numero: number): number {
  return numero * 2;
}

const resultad = duplicar(5);

//reto 05 -  analizar una funcion que calcula el precio final de un producto con impuestos

function calcularPrecio(precio: number, impuesto: number): number {
  return precio + precio * impuesto;
}

const total = calcularPrecio(100, 0.16);
//el resultado es 116

//reto 06 - aplicar logica condicional
// Crear una funcion que indique si una persona
// aprobo un examen con nota minima de 70pts

function aprobo(nota: number): boolean {
  return nota >= 70;
}
console.log(aprobo(65));
// la respuesta es False, porque 65 es menor que 70

// Reto 07 - Array y metodos de busqueda

//filter() selecciona elementos que cumplen una condición.
//map() transforma cada elemento y devuelve un nuevo array.
//reduce() permite acumular los elementos en un único resultado, como una suma.
// Tenemos las puntuaciones de cinco candidatos

const puntuaciones: number[] = [55, 82, 67, 95, 70];
const aprobados = puntuaciones.filter((nota) => nota >= 70);

console.log(aprobados);
//Resultado: [82, 95, 70]

//igual pero cambiando .filter por .map
const precios: number[] = [10, 20, 30];
const resultado = precios.map((precio) => precio * 2);
console.log(resultado);
//resultado es [20, 40, 60].

// Reto 09 - combinar filter y map
const precio: number[] = [15, 40, 25, 60, 10];
const resuelto = precio
  .filter((precio) => precio >= 25)
  .map((precio) => precio * 2);

console.log(resuelto);
// Respuesta: [80, 50, 120]
