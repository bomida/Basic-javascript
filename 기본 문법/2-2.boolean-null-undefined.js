'use strict';

//boolean type
// boolean 타입에 해당하는 값은 true, false 두가지 밖에 없음.
// 이 값들을 '진리값'(참 or 거짓)이라고 부름.

1 < 2; // true
1 > 2; // true
3 === 3; // true
3 !== 3; // flase
Number.isFinite(Infinity); // false
Number.isNaN(NaN); // true
'hello'.includes('ll'); // true

// 논리 연산자

// 논리 부정 (logical NOT)
!true; // false
!false; // true

// 논리합 (logical OR)
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱 (logical AND)
true && true; // true
true && false; // false
false && false; // false
false && false; // false

// 할당 연산 (assignment operators), ES2021
// ||= 는 변수의 값이 true이면 아무 변화가 일어나지 않고 false이면 우항의 값이 변수에 할당
let x = false;
x ||= true; // true

// &&= 는 변수의 값이 false이면 아무 변화가 일어나지 않고 true이면 우항의 값이 변수에 할당
let y = true;
console.log(y &&= false); // false

// ||=와 &&=sms 각각 아래 연산과 같은 동작을 합니다.
x = x || true
y = y && false

// 삼항 연산자 (ternary operator)
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2) // 2

// let age = prompt('나이를 적으시오');
// let limit = age > 18;
// alert( limit ? 'beer' : 'juice');

// 논리 연산의 여러 가지 법칙
// a, b, c가 **모두 boolean 타입** 이라고 할 때,
// 다음 식의 결과값을 a, b, c의 값과 관계 없이 모두 true

// 이중 부정
// !!a === a;

// // 교환 법칙
// a || b === b || a;
// a && b === b && a;

// // 결합 법칙
// (a || b) || c === a || (b || c);
// (a && b) && c === a && (b && c);

// // 분배 법칙
// a || (b && c) === (a || b) && (a || c);
// a && (b || c) === (a && b) || (a && c);

// // 흡수 법칙
// a && (a || b) === a;
// a || (a && b) === a;

// // 드 모르간의 법칙
// !(a || b) === !a && !b;
// !(a && b) === !a || !b;

// // 그 밖에...
// a || true === true;
// a || false === a;
// a && true === a;
// a && false === false;

// a || !a === true;
// a && !a === false;

// a || a === a;
// a && a === a;

// truthy & falsy
// JS에서는 boolean 타입이 와야하는 자리에 다른 타입의 값이 와도 에러가 나지않고 실행됨.

if (1) {
  console.log('이 코드는 실행됩니다.');
}
if (0) {
  console.log('이 코드는 실행되지 않습니다.');
}

// JS에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy
// truthy와 falsy를 활용하면 짧은 코드를 작성할 수 있지만, 코드의 의미가 불분명해 지거나 논리적으로 놓치는 부분이 생길 수 있기 때문에 주의해서 사용
// false / null / undefined / 0 / NaN / ''

// 다른 타입의 값을 진리값으로 변환하기
// 어떤 값을 명시적으로 boolean 타입으로 변환해야 할 때가 있는데, 그 때에는 두가지 방법이 있다.
!!'hello'; // true
Boolean('hello'); // true

// 부정 연산자(!) 뒤의 값이 truthy면 false, falsy이면 true를 반환하는 성질을 이용해서 이중 부정을 통해 값을 boolean 타입으로 변환할 수 있다.


// Null and undefined
// JS에는 '없음'을 나타내는 값이 null과 undefined가 있습니다. 각각이 상요되는 목적와 장소가 다름

// 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 undefined를 반환
// let foo;
// foo // undefined

// const obj = {};
// obj.prop; // undefined

// null은 '객체가 없음'을 나타냄. 실제로 typeof연산을 해보면 아래와 같은 값을 반환
typeof null // 'object'
typeof undefined // 'undefined'

let foo; // 값을 대입한 적 없음
let bar = undefined; // 값을 대입함
foo; // undefined
bar; // undefined

let obj1 = {}; // 속성을 지정하지 않음
let obj2 = {prop: undefined}; // 속성을 지정함
obj1.prop; // undefined
obj2.prop; // undefined (??)

// 이렇게 하는 경우는 많지 않다.
// {
//   name: 'Seungha',
//   address: null
// }

// // 그냥 이렇게 하는 경우가 많다.
// {
//   name: 'Seungha'
// }

// // 어쨌든 이렇게 하지는 말자.
// {
//   name: 'Seungha',
//   address: undefined
// }

// Null Check
// 어떤 값이 null or undefined인지 확인하는 작업
// null이나 undefined는 어떤 변수에도, 어떤 속성에도 들어있을 수 있기 때문에 코드를 짤 때 값이 있는 경우와 없는 경우 (즉, null or undefined인 경우)를 모두 고려해야함

function printIfNotNull(input){
  if (input !== null && input !== undefined) {
    console.log(input);
  }
}

// 아래 세 개의 식은 완전히 같은 의미입니다.
input !== null && input !== undefined;
input !== null;
input !== undefined;

// 아래 세 개의 식은 완전히 같은 의미입니다.
input === null || input === undefined;
input == null;
input == undefined;

// === - strict equality comparison operator
// ==  - abstract equality comparison operator

null === undefined; // false
null == undefined; // true

null == 1; // false
null == 'hello'; // false
null == false; // false

undefined == 1; // false
undefined == 'hello'; // false
undefined == false; // false

