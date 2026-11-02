//reto 06 - aplicar logica condicional
// Crear una funcion que indique si una persona
// aprobo un examen con nota minima de 70pts

function aprobo(nota: number): boolean {
  return nota >= 70;
}
console.log(aprobo(65));
// la respuesta es False, porque 65 es menor que 70
