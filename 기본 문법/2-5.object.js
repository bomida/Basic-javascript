'use strict';

// Object

// Object Literal
// 객체는 한꺼번에 여러 값을 담을 수 있는 container과 같은 자료구조(data structure)이다.
// 객체 안에는 이름-값 쌍(name-value pair)이 저장되는데, 이를 객체의 속성(property)라고 합니다. - 중괄호 안에 이름-값 쌍을 적어주면 된다.

{
  const person = {
    name: '도보미', // 속성 이름 - 'name', 속성 값 - '도보미'
    age: 19, // 속성 이름 - 'age', 속성 값 - '19'
    'languages': ['korean', 'English'], // 속성 이름 - 'languages', 속성 값 - '배열'
    '한국 나이': 20 // 속성 이름 - '한국 나이', 속성 값 - '20'
  };
}

// 위에서 person 변수에 할당된 객체에는 네 개의 속성이 저장되었습니다. 'languages'와 '한국 나이'와 같이 속성 이름 부분에 문자열을 써도 상관없지만, '한국 나이'에 들어간 공백과 같이 식별자에 허용되지 않는 문자가 들어간 속성 이름을 정의할 때는 반드시 문자열 표기를 사용해야한다.

{
  const name = '도보미'

  const person = {
    name: name,
    age: 19,
    // ...
  };
  
}