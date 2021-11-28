// 'use strict';

// ES2015 class
// ES2015 이전까지는 비슷한 종류의 객체를 많이 만들어내기 위해 생성자를 사용해왔다.
{ console.group('obj');

  // 생성자
  function Person({name, age}) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.introduce = function() {
    return `Hello, I am ${this.name} :)`;
  };

  const person = new Person({name: 'bomi', age: 20});
  console.log(person.introduce());
  console.log(typeof Person);
  console.log(typeof Person.prototype.constructor);
  console.log(typeof Person.prototype.introduce);
  console.log(person instanceof Person);

console.groupEnd('obj'); }

// ES2015에서 도입된 클래스는 생성자의 기능을 대체한다.
// class 표현식을 사용하면, 생성자와 같은 기능을 하는 함수를 훨씬 더 깔끔한 문법으로 정의할 수 있다.
{ console.group('class');

  // class
  class Person {
    // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의한다.
    constructor({name, age}) {
      this.name = name;
      this.age = age;
    }

    // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장된다.
    introduce() {
      return `Hello, I am ${this.name} :)`;
    }
  }

  const person = new Person({name: 'bomi', age: 20});
  console.log(person.introduce());
  console.log(typeof Person);
  console.log(typeof Person.prototype.constructor);
  console.log(typeof Person.prototype.introduce);
  console.log(person instanceof Person);

console.groupEnd('class'); }

// class 블록에서는 JS의 다른 곳에서는 사용되지 않는 별도의 문법으로 코드를 작성해야한다.
// NOTE! - 함수 혹은 객체의 내부에서 사용하는 문법과 혼동하지 않도록 주의하자!
{ console.log('Class is not a function!!!');
  // class Person {
  //   console.log('hello');
  // }
  // Error: Unexpected token
}
{ console.log('Class is not a object!!!');
  // class Person {
  //   prop: 1,
  //   prop: 2
  // }
  // Error: Unexpected token
}

// 문법이 아니라 동작방식의 측면에서 보면, ES2015 이전의 생성자와 ES2015의 클래스는 다음과 같은 차이점이 있다.
// - 클래스는 함수로 호출될 수 없다.
// - 클래스 선언은 let과 const처럼 블록 스코프에 선언되며, 호이스팅(hoisting)이 일어나지 않는다.
// - 클래스의 메소드 안에서 super 키워드를 사용할 수 있다.