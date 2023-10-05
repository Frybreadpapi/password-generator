// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Brought this over from a stack overflow to help kind of help me on where I was going wrong
function generatePassword() {

  let lower = "abcdefghijklmnopqrstuvwxyz"
  let lowerArr = lower.split("");
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperArr = upper.split("");
  let num = "0123456789";
  let numArr = num.split("");
  let spec = "!@#$%^&*()_+?<>";
  let specArr = spec.split("");
  let allChars = [];

 
  let password = "";

  let pwlength = prompt("Choose password length: 8-128 characters.");

  if (pwlength < 8 || pwlength > 128) {
    alert("Password must be between defined length.")
    generatePassword()
  }
  if (confirm("Do you want lowercase characters?")) {
    allChars.push(lowerArr);
  }
  if (confirm("Do you want uppercase characters?")) {
    allChars.push(upperArr);
  }
  if (confirm("Do you wamt numeric characters?")) {
    allChars.push(numArr);
  }
  if (confirm("Do you want special characters?")) {
    allChars.push(specArr);
  }
  if (allChars.length === 0) {
    alert("Minimum of one type of character must be chosen");
    generatePassword()
  }
  for (let i = 0; i < pwlength; ++i) {
    let random = Math.floor(Math.random().length);
    password = allChars[random];
  }

  return password;
}

// My creation
function createPassword(length) {
  let password = '';
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  let passwordLength = 8-100;
}

// From a different Stack overflow
function randomFunc(input) {
  let randomChar = variable;
  if (input === "hasUpper") {
      randomChar = getRandomUpper();
  }
  if (input === "hasLower") {
      randomChar = getRandomLower();
  }
  if (input === "hasNumbers") {
      randomChar = getRandomNumber();
  }
  if (input === "hasSymbols") {
      randomChar = getRandomSymbol();
  }
  return randomChar;
}