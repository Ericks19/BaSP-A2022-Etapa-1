window.onload = function () {

  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];

  //inputs
  var firstName = document.querySelector ("#first-name");
  var lastName = document.querySelector ("#last-name");
  var dni = document.querySelector ("#dni");
  var bithdate = document.querySelector ("#bithdate"); 
  var phone =  document.querySelector ("#phone");
  var address =  document.querySelector ("#address");
  var locality =  document.querySelector ("#locality");
  var zipcode =  document.querySelector ("#zipcode");
  var email =  document.querySelector ("#email");
  var password =  document.querySelector ("#password");
  var password2 =  document.querySelector ("#password2");
  var button = document.querySelector ("#button");
  //...

  //si el valueToTest solo tiene números
  function hasOnlyNumbers(valueToTest) {
      for (var j = 0; j < valueToTest.length; j++){
          if (isNaN(valueToTest[j])) { //Is Not a Number
           return false
          }
        }
      return true;
  }
  //si el valueToTest solo tiene letras
  function hasOnlyLetters(valueToTest) {
      for (var j = 0; j < valueToTest.length; j++){
          if (!isNaN(valueToTest[j])) { // ! es una negación
           return false
          }
        }
      return true;
  }
  function hasNumbers (valueToTest){
      var hasNumber = false;
      for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < valueToTest.length; j++){
          if (hasNumber === false) {
           /* hasNumber = numbers[i] === password [j];*/
            if (numbers [i]=== valueToTest [j]){
              hasNumber = true

            }else {
              hasNumber = false
            }
          }
       }

      }
      return hasNumber; //o es true o false
    }

    function hasLetters (valueToTest){
      var hasLetters = false;
      for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < valueToTest.length; j++){
          if (hasLetters === false) {
            hasLetters = alphabet[i] === valueToTest [j];
          };
       }

      }
      // devuelve valor true o false
      return hasLetters
    }

  function hasValidEmail(valueToTest) {
      var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      if(emailExpression.test(valueToTest)) {
          return true;
      }
      return false
  }
  function hasValidDateformat(valueToTest) {
      // Con formato dd/mm/aaaa.
      var dateToTest = valueToTest.split('/');
      var dateday   =  dateToTest[0]
      var dateMonth =  dateToTest[1]
      var dateYear  = dateToTest[2]
      if(dateday >= 1 && dateday <= 31 &&  dateMonth >= 1 && dateMonth <= 12 && dateYear.length == 4) {
          return true
      }
      return false
  }

  function hasMiddleSpace(valueToTest) {
      //checar letra por letra y verificar que alguna de las letras, que no sea la primera ni la ultima sean un espacio
      for (var i = 1; i < valueToTest.length-1; i++) {
          //valueToTest[i] es el caractr actual de la palabra enviada, dentor del ciclo
          if(valueToTest[i] === " ") {
              return true
          }
      }
      return false;

  }
  function hasValidAddress(valueToTest) {
      //Al menos 5 caracteres con letras, números y un espacio en el medio.
      //calle 1234 ->
      if(hasNumbers(valueToTest) && hasLetters(valueToTest) && valueToTest.length >=5 && hasMiddleSpace(valueToTest)) {
          return true;
      }
      return false;
  }
                              //EJERCICIOS



  // Nombre: Solo letras y debe tener más de 3 letras.
  firstName.addEventListener('blur', function() {
      //al inicio quito los bordes para reiniciar la validación
      firstName.classList.remove("border-green", "border-red")
      if(hasOnlyLetters(firstName.value) && firstName.value.length >= 3) {
          firstName.classList.add("border-green")
      } else {
          firstName.classList.add("border-red")
      }
  })
  // Apellido: Solo letras y debe tener más de 3 letras.
  lastName.addEventListener('blur', function() {
      //al inicio quito los bordes para reiniciar la validación
      lastName.classList.remove("border-green", "border-red")
      if(hasOnlyLetters(lastName.value) && lastName.value.length >= 3) {
          lastName.classList.add("border-green")
      } else {
          lastName.classList.add("border-red")
      }
  })

  // DNI: Solo número y debe tener más de 7 números.
  dni.addEventListener('blur', function() {
      dni.classList.remove("border-green", "border-red")
      if(hasOnlyNumbers(dni.value) && dni.value.length>7) {
          dni.classList.add("border-green")
      } else {
          dni.classList.add("border-red")
      }
  })

  // Fecha de Nacimiento: Con formato dd/mm/aaaa.
  bithdate.addEventListener('blur', function() {
      bithdate.classList.remove("border-green", "border-red")
      if(hasValidDateformat(bithdate.value)) {
          bithdate.classList.add("border-green")
      } else {
          bithdate.classList.add("border-red")
      }
  })

  // Teléfono: Solo número y debe tener 10 números.
  phone.addEventListener('blur', function() {
      phone.classList.remove("border-green", "border-red")
      if(hasOnlyNumbers(phone.value) && phone.value.length == 10) {
          phone.classList.add("border-green")
      } else {
          phone.classList.add("border-red")
      }
  })

  // Localidad:  Texto alfanumérico y debe tener más de 3 letras.
  locality.addEventListener('blur', function() {
      locality.classList.remove("border-green", "border-red")
      if(hasLetters(locality.value) && hasNumbers(locality.value) && locality.value.length > 3) {
          locality.classList.add("border-green")
      } else {
          locality.classList.add("border-red")
      }
  })

  // Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
  address.addEventListener('blur', function() {
      address.classList.remove("border-green", "border-red")
      if(hasValidAddress(address.value)) {
          address.classList.add("border-green")
      } else {
          address.classList.add("border-red")
      }
  })
  // Código Postal: Solo número y debe tener entre 4 y 5 números.
  zipcode.addEventListener('blur', function() {
      zipcode.classList.remove("border-green", "border-red")
      if(hasOnlyNumbers(zipcode.value) && zipcode.value.length >=4 && zipcode.value.length <=5) {
          zipcode.classList.add("border-green")
      } else {
          zipcode.classList.add("border-red")
      }
  })
  // Email: Debe tener un formato de email válido.
  email.addEventListener('blur', function() {
      email.classList.remove("border-green", "border-red")
      if(hasValidEmail(email.value)) {
          email.classList.add("border-green")
      } else {
          email.classList.add("border-red")
      }
  })
  // Contraseña: Al menos 8 caracteres, formados por letras y números.
  password.addEventListener('blur', function() {
      password.classList.remove("border-green", "border-red")
      if(hasLetters(password.value) && hasNumbers(password.value) && password.value.length >= 8) {
          password.classList.add("border-green")
      } else {
          password.classList.add("border-red")
      }
  })

  //Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
  password2.addEventListener('blur', function() {
      password2.classList.remove("border-green", "border-red")
      if(hasLetters(password2.value) && hasNumbers(password2.value) && password2.value.length >= 8) {
          password2.classList.add("border-green")
      } else {
          password2.classList.add("border-red")
      }
  })


  /*Se debe agregar un botón “Login” que al presionarlo se muestre un cartel emergente con la información cargada en el
   formulario en caso de que haya pasado todas las validaciones. Si alguna validación no pasó, además de mostrar el error
    debajo del campo, también se debe mostrar el error en el cartel emergente.*/
    /*1 agregar evento onclick; 2 tengo que hacer un if / else
    If: Si pasa las validaciones osea si todos los campos son true me tiene que devolver el valor de todos los campos en un alert
    Solucion: comparar si todo los valores de los campos son true  entonces return todo los valores en un string 
    Else:
 */
console.log(button);
    button.addEventListener("click", function(e){
        e.preventDefault();
        if (firstName && lastName && dni && bithdate && phone &&
            address && locality && zipcode && email && password && password2){
          alert ("esta todo bien")   
        }else {
          alert("hubo un problema")
        }
      
      })
      
}  









 
