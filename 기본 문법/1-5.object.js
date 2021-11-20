'use strict';

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object

// object = {key: value}; // 오브젝트는 key와 value의 집합체이다.

// 1. Literals and properties
console.group('1. Literals and properties');

  const name = 'bomi';
  const age = 20;
  print(name, age);

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

console.groupEnd('1. Literals and properties');


// 2. Computed properties
// key should be always string
// .(dot) : 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때
// [] : 정확하게 어떤키가 필요한지 모를 때 즉, 런타임에서 결정될 때 사용 -> 실기간으로 원하는 키의 값을 받아오고 싶아면 확인용으로 주로 씀.
console.group('2. Computed properties');

  console.log(bomi.name);
  console.log(bomi['name']);
  bomi['hasJob'] = true;
  console.log(bomi.hasJob);

  function printValue(obj, key) {
    console.log(obj[key]);
  }
  printValue(bomi, 'name');
  printValue(bomi, 'age');

console.groupEnd('2. Computed properties');


// 3. Property value shorthand
// 다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들의 네이밍은 대문자로 시작
{ console.group('3. Property value shorthand');
  const person1 = { name: 'bob', age: 2 };
  const person2 = { name: 'steve', age: 3 };
  const person3 = { name: 'dave', age: 4 };

  // 객체를 더 쉽게 만드는 법
  function makePerson(name, age) {
    return {
      name,
      age,
    };
  };
  const person4 = makePerson('bomi', 5);
  console.log(person4);
console.groupEnd('3. Property value shorthand'); }


// 4. Constructor Function
// 오브젝트를 생성하는 함수를 만들 때에는 이름을 대문자로 시작하게 만든다.
// 그리고 return을 사용하지 않고, this를 사용
console.group('4. Constructor Function');

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person4 = new Person('bomi', 5);
  console.log(person4);

console.groupEnd('4. Constructor Function');


// 5. in operator: property existence check (key in obj)
  console.group('5. in operator');
  console.log('name' in bomi);
  console.log('age' in bomi);
  console.log('random' in bomi);
  console.log(bomi.random);
  console.groupEnd('5. in operator');


// 6. for..in vs for..of
// for (key in obj)
{ console.group('6. for..in vs for..of');
  for (let key in bomi) {
    console.log(key);
  }
  // for (value of iterable)
  const array = [1, 2, 3, 4];
  for (let value of array) {
    console.log(value);
  }
  /*
  for(let i = 0; i< array.length; i++) {
    console.log(array[i]);
  }
  */
  console.groupEnd('6. for..in vs for..of'); }


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

{ console.group('7. Fun cloning');
  const user = { name: 'bomi', age: '20' };
  const user2 = user;
  user2.name = 'coder';
  console.log(user);

  // old way
  const user3 = {};
  for (let key in user) {
    user3[key] = user[key];
  }
  console.log(user3);

  const user4 = Object.assign({}, user);
  console.log(user4);

  // another example
  const fruit1 = { color: 'red' };
  const fruit2 = { color: 'blue', size: 'big' };
  const mixed = Object.assign({}, fruit1, fruit2);
  console.log(mixed.color);
  console.log(mixed.size);
  console.groupEnd('7. Fun cloning'); }
