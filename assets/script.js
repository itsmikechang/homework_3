const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const lengthEl = document.getElementById('length');


const randomFunc = {
    lower: grabRandomLower,
    upper: grabRandomUpper,
    number: grabRandomNumber,
    symbol: grabRandomSymbol
}

generateEl.addEventListener('click', () => {
  const hasLower = lengthEl.checked;
  const hasUpper = lengthEl.checked;
  const hasNumber = lengthEl.checked;
  const hasSymbol = lengthEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
}
  );

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  var typesCount = lower + upper + number + symbol;

  // console.log('typesCount: ', typesCount);

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  
  (function(item) {return Object.values(item)[0]});

console.log('typesArr: ', typesArr);
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

