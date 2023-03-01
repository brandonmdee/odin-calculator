const oneKey = document.querySelector('.one');
const twoKey = document.querySelector('.two');

let value = [];

oneKey.addEventListener('click', () => {
    value.push('1');
    console.log(value.join(''));
});
twoKey.addEventListener('click', () => {
    value.push('2');
    console.log(value.join(''));
})
let valueA = 3;
let valueB = 5;
let result;

const add = function () {
    result = valueA + valueB;
    console.log(result);
}
const subtract = function () {
    result = valueA - valueB;
    console.log(result);
}
const multiply = function () {
    result = valueA * valueB;
    console.log(result);
}
const divide = function () {
    result = valueA / valueB;
    console.log(result);
}

let operate = function () {

};
