window.onload = function () {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];

  var fieldset = document.getElementsByTagName("fieldset");
  var firstName = document.querySelector("#first-name");
  var lastName = document.querySelector("#last-name");
  var dni = document.querySelector("#dni");
  var bithdate = document.querySelector("#bithdate");
  var phone = document.querySelector("#phone");
  var address = document.querySelector("#address");
  var locality = document.querySelector("#locality");
  var zipcode = document.querySelector("#zipcode");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  var repeatPassword = document.querySelector("#repeat-password");
  var button = document.querySelector("#button");

  var errorFirstName = document.createElement("p");
  var errorLastName = document.createElement("p");
  var errorDni = document.createElement("p");
  var errorBithdate = document.createElement("p");
  var errorPhone = document.createElement("p");
  var errorAddress = document.createElement("p");
  var errorLocality = document.createElement("p");
  var errorZipcode = document.createElement("p");
  var errorEmail = document.createElement("p");
  var errorPassword = document.createElement("p");
  var errorRepeatPassword = document.createElement("p");

  errorFirstName.innerHTML = "";
  errorLastName.innerHTML = "";
  errorDni.innerHTML = "";
  errorBithdate.innerHTML = "";
  errorPhone.innerHTML = "";
  errorAddress.innerHTML = "";
  errorLocality.innerHTML = "";
  errorZipcode.innerHTML = "";
  errorEmail.innerHTML = "";
  errorPassword.innerHTML = "";
  errorRepeatPassword.innerHTML = "";

  errorFirstName.classList.add("error");
  errorLastName.classList.add("error");
  errorDni.classList.add("error");
  errorBithdate.classList.add("error");
  errorPhone.classList.add("error");
  errorAddress.classList.add("error");
  errorLocality.classList.add("error");
  errorZipcode.classList.add("error");
  errorEmail.classList.add("error");
  errorPassword.classList.add("error");
  errorRepeatPassword.classList.add("error");

  fieldset[0].appendChild(errorFirstName);
  fieldset[1].appendChild(errorLastName);
  fieldset[2].appendChild(errorDni);
  fieldset[3].appendChild(errorBithdate);
  fieldset[4].appendChild(errorPhone);
  fieldset[5].appendChild(errorLocality);
  fieldset[6].appendChild(errorAddress);
  fieldset[7].appendChild(errorZipcode);
  fieldset[8].appendChild(errorEmail);
  fieldset[9].appendChild(errorPassword);
  fieldset[10].appendChild(errorRepeatPassword);

  firstName.addEventListener("blur", function () {
    if (validateFirstName(firstName.value)) {
      firstName.classList.add("border-green");
    } else {
      firstName.classList.add("border-red");
      errorFirstName.innerHTML = "Name is not valid";
    }
  });
  firstName.onfocus = function () {
    firstName.classList.remove("border-green", "border-red");
    errorFirstName.innerHTML = "";
  };

  lastName.addEventListener("blur", function () {
    if (validateLastName(lastName.value)) {
      lastName.classList.add("border-green");
    } else {
      lastName.classList.add("border-red");
      errorLastName.innerHTML = "Lastname is not valid";
    }
  });
  lastName.onfocus = function () {
    lastName.classList.remove("border-green", "border-red");
    errorLastName.innerHTML = "";
  };

  dni.addEventListener("blur", function () {
    if (validateDni(dni.value)) {
      dni.classList.add("border-green");
    } else {
      dni.classList.add("border-red");
      errorDni.innerHTML = "Dni is not valid";
    }
  });
  dni.onfocus = function () {
    dni.classList.remove("border-green", "border-red");
    errorDni.innerHTML = "";
  };

  bithdate.addEventListener("blur", function () {
    if (hasValidDateformat(bithdate.value)) {
      bithdate.classList.add("border-green");
    } else {
      bithdate.classList.add("border-red");
      errorBithdate.innerHTML = "Bithdate is not valid";
    }
  });
  bithdate.onfocus = function () {
    bithdate.classList.remove("border-green", "border-red");
    errorBithdate.innerHTML = "";
  };

  phone.addEventListener("blur", function () {
    if (validatePhoneNumber(phone.value)) {
      phone.classList.add("border-green");
    } else {
      phone.classList.add("border-red");
      errorPhone.innerHTML = "Phone is not valid";
    }
  });
  phone.onfocus = function () {
    phone.classList.remove("border-green", "border-red");
    errorPhone.innerHTML = "";
  };

  locality.addEventListener("blur", function () {
    if (validateLocality(locality.value)) {
      locality.classList.add("border-green");
    } else {
      locality.classList.add("border-red");
      errorLocality.innerHTML = "Locality is not valid";
    }
  });
  locality.onfocus = function () {
    locality.classList.remove("border-green", "border-red");
    errorLocality.innerHTML = "";
  };

  address.addEventListener("blur", function () {
    if (hasValidAddress(address.value)) {
      address.classList.add("border-green");
    } else {
      address.classList.add("border-red");
      errorAddress.innerHTML = "Address is not valid";
    }
  });

  address.onfocus = function () {
    address.classList.remove("border-green", "border-red");
    errorAddress.innerHTML = "";
  };

  zipcode.addEventListener("blur", function () {
    if (validateZipCode(zipcode.value)) {
      zipcode.classList.add("border-green");
    } else {
      zipcode.classList.add("border-red");
      errorZipcode.innerHTML = "Zipcode not valid";
    }
  });

  zipcode.onfocus = function () {
    zipcode.classList.remove("border-green", "border-red");
    errorZipcode.innerHTML = "";
  };

  email.addEventListener("blur", function () {
    if (hasValidEmail(email.value)) {
      email.classList.add("border-green");
    } else {
      email.classList.add("border-red");
      errorEmail.innerHTML = "The email is not valid";
    }
  });

  email.onfocus = function () {
    email.classList.remove("border-green", "border-red");
    errorEmail.innerHTML = "";
  };

  password.addEventListener("blur", function () {
    if (validatePassword(password.value)) {
      password.classList.add("border-green");
    } else {
      password.classList.add("border-red");
      errorPassword.innerHTML = "Password is not valid";
    }
  });

  password.onfocus = function () {
    password.classList.remove("border-green", "border-red");
    errorPassword.innerHTML = "";
  };

  repeatPassword.addEventListener("blur", function () {
    if (validateRepeatPassword(repeatPassword.value)) {
      repeatPassword.classList.add("border-green");
    } else {
      repeatPassword.classList.add("border-red");
      errorRepeatPassword.innerHTML = "Password do not match";
    }
  });

  repeatPassword.onfocus = function () {
    repeatPassword.classList.remove("border-green", "border-red");
    errorRepeatPassword.innerHTML = "";
  };

  /*Se debe agregar un botón “Create” que al presionarlo se muestre un cartel emergente (Alert) con la información cargada 
    en el formulario en caso de que haya pasado todas las validaciones. Si alguna validación no pasó, además de mostrar 
    el error debajo del campo, también se debe mostrar el error en el cartel emergente.*/

  button.addEventListener("click", function (e) {
    e.preventDefault();
    var errorAlert = [];
    var error = false;

    if (!validateFirstName(firstName.value)) {
      errorAlert.push("Invalid first name\n");
      error = true;
    }

    if (!validateLastName(lastName.value)) {
      errorAlert.push("Invalid last name\n");
      error = true;
    }

    if (!validateDni(dni.value)) {
      errorAlert.push("Invalid dni\n");
      error = true;
    }

    if (!hasValidDateformat(bithdate.value)) {
      errorAlert.push("Invalid date of birth\n");
      error = true;
    }

    if (!validatePhoneNumber(phone.value)) {
      errorAlert.push("Invalid phone number\n");
      error = true;
    }

    if (!hasValidAddress(address.value)) {
      errorAlert.push("Invalid address\n");
      error = true;
    }

    if (!validateLocality(locality.value)) {
      errorAlert.push("Invalid location\n");
      error = true;
    }

    if (!validateZipCode(zipcode.value)) {
      errorAlert.push("Invalid postal code\n");
      error = true;
    }

    if (!hasValidEmail(email.value)) {
      errorAlert.push("Invalid email\n");
      error = true;
    }

    if (!validatePassword(password.value)) {
      errorAlert.push("Invalid password\n");
      error = true;
    }

    if (!validateRepeatPassword(repeatPassword.value)) {
      errorAlert.push("Invalid password check\n");
      error = true;
    }

    if (error) {
      alert(errorAlert);
      return false;
    } else {
      alert(
        "First name: " +
          firstName.value +
          "\nLast name: " +
          lastName.value +
          "\nDNI: " +
          dni.value +
          "\nDate of bith: " +
          bithdate.value +
          "\nAddress: " +
          address.value +
          "\nPhone: " +
          phone.value +
          "\nlocality: " +
          locality.value +
          "\nZipCode: " +
          zipcode.value +
          "\nEmail: " +
          email.value +
          "\nPassword: " +
          password.value +
          "\nRepeat Password: " +
          repeatPassword.value
      );
    }
  });

  //                                  FUNCIONES

  function validateFirstName(valueToTest) {
    if (hasOnlyLetters(valueToTest) && valueToTest.length >= 3) {
      return true;
    }
    return false;
  }

  function validateLastName(valueToTest) {
    if (hasOnlyLetters(valueToTest) && valueToTest.length >= 3) {
      return true;
    }
    return false;
  }

  function validateDni(valueToTest) {
    if (hasOnlyNumbers(valueToTest) && valueToTest.length > 7) {
      return true;
    }
    return false;
  }

  function validatePhoneNumber(valueToTest) {
    if (hasOnlyNumbers(valueToTest) && valueToTest.length == 10) {
      return true;
    }
    return false;
  }

  function validateLocality(valueToTest) {
    if (
      hasLetters(valueToTest) &&
      hasNumbers(valueToTest) &&
      valueToTest.length > 3
    ) {
      return true;
    }
    return false;
  }

  function validateZipCode(valueToTest) {
    if (
      hasOnlyNumbers(valueToTest) &&
      valueToTest.length >= 4 &&
      valueToTest.length <= 5
    ) {
      return true;
    }
    return false;
  }

  function validatePassword(valueToTest) {
    if (
      hasLetters(valueToTest) &&
      hasNumbers(valueToTest) &&
      valueToTest.length >= 8
    ) {
      return true;
    }
    return false;
  }

  function validateRepeatPassword(valueToTest) {
    if (
      hasLetters(valueToTest) &&
      hasNumbers(valueToTest) &&
      valueToTest.length >= 8 &&
      valueToTest === password.value
    ) {
      return true;
    }
    return false;
  }

  function hasOnlyNumbers(valueToTest) {
    for (var j = 0; j < valueToTest.length; j++) {
      if (isNaN(valueToTest[j])) {
        return false;
      }
    }
    return true;
  }

  function hasOnlyLetters(valueToTest) {
    for (var j = 0; j < valueToTest.length; j++) {
      if (!isNaN(valueToTest[j])) {
        return false;
      }
    }
    return true;
  }

  function hasNumbers(valueToTest) {
    var hasNumber = false;
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < valueToTest.length; j++) {
        if (hasNumber === false) {
          if (numbers[i] === valueToTest[j]) {
            hasNumber = true;
          } else {
            hasNumber = false;
          }
        }
      }
    }
    return hasNumber;
  }

  function hasLetters(valueToTest) {
    var hasLetters = false;
    for (var i = 0; i < alphabet.length; i++) {
      for (var j = 0; j < valueToTest.length; j++) {
        if (hasLetters === false) {
          hasLetters = alphabet[i] === valueToTest[j];
        }
      }
    }
    return hasLetters;
  }

  function hasValidEmail(valueToTest) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailExpression.test(valueToTest)) {
      return true;
    }
    return false;
  }
  function hasValidDateformat(valueToTest) {
    var dateToTest = valueToTest.split("/");
    var dateday = dateToTest[0];
    var dateMonth = dateToTest[1];
    var dateYear = dateToTest[2];
    if (
      dateday >= 1 &&
      dateday <= 31 &&
      dateMonth >= 1 &&
      dateMonth <= 12 &&
      dateYear.length == 4
    ) {
      return true;
    }
    return false;
  }

  function hasMiddleSpace(valueToTest) {
    for (var i = 1; i < valueToTest.length - 1; i++) {
      if (valueToTest[i] === " ") {
        return true;
      }
    }
    return false;
  }
  function hasValidAddress(valueToTest) {
    if (
      hasNumbers(valueToTest) &&
      hasLetters(valueToTest) &&
      valueToTest.length >= 5 &&
      hasMiddleSpace(valueToTest)
    ) {
      return true;
    }
    return false;
  }

  
}
