// Random Password Generator


function generatePassword() {
    // Delcaring global variables
    let lengthError = true;
    let ranPassword = "";
    let pool = "";
    let lowerPool = "abcdefghijklmnopqrstuvwxyz"; 
    let upperPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numericPool = "01234567890123456789";
    let spCharPool = "!@#$%&*`~=+-_,.<>?^'{}[]";
  
    // Prompt asking for the length the user wants their password
    let passLength = prompt("Length of password? (Must be between 8 and 128 characters)");
    // Gives error message if user gives more or less than asked for
    if (passLength < 8 || passLength > 128){
        do {
            alert("Error: Please choose a length between 8 and 128 characters");
            passLength = prompt("Length of password? (Must be between 8 and 128 characters)");
            if (passLength >= 8 && passLength <= 128) {
                lengthError = false;
            }
        } while (lengthError)
    }
    
    // Checking what type of characters user wants included
    let includeLower = confirm("Include lowercase?");
    if (includeLower){
        pool += lowerPool;
    }
    let includeUpper = confirm("Include uppercase?");
    if (includeUpper){
        pool += upperPool;
    }
    let includeNumeric = confirm("Include numeric?");
    if (includeNumeric){
        pool += numericPool;
    }
    let includeSpChar = confirm("Include special characters?");
    if (includeSpChar){
        pool += spCharPool;
    }
    
    // Creating the password
    for (let i = 0; i < passLength; i++){
        let ran = Math.floor(Math.random() * pool.length);
        ranPassword += pool.charAt(ran);
    }
    return ranPassword;
  } 
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  