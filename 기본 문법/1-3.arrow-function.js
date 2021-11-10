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
};
printHello();

function log(message) {
  console.log(message);
};
log('Hello!');
log(123);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
  obj.name = 'coder';
};
const bomi = { name: 'bomi' };
changeName(bomi);
console.log(bomi);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
};
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
};
printAll('earth', 'mercury', 'mars', 'venus');

// ...args: rest parameters - 배열 형태로 전달

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global bariable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  // return undefined; // 생략 가능
};
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
};
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad way
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
};

// good way
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
};


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other function.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function: 이름이 없는 함수
  console.log('print');
};
print(); // first print
const printAgain = print;
printAgain(); // second print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4 

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
};
// anonymouse function
const printYes = function () {
  console.log('YES!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('NO:(');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous

// const simplePrint = function () {
//   console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
console.log(add(3, 3));

// IIFE: Immediately Invoked Function Expression

// function hello() {
//   console.log('IIFE');
// }
// hello();

(function hello() {
  console.log('IIFE');
})();