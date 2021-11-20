// 'use strict';

// let, const 변수와 블록 스코프

{
  // let, const는 같은 이름을 갖는 변수의 재선언을 허용하지 않는다.
  // let foo = 1;
  // let foo = 2; // Duplicate declaration 'foo'
  // const foo = 3; // Duplicate declaration 'foo'

  // function func(param) {
  //   let param = 1; // Duplicate declaration 'param'
  // }
}
{
  // 변수가 선언되기 전에 참조하려고 하면 에러가 난다.
  // console.log(foo);
  // let foo = 1;
}
{
  // let과 const가 바로 블록 스코프(block scope)를 갖는다.
  // 블록 안에서 선언된 변수는 외부에서 접근할 수 없다.
  if (true) {
    let i = 0;
    // 내부에 있는 console.log는 작동한다.
  }
}
{
  // console.log(i); // ReferenceError: i is not defined
  // if, for, while, function등의 구문을 사용하면 블록이 형성되어, 그 안에서 let 또는 const를 통해 선언된 변수는 외부에서 접근할 수 없다.
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i); // ReferenceError: i is not defined
}
{
  let i = 0;
}
// console.log(i); // ReferenceError: i is not defined


// var 변수와 함수 스코프
{
  // var는 let과 유사하게, 값을 다시 대입할 수 있는 변수이다.
  // var는 함수의 매개변수와 유사하게, 함수 스코프를 갖는다.
  var foo = 1;
  foo = 2;
}
{
  // var를 통해 선언된 변수는 let, const로 선언된 변수와는 다른 특징을 갖는다.
  // var를 통한 변수 선언은 재선언을 허용한다.
  function func() {
    var foo = 1;
  }
  func();
  console.log(foo); // ReferenceError: foo is not defined
}
{
  // 이때, 아무런 에러도 발생하지 않는다.
  var foo = 1;
  var foo = 1;
  
  // 호이스팅(hoisting) - var로 선언된 변수는 내부적으로 함수 혹은 파일의 맨 위로 끌어올려지는 과정을 거치기 때문에, 같은 스코프 안에만 있다면 변수가 선언되기 전에도 해당 변수에 접근할 수 있는 현상
  // 단, 호이스팅이 일어난다고 하더라도, 변수의 선언만 위로 끌어올려질 뿐 값을 대입하는 과정은 코드의 순서에 맞게 이루어지기 때문에 대입이 일어나기 전에 변수의 값을 읽으면 undefined가 불러와지게 된다.
}
{
  // 마지막으로, var 변수는 함수 스코프를 갖는다. 즉, 함수가 아닌 블록에서 정의된 var 변수는 해당 블록 바깥에서도 유효할 수 있다.
  console.log(foo); // undefined
  var foo = 1;

  function func() {
    console.log(bar); // undefined
    var bar = 1;
  }
  func();
}
{
  // 이 특징에 주의하지 않으면, 중첩된 for 루프와 같이 블록이 중첩된 코드에서 의도치 않은 동작을 할 수 있다.
  for(var i = 0; i < 3; i++) {
    console.log('outer');
    // 위아래 두 `i`변수는 같은 함수 스코프에서 정의 된 같은 변수이다.
    // 바깥쪽 루프를 한 번 도는 동안, 안쪽 루프를 도느라 이미 `i`의 값이 3이 되어버렸다.
    for(var i = 0; i < 3; i++) {
      console.log('inner');
    }
  }
}

// NOTE!
// var는 코드의 문맥과 잘 맞지 않는 동작을 하기 때문에, 가능하면 쓰지 않는 편이 좋다.
// 변수를 선언할 때에는 const를 애용하고, 변수에 다른 값을 대입해야 할 일이 생기면 그 때에만 let을 사용하자
// 스코프 : const(블록 스코프) / let(블록 스코프) / var(함수 스코프)
// 재대입 : const(X) / let(O) / var(O)
// 재선언 : const(X) / let(X) / var(O)
// 호이스팅 : const(X) / let(X) / var(O)
// 사용 권장 : const > let >>> var


// 전역 변수 (Global variable)
// 전역 스코프는 스코프 체인의 가장 바깥쪽에 있는 스코프이다.
{
  // 다음 예제에서의 foo와 같이 전역 스코프에서 선언된 변수를 전역변수(global variable)이라한다.
  let foo; // `foo`는 전역 스코프에서 선언되었다.
  
  if(true) {
    let bar; // `bar`는 블록 스코프에서 선언되었다.
  }
}

// 전역 변수는 코드의 어떤 부분에서든 아무런 저한 없이 접근하고 조작할 수 있다.
// 전역 변수에 의존해서 프로그래밍을 하는 것은 어떤 프로그래밍 언어든지 굉장히 금기시되는 일이다.
// - 전역 변수에는 아무런 제한 없이 접근할 수 있으므로, 프로그램의 크기가 커짐에 따라 변수의 값이 어디서 어떻게 변경될지 예측이 힘듬.
// - 전역 변수를 통해 프로그램의 너무 많은 부분이 결합(coupling)된다.
// - 코드가 전혀 다른 곳에 위치한 부분에 의존하게 되므로, 전역 변수를 사용한 코드는 이해하지 어렵다.


// 전역 객체(Global Object)
// JS 구동 환경은 모두 전역 객체(Global Object)라는 특별한 객체를 갖고 있다.
// 전역 변수가 선언되면, 이 변수는 또한 전역 객체의 속성이 되어 전역 객체를 통해서 접근할 수 있게된다.
{
  let foo = 1;
  window.foo;
  console.log(window.foo);
}

// 전역 객체의 이름은 JavaScript 구동 환경마다 다르다.
// 구동환경 | 전역 객체 이름
// 웹 브라우저 | window
// 웹 워커 | self
// Node.js | global


// 참조 (Reference)
// JS에는 모두 일곱 가지의 타입이 존재한다.
// - boolean
// - Null
// - Undefined
// - Number
// - String
// - Symbol
// - Object

// Object타입 또는 객체를 제외하고는 모두 원시 타입(Primitive type)으로 불린다.
// 객체는 참조 타입(reference type)으로 불린다.
// 참조(Reference)란, 객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값이다.

{
  const obj = {prop: 1};
  obj.prop; // `obj`를 통해 역참조된 객체의 속성을 읽어왔다.
}

// 함수 호출
// 참조를 이용해 원본 객체의 내용을 변경할 수 있다. 원본이나, 복사된 참조나 같은 객체를 가리키기 때문이다.
{
  const obj = {};
  function addProp(o) {
    o.prop = 1;
  }
  // 변수 `obj`에 저장되어 있는 참조가 매개변수 `o`에 복사된다.
  addProp(obj);
  console.log(obj.prop);
}

// 객체의 같음(Equality)
{
  // {prop: 1} === {prop: 1}; // false
  [1, 2, 3] === [1, 2, 3]; // false
}
// 객체의 내용을 비교하는 것이 아니라 객체의 참조를 비교한다.
// 생성자난 리터럴을 이용해 객체를 생성하면, 객체는 매 번 새로 생성되어 각각 메모리의 다른 위치에 저장된다. 그래서 내용이 같아 보이는 객체일지라도 그에 대란 참조는 다르다.
{
  const obj1 = {};
  const obj2 = obj1;
  obj1 === obj2; // true
}
// 하지만 두 참조가 정말로 같은 객체를 가리키고 있다면 등호 연산자는 true를 반환한다.

// 객체에 대한 비교를 하는 코드를 짠다면, 객체의 내용을 비교하려고 하는 것인지, 또는 객체의 참조를 비교하려고 하는 것인지 꼭 생각해보자.
// 객체의 내용을 통해 비교하고 싶다면, 깊은 비교 기능을 지원하는 라이브러리를 이용하거나, 정확히 어떤 내용을 비교하고 싶은지를 가지고 함수 혹은 메소드를 작성 후 이용하자.
{
  // 계정 관리 시스템에서는, 사용자의 `아이디`가 같아면 같은 사용자라고 볼 수 있다.
  function User(id) {
    this.id = id;
  }
  User.prototype.isEqual = function(other) {
    return this.id === other.id;
  }

  const john1 = new User('john');
  const john2 = new User('john');

  console.log('john1 === john2', john1 === john2); 
  console.log('john1.isEqual(john2)', john1.isEqual(john2)); 
}


// 불변성(Immutability)
// 원시 타입의 값 자체 내용을 변경할 수 있는 방법은 없다. -> 이런 성질을 불변셩(Immutability)라고하며, 'JS의 원시 값은 불변(immutable)이다'라고 한다.

{
  // ex. 문자열을 변형하는 메소드는 모두 기존 문자열의 내용을 바꾸는 것이 아니라 새 문자열을 반환한다. (다른 원시 메소드들도 마찬가지!)
  const str = 'Javascript string is immutable!';

  console.log(`str.replace('!', '?'):\n${str.replace('!', '?')}`);
  console.log(`str.slice(0, 10):\n${str.slice(0, 10)}`);
  console.log(`str.toUpperCase():\n${str.toUpperCase()}`);
  console.log(`str:\n${str}`);
}

// 변수에 저장된 원시 타입의 값을 바꾸려면, 오직 변수에 다른 값을 대입하는 방법밖에 없다.
// 원시 타입을 인수로 해서 함수를 호출할 때에는, 원본이 변경될지도 모른다는 걱정을 할 필요가 없다.
{
  let str = 'Javascript string is immutable!';

  function func(s) {
    // 여기서 무슨 짓을 해도, `str`에 새 값을 대입하디 않는 한 원본을 변경할 수 없다.
  }
  func(str);
}

// 객체의 경우, 객체 자체의 내용을 변경할 수 있는 방법은 많다. -> 객체는 가변(mutabele)이다.
// 객체의 가변성 때문에 어려움을 겪고 있다면, 두 가지 해결책을 시도해볼 수 있다.

// Object.freeze - 객체를 얼려서 속서으이 추가/변경/삭제를 막는다.
// 다만 Object.freeze를 호출한다고 해서 객체 안에 있는 개체까지 얼려버리지 않으므로, 중첩된 객체에는 Object.freeze를 사용하기가 조금 까다롭다. - 대체로 편의 성이 떨어짐
{
  const obj = {prop: 1};

  Object.freeze(obj);

  // 모두 무시됩니다.
  obj.prop = 2;
  obj.newProp = 3;
  delete obj.prop;

  console.log(obj);
}

// Immutable.js같은 라이브러리 사용
// Object.freeze처럼 객체를 정말로 얼려버리지 않지만, 객체를 마치 불변인 것처럼 다룰 수 있는 방법을 제공한다.
// 메소드를 통해 조금이라도 변경되면 아예 새로운 객체를 반환 -> 내용이 변경되었는지 확인해주는 작업을 해줌.
{
  // 특히 React 생태계에서는 Immutable.js가 널리 사용된다.
  // Immutable.js에서 제공하는 List를 활용한 예제이다.
  // import {List} from 'immutable';

  //Immutable.js에서 제공하는 `List`는 배열과 유사하지만, 불변인 것처럼 다룰 수 있는 자료구조이다.
  // const list = List.of(1, 2, 3);
  // const newList = list.push(4); // 새 List 인스턴스를 반환

  // 내용이 달라지면, 참조도 달라진다.
  // console.log('list === newList', list === newList); 
}

// const와 불변성을 잘 구분해야한다. const는 '한 번 초기화된 변수에 다른 값을 대입할 수 없다'는 제약을 걸어주는 것이고, 불변성은 '값 자체가 변하지 않는다'는 것이다.
{
  const obj = {};
  obj.a = 1; // 객체는 가변이므로 내용을 바꿀 수 있다.
  // obj = 1; // 에러! `obj`는 `const`로 선언되었으므로 다른 값을 대입할 수 없다.
}


// 래퍼 객체 (Wrapper Object)
// 원시 타입의 값은 객체가 아님에도 불구하고, 원시 타입에 점 표기법을 써서 메소드를 호출하거나 속성을 읽어 올 수 있는데, 이는 JS가 래퍼 객체(Wrapper Object)라는 기능을 제공하기 때문
// 원시 타입의 값에 대해 속성을 읽으려 시도하면, 그 값은 그 순간에만 객체로 변환되어 마치 객체인 것처럼 동작한다.
{
  const s = 'hello';
  console.log('s.toUpperCase():f', s.toUpperCase());
  console.log('s.length:', s.length);

  const n = 1.2345;
  console.log('n.toFixed(2):', n.toFixed(2));

  const b = true;
  console.log('b.toString():', b.toString());
}

// 아래는 래퍼 객체를 생성시키기 위해 사용되는 생성자들의 목록이다.
// - String
// - Number
// - Boolean
// - Symbol
// 위 생성자들을 애용해 직접 객체를 생성할 수도 있지만 직접해주지 않아도 원시 타입의 값에 대해 메소드를 호출하거나 속성을 읽을 수 있기 때문에 그런 경우는 잘 없다.

{
  const stringObj = new String('hello');
  // 생성자의 인수로 원시 타입의 값을 넘겨주면 된다.

  console.log('stringObj.toUpperCase():', stringObj.toUpperCase());
  console.log('stringObj.length:', stringObj.length);

  const string = stringObj.valueOf();
  //다시 원시타입의 값으로 되돌리기 위해 `valueOf` 메소드를 호출한다.
}