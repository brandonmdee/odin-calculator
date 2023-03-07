
const equalsKey = document.querySelector('#equals');
const addKey = document.querySelector('#add');
const subtractKey = document.querySelector('#subtract');
const multiplyKey = document.querySelector('#multiply');
const divideKey = document.querySelector('#divide');
const clearKey = document.querySelector('#clear');
const decimalKey = document.querySelector('#decimal');
const delKey = document.querySelector('#backspace');
const operation = document.querySelector('#operation');
const button = document.createElement('button');
const formula = document.querySelector('#formula');


let value = [];
let result = 0;
let field = [];
let action;

const inputs = document.querySelector('.inputs');

let numberKeys = [1,2,3,4,5,6,7,8,9,0,'.'];

for (z = 0; z < 11; z++) {
  
    let square = document.createElement('button');
    inputs.appendChild(square);
    square.textContent = `${numberKeys[z]}`;
    square.classList.add('square');
    square.addEventListener('click', () => {
    value.push(`${square.textContent}`);
     operation.textContent = `${value.join('')}`;
    })  
  
    }
button.textContent = '%';
button.setAttribute('id', 'percent');
inputs.appendChild(button);
const percentKey = document.querySelector('#percent');

    
const joiner = function () {
    field.push(parseFloat(value.join('')));
    
    
     for (let x = 0; x < field.length; x++) {
        if(isNaN(field[x])) {
            field.splice(x,1);
        }
    }
    
    value.length = 0;
}

let operate = function () {
    
    joiner();
    switch (action) {
      case 'add': 
      if (field.length === 2) {
        
        result = parseFloat(field[0]) + parseFloat(field[1]);
        field.length = 0;
        field.push(result);
        
    }
        
        break;
        
      case 'subtract':
        
        if (field.length === 2) {
            result = parseFloat(field[0]) - parseFloat(field[1]);
            field.length = 0;
            field.push(result);
        }
        
        break;
        
    case 'multiply':
        if (field.length === 2) {
            result = parseFloat(field[0]) * parseFloat(field[1]);
            field.length = 0;
            field.push(result);
        }

        
        break;
      case 'divide':
        
        if (field.length === 2) {
            if(field[1] === 0) {
                result = "ERROR";
                operation.textContent = `ERROR`;
                field.length = 0;
                
            } else {
            result = parseFloat(field[0]) / parseFloat(field[1]);
            field.length = 0;
            field.push(result);
        }
    }
      
      break;
      default :
        result = field[0];
    }; 
};

const add = function () {
    operate();
    joiner();
    action = "add";
    operate();
}
const subtract = function () {
    operate();
    joiner();
    action = "subtract";
    operate(); 
}
const multiply = function () {
    operate();
    joiner();
    action = "multiply";
    operate();
}
const divide = function () {
    operate();
    joiner();
    action = "divide";
    operate();   
}
const equals = function () {
    operate();
    action = "default";
    if (result === "ERROR") {
        console.log("don't divide by zero ya dingus!");
    } else {
        if (Number.isInteger(result)) {
         operation.textContent = `${result}`;
        } else {
    operation.textContent = `${result.toFixed(2)}`;
    }
}
    result = 0;  
}
const clearAll = function () {
    result = 0;
    action = "default";
    field.length = 0;
    value.length = 0;
    operation.textContent = '0';
}
const backspace = function() {
    if(value.length > 1) {
        value.pop();
        operation.textContent = `${value.join('')}`;
        
    } else {
        operation.textContent = `${result}`;
        value.pop();
        
    };
    }

const percent = function() {
    alert('Feature currently unavailable!');
}

addKey.addEventListener('click', add);
subtractKey.addEventListener('click', subtract);
multiplyKey.addEventListener('click', multiply);
divideKey.addEventListener('click', divide);
clearKey.addEventListener('click', clearAll);
equalsKey.addEventListener('click', equals);
delKey.addEventListener('click', backspace);
percentKey.addEventListener('click', percent)

