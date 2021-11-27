// 'use strict';

// Iterable
// 반복 가능한 객채(iterable object)는 for...of 구문과 함께 ES2015에서 도입되었다.
// 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 Symbol.iterable 속성에 특별한 형태의 함수가 들었는 것이다.
{
  const str = 'hello';
  console.log(str[Symbol.iterator]);
}