// 'use strict';

// Iterable
// 반복 가능한 객채(iterable object)는 for...of 구문과 함께 ES2015에서 도입되었다.
// 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 Symbol.iterable 속성에 특별한 형태의 함수가 들었는 것이다.
{
  const str = 'hello';
  console.log(str[Symbol.iterator]);
}

// 객체의 Symbol.iterator 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(iterator object) 혹은 줄여서 iterable이라 부르고, 해당 객체는 iterable protocol을 만족한다고 말한다. 이런 객체들에 대해서는 ES2015에서 추가된 다양한 기능들을 사용할 수 있다.

// 내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있다.
// - String
// - Array
// - TypedArray
// - Map
// - Set


// Iterable의 사용
// 어떤 객체가 Iterable이라면, 그 객체에 대해서 아래의 기능들을 사용할 수 있다.
// - for...of루프
// - spread 연산자(...)
// - 분해대입(destructuring assignment)
// - 기타 iteralbe을 인수로 받는 함수

// 즉, 문자열에 대해서도 위 기능들을 사용할 수 있다.
{
  // `for...of`
  for (let c of 'forOf') {
    console.log(c);
  }

  // spread 연산자
  const characters = [...'spread'];
  const charactors = [...characters];
  console.log(charactors);

  // 분해대입
  const [c1, c2, c3] = 'hello';
  console.log([c1, c2, c3]);

  // `Array.from`은 iterable 혹은 array-like 객체를 인수로 받는다.
  console.log(Array.from('hello world'));
}


// Generator 함수
// iterable protocol을 구현하기만 하면 어떤 객체든 iterable이 될 수 있다.
// Iterable을 구현하는 가장 쉬운 방법은 ES2015에 도입된 generator 함수를 사용하는 것이다.
// Generator 함수는 iterable 객체를 반환하는 특별한 형태의 함수이다.
{
  // generator 함수 선언하기
  function* gen1() {
    // ...
  }

  // 표현식으로 사용하기
  const gen2 = function* () {
    // ...
  }

  // 메소드 문법으로 사용하기
  const obj = {
    * gen3() {
      // ...
    }
  }
}

// Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol을 만족한다.
// 즉, Symbol.iterator 속성을 갖고 있다.
{
  function* gen1() {
    // ...
  }

  // `gen1`를 호출하면 iterable이 반환된다.
  const iterable = gen1();

  console.log(iterable[Symbol.iterator]);
}

// Generator함수 안에서는 yield라는 특별한 키워드를 사용할 수 있다.
// Generator함수 안에서 yield 키워드는 return과 유사한 역할을 하며,
// iterable의 기능을 사용할 때 yield 키워드 뒤에 있는 값들을 순서대로 넘겨준다.
{
  function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
  }

  // 1, 2, 3이 순서대로 출력된다.
  for(let n of numberGen()) {
    console.log(n);
  }
}