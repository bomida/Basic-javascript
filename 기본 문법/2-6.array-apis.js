'use strict';

// Array
// 배열은 JS에 내장되어 있는 자료구조이다. 배열 안에 들어있는 값들은 요소(element) 혹은 항목(item)이라한다.
// 객체와 배열의 가장 큰 차이점은 배열 안에는 순서가 있다는 점이다.

// 배열 리터럴 (array literal)
const empty = []; // 빈 배열
const numbers = [1, 2, 3]; // 숫자가 들어있는 배열
const string = ['one', 'two', 'three']; // 문자열이 들어있는 배열
const objects = [{prop: 1}, {prop: 2}, {prop: 3}]; // 객체가 들어있는 배열
const mixed = [1, 'one', {prop: 1}, null]; // 아무거나? 들어있는 배열

// Array 생성장
// Array 생성자는 주어지는 인수에 따라 두가지 서로 다른 방식으로 동작한다.
// 1. 수 타입의 인수가 하나 주어질 때는 해당 수 만큼의 길이를 갖는 비어있는 배열을 만들어낸다. 만약 인수가 양의 정수가 아니라면 에러를 낸다.
// 2. 이 외에 다른 모양으로 인수가 주어지면 그 인수들을 요소로 갖는 배열을 생성한다.
new Array(1); // [empty]
new Array(1000); // [empty x 1000]

new Array(1, 2, 3); // [1, 2, 3] <- 2번 방식

// Array.of
// 이 메소드는 위의 2번 방식으로만 동작한다. 2번 방식의 코드를 작성 할 때는 생성자 대신 Array 생성자를 사용할 때에는 1번 방식으로만 사용하고, 2번 방식의 코드를 작성할 때는 생성자 대신 Array.of 정적 메소드는 사용하자.
new Array(1, 2, 3); // X
Array.of(1, 2, 3); // O

// `Array.of` 정적 메소드는 인수가 하나이더라도 그 인수를 요소로 갖는 배열을 반환함
Array.of(1); // [1]

// 생성자는 이런 용도로만 사용하자.
new Array(1000); // [empty x 1000]

// Array.from
// JS에는 유사 배열 객체(array-like object)와 iterable이라는 개념이 있어서, 이에 해당하는 값들은 Array.from 정적 메소드를 통해 배열로 쉽게 변환될 수 있다.
// `string` 타입은 래퍼 객체를 통해 iterable로 다루어질 수 있습니다.
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.from('hello'));