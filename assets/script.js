var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var resultsEl = document.getElementById('results');
var generateEl = document.getElementById('generate');

var randomFunc = {
    lower: grabRandomLower,
    upper: grabRandomUpper,
    number: grabRandomNumber,
    symbol: grabRandomSymbol
}

function grabRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()
    * 26) + 97);
}

//console.log(grabRandomLower());

function grabRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()
    * 26) + 65);
}

//console.log(grabRandomUpper());

function grabRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random()
    * 10) + 48);
  }

//console.log(grabRandomNumber());

function grabRandomSymbol() {
    var symbols = '!@#$%^&*'
    return symbols[Math.floor(Math.random()*
    symbols.length)];
}

//console.log(grabRandomSymbol ());

resultsEl.innerText = generatePassword(lower, upper, number, symbol) 
    let generatedPassword = '';
    var typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);
    var typesArr = [{lower}, {upper}, {number},
    {symbol}].filter(function(item) {return Object.values(item)[0]});

console.log('typesArr: ', typesArr);