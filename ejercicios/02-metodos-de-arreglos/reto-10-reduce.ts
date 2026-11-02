// Reto 10 -
const precios: number[] = [10, 20, 30];

const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);

console.log(total);
// respuesta es 60, porque reduce suma cada uno de los elementos en el arreglo
