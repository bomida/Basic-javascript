'use strict';

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
{ console.group('class Gen()');
  class Gen {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  }

  // 1, 2, 3이 차례로 출력된다.
  for(let n of new Gen()) {
    console.log(n);
  }
console.groupEnd('class Gen()'); }

{ console.group('generator Gen()');
  function* Gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  for(let n of Gen()) {
    console.log(n);
  }
console.groupEnd('generator Gen()'); }


// 클래스 필드(Class Field)
// 클래스 블록 안에서 할당 연산자(=)를 이용해 인스턴스 속성을 지정할 수 있는 문법을 클래스 필드(class field)라고 한다.
{
  class Counter {
    static initial = 0; // static class field
    count = Counter.initial; // class field
    inc() {
      return this.count++;
    }
  }

  const counter = new Counter();
  console.log(counter.inc());
  console.log(counter.inc());

  Counter.initial = 10;
  console.log(new Counter().count);
}

// 클래스 필드는 아직 정식 표준으로 채택된 기능은 아니다. 아직 이 기능을 구현한 브라우저는 없는 상태이고,
// Bable, TypeScript 등의 트랜스파일러를 통해 일부 기능을 사용할 수 있다.

// 클래스 필드와 this
// class 블록은 새로운 블록 스코프를 형성하고, 이 내부에서 사용된 this는 인스턴스 객체를 가리키게 된다.
{
  class MyClass {
    a = 1;
    b = this.a;
  }
  console.log(new MyClass().b);
}

// 이 성질을 이용하면, 화살표 함수를 통해서 메소드를 정의할 수 있다.
// (화살표 함수 안에서의 this 키워드는 바로 바깥쪽 스코프에 존재하는 this와 같은 객체를 가리킨다는 사실을 생각하자.)
{
  class MyClass {
    a = 1;
    getA = () => {
      return this.a;
    }
  }
  console.log(new MyClass().getA());
}

// 이렇게만 보면 일반적인 메소드와 별로 차이가 없어 보이지만, 사실 동작방식 측면에서 굉장히 큰 차이점이 있다.
//  1. 일반적인 메소드는 클래스의 property 속성에 저장되는 반면, 클래스 필드는 인스턴스 객체에 저장된다.
//  2. 화살표 함수의 this는 호출 형태에 관계없이 항상 인스턴스 객체를 가리키게 된다.

// 2번 성질 때문에, 메소드를 값으로 다루어야 할 경우에는 일반적인 메소드 대신 화살표 함수가 사용되는 경우가 종종 있다.
// 클래스 필드를 통해 정의한 메소드는 인스턴스를 생성할 때마다 새로 생성되기 때문에 메모리를 더 차지하게 되므로 주의해서 사용해야 한다.


// 클래스 상속(Class Inheritance)
// 클래스 상속(class inheritance, subclassing) 기능을 통해 한 클래스의 기능을 다른 클래스에서 재사용할 수 있다.
{
  class Parent {
    // ...
  }
  class Child extends Parent {
    // ...
  }
}

// 위 코드에서 extends 키워드를 통해 child 클래스가 Parent 클래스를 상속했다.
// 이런 관계를 '부모 클래스 - 자식 클래스 관계' 혹은 '슈퍼 클래스(superclass)-서브 클래스(subclass) 관계'라고 말하기도 한다.

// 어떤 클래스 A가 다른 클래스 B를 상속받으면, 다음과 같은 일들이 가능해진다.
// - 자식 클래스 A를 통해 부모 클래스 B의 정적 메소드와 정적 속성을 사용할 수 있다.
// - 부모 클래스 B의 인스턴스 메소드와 인스턴스 속성을 자식 클래스 A의 인스턴스에서 사용할 수 있다.
{
  class Parent {
    static staticProp = 'staticProp';
    static staticMethod() {
      return 'I\'m a static method.';
    }
    instanceProp = 'instanceProp';
    instanceMethod() {
      return 'I\'m a instance method.';
    }
  }
  
  class Child extends Parent {}
  
  console.log(Child.staticProp);
  console.log(Child.staticMethod());
  
  const c = new Child();
  console.log(c.instanceProp);
  console.log(c.instanceMethod());
}

// 자식 클래스에서 부모 클래스 의 정적 속성과 인스턴스 속석에 접근할 수 있었다.
// 하지만 자식 클래스에 같은 이름의 속성을 정의한 경우 문제가 생긴다.
{
  class Melon {
    getColor() {
      return '제 색깔은 초록색입니다.';
    }
  }

  class WaterMelon extends Melon {
    getColor() {
      return '속은 빨강색입니다.';
    }
  }

  const waterMelon = new WaterMelon();
  console.log(waterMelon.getColor());
}

// 이런 경우에, super 키워드를 통해 부모 클래스의 메소드에 직접 접근할 수 있다.
{
  class Melon {
    getColor() {
      return '제 색깔은 초록색 입니다.';
    }
  }

  class WaterMelon extends Melon {
    getColor() {
      return super.getColor() + ' 하지만 속은 빨간색 입니다.';
    }
  }

  const waterMelon = new WaterMelon();
  console.log(waterMelon.getColor());
}

// super 키워드의 동작 방식은 다음과 같다.
// - 생성자 내부에서 super를 함수처럼 호출하면, 부모 클래스의 생성자가 호출된다.
// - 정적 메소드 내부에서는 super.prop과 같이 써서 부모 클래스의 prop 정적 속성에 접근할 수 있다.
// - 인스턴스 메소드 내부에서는 super.prop과 같이 써서 부모 클래스의 prop 인스턴스 속성에 접근할 수 있다.

{
  class Person {
    constructor({name, age}) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      return `제 이름은 ${this.name}입니다.`;
    }
  }

  class Student extends Person {
    constructor({grade, ...rest}) {
      // 부모 클래스의 생성자를 호출할 수 있다.
      super(rest);
      this.grade = grade;
    }
    introduce() {
      // 부모 클래스의 `introduce` 메소드를 호출할 수 있다.
      return super.introduce() + ` 저는 ${this.grade}학년입니다.`;
    }
  }
  const s = new Student({grade: 3, name: 'bomi', age: 19});
  console.log(s.introduce());
}