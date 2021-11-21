'use strict';

// JSON(Javascript Object Notation)은 웹의 세계에서 가장 맣이 사용되는 직렬화 형식이다.
{
  const json = {
    "key": "value",
    "arr": [1, 2, 3],
    "nullProp": null
  }
}

// JSON은 언어에 관계없이 사용할 수 있는 직렬화 형식이고, 실제로 많은 프로그래밍 언어들이 JSON관련 기능을 내장하고 있다.
// JS 역시 JSON 관련 기능을 내장하고 있다. 같은 이름의 JSON내장 객체의 메소드를 통해 직렬화와 역직렬화를 할 수 있다.
{
  // `JSON.stringify`로 직렬화를 할 수 있다.
  const stringify = JSON.stringify({
    key: 'value',
    arr: [1, 2, 3],
    nullProp: null,
    undefinedProp: undefined // 값이 `undefined`인 속성은 직렬화 과정에서 제외된다.
  }); // '{"key":"value","arr":[1,2,3],"nullProp":null}'
  console.log(stringify);

  // `JSON.parse`로 역직렬화를 할 수 있다.
  const parse = JSON.parse('{"key":"value","arr":[1,2,3],"nullProp":null}');
  console.log(parse);
}

// NOTE
// JSON을 직접 편집해야 할 때는 JSON이 JS가 아니라 사실에 주의하자.
// - 속성 이름은 꼭 쌍따움표를 둘러주어야 한다.
// - Map, Set, Date, Error, RegExp, Function, Promise와 같이 특별한 동작방식을 가지는 객체들을 제대로 표현할 수 없다.
// - undefined, NaN, Infinity와 같은 값을 표현할 수 없다.
// - 주석을 쓸 수 없다.


// Date
// JS에는 날짜와 시각을 다루기 위한 Date 생성자가 내장되어 있다.
// 협정 세계시(UTC) - 지구 상의 여러 지역에서는 시간와 일광 절약 시간제(DST)에 따라 서로 다른 시각을 사용한다. 
// 유닉스 시간 - Eposh시간 이라는 이름으로 불리기도하며 UTC 기준 1970년 1월 1일 0시 0분 0초부터 경과한 시간을 초 단위의 정수로 나타낸다.

// Date 객체의 생성
// Date 생성자는 아래와 같은 방법으로 사용할 수 있다.
// - new Date() : 현재 시각을 나타내는 Date 객체를 반환한다.
// - new Date(value) : value가 정수인 경우, 이를 밀리초 단위의 유닉스 시간으로 간주해서 이에 해당하는 Date 객체를 반환하고, value가 문자열인 경우, 이 문자열이 나타내는 Date객체를 반환한다.
// - new Date(year, month, day, hour, minutes, seconds, milliseconds) - 년, 월, 일, 시, 분, 초, 밀리초를 직접 입력해 Date 객체를 생성할 수도 있다. (월 이후의 인수는 생략이 가능하다.)

// 문자열로 변환하기
// Date객체가 나타내는 시각을 여러 가지 방법으로 문자열로 변환할 수 있다.
{
  const now = new Date();
  console.log(`now.toString():\n${now.toString()}`);
  console.log(`now.toLocaleString():\n${now.toLocaleString()}`);
  console.log(`now.toDateString():\n${now.toDateString()}`);
  console.log(`now.toTimeString():\n${now.toTimeString()}`);
  console.log(`now.toISOString():\n${now.toISOString()}`);
  console.log(`now.toUTCString():\n${now.toUTCString()}`);
}

// 시간 간격 측정하기
// -연산자를 사용해서 두 Date객체 사이의 시간 간격이 얼마나 되는지를 밀리초 단위로 측적할 수 있다.
{
  // const start = new Date();
  // alert('시간이 가고 있습니다...');
  // const end = new Date();
  // alert(`${end-start} 밀리초 만큼의 시간이 경과되었습니다.`);
}

// 라이브러리 사용하기
// JS에 내장되어 있는 Date 객체는 실제 서비스에서 사용하기엔 부족한 점이 많아 실무에서는 moment.js 또는 date-fns와 같은 별도 라이브러리를 사용하는 경우가 많다.
{
  // const moment = require("moment")
  // moment.locale('ko');

  // const now = moment();
  // console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // console.log(now.subtract(7, 'days').calendar());
  // console.log(moment("20120101", "YYYYMMDD").fromNow());
}


// Symbol
// Symbol 내장 함수를 통해 새 심볼을 생성할 수 있다.
{
  const sym = Symbol();
  console.log(typeof sym);
  console.log(sym);
}

// 어떤 문자열이 인수열에 들어오는 지와 상관없이 새로 생성된 심볼은 다른 모든 심볼과 다른 것으로 취급된다.
{
  console.log(Symbol('my symbol'));
  console.log(Symbol('my symbol') === Symbol('my symbol'));
  console.log(Symbol() === Symbol());
}

// 심볼은 객체의 속성 키로 사용하기 위해 만들어졌다.
{
  const mySymbol = Symbol('my symbol');
  const obj = {
    [mySymbol]: 'hello'
  };
  console.log(obj);
}

// 내장 심볼(well-known symbol)을 객체의 속성 키로 사용하면, 특정 상황에서의 객체의 동작 방식을 마음대로 바꿀 수 있다.
// - Symbol.isConcatSpreadable : 객체가 Array.prototype.concat 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
// - Symbol.iterator : 객체가 for...of 구문을 통해 사용될 때의 동작 방식을 바꿉니다.
// - Symbol.match : 객체가 String.prototype.match 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
// - Symbol.replace : 객체가 String.prototype.replace 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
// - Symbol.search : 객체가 String.prototype.search 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
// - Symbol.species : Array.prototype을 상속받은 객체에 대해 Array.prototype.map 등의 메소드를 호출할 때, 반환되는 객체의 생성자를 지정합니다.
// - Symbol.split : 객체가 String.prototype.split 메소드의 인수로 넘겨질 때의 동작을 바꿉니다.
// - Symbol.toPrimitive : 객체가 원시 타입의 값으로 변환되어야 할 때, 정확이 어떤 값으로 변환되어야 하는 지를 지정합니다.
// - Symbol.toStringTag : Object.prototype.toString() 메소드를 객체에 대해 직접 호출할 때의 동작을 바꿉니다.
// - Symbol.unscopable : with 블록 안에서 어떤 속성을 참조할 수 있는 지를 지정합니다.


// Map
// Map 생성자는 객체와 유사하게 키-값 쌍(key-value pair)을 저장할 수 있는 새로운 자료구조를 제공한다.
{
  const m = new Map();
  
  m.set('hello', 'world');
  console.log('m.get("hello"):', m.get('hello'));
  console.log('m.has("hello")', m.has("hello"));

  m.delete('hello');
  console.log('m.get("hello"):', m.get('hello'));
  console.log('m.has("hello")', m.has("hello"));
}
// Map으로 생성된 객체는, 일반적인 객체와 비교했을 때 아래와 같은 차이점을 갖는다.
// Map객체는 데이터의 추가/삭제가 빈번하게 일어나는 경우 일반적인 객체보다 훨시 빠르게 동작한다는 장점이 있는 반면, JSON등으로 직렬화 하기 어렵다는 특징이 있다.
// - 객체는 속성 접근자(property accessor)문법을 통해서, Map은 메소드를 통해서 내부의 데이터를 조작한다
// - 문자열과 심볼만이 객체의 속성 키가 될 수 있는 반면, 어떤 값이라도 Map 객체의 키로 사용될 수 있다.
// - 객체의 속성을 확인할 때는 프로토타입 체인을 확인하는 과정이 필요하지만, Map객체 안에 들어있는 데이터는 프로토타입의 영향을 받지 않는다.
// - Map객체의 size속성을 통해 내부에 들어있는 데이터의 개수를 쉽게 알 수 있다.


// Set
// Set생성자는 집합 형태의 자료구조를 제공한다. Set객체 내부에 이미 존재하는 데이터를 추가하려고 하면, 이는 무시된다.
// 배열과 유사한 형태의 자료구조가 필요하지만 순서가 중요하지 않거나 중복된 데이터의 저장을 허용하지 않아야할 경우 Set을 사용한다.
{
  const s = new Set();
  s.add(1);
  s.add(1);
  s.add(2);
  console.log(s);
}