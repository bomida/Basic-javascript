'use strict';

// Object

// Object Literal
// 객체는 한꺼번에 여러 값을 담을 수 있는 container과 같은 자료구조(data structure)이다.
// 객체 안에는 이름-값 쌍(name-value pair)이 저장되는데, 이를 객체의 속성(property)라고 합니다. - 중괄호 안에 이름-값 쌍을 적어주면 된다.
const person = {
  name: '보미',
  // 속성 이름 - 'name', 속성 값 - '보미'
  age: 19,
  // 속성 이름 - 'age', 속성 값 - 19
  'languages': ['korean', 'English'],
  // 속성 이름 - 'languages', 속성 값 - 배열
  '한국 나이': 20
  // 속성 이름 - 'age', 속성 값 - 20
};

// 객체 리터럴을 이용해 속성을 지정할 때, 아래와 같이 이미 정의 된 변수의 이름을 그대로 속성의 값으로 사용할 수도 있습니다.
// const name = '도보미'
// const person2 = {
//   name: name,
//   age: 20,
//   // ...
// };

// 위 코드를 줄여 써보자.
const name = '도보미'
const person2 = {
  name, // 속성 이름과 속성 값이 같을 때는 예시와 같이 사용 할 수 있다.
  age: 20,
  // ...
};

// 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것이 가능
const propName = 'prop';
const obj = {
  [propName]: 1
};
obj.prop; // 1