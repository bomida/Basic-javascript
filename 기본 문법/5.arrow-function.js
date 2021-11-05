'use strict';

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

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 이전에는 인자의 값이 전달되지 않을 경우를 대비해 if문을 써서 입력되지않은 인자 값에 undefined가 출력되도록 직적 설정했었지만 from이라는 인자 값 옆에 원하는 default값을 지정해 놓으면 된다.

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('earth', 'mercury', 'mars', 'venus');

// ...args: rest parameters - 배열 형태로 전달