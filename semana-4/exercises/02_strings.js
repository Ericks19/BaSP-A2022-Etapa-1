console.log("EXERCISE-2 strings");
/*a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log("-Exercise 2.a:");
var stringWhithAtLeast10characters1 =
  "esto es una variable de almenos 10 caracteres";
console.log(stringWhithAtLeast10characters1.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva variable 
(utilizar substring).*/

console.log("-Exercise 2.b:");
var stringWhithAtLeast10characters2 =
  "esto es otra variable de almenos 10 caracteres";
var firstFivecharacters = stringWhithAtLeast10characters2.substring(0, 5);

console.log(firstFivecharacters);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
 string con los últimos 3 caracteres guardando el resultado en una nueva variable
  (utilizar substring).*/

console.log("-Exercise 2.c:");
var stringWhithAtLeast10characters3 =
  "esto es otra variable 2 de almenos 10 caracteres";
var last3characters = stringWhithAtLeast10characters3.substring(45, 100);

console.log(last3characters);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un 
  nuevo string con la primera letra en mayúscula y las demás en minúscula. 
  Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).*/

console.log("-Exercise 2.d:");
var stringWhithAtLeast10characters4 =
  "esto es otra Variabe 3 de Almenos 10 Caracteres";
var firstCharacter = stringWhithAtLeast10characters4.substring(0, 1);
var firstCharacter = firstCharacter.toUpperCase();
var restCharacters = stringWhithAtLeast10characters4.substring(1, 100);
var restCharacters = restCharacters.toLowerCase();
var exerciseD = firstCharacter + restCharacters;
console.log(exerciseD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio
     en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
      variable (utilizar indexOf).*/

console.log("-Exercise 2.e:");
var stringWhithAtLeast10characters5 = "vamos a cambiar un poco el texto";
var exerciseE = stringWhithAtLeast10characters5.indexOf(" ");
console.log(exerciseE);

/* f. Crear una variable de tipo string con al menos 2 palabras largas 
      (10 caracteres y algún espacio entre medio). Utilizar los métodos de los 
      ejercicios anteriores para generar un nuevo string que tenga la primera letra 
      de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf,
      substring, toUpperCase, toLowerCase y el operador +).*/
      
console.log("-Exercise 2.f:");
var stringWhithAtLeast10characters6 = "eleCtRodomEsTicO onoMaTopEyA";

var firstCharacterWord2 = stringWhithAtLeast10characters6
  .substring(17, 18)
  .toUpperCase();
var restoOfSecondWord = stringWhithAtLeast10characters6
  .substring(18, 100)
  .toLowerCase();
var secondPart = firstCharacterWord2 + restoOfSecondWord;

var firstCharacterWord1 = stringWhithAtLeast10characters6
  .substring(0, 1)
  .toUpperCase();
var restOfTheSentence = stringWhithAtLeast10characters6
  .substring(1, 17)
  .toLowerCase();
var firstPart = firstCharacterWord1 + restOfTheSentence;

var exerciseF = firstPart + secondPart;
console.log(exerciseF);
