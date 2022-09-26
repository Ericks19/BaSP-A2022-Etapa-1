window.onload = function () {

var firstName = document.querySelector ("#first-name")
var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];

function validateFirstName(firstName) {
  var firstNameHasLetters = false
  
 /* for (var i = 0; i < firstName.length; i++) {

      // si el alfabeto incluye la letra que estamos iterando
      if(!alphabet.includes(firstName[i].toLowerCase())){
          isValid =false;
      }
  }*/
  for (var i = 0; i < alphabet.length; i++) {
    for (var j = 0; j < firstName.length; j++){
      if (firstNameHasLetters === false) {
        firstNameHasLetters = alphabet[i] === firstName [j];
      };
   } 
  
  } 

  if (firstName.length > 3 && firstNameHasLetters) {
      firstName.classList.add (".border-green")
  } else {
      firstName.classList.add ("border-red");
  }
  
}

// telefono
var phone = document.querySelector('#phone');
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

function hasOnlyNumbers(valueToTest) {
    for (var j = 0; j < valueToTest.length; j++){
      if (isNaN(valueToTest[j])) {
       return false
      }
    }
  return true;
}

function hasNumbers(valueToTest) {

}

phone.addEventListener('blur', function() {
  phone.classList.remove("border-green", "border-red") 
  
  if (phone.value.length == 10 && hasOnlyNumbers(phone.value)) {
    phone.classList.add ("border-green")
  }else {
    phone.classList.add ("border-red");
  }
})























}