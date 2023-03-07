
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
        console.log(field);
        if (field.length === 2) {
            if(field[1] === 0) {
                result = "ERROR";
                operation.textContent = `ERROR`;
                
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
    
    if (Number.isInteger(result)) {
        operation.textContent = `${result}`;
    } else if (String(result)) {
        console.log(`Don't divide by zero ya dingus!`);
        field.length = 0;
    } else {
    operation.textContent = `${result.toFixed(2)}`;
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
        console.log(value);
    } else {
        operation.textContent = `${result}`;
        value.pop();
        console.log(value);
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

//dummied code

/*
const oneKey = document.querySelector('.one');
const twoKey = document.querySelector('.two');
const threeKey = document.querySelector('.three');
const fourKey = document.querySelector('.four');
const fiveKey = document.querySelector('.five');
const sixKey = document.querySelector('.six');
const sevenKey = document.querySelector('.seven');
const eightKey = document.querySelector('.eight');
const nineKey = document.querySelector('.nine');
const zeroKey = document.querySelector('.zero');
*/
/*
oneKey.addEventListener('click', () => {
    value.push(1);
    console.log(value);
    
    
});
twoKey.addEventListener('click', () => {
    value.push(2);
    console.log(value);
});
threeKey.addEventListener('click', () => {
    value.push(3);
    console.log(value);
});
fourKey.addEventListener('click', () => {
    value.push(4);
    console.log(value);
});
fiveKey.addEventListener('click', () => {
    value.push(5);
    console.log(value);
});
sixKey.addEventListener('click', () => {
    value.push(6);
    console.log(value);
});
sevenKey.addEventListener('click', () => {
    value.push(7);
    console.log(value);
});
eightKey.addEventListener('click', () => {
    value.push(8);
    console.log(value);
});
nineKey.addEventListener('click', () => {
    value.push(9);
    console.log(value);
});
zeroKey.addEventListener('click', () => {
    value.push(0);
    console.log(value);
});

decimalKey.addEventListener('click', () => {
    value.push('.');
    console.log(value);
})
*/