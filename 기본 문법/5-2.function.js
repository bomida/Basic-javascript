'use strict';

// 함수의 구성 요소
function add(x, y) {
  const result =  x + y;
  return result;
}
add(2, 3); // 5 -> 함수 호출
// 괄호 안의 x, y - 매개변수 (parameter)
// return 뒤에 오는 값 -  반환값(return value)
// 함수를 정의했다면, 함수 이름 뒤에 괄호를 붙여 이 함수를 실행시킬 수 있고, 이를 함수의 호출(function call)이라한다.
// 2, 3 - 인수(argument)

// 실행 순서
// 1 - 함수 정의
function add (x, y) {
  return x + y; // 3 - 함수 실행
}
// 2 - 함수 호출
const result = add(2, 3);
// 4- 나머지 코드 실행
console.log(result);


// 매개변수와 인수
// 매개변수는 변수의 일종으로, 함수 호출 시마다 인수가 매개변수에 대입된다. (x-2, y-3)
// !! 매개변수는 바깥에서 선언된 변수와는 관계없는 독립적인 변수다.
function reassign(x) {
  x = 2;
  return x;
}
const y = 1;
const result2 = reassign(y);
console.log(y); // 1
console.log(result2); // 2
// 매개변수는 let으로 선언한 변수와 비슷하게 동작하지만 미묘하게 다른 점이 있다.

// 반환값
// return 구문은 함수의 반환값을 결정.
// return 키워드 바로 다음에 오는 값이 함수 호출의 결과값으로 반환되며, 반환되는 즉시 함수 실행이 끝남.
function add(x, y) {
  return x + y;
  console.log('이 부분은 실행되지 않습니다.');
}
add(1, 2); // 3
// 3외에 따로 출력되는 내용이 없음.

// 다음과 같이 return 뒤에 아무 값도 써주지 않거나, 아예 return 구문을 쓰지 않으면 함수는 undefined를 반환.
function returnUndefined() {
  return;
}
returnUndefined(); // undefined

function noReturn() {}
noReturn(); // undefined


// 스코프 (Scope)
function add(x, y) { // 변수 `x`와 `y`가 정의됨
  return x + y;
}
add(2, 3);
// console.log(x); // error!!
// 매개변수와 같이 함수 안에서 정의된 변수는 함수 바깥에서는 접근할 수 없기 때문에 함수 안에서만 사용할 수 있다.
// 변수는 코드의 일정 범위 안에서만 유효하다는 성질이 있는 것.
// 스코프(scope) - '특정 변수'가 유효한 코드 상의 유효 범위

// 스코프 연쇄 (Scope Chain)
// 함수 내부 코드에서 매개변수 혹은 그 함수 안에서 정의된 변수만 사용할 수 있는 것은 아님.
const five = 5;
function add5(x) {
  return x + five; // 바깥 스코프의 'five' 변수에 접근
}
add5(3); // 8

// 함수가 여러 겹 중첩(nested)되어 있다고 하더라도 가능함.
const four = 4;
function add4(x) {
  function add(y) {
    return x + y;
  }
  return add(four);
}
console.log(add4(3)); // 7
// 식별자와 같은 이름을 갖는 변수를 현재 스코프에서 찾아본 뒤, 변수가 존재하면 그것을 그대로 사용.
// 만약 현재 스코프에서 변수를 찾지 못하면 바로 바깥 스코프에서 변수를 찾보고 없으면 또 올라가서 찾아보는 과정을 되풀이한다. - 이러한 과정을 스코프 연쇄라 한다.
// 가장 바깥에 있는 스코프를 최상위 스코프(top-level scope) or 전역 스코프(global scope) - 위 코드 상에서는 four가 정의된 스코프가 전역 스코프임.

// 변수 가리기 (Varialbe Shadowing)
// 단일 스코프에서는 같은 이름을 갖는 서로 다른 변수가 존재할 수 없다. 하지만 스코프 연쇄가 일어나면 이야기가 달라진다.
const x = 3;
function add5(x) { //'x'라는 변수가 다시 정의됨
  function add(x, y) { // 'x'라는 변수가 다시 정의됨
    return x + y;
  }
  return add(x, 5);
}
console.log(add5(x));
// 바깥쪽 스코프에 존재하는 변수과 같은 이름을 같은 변수를 안쪽 스코프에서 정의 할 수 있다.
// 안쪽 스코프에서는 바깥쪽 스코프에 있는 이름이 무시됨. - 변수 가리기(Variable Shadowing)

// 어휘적 스코핑(Lexical Scoping)
// 스코프는 코드가 작성된 구조에 의해서 결정되는 것이지, 함수 호출의 형태에 의해 결정되는 것이 아님.
function add6(x) {
  const six = 6;
  return add(x);
}
add6(3); // 9

function add(x) {
  return six + x; // ReferenceError: Can't find variable: five
}