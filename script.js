// function calcularSalario() {
//   let valorHora = Number(prompt("Ingrese el valor de la hora: "));
//   let cantidadHoras = Number(prompt("Ingrese la cantidad de horas: "));
//   let salario = valorHora * cantidadHoras;
//   console.log(salario);
// }
// for (let index = 0; index < 5; index++) {
//     calcularSalario()
// }
// for(let i = 0; i < 10; i++){
//     calcularSalario()
// }
// for(let i = 0; i < 2; i++){
//     calcularSalario()
// }
let numeroUno = Number(prompt("Ingrese un numero: "));
let numeroDos = Number(prompt("Ingrese un numero: "));

function sumar() {
  console.log(numeroUno + numeroDos);
}
function restar() {
  console.log(numeroUno - numeroDos);
}
function multiplicar() {
  console.log(numeroUno * numeroDos);
}
function dividir() {
  if (numeroDos > 0) {
    console.log(numeroUno / numeroDos);
  } else {
    console.log("No se puede dividir por cero");
  }
}
let repetir = true;
let opcion;
while (repetir) {
  opcion = Number(
    prompt(
      "Seleccione:\n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir\n5-Todas\n6-Salir"
    )
  );
  switch (opcion) {
    case 1:
      sumar();
      break;
    case 2:
      restar();
      break;
    case 3:
      multiplicar();
      break;
    case 4:
      dividir();
      break;
    case 5:
      sumar();
      restar();
      multiplicar();
      dividir();
      break;
    case 6:
      repetir = false;
      break;
  }
}
