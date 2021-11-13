'use strict';

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object

// object = {key: value};

const name = 'bomi';
const age = 4;
print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const bomi = {name: 'bomi', age: 20};
print(bomi);