'use strict';

// Array π₯³

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

console.group('No.2');

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // λ°°μ΄μ λ§μ§λ§ μμ΄νμ μ°Ύμ λμλ
console.groupEnd('No.2');

console.group('No.3');
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(`for: ${fruits[i]}`);
}

// b. for of
for (let fruit of fruits) {
  console.log(`for of: ${fruit}`);
}

// e. forEach
fruits.forEach((fruits) => console.log(`forEach: ${fruits}`));

console.groupEnd('No.3');

console.group('No.4');

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1);
// μμνλ μΈλ±μ€ λ²νΈ, λͺκ°λ₯Ό μ§μΈκ²μΈμ§(μ ν)νμ§λ§ μ§μ νμ§ μμΌλ©΄ λ€μ λͺ¨λ  λ°μ΄ν°λ₯Ό μ­μ ν¨
console.log(fruits);
fruits.splice(1,1,'π', 'π');
console.log(fruits);

// combine two arrays
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.groupEnd('No.4');

console.group('No.5');

// 5. Searching
// find the index
// indexOf: λͺλ²μ§Έ μΈλ±μ€μ μλμ§ νμΈν΄μ£Όλ ν¨μ / μ€λ³΅ λ λ°μ΄ν°κ° μμ μ μ μΌ μ²μμ μλ μΈλ±μ€ κ°μ μλ €μ€λ€.
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯')); // λ°°μ΄μ ν΄λΉνλ κ°μ΄ μμ λλ -1μ μΆλ ₯ν¨

// includes: true of falseλ‘ λνλ΄λ ν¨μ
console.log(fruits.includes('π')); 
console.log(fruits.includes('π₯₯'));

// lastIndexOf: λ°λλ‘ μ€λ³΅ λ λ°μ΄ν°κ° μμ μ μ μΌ λ§μ§λ§μ μλ μΈλ±μ€ κ°μ μλ €μ€λ€.
fruits.push('π');
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));

// reverse: λ°°μ΄ μμ λ€μ§κΈ°
console.log(fruits.reverse());

// slice:  λͺλ²μ§Έ μΈλ±μ€ λΆν° μλ₯Όμ§(ν¬ν¨), λͺλ²μ§Έ μΈλ±μ€κΉμ§ μλ₯Όμ§(λ―Έν¬ν¨)
console.log(fruits.slice(2,5));

console.groupEnd('No.5');