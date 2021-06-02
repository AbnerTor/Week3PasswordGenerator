// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input



function generatePassword() {

    var passwordLength = prompt("How long do you want the password? The password can be between 8 and 128 characters long.");

    var comfirmLength = parseInt(passwordLength);

    console.log(comfirmLength);

    function getPasswordLenth(answer) {

        if (passwordLength < 8 || passwordLength > 128) {
            alert('Password must be between 8 and 128 characters');

            return passwordLength;

        } else if (passwordLength >= 8 && passwordLength <= 128) {

            console.log(answer);
        }
    }

    //stuff thats going into the password
    var options = [];

    var askLower = confirm("Do you want the password to include lowercase letters?");
    if (askLower === true) {
        options.push(includeLower);
    }

    var askUpper = confirm("Do you want the password to inlcude uppercase letters?");
    if (askUpper === true) {
        options.push(includeUpper);
    }

    var askSpecChar = confirm("Do you want the password to include special characters?");
    if (askSpecChar === true) {
        options.push(includeSpecial);
    }

    var askNumbers = confirm("Do you want the password to include numbers?");
    if (askNumbers === true) {
        options.push(includeNumbers);
    }
    var includeLower = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var includeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var includeSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ",", ")", "_", "+", "{", "}", "|", "[", "]", ":", "'", ";", ">", "<", "?", ".", "/"];

    var includeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


    var createPassword = "";


    for (let i = 0; i < getPasswordLenth; i++) {

        options[Math.floor(Math.random() * options.length)];

        createPassword += options[Math.floor(Mth.random() * options.length)];
    };

    console.log(createPassword)

    return createPassword;


}

function writePassword() {


    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // Add event listener to generate button
    generateBtn.on('click', writePassword());

}




console.log(writePassword())

