//Reto 11
//prueba de que el acumulador no comienza en 0
const precios: number[] = [5, 10, 15];

const totalPrec = precios.reduce(
  (acumulador, precio) => acumulador + precio,
  100,
);

console.log(totalPrec);
//respuesta es 130
