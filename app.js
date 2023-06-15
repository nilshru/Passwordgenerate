var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numberCase = "1234567890";
var symbolcase = "@#$&";

// selectors
var passBox = document.getElementById("pass-box");
var totalChar = document.getElementById("total-char");
var upperInput = document.getElementById("upper-case");
var lowerInput = document.getElementById("lower-case");
var numberInput = document.getElementById("numbers");
var symbolInput = document.getElementById("symbols");

var getRandomData = (str) => {
    return str.charAt(Math.floor(Math.random() * str.length));
};



var generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(uppercase);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowercase);
    }
    if (numberInput.checked) {
        password += getRandomData(numberCase);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolcase);
    }
    if (password.length < totalChar.value) {
        return generatePassword(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);
};

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        
        generatePassword();
        
        
    }
);

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}


function mousedown(){
    var btn = document.getElementById("btn")
    btn.style.backgroundColor = '#c200009c'
}
function mouseup(){
    var btn = document.getElementById("btn")
    btn.style.backgroundColor = '#ff00229c'
}
