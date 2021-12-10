// 1. 'Use strict';
// added in ES5
// use this for Valina Javascript.
// 바닐라 자바스크립트를 사용할 때는 써주는 게 좋고,
// typescript를 사용할 때는 써줄 필요가 없다.
// why? 비정상적인 문법들을 잡아주는 역할을 한다.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'c';
{
  let name = 'bomi';
  console.log(name); // bomi
  name = 'hello';
  console.log(name); // hello
  console.log(globalName); // c
}
console.log(name); // nothing
console.log(globalName); // c

//let 변수를 대입하는 방법 
let eight;
eight = 8;
let seven = 7;
seven = 77;
seven = 777;

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 끌어 올려주다. : 어디에 선언 했느냐에 상관없이, 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope
console.log(age); //  undefined
age = 4;
console.log(age); // 4
var age;
{
  age = 4;
  var age;
}
console.log(age); // 4

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variavble needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// DO NOT use like this!
// const notAssigned;
// const assigned = 1;
// assigned = 2;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// let과 const 모두 한 번에 여러 개의 변수를 선언하는 문법을 지원합니다.
let one = 1, two = 2, nothing1;
const three = 3, four = 4;

// let과 const로 선언한 이름은 다시 선언될 수 없습니다.
// let seven = 7;
// let seven = 77;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol - 더이상 작은 단위로 나눠질 수 없는 한가지 아이템
// object, box container - 싱글 아이템들을 여러개 묶어서 한 단위, 한 박스로 관리할 수 있게 해주는 것
// function, first-class function - 자바스크립트에서는 함수도 데이터 타입으로 간주한다.

const count =17; // integer
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`); // value 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// value: hellobrendan, type: string
const helloBob = `h1 ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// console.log('value: ' + helloBob + ', type: ' + helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
// value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`);
// value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// value: null, type: object

//undefined
let x;
// let x = undefined
console.log(`value: ${x}, type: ${typeof x}`);
// value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); // vlaue: 4, type: number