// Reto 09 - combinar filter y map
const precio: number[] = [15, 40, 25, 60, 10];
const resuelto = precio
  .filter((precio) => precio >= 25)
  .map((precio) => precio * 2);

console.log(resuelto);
// Respuesta: [80, 50, 120]
