// 'use strict';

// 고차 함수(Higher-order Function)
// 함수를 인수로 받는 함수, 또는 함수를 반환하는 함수를 일러 고차 함수(higher-order function)라고 한다.
{
  // 함수를 인수로 받는 함수
  function func2(f) {
    f();
  }

  // 함수를 반환하는 함수
  function func1() {
    return function() {};
  }

  // 고차 함수는 함수를 인수로 받는 Array의 많은 메소드들이다. (forEach, map, reduce, filter, sort, every, some, find)
  // 다른 함수의 인수로 넘겨지는 함수를 콜백(callback)이라 부르기도한다.
}


// 클로저(Closure)
// 보통의 경우, 안쪽 스코프에서 정의된 변수는 바깥 스코프에서 접근할 수 없다.
{
  function func1(x) {
    return x;
  }
  console.log(func1(1));
  // 더 이상 변수 `x`에 접근할 수 있는 방법이 없다
}