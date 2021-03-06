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
  // methods (행동)
  speak() {
    console.log(`Hello, ${this.name}`);
  }
}
const bomi = new Person(`bomi`, 20); // 새로운 오브젝트를 만들 때에는 new라는 키워드 사용
console.log(bomi);
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


// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Hello World';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
console.group('Inheritance');
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, '🔵');
rectangle.draw();
console.log(`rectangle.getArea(): ${rectangle.getArea()}`);

class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle color: ${this.color}`;
  }
}
const triangle = new Triangle(20, 20, '🔴');
console.log(`triangle.draw(): ${triangle.draw()}`);
console.log(`triangle.getArea(): ${triangle.getArea()}`);
console.groupEnd('Inheritance');

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
console.log(triangle.toString()); // Triangle color: 🔴
