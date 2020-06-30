var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var resultsEl = document.getElementById('results');
var generateEl = document.getElementById('generate');

var randomFunc = {
    lower: grabRandomLower,
    // upper: grabRandomUpper,
    // number: grabRandomNumber,
    // symbol: grabRandomSymbol
}

function grabRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()
    * 26) + 97);
}

console.log(grabRandomLower());

