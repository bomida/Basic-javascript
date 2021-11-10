'use strict';

// Object-oriendted programing
// class: template
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactival sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name} hello`);
  }
}
const bomi = new Person(`bomi`, 20);
console.log(bomi.name);
console.log(bomi.age);
bomi.speak();