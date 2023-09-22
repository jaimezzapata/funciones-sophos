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

function sumar(numeroUno, numeroDos) {
  console.log(numeroUno + numeroDos);
}
function restar(numeroUno, numeroDos) {
  console.log(numeroUno - numeroDos);
}
function multiplicar(numeroUno, numeroDos) {
  console.log(numeroUno * numeroDos);
}
function dividir(numeroUno, numeroDos) {
  if (numeroDos > 0) {
    console.log(numeroUno / numeroDos);
  } else {
    console.log("No se puede dividir por cero");
  }
}
let repetir = true;
let opcion;
while (repetir) {
  let numeroUno = Number(prompt("Ingrese un numero: "));
  let numeroDos = Number(prompt("Ingrese un numero: "));
  opcion = Number(
    prompt(
      "Seleccione:\n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir\n5-Todas\n6-Salir"
    )
  );
  switch (opcion) {
    case 1:
      sumar(numeroUno, numeroDos);
      break;
    case 2:
      restar(numeroUno, numeroDos);
      break;
    case 3:
      multiplicar(numeroUno, numeroDos);
      break;
    case 4:
      dividir(numeroUno, numeroDos);
      break;
    case 5:
      sumar(numeroUno, numeroDos);
      restar(numeroUno, numeroDos);
      multiplicar(numeroUno, numeroDos);
      dividir(numeroUno, numeroDos);
      break;
    case 6:
      repetir = false;
      break;
  }
}
