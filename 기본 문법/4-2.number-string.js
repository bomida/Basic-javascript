'use strict';
// *********************Number*********************
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

let randomNum = Math.random()*10;
let trunc = Math.trunc(randomNum);
console.log(trunc);

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

// 난수 생성함수(범위지정)
function makeRandom(min, max){
  let randNum = Math.floor(Math.random()*(max-min+1)) + min;
  return randNum;
}

console.log(makeRandom(1,6));

// number 타입의 메소드
// numeber 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있다.
// Javascript가 래퍼 객체(Wrapper object)라는 기능을 제공하기 때문
(12345).toString(); // '12345' - 숫자를 문자열로 변경
(12345).toLocaleString(); // '12,345' - 숫자를 천 단위로 끊기
console.log((1.2345).toFixed(2)); // '1.23' - 두번째 소수점 까지 보이기

// *********************String*********************
'hello' === "hello"; // true

// 템플릿 리터럴(Template Literal)
`hello world`

const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}`;
console.log(sentence);

// 문자열과 연산자
// 문자열 연결하기
'hello' + 'world'; // 'helloworld'

// 등호 비교
'hello' === 'hello'; // true
'hello' !== 'hello'; // false

// 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
'a' < 'b'; // true
'aaa' < 'abc'; // true
'a' < 'Z'; // false
'한글' < '한국어'; // false
'2' < '10'; // false

// 문자열을 배열로 바꾸기
[...'hello']; // ['h', 'e', 'l', 'l', 'o']

// 유니코드 코드포인트 비교는 사전순 비교가 아니므로 주의해야 함.
// 사전순 비교를 하려면 localCompare 메소드를 사용

'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
'b'.localeCompare('z'); // -1
'b'.localeCompare('Z'); // -1
'가나다'.localeCompare('마바사'); // -1

// 속성 및 메소드
// number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있다.

// 문자열의 길이 알아내기
'hello'.length; // 5

// 여러 문자열 연결하기
console.log('hello'.concat(' fun', ' javascript')); // 'hellojavascript'

// 특정 문자열이 포함되어 있는지 확인하기
'hello javascript'.includes('hello'); // true
'hello javascript'.startsWith('he'); // true
'hello javascript'.endsWith('ript'); // true
'hello javascript'.indexOf('java'); // 6 - 0부터 카운트

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello javascript'.replace('java', 'type'); // 'hello typescript'

// 문자열의 일부를 잘라낸 새 문자열 생성하기
'hello'.slice(0, 2); // - begin ~ end 전까지의 배열 자르기

// 좌우 공백문자를 제거한 새 문자열 생성하기
' hello '.trim(); // 'hello'
' hello '.trimLeft(); // 'hello '
' hello '.trimRight(); // ' hello'

// 좌우 공백문자를 추가한 새 문자열 생성하기
console.log('hello'.padStart(8, '*')); // ***hello - 특정 문자열 왼쪽에 새로운 문자열의 길이에 대한 차이 값으로 채워 넣을 문자열를 지정
console.log('hello'.padEnd(8, '*')); // hello*** - 특정 문자열 오른쪽에 새로운 문자열을 지정

// 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기
'Hello Javascript'.toLowerCase(); // 'hello javascript'
'Hello Javascript'.toUpperCase(); //  'HELLO JAVASCRIPT'





// 출처
// Number-type https://helloworldjavascript.net/pages/130-number.html#number-타입의-메소드
// String-type https://helloworldjavascript.net/pages/140-string.html