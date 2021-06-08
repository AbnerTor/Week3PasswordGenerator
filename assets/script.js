// Assignment Code
var generateBtn = document.getElementById("generate");

    // Add event listener to generate button
    generateBtn.addEventListener('click', writePassword);
// Write password to the #password input


var includeLower = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var includeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var includeSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ",", ")", "_", "+", "{", "}", "|", "[", "]", ":", "'", ";", ">", "<", "?", ".", "/"];

var includeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function generatePassword() {

    var passwordLength = prompt("How long do you want the password? The password can be between 8 and 128 characters long.");

    var confirmLength = parseInt(passwordLength);

    if (confirmLength < 8 || confirmLength > 128) {
        // not valid length, warn user
        alert('Password must be between 8 and 128 characters');
        return;
    }

    //stuff thats going into the password
    var options = [];

    var askLower = confirm("Do you want the password to include lowercase letters?");
    if (askLower) {
        options.push(includeLower);
    }

    var askUpper = confirm("Do you want the password to inlcude uppercase letters?");
    if (askUpper) {
        options.push(includeUpper);
    }

    var askSpecChar = confirm("Do you want the password to include special characters?");
    if (askSpecChar) {
        options.push(includeSpecial);
    }

    var askNumbers = confirm("Do you want the password to include numbers?");
    if (askNumbers) {
        options.push(includeNumbers);
    }

    var password = "";

    for (let i = 0; i < confirmLength; i++) {

        let randomIndexOne = Math.floor(Math.random() * options.length);
        let randomIndexTwo = Math.floor(Math.random() * options[randomIndexOne].length);
        // let randomIndexThree = Math.floor(Math.random() * options[randomIndexThree].length);
        // let randomIndexFour = Math.floor(Math.random() * options[randomIndexFour].length);


        password += options[randomIndexOne][randomIndexTwo];
    };

    console.log(password)

    return password;


}

function writePassword() {
    var password = generatePassword();

    if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
}




// console.log(writePassword())

