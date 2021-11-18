'use strict';

// Object

// Object Literal
// 객체는 한꺼번에 여러 값을 담을 수 있는 container과 같은 자료구조(data structure)이다.
// 객체 안에는 이름-값 쌍(name-value pair)이 저장되는데, 이를 객체의 속성(property)라고 합니다. - 중괄호 안에 이름-값 쌍을 적어주면 된다.

{
  const person = {
    name: '도보미', // 속성 이름 - 'name', 속성 값 - '도보미'
    age: 19, // 속성 이름 - 'age', 속성 값 - '19'
    'languages': ['korean', 'English'], // 속성 이름 - 'languages', 속성 값 - '배열'
    '한국 나이': 20 // 속성 이름 - '한국 나이', 속성 값 - '20'
  };
}

// 위에서 person 변수에 할당된 객체에는 네 개의 속성이 저장되었습니다. 'languages'와 '한국 나이'와 같이 속성 이름 부분에 문자열을 써도 상관없지만, '한국 나이'에 들어간 공백과 같이 식별자에 허용되지 않는 문자가 들어간 속성 이름을 정의할 때는 반드시 문자열 표기를 사용해야한다.
{
  const name = '도보미'

  const person = {
    name: name,
    age: 19,
    // ...
  };
  console.log(person);
}

// 위 코드를 아래와 같이 줄여 쓸 수도 있습니다.
{
  const name = '도보미'

  const person = {
    name, // `name: name`과 똑같이 동작합니다.
    age: 19,
    // ...
  };
  console.log(person);
}

// 아래와 같이 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것도 가능
{
  const propName = 'prop';

  const obj = {
    [propName]: 1
  };
  console.log(`obj: ${obj.prop}`);
}


console.group('점 표기법, 대괄호 표기법');
// 점 표기법, 대괄호 표기법
// 속성 접근자(property accessor)를 이용해 이미 생성된 객체의 속성을 지정해줄 수도 있다.
{
  const person = {}; // 빈 객체

  // 점 표기법 (Dot notaiton)
  person.name = '도보미';
  person.age = 19;
  person.languages = ['Korean', 'English'];
  
  // 객체 리터럴을 이요해 빈 객체를 생성해 준 뒤, 점 표기법을 통해 속성을 갱신해주었다. 그러나 JS에서 식별자로 허용되지 않는 문자가 들어간 속성 이름을 사용해야 하는 경우에는 반드시 대괄호 표기법을 사용해야한다.
  
  // 대괄호 표기법(Bracket notation)
  person['한국 나이'] = 20;
}
// NOTE! - 위와 같은 경우가 아니라면, 주로 점 표기법이 많이 사용되는 편이다.
console.groupEnd('점 표기법, 대괄호 표기법');


console.group('객체 다루기');
// 객체 다루기
// 속성 접근자, delete연산자, in여산자 등을 이용해서 객체에 대한 정보를 읽고 쓸 수 있다.

{
  const person = {
    name: '도보미',
    age: 19,
    languages: ['Korean', 'English']
  };

  // 속성 읽기
  console.log(person.name);
  console.log(person.age);
  console.log(person.languages[0]);

  // 속성 쓰기
  person.name = '임진주';
  person.age = 20;

  // 새 속성 추가하기
  person.address = '서울특별시 강남구 신사동';
  console.log(person.address);

  // 속성 삭제하기
  delete person.address;
  console.log(person.address);

  // 속성이 객체에 존재하는지 확인하기
  'name' in person; // true
  'phoneNumber' in person; // false
  console.log(`name in person: ${'name' in person}`);
  console.log(`phoneNumber in person: ${'phoneNumber' in person}`);
}
console.groupEnd('객체 다루기');


console.group('메소드 (Method)');
// 메소드 (Method)
// 객체의 속성값으로 함수를 지정할 수도 있다.
{
  const person = {
    greet: function() {
      return 'hello';
    }
  };
  console.log(`person: ${person.greet()}`);
}

// 어떤 객체의 속성으로 접근해서 사용하는 함수를 메소드(method)라고 부른다.
{
  // 위 예제와 완전히 똑같이 동작한다.
  const person = {
    greet() {
      return 'hello';
    }
  };
  console.log(`person.greet: ${person.greet()}`);
}
console.groupEnd('메소드 (Method)');


console.group('this');
// this
// 다른 함수들과 달리 '메소드'라는 특별한 이름을 사용하는 이유는, 메소드가 다른 함수들과는 다르게 특별히 취급되기 때문이다. this 키워드를 사용하면, 메소드 호출 시에 해당 메소드를 갖고 있는 객체에 접근할 수 있다.
{
  const person = {
    name: '도보미',
    age: 19,
    introduce() {
      // `this`를 사용해서 객체의 속성에 접근함
      return `안녕하세요, 제 이름은 ${this.name}입니다. 제 나이는 ${this.age}살 입니다.`
    },
    getOlder() {
      // `this`를 사용해서 객체의 속성을 갱신함
      this.age++;
    }
  };

  console.log(`person.introduce: ${person.introduce()}`);
  console.log(`person.getOlder: ${person.getOlder()}`);
  console.log(`person.introduce: ${person.introduce()}`);
}

// 메소드를 사용하면, 데이터와 그 데이터와 관련된 동작을 객체라는 하나의 단위로 묶어서 다룰 수 있다. 이것이 함수 대신 메소드를 사용하는 핵심적인 이유다.
// function 키워드를 통해 정의된 함수 내부의 this 키워드가 실제로 무엇을 가리킬 것인가는, 메소드가 어떻게 정의되는가에 의해 결정되는 것이 아니라 메소드가 어떻게 사용되는가에 의해 결정된다.
{
  function introduce() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
  const person1 = {
    name: '도보미',
    introduce
  }

  const person2 = {
    name: '임진주',
    introduce
  };

  console.log(person1.introduce());
  console.log(person2.introduce());
}

// introduce라는 함수가 객체 외부에서 정의되었고, person1과 person2에서 재사용되었는데도 불구하고 메소드가 잘 동작했다. 즉, 같은 함수임에도 어떤 객체의 메소드로 사용되는냐에 따라 메소드 내부의 this가 가리키는 객체가 달라질 수 있다.

// 화살표 함수는 this 키워드를 전혀 다르게 취급하기 때문에 위와 같은 방식으로 사용될 수 없다!
console.groupEnd('this');


console.group('프로토타입 (Prototype)');
// 프로토타입 (Prototype)

// 사람을 나타내는 객체를 생성하는 팩토리 함수
{
  function personFactory(name) {
    return {
      name,
      introduce: function() {
        return `안녕하세요, 제 이름은 ${this.name}입니다.`;
      }
    };
  }
  
  const people = [];

  for(let i = 0; i < 1000; i++) {
    people.push(personFactory('도보미'))
  }
  console.log(people[0].introduce === people[1].introduce);
}

// JS에서는 이렇게 객체 간에 공유되어야하는 속성과 메소드를, 프로토타입(prototype)이라는 기능을 이용해서 효율적으로 저장할 수 있다. 어떤 객체에 프로토타입을 지정하면, 프로토타입의 속성을 해당 객체에서 재사용할 수 있다.
// 객체의 프로토타입을 지정하는 방법에는 여러 가지가 있는데, 가장 쉬운 방법은 Object.create 함수를 이용하는 것이다.

{
  const personPrototype = {
    introduce: function() {
      return `안녕하세요, 제 이름은 ${this.name}입니다.`
    }
  };

  const person1 = Object.create(personPrototype);
  console.log(person1.name = '도보미');

  const person2 = Object.create(personPrototype);
  console.log(person2.name = '임진주');

  console.log(person1.introduce());
  console.log(person2.introduce());

  console.log(person1.introduce === person2.introduce);
}
// 프로토타입 상속(prototype inheritance)는 프로토타입 기능을 이용해 한 객체에서 다른 객체의 기능을 가져와 사용하는 것
// personPrototype은 person1의 프로토타입이다. person1 객체는 personPrototype객체를 상속받았다.고 표현한다.
console.groupEnd('프로토타입 (Prototype)');


console.group('생성자 (Constructor)');
// new 키워드가 붙었다는 것 말고는 함수 호출 문법과 비슷하게 생겼지만 사실은 object는 함수이다. 이렇게 객체를 만들 때 new 키워드와 함께 사용하는 함수를 가지고 생성자(constructor)라고 부른다.
{
  const obj = new Object();
  console.log(`typeof Object: ${typeof Object}`);
}

//생성자 정의하기
// JS에서는 Object 뿐만아니라, 내장된 많은 생성자들이 있고, 심지어 프로그래머가 직접 생성자를 만들 수도 있다.
{
  // 생성자 정의
  function Person(name) {
    this.name = name;
  }
  
  // 생성자를 통한 객체 생성
  const person1 = new Person('도보미');

// 인스턴스 (Instance)
// 생성자를 통해 생성된 객체를 그 생성자의 인스턴스(instance)라고 한다. 위의 예제에서는 person1이 Person의 인스턴스 이다. instanceof 연산자를 사용하면, 객체가 특정 생성자의 인스턴스가 맞는지 확인할 수 있다.

  console.log(`instanceof: ${person1 instanceof Person}`);
  
  // 깨체 리터럴을 통해 생성된 객체는 Object의 인스턴스이다.
  const obj = {};
  console.log(`instanceof: ${obj instanceof Object}`);

// 생성자와 프로토타입
// 생성자를 통해 만들어낸 객체의 프로토타입에는 생성자의 prototyp 속성에 저장되어 있는 객체가 자동으로 지정된다.

  console.log(Object.getPrototypeOf(person1) === Person.prototype);
  // 이때, Person.prototype에 객체를 저장한 적이 없고, Person은 함수인데도 불구하고 속성을 갖는 이유는 함수도 특별한 형태의 객체이기 때문이다.
  // JS에서는 function 구문을 통해 함수를 정의할 때 함수의 prototype 속성에 객체가 자동으로 생성되어 저장되기 때문
} {
  function Person() {
    // ...
  }
  console.log(typeof Person.prototype);
}

// constructor
// 생성자의 prototype속성에 자동 생성되는 객체에는 constructor라는 특별한 속성이 들어있다. 이 속성에는 생성자 자신이 저장된다.

{
  function Person() {
    // ...
  }
  console.log(Person.prototype.constructor === Person);
}

// 이를 통해, 어떤 객체가 어떤 생성자로부터 생성되었는지를 constructor 속성을 통해 알아낼 수 있다.
{
  function Person() {
    // ...
  }
  const person = new Person();
  console.log(person.constructor === Person);
}

// 팩토리 함수의 재작성
{
  // 사람을 나타내는 객체를 생성하는 팩토리 함수
  function Person(name) {
    this.name = name;
  }
  Person.prototype.introduce = function() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }

  const person = new Person('도보미');
  console.log(`person.introduce: ${person.introduce()}`);

console.groupEnd('생성자 (Constructor)');

console.group('정적 메소드(Static Method)');
// 정적 메소드(static method) - 생성자의 속성에 직접 지정된 메소드
// Number.isNaN, Object.getPrototypeOf 등의 함수들은 모두 정적 메소드이다.
// 정적 메소드는 특정 인스턴스에 대한 작업이 아니라, 해당 생성자와 관련된 일반적인 작업을 정의하고 싶을 때 사용 된다.

// 생성자의 속성에 함수를 직접 할당한다.

  Person.compareAge = function(person1, person2) {
    if (person1.age < person2.age) {
      return '첫 번째 사람의 나이가 더 많습니다.';
    } else if (person1.age === person2.age) {
      return '두 사람의 나이가 같습니다.';
    } else {
      return '두 번째 사람의 나이가 더 많습니다.';
    }
  }
}
console.groupEnd('정적 메소드(Static Method)');