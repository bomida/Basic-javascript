'use strict';

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object

// object = {key: value}; // 오브젝트는 key와 value의 집합체이다.

// 1. Literals and properties
/*
const name = 'bomi';
const age = 20;
print(name, age);
*/
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const bomi = {name: 'bomi', age: 20};
print(bomi);

// with Javascript magic (dynamically typed language)
// can add properties later
bomi.hasJob = true;
console.log(bomi.hasJob);

// can delete properties later
delete bomi.hasJob;
console.log(bomi.hasJob);


// 2. Computed properties
// key should be always string
// .(dot) : 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때
// [] : 정확하게 어떤키가 필요한지 모를 때 즉, 런타임에서 결정될 때 사용 -> 실기간으로 원하는 키의 값을 받아오고 싶아면 확인용으로 주로 씀.
console.log(bomi.name);
console.log(bomi['name']);
bomi['hasJob'] = true;
console.log(bomi.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(bomi, 'name');
printValue(bomi, 'age');

// 3. Property value shorthand
// 다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들의 네이밍은 대문자로 시작