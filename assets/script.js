const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const lengthEl = document.getElementById('length');


var randomFunc = {
    lower: grabRandomLower,
    upper: grabRandomUpper,
    number: grabRandomNumber,
    symbol: grabRandomSymbol
}

//generateEl.addEventListener('click', () => {
//  const length = +lengthEl.value;
//  const hasLower = lowerEl.checked;
//  const hasUpper = upperEl.checked;
//  const hasNumbers = numbersEl.checked;
//  const hasSymbols = symbolsEl.checked;

//  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length);
//});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount ===0) {
    return '';
  }
  for(let i=0; i<length; i+typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]
();
    });
  }

  console.log(generatePassword)

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