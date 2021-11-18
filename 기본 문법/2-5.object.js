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
  console.log(person);
}

// 위 코드를 아래와 같이 줄여 쓸 수도 있습니다.
{
  const name = '도보미'

  const person = {
    name, // `name: name`과 똑같이 동작합니다.
    age: 19,
    // ...
  };
  console.log(person);
}

// 아래와 같이 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것도 가능
{
  const propName = 'prop';

  const obj = {
    [propName]: 1
  };
  console.log(`obj: ${obj.prop}`);
}


// 점 표기법, 대괄호 표기법
// 속성 접근자(property accessor)를 이용해 이미 생성된 객체의 속성을 지정해줄 수도 있다.
{
  const person = {}; // 빈 객체

  // 점 표기법 (Dot notaiton)
  person.name = '도보미';
  person.age = 19;
  person.languages = ['Korean', 'English'];
}

// 객체 리터럴을 이요해 빈 객체를 생성해 준 뒤, 점 표기법을 통해 속성을 갱신해주었다. 그러나 JS에서 식별자로 허용되지 않는 문자가 들어간 속성 이름을 사용해야 하는 경우에는 반드시 대괄호 표기법을 사용해야한다.

// 대괄호 표기법(Bracket notation)
person['한국 나이'] = 20;

// NOTE! - 위와 같은 경우가 아니라면, 주로 점 표기법이 많이 사용되는 편이다.