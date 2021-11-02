// 1. 'Use strict';
// added in ES5
// use this for Valina Javascript.
// 바닐라 자바스크립트를 사용할 때는 써주는 게 좋고,
// typescript를 사용할 때는 써줄 필요가 없다.
// why? 비정상적인 문법들을 잡아주는 역할을 한다.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'bomi';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 끌어 올려주다. : 어디에 선언 했느냐에 상관없이, 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variavble needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol - 더이상 작은 단위로 나눠질 수 없는 한가지 아이템
// object, box container - 싱글 아이템들을 여러개 묶어서 한 단위, 한 박스로 관리할 수 있게 해주는 것
// function, first-class function - 자바스크립트에서는 함수도 데이터 타입으로 간주한다.

const count =17; // integer
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);