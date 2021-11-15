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
new Array(1, 2, 3); // [1, 2, 3]