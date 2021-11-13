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
console.log(bomi.name);
console.log(bomi['name']);
