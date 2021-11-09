'use strict';
// 제어 구문


// 조건문 (Conditional Statement)
// 경우에 따라 프로그램의 동작이 달라져야 할 때, 조건문을 통해 프로그램의 논리 구조를 표현할 수 있다.

// if ... else 구문
// if ... else 구문을 사용하면 조건에 따라 특정 영역의 코드를 실행시키거나 실행 시키지 않을 수 있다. (아래 코드 참조)
function roll() {
  return Math.ceil(Math.random()*6);
}

function game() {
  const result = roll();
  alert(`결과: ${result}`);
  if (result >= 4) {
    // 괄호 안의 조건을 만족하면, 즉 결과값이 true 이면
    // 이 영역의 코드가 실행된다.
    alert('당신이 이겼습니다!');
  } else {
    // 위 조건을 만족하지 않으면, 즉 결과값이 false 이면
    // 대신 이 영역의 코드가 실행된다.
    alert('당신이 졌습니다.');
  }
}
// game();

if (result === 6) {
  alert(`당신은 운이 좋군요`);
}