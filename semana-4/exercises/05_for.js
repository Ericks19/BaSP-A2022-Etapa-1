console.log("Exercise-5 for");
/* a:Crear un array que contenga 5 palabras y recorrer dicho 
array utilizando un bucle for de JavaScript para mostrar una 
alerta utilizando cada una de las palabras.*/
console.log("-Exercise 5.a:");

var animals = ["pato", "elefante", "ganzo", "ornitorrinco", "jirafa"];
for (var contador = 0; contador < animals.length; contador++) {
  alert(animals[contador]);
}
 
/* b:Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.*/
console.log("-Exercise 5.b:");

animalsfirstword = [];
animalsrestword = [];

for (var i = 0; i < animals.length; i++) {
  animalsfirstword = animals[i].substring(0, 1).toUpperCase();
  animalsrestword = animals[i].substring(1, 100).toLowerCase();
  alert(animalsfirstword + animalsrestword);
}

/* c: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
 punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la 
 variable sentence. Al final mostrar una única alerta con la cadena completa.*/
 console.log("-Exercise 5.c:");

var sentence = " ";
for ( var contador = 0; contador < animals.length; contador++) {
  sentence = sentence + animals[contador].toString(animals);
} 
    alert(sentence);

    /*d: Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
    número de la repetición, es decir que al final de la ejecución del bucle for debería haber
     10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola
      del navegador el array final (utilizar console.log).*/
      console.log("-Exercise 5.d:");
      var EmptyArray = [];
      for (var contador = 0; contador < 10; contador++){
        EmptyArray.push(EmptyArray[contador]);

      } console.log(EmptyArray);

      





