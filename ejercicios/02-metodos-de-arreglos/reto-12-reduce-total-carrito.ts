interface Producto {
  nombre: string;
  precio: number;
}

const carrito: Producto[] = [
  { nombre: "teclado", precio: 25 },
  { nombre: "mouse", precio: 15 },
  { nombre: "monitor", precio: 150 },
  { nombre: "Audífonos", precio: 60 },
];

//aqui calculamos el total utilizando reduce
const total = carrito.reduce((acumulador, producto) => {
  return acumulador + producto.precio;
}, 0);

console.log(total);
