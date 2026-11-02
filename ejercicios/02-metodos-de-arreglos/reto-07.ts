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
