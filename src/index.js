const display = document.querySelector('.display__result--calc');
display.innerText = 0
const resultDisplay = document.querySelector('.display__result--value')


function addValue(value) {
  if(display.innerHTML === '0') display.innerHTML = ''
  if(display.innerHTML.length === 17 || display.innerText?.length === 17) return
  const spanOperator = document.createElement('span')
  spanOperator.innerHTML = value
  display.appendChild(spanOperator)
}

function addOperator(operator) {
  if(display.innerHTML.length === 1  && display.innerHTML.includes(0) || display.innerText.length === 1  && display.innerText.includes(0) ) return
  if(display.innerHTML === '0') display.innerHTML = ''
  if(display.innerHTML.length === 17 || display.innerText?.length === 17) return
  if(display.innerText[display.innerText.length - 1] === '+' || display.innerText[display.innerText.length - 1] === '-' || display.innerText[display.innerText.length - 1] === '*' || display.innerText[display.innerText.length - 1] === '/') return
  const spanOperator = document.createElement('span')
  spanOperator.className = 'display__result--calc display__result--operator'
  spanOperator.innerHTML = operator
  display.appendChild(spanOperator)
}

function clearOne() {
  if(resultDisplay.innerText) {
    resultDisplay.innerText = ''
    return
  }
  display.innerText = display.innerText.slice(0, display.innerText.length - 1)
  if(!display.innerText.length || !display.innerHTML.length) display.innerText = 0
}


function clearAll() {
  if(resultDisplay.innerText) {
    resultDisplay.innerText = ''
    return
  }
  display.innerText = 0
}

function calcResult() {
  let result = eval(display.innerText)
  const length = getLength(result)
  if(length > 12) {
    result = result.toString().substr(0, 12);
    
    resultDisplay.innerText = result + `...`
    display.innerText = 0
    return
  }
  resultDisplay.innerText = '=' + result
  display.innerText = 0
}

function getLength(number) {
  return number.toString().length
}








