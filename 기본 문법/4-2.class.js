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


// 메소드 정의하기
// 클래스의 메소드를 정의할 때는 객체 리터럴에서 사용하던 문법과 유사한 문법을 사용한다.
// 인스턴스 메소드(instance method)는 다음과 같은 문법을 통해 정의한다.
{
  class Calculator {
    add(x, y) {
      return x + y;
    }
    subtrack(x, y) {
      return x - y;
    }
  }
  console.log(new Calculator().add(2, 3));
}

// 객체 리터럴의 문법과 마찬가지고, 임의의 표현식을 대괄호로 둘러싸서 메소드의 이름으로 사용할 수도 있다.
{
  const methodName = 'introduce';
  class Person {
    constructor({name, age}) {
      this.name = name;
      this.age = age;
    }
    // 아래 메소드의 이름은 `introduce`가 된다.
    [methodName]() {
      return `Hello, I am ${this.name} :)`;
    }
  }
  console.log(new Person({name: 'bomi', age: 20}).introduce());
}

// Getter 혹은 Setter를 정의하고 싶을 때는 메소드 이름 앞에 get 또는 set을 붙여주면 된다.
{
  class Account {
    constructor() {
      this._balance = 0;
    }
    get balance() {
      return this._balance;
    }
    set balance(newBalance) {
      this._balance = newBalance;
    }
  }

  const account = new Account();
  account.balance = 1000;
  console.log('account.balance: ' + account.balance);
}

// static 키워드를 메소드 이름 앞에 붙여주면 해당 메소드는 정적 메소드가 된다.
{
  class Person {
    constructor({name, age}) {
      this.name = name;
      this.age = age;
    }
    // 이 메소드는 정적 메소드이다.
    static sumAge(...people) {
      return people.reduce((acc, person) => acc + person.age, 0);
    }
  }

  const person1 = new Person({name: 'yumi', age: 20});
  const person2 = new Person({name: 'bomi', age: 23});

  console.log(Person.sumAge(person1, person2));
}

// Generator 메소드를 정의하려면, 메소드 이름 앞에 * 기호를 붙여주면 된다.
// 아래와 같이 Symbol.iterator 메소를 generator로 정의해주면, 클래스의 인스턴스를 쉽게 iterable로 만들 수 있다.
{
  class Gen {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  }

  // 1, 2, 3이 차례로 출력된다.
  for(let n of new Gen()) {
    console.log('class Gen():' + n);
  }
}
{
  function* Gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  for(let n of Gen()) {
    console.log('generator Gen():' + n);
  }
}