'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('ellie\'s book');
console.log("ellie's\nbook");
console.log("ellie's\n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
// as follows - 수식의 순서 확인!
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// as follows 
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than - 10이 6보다 작니
console.log(10 <= 6); //less than or equal - 10이 6보다 작거나 같니
console.log(10 > 6); //greater than - 10이 6보다 크니
console.log(10 >= 6); //greater than or equal - 10이 6보다 크거나 같니

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('ㅇ0ㅇ');
  }
  return true;
}

// || (or), finds the first truthy value - 처음으로 true가 나오면 멈춘다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value - 모두 true가 되어야 true로 리턴한다.
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not) - 값을 반대로 출력
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //f
console.log(ellie1 === ellie2); //f
console.log(ellie1 === ellie3); //t

// equality - puzzle
console.log(0 == false); //t
console.log(0 === false); //0은 boolean type이 아니기 때문에 f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //다른 타입이기 때문에 f

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the codition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// console.clear();

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++) {
  if(i % 2 !== 0){
    continue;
  }
  console.log(`Q1: ${i}`);
}

// for (let i = 0; i < 11; i++) {
//   if(i % 2 === 0){
//     continue;
//   }
//   console.log(`Q1: ${i}`);
// }

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if(i > 8){
    break;
  }
  console.log(`Q2: ${i}`);
}