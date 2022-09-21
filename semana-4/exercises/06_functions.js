console.log('EXERCISE-6 functions');
/*a: Crear una función suma que reciba dos valores numéricos y retorne
 el resultado. Ejecutar la función y guardar el resultado en una 
 variable, mostrando el valor de dicha variable en la consola del 
 navegador.*/

console.log('-Exercise 6.a:');
function suma(number1, number2) {
  return number1 + number2;
}

var result = suma(20, 8);
console.log(result);

/*b:A la función suma anterior, agregarle una validación para 
 controlar si alguno de los parámetros no es un número; de no ser un 
 número, mostrar una alerta aclarando que uno de los parámetros tiene
 error y retornar el valor NaN como resultado.*/
console.log('-Exercise 6.b:');

function controlledSum(number1, number2) {
  if (Number(number1) && Number(number2)) {
    return suma(number1, number2);
  } else alert('Uno de los parametros tiene un error');
  return NaN;
}

console.log(controlledSum(32, 45));

/*c: Aparte, crear una función validate Integer que reciba un número
 como parámetro y devuelva verdadero si es un número entero.*/
console.log('-Exercise 6.c:');

function validateInteger(number) {
  if (Number.isInteger(number)) {
    return true;
  }
}

console.log(validateInteger(4));

/*d: A la función suma del ejercicio 6b) agregarle una llamada a la 
 función del ejercicio 6c. y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retornar 
el número convertido a entero (redondeado).*/
console.log('-Exercise 6.d:');

function checkedSumVerified(number1, number2) {
  if (validateInteger(number1) && validateInteger(number2)) {
    return number1 + number2;
  } else {
    return (
      alert('Uno de los parametros tiene un error '),
      Math.round(number1) + ' ' + Math.round(number2)
    );
  }
}
console.log(checkedSumVerified(10, 10));

/* e: Convertir la validación del ejercicio 6d) en una función separada y llamarla 
dentro de la función suma probando que todo siga funcionando igual.*/
console.log('-Exercise 6.e:');
/*function sumaEjercicio6E (number1,number2) {
  if (sumaControladaVereficada(number1) && sumaControladaVereficada(number2)){
  return  number1 + number2;
  }
 }
  console.log(sumaEjercicio6E(50,50));*/
