'use strict';

// Array 🥳

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

console.group('No.2');

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 아이템을 찾을 때에는
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
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
// 시작하는 인덱스 번호, 몇개를 지울것인지(선택)하지만 지정하지 않으면 뒤의 모든 데이터를 삭제함
console.log(fruits);
fruits.splice(1,1,'🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.groupEnd('No.4');

console.group('No.5');

// 5. Searching
// find the index
// indexOf: 몇번째 인덱스에 있는지 확인해주는 함수 / 중복 된 데이터가 있을 시 제일 처음에 있는 인덱스 값을 알려준다.
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 배열에 해당하는 값이 없을 때는 -1을 출력함

// includes: true of false로 나타내는 함수
console.log(fruits.includes('🍉')); 
console.log(fruits.includes('🥥'));

// lastIndexOf: 반대로 중복 된 데이터가 있을 시 제일 마지막에 있는 인덱스 값을 알려준다.
fruits.push('🍎');
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

console.groupEnd('No.5');