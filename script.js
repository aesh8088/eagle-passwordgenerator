let passwordBox = document.getElementById('password');
let copy = document.getElementById('copy');
let generate = document.getElementById('generate');
let length = 8;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*-_";
let allChars = upperCase + lowerCase + numbers + symbols;

generate.addEventListener('click', () =>{
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += numbers[Math.floor(Math.random() * numbers.length)];

    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    

    while(length> password.length){

    password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password;


});

function copyPaste(){
    passwordBox.select();
    document.execCommand("copy");
}