// Assignment code here
// String of all the Special Characters
var specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?"

// String of all numeric characters
var numericCharacters = "0123456789"

// String of all of lowercase characters
var lowerCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// String of all uppercase characters
var upperCasedCharacters = "abcdefghijklmnopqrstuvwxyz"

// Generate Password Function
function generatePassword() {
  // length of password
  var length = prompt("Choose desired length between 8-128 Characters")

  // Alert if selected number outside range
  if (length < 8 || length > 128) {
    alert("Invalid Password Length. Please enter a number between 8 and 128");
    return;
  }

// type of character selections
  var includeSpecial = confirm("Incude special characters?")
  var includeNumerical = confirm("Include numerical characters?")
  var includeUpperCase = confirm("Include uppercase characters?")
  var includeLowerCase = confirm("Include lowercase characters?")

// if no character types are selected
  if (!includeSpecial && !includeNumerical && !includeUpperCase && !includeUpperCase) {
    alert("You must choose at least one character type");
    return;
  }

  // Adding characters that user has selected to empty string
  let characterPool = "";

  if (includeSpecial) {
    characterPool += specialCharacters
  }

  if (includeNumerical) {
    characterPool += numericCharacters
  }

  if (includeUpperCase) {
    characterPool += upperCasedCharacters
  }

  if (includeLowerCase) {
    characterPool += lowerCasedCharacters
  }

  var password = "";

  for (let i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomNumber);
  }

  // return password variable for function
  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
