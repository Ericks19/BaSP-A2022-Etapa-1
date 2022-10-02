window.onload = function () {

  var logInButton = document.querySelector ("#logInButton");
  var emailInput = document.querySelector ("#email-input");
  var passwordInput = document.querySelector ("#input-password");
  var registerButton = document.querySelector ('#register-button');

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailValid = false;
  var passwordValid = false;
  var hasLetters = false;
  var hasNumber = false;
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];


  var fieldset = document.getElementsByTagName ('fieldset');
  var errorEmail = document.createElement('p');
  var errorPassword = document.createElement('p');


  errorEmail.innerHTML = '';
  errorPassword.innerHTML = '';

  errorEmail.classList.add ('error');
  errorPassword.classList.add ('error');

  fieldset[0].appendChild(errorEmail);
  fieldset[1].appendChild(errorPassword);

  function verifyIfPasswordHasNumber (passwordInput){
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < passwordInput.length; j++){
        if (hasNumber === false) {
          if (numbers [i]=== passwordInput [j]){
            hasNumber = true;
  
          }else {
            hasNumber = false;
          }
        }
     } 
    
    } 
    return hasNumber;
  }

  function verifyIfPasswordHasLetters (passwordInput){
    for (var i = 0; i < alphabet.length; i++) {
      for (var j = 0; j < passwordInput.length; j++){
        if (hasLetters === false) {
          hasLetters = alphabet[i] === passwordInput [j];
        };
     } 
    
    } 
    return hasLetters;
  }

  function hasValidEmail(valueToTest) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(emailExpression.test(valueToTest)) {
        return true;
    }
    return false;
}

function hasValidPassword(passwordInput){
  if(verifyIfPasswordHasNumber(passwordInput) && verifyIfPasswordHasLetters(passwordInput)){
    return true;
  }else{
    return false;
  }
}

  emailInput.addEventListener("blur", function() {
  if (hasValidEmail(emailInput.value)) {
      emailInput.classList.add("border-green");
      emailValid = true;
  } else {
      emailInput.classList.add("border-red");
      errorEmail.innerText = 'Email is not valid';
      
      emailValid = false;
  }
  
});
  emailInput.onfocus = function () {
  emailInput.classList.remove("border-green", "border-red");
  errorEmail.innerHTML = '';
  }

  passwordInput.addEventListener ("blur", function(){
  if (hasValidPassword(passwordInput.value)){
    passwordInput.classList.add("border-green");
      passwordValid = true;  
  } else {
    passwordInput.classList.add("border-red");
      errorPassword.innerText = 'Password is not valid';
      passwordValid = false;
      } 
  hasLetters = false;
  hasNumber = false;
})
passwordInput.onfocus = function () {
  passwordInput.classList.remove("border-green", "border-red");
  errorPassword.innerHTML = '';
  }

logInButton.addEventListener("click", function(e){
  e.preventDefault();
  if ( hasValidEmail(emailInput.value) && hasValidPassword(passwordInput.value)){
    alert (emailInput.value + ', ' + passwordInput.value);  
  }else if (!hasValidEmail(emailInput.value) && hasValidPassword(passwordInput.value)){
    alert (errorEmail.innerText = 'Email is not valid');
  }else if (hasValidEmail(emailInput.value) && !hasValidPassword (passwordInput.value)){
    alert(errorPassword.innerText = 'Password is not valid');
    errorPassword.innerText = 'Password is not valid';
  }else {
    alert('Email is not valid' +  ' ' + 'Password is not valid');
  }
  
})
registerButton.addEventListener ('click', function(e){
  e.preventDefault();
})





}