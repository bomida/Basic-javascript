'use strict';

// 함수 선언
function doSomething(add) {
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add);


// Function
// - fundamental building block in the program
// - subprogram can be  used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body..return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello!');
log(123);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
  obj.name = 'coder';
}
const bomi = { name: 'bomi' };
changeName(bomi);
console.log(bomi);