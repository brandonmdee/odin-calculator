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
const equalsKey = document.querySelector('#equals');
const addKey = document.querySelector('#add');
const subtractKey = document.querySelector('#subtract');
const multiplyKey = document.querySelector('#multiply');
const divideKey = document.querySelector('#divide');
const clearKey = document.querySelector('#clear');
const decimalKey = document.querySelector('#decimal');
let operation = document.querySelector('#operation');
let value = [];
let result = 0;
let field = [];
let action;



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
                console.log(result);
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
    console.log(result);
    result = 0;  
}

const clearAll = function () {
    result = 0;
    action = "default";
    field.length = 0;
    value.length = 0;
    field.push(result);
    console.log(result);
}

addKey.addEventListener('click', add);
subtractKey.addEventListener('click', subtract);
multiplyKey.addEventListener('click', multiply);
divideKey.addEventListener('click', divide);
clearKey.addEventListener('click', clearAll);

equalsKey.addEventListener('click', equals);