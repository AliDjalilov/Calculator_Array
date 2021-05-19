
function getOperator() {
  let answer = '';

  do {
    answer = prompt('Enter operator');

  } while (isOperatorValid(answer));

  return answer;
}

function isOperandsValid(str) {

return str !== null  &&  str !==  ' ' ;  
}


function getOperands() {

  let answer = '' ;

  do {
    answer = prompt('Enter operands');

  } while (isOperandsValid(answer));

  return answer.split(',');
}

function isOperatorValid(str) {   

  return str !== '+' &&  str !== '-' && str !== '*' &&  str !== '/' ;
} 



function isValidOperand(num) {
  return !isNaN(num)
}

function calculate(operator, a, b) {
  switch (operator) { 
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}

const operator = getOperator();
const operands = getOperands(); 


let result = 0;
let expression = '';

for (let i = 0; i < operands.length; i++) {
  const operand = +operands[i]

  if(isValidOperand(operand)) {
    continue;
  }
  if (i === 0) {
    result = operand;
    expression = operand;
    continue;
  }
 
    result = calculate(operator, result, operand);
    expression += ` ${operator} ${operands} `;
  }

console.log(`${expression} = ${result}`);
alert(`${expression} = ${result}`);
