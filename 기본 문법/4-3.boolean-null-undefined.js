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