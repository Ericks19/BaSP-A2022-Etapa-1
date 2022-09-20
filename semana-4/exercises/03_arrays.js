console.log("Exercise-3 Arrays");

/* a: Dado el siguiente array: ["Enero", "Febrero", "Marzo", 
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5
 y 11 (utilizar console.log).*/
console.log("-Exercise 3.a:");
var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(months[4] + " " + months[10]);

/* b: Ordenar el array de meses alfabéticamente y mostrarlo 
 por consola (utilizar sort).*/

console.log("-Exercise 3.b:");
var monthsExerciseB = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsExerciseB.sort();

console.log(monthsExerciseB);

/* c: Agregar un elemento al principio y al final del array
   (utilizar unshift y push).*/

console.log("-Exercise 3.c:");
var monthsExerciseC = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsExerciseC.push("Pato");
monthsExerciseC.unshift("Ganzo");
console.log(monthsExerciseC);

/* d: Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log("-Exercise 3.d:");
var monthsExerciseD = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsExerciseD .shift();
monthsExerciseD .pop();
console.log(monthsExerciseD);

/* e: Invertir el orden del array (utilizar reverse).*/

console.log("-Exercise 3.e:");
var monthsExerciseE = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsExerciseE.reverse();
console.log(monthsExerciseE);

/* f: Unir todos los elementos del array en un único string donde cada mes este
    separado por un guión - (utilizar join).*/

console.log("-Exercise 3.f:");
var monthsExerciseF = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(monthsExerciseF.join("-"));
 
/* G: Crear una copia del array de meses que contenga desde Mayo hasta 
    Noviembre (utilizar slice).*/
    
console.log("-Exercise 3.g:");
var monthsExerciseG = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var copyMonths = monthsExerciseG.slice(4,11);

console.log(copyMonths);
