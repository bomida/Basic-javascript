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

// 다음과 같이 else가 필요 없는 경우에는 else를 생략할 수 있다.
// if (result === 6) {
//   alert(`당신은 운이 좋군요`);
// };
// if (result === 6) alert(`당신은 운이 좋군요`);

// if...else 구문의 중첩
// 만약 세 개 이상의 경우의 수를 if...else를 통해 표현하려면, if...else를 중첩 시키면 된다.
// 위 코드를 가지고 주사위를 굴려 3또는 4가 나오면 비긴 것으로 게임을 고쳐보겠습니다.
function roll() {
  return Math.ceil(Math.random()*6);
}

function game() {
  const result = roll();
  alert(`결과: ${result}`);

  if (result >= 5) {
    alert(`당신이 이겼습니다.`);
  } else {
    // 중첩된 if...else 구문
    if (result >= 3) {
      alert(`비겼습니다.`);
    } else {
      alert(`당신이 졌습니다.`);
    }
  }
}
// game();

// 위와 같이 if...else 구문이 단순히 중첩된 경우라면 바깥쪽 else의 중괄호(culry brace)를 생략할 수 있다.
// if (result >= 5) {
//   alert('당신이 이겼습니다.');
// } else if (result >= 3) {
//   alert('비겼습니다.');
// } else {
//   alert('당신이 졌습니다.');
// }

// 경우의 수가 많은 경우에는 if...else 구문을 아래와 같이 계속 이어나갈 수 있다.
function translateColor(english) {
  if (english === 'red') {
    return '빨간색';
  } else if (english === 'blue') {
    return '파란색';
  } else if (english === 'purple' || english === 'violet') {
    return '보라색';
  } else {
    return '일치하는 색깔이 없습니다.';
  }
}


// switch 구문
// 바로 위의 예제와 같이 하나의 변수에 대해 많은 경우의 수가 있는 경우, switch 구문을 사용하면 깔끔하게 만들 수 있다.
function translateColor(english) {
  let result;
  switch (english) {
    case 'red':
      result = '빨간색';
      break;
    case 'blue':
      result = '파란색';
      break;
    case 'purple':
      result = '보라색';
      break;
    case 'violet':
      result = '보라색';
      break;
    default:
      result = '일치하는 색깔이 없습니다.';
  }
  return result;
}
// switch 구문은 case, break, default 라는 키워드와 함께 사용한다.
// switch 바로 뒤의 괄호의 값이 '코드 실행 여부를 판별할 기준이 되는 값'이고, 이 기준이 되는 값과 case 바로 뒤에 오는 값이 일치1하면 콜론(:) 뒤의 코드 영역이 실행된다. 일치하는 값이 없으면 default 코드 영역이 대신 실행된다.
// 단, case 뒤쪽의 코드 영역 마지막에 break를 써주지 않으면, 해당 case가 실행될 때 바로 뒤의 case 코드 영역이 뒤이어 실행되게 된다. 예를 들어, 위 코드 예제에서 case 'blue': 부분의 break를 지우고 코드를 실행해보면 이런 결과가 나온다.
console.log(translateColor('blue')); // '보라색'