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
let operation = document.querySelector('#operation');
let value = [];
let result = 0;
let field = [];
let action;
let parameters = [];
let runningTotal = 0;

console.log(`value is presently: ${value}`);
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


const joiner = function () {
    
    parameters.push(parseInt(value.join('')));
    value.length = 0;
}

const add = function () {
    
    joiner();
    action = "add";
    
}


const subtract = function () {
    joiner();
    action = "subtract";
}
const multiply = function () {
    
    action = "multiply";
}
const divide = function () {
    
    action = "divide";
}


let operate = function () {
    joiner();
    if(parameters[1] === 0 || parameters[1] === NaN) {
        parameters.splice(1,1);
    }
    switch (action) {
      case 'add':
            for (let x = 0; x < parameters.length; x++) {
                result += parseInt(parameters[x]);
                
            }
            
            parameters.length = 0;
            parameters.push(result);
        
        break;
        
      case 'subtract':
        
        console.log(parameters);
            result = parseInt(parameters[0]) - parseInt(parameters[1]);
            parameters.length = 0;
            parameters.push(result);
        break;
        /*
    case 'multiply':
        result = valueA * valueB;
        console.log(`the result is ${result}`);
        break;
      case 'divide':
        result = value / valueB;
        console.log(`the result is ${result}`);
        */
    };
    
};
const equals = function () {
    
    operate();
    result = 0;
    value.push(result);
    console.log(`the current result is: ${parameters}`);
    
}
addKey.addEventListener('click', add);
subtractKey.addEventListener('click', subtract);

equalsKey.addEventListener('click', equals)