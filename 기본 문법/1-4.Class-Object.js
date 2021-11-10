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

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() { // 값을 리턴
    return this._age;
  }
  set age(value) { // 값을 설정 > 대신에 값을 받아와야함
    // if (value < 0) {
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private);
// Too soon!

class Experiment {
  publicField = 2;
  #privateField = 0; // 앞에 해시를 붙이면 PrivateField가 되어 class 내부에서만 값이 보여지고, 변경 가능, 접근이 됨
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
