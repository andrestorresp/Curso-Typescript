//reto 05 -  analizar una funcion que calcula el precio final de un producto con impuestos

function calcularPrecio(precio: number, impuesto: number): number {
  return precio + precio * impuesto;
}

const total = calcularPrecio(100, 0.16);
//el resultado es 116
