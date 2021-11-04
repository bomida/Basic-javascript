'use strict';

// isNaN
// NaN은 JavaScript의 값들 중 유일하게 자기 자신과 같지 않은 값입니다.
// 따라서 어떤 값이 NaN인지 판별하기 위해서는 Number.isNaN 또는 Object.is 함수를 사용
0 / 0; // NaN
1 * 'hello'; // NaN

const thisIsNan = NaN;

// DO NOT
thisIsNan === NaN; // false

// Do
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true

// -0
//javascript에서 0과 -0은 별개의 값이지만, 비교 연산을 해보면 결과값이 true로 나옵니다.
0 === -0; // true
1 * -0; // -0
1 + -0; // 1

// Object.is 함수는 0과 -0을 다른 값으로 취급합니다.
Object.is(0, -0); // false

//그리고 0이 아닌 어떤 수를 0 혹은 -0으로 나눌 때에도 결과값이 다릅니다.
1 / 0; // Infinity
1 / -0; // -Infinity

// Infinity
// 어떤 값이 infinity인지 아닌지 판별하려면, Number.isFinite 메소드를 사용
Number.isFinite(1); // true
Number.isFinite(Infinity); // false
Number.isFinite('1'); // false
isFinite('1'); // true - `isFinite`는 문자열을 숫자로 변환합니다.

// parseInt, parseFloat
// String을 numeber 타입으로 바꾸기 위해 parseInt 혹은 parseFloat 함수를 사용

parseInt('123'); // 123
parseInt('110', 2); // 6
parseInt('Hello'); // NaN
// console.log(parseFloat('12.345'));

// const input = prompt('정수를 입력하세요.');
// const num = parseInt(input);
// if (Number.isNaN(num)) {
//   alert('정수가 아닙니다.');
// } else {
//   const result = num * 2;
//   alert(`${num}의 두 배는 ${result}입니다.`);
// }

// Math 객체

// 상수
Math.E // 자연상수 (2.71...)
Math.PI // 원주율 (3.14...)

// 삼각함수, 로그함수, 지수함수
Math.sin // 사인
Math.cos // 코사인
Math.tan // 탄젠트
Math.log // 밑을 자연상수로 하는 로그함수
Math.exp // 밑을 자연상수로 하는 지수함수
Math.sqrt // 제곱근

// 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
Math.abs // 절댓값
Math.ceil // 올림
Math.floor // 내림
Math.round // 반올림
Math.trunc // 소수점 아래 잘라내기

// 최대값, 최소값
Math.max
Math.min

// 랜덤
Math.random

// practice
console.log(Math.cos(Math.PI)); // -1
console.log(Math.log(Math.E)); // 1
Math.round(0.5); // 1
console.log(Math.random()*10); // 0 ~ 1 사이의 값이 임의로 변환됩니다.
Math. max(1, 2, 3, 4, 5); // 5

// number 타입의 메소드
// numeber 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있다.
// Javascript가 래퍼 객체(Wrapper object)라는 기능을 제공하기 때문
(12345).toString(); // '12345' - 숫자를 문자열로 변경
(12345).toLocaleString(); // '12,345' - 숫자를 천 단위로 끊기
console.log((1.2345).toFixed(2)); // '1.23' - 두번째 소수점 까지 보이기

// 출처 : https://helloworldjavascript.net/pages/130-number.html#number-타입의-메소드