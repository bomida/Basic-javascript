// 'use strict';

// 표현식 (Expression)
// 코드 중에 값으로 변환될 수 있는 부분을 표현식(Expression)이라 부른다

// 리터럴
// - 1
// - null
// - 'hello'
// - {prop: 1}
// - [1, 2, 3]
// - function(x, y) { return x + y }
// (x, y) => x + y

// 연산자
// - 1 + 2
// - true && false
// - 'prop' in obj
// - delete obj.prop
// - typeof null
// - obj instanceof Object
// - new Object()
// - (variable 변수가 선언되어 있다면) variable = 1

// 기타
// - this
// - variable (변수)
// - obj.prop (속성)
// - func() (함수 호출)

// 표현식을 값으로 변환하기 위해 실제로 해당 표현식을 실행시키는 절차를 평가(evaluation)라고 한다.


// Short-circuit Evaluation
// 피연산자가 두 개인 연산 중에, 값을 결정하기 위해 양쪽 피연산자 모두가 필요하지는 않은 경우가 있다. 아래 식에서는 expression 부분의 표현식이 평가될 필요가 없다. JS에서는 expression 부분이 평가되지 않는다. 이런 평가 방식을 short-circuit evaluation이라고 한다.
{
  false && expression
  true || expression
  0 ?? expression
}