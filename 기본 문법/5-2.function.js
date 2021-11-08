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
