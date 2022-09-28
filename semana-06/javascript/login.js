window.onload = function () {

  var logInButton = document.querySelector ("#logInButton");
  var emailInput = document.querySelector ("#email-input")
  var password = document.querySelector ("#input-password");

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailValid = false;
  var passwordValid = false;
  var hasLetters = false;
  var hasNumber = false;
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];

  function verifyIfPasswordHasNumber (password){
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < password.length; j++){
        if (hasNumber === false) {
          if (numbers [i]=== password [j]){
            hasNumber = true
  
          }else {
            hasNumber = false
          }
        }
     } 
    
    } 
    return hasNumber;
  }

  function verifyIfPasswordHasLetters (password){
    for (var i = 0; i < alphabet.length; i++) {
      for (var j = 0; j < password.length; j++){
        if (hasLetters === false) {
          hasLetters = alphabet[i] === password [j];
        };
     } 
    
    } 
    return hasLetters
  }

  emailInput.addEventListener("blur", function() {
  if (emailExpression.test(emailInput.value)) {
      emailInput.classList.add("border-green");
      emailValid = true;
  } else {
      emailInput.classList.add("border-red");
      emailValid = false;
  }
});
  emailInput.onfocus = function () {
  emailInput.classList.remove("border-green", "border-red");
  }

password.addEventListener ("blur", function(){
var passwordHasNumber = verifyIfPasswordHasNumber(password.value);
var passwordHasLetters = verifyIfPasswordHasLetters (password.value);
  if (passwordHasNumber && passwordHasLetters){
      password.classList.add("border-green");
      passwordValid = true  
  } else {
      password.classList.add("border-red");
      passwordValid = false
      } 
  hasLetters = false
  hasNumber = false
})
password.onfocus = function () {
  password.classList.remove("border-green", "border-red");
  }

logInButton.addEventListener("click", function(e){
  e.preventDefault();
  if (emailValid && passwordValid){
    alert ("esta todo bien")   
  }else {
    alert("hubo un problema")
  }

})











};