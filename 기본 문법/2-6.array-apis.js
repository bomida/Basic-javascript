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


{
// element 읽기
// 배열의 각 요소는 인덱스(index)를 이용해 읽어올 수 있다. 인덱스는 객체의 속성 이름과 비슷한 역할을 하지만, 0 이상의 정수만이 배열의 인덱스가 될 수 있다.
// 배열 안의 요소의 인덱스 순서는 0부터 시작한다.
const arr = ['one', 'two', 'three'];
arr[0]; // 'one'
arr[1]; // 'two'
arr[2]; // 'three'
arr[3]; // 'undefined'
} 


{ console.group('요소 수정하기');

  // fill: 한꺼번에 많은 요소를 같은 값으로 바꿀 수 있다.
  const arr = [1, 2, 3, 4, 5];

  // 전체를 0으로 채우기
  arr.fill(0);
  console.log(arr);

  // 인덱스 2와 4 사이를 1로 채우기
  arr.fill(1, 2, 4);
  console.log(arr);

  // fill 메소드를 사용하면, 큰 배열을 만들고 값을 채원허는 일을 쉽게 할 수 있다.
  new Array(1000);
  const fillArray = new Array(1000).fill(5);
  console.log(fillArray);

console.groupEnd('요소 수정하기'); }


{ console.group('요소 추가/삭제');
  const arr = [];

  // push: '배열의 끝 부분에' 요소를 추가하는 메소드
  arr.push('one');
  console.log(arr);
  arr.push('two', 'three');
  console.log(arr);
  
  // pop: '배열의 끝 부분에' 요소를 삭제하는 메소드
  arr.pop();
  console.log(arr);
  arr.pop();
  arr.pop();
  console.log(arr);

  // unshift: '배열의 앞 부분에' 요소를 추가하는 메소드
  arr.unshift(1);
  console.log(arr);
  arr.unshift(2, 3);
  console.log(arr);

  // shift: '배열의 앞 부분에' 요소를 삭제하는 메소드
  arr.shift();
  console.log(arr);
console.groupEnd('요소 추가/삭제'); }


{ console.group('요소를 배열 중간에 삽입');
  // splice: 배열에 속해있는 연속된 여러요소 즉, 배열의 일부분을 통째로 바꿀 수도 있다.
  let arr = [1, 2, 3, 4, 5];

  // 인덱스 '1'인 요소부터 '3'개를 바꿔치기 해보자.
  // splice메소드는 바꿔치기를 토해 제거된 요소들을 반환한다.
  arr.splice(1, 3, 'two', 'three', 'four');
  // 시작할 인덱스 번호, 삭제할 인덱스 갯수, 삭제한 자리에 넣을 요소(삭제한 인덱스 갯수와 상관없음)
  console.log(arr);
  arr.splice(1, 3, 'four');
  console.log(arr);

  // 삭제 후 추가할 인수를 생략하면 요소를 제거할 뿐 배열에 아무것도 삽입되지 않는다.
  arr.splice(1, 1);
  console.log(arr);

  // 두번째 인수로 0을 입력하면 삭제없이 그 위치에 요소를 삽입할 수 있다.
  arr.splice(1, 0, 2, 3, 4);
  console.log(arr);
console.groupEnd('요소를 배열 중간에 삽입'); }


{ console.group('배열 뒤집기');
  // reverse: 메소드를 호출 하면 해당 배열을 거꾸로 뒤집는다.
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  console.log(arr);
console.groupEnd('배열 뒤집기'); }


{ console.group('배열 정렬하기');
  // sort: 메소드를 통해 원하는 방식대로 배열을 정렬할 수 있다.
  // `sort` 메소드는 `arr`을 비교 함수에 따라 정렬한 뒤, `arr`을 그대로 반환한다.)
  const arr = [3, 1, 4, 5, 2];
  console.log(arr);
  arr.sort((x, y) => x - y);
  console.log(arr);
  arr.sort((x, y) => y - x);
  console.log(arr);

  // NOTE!
  // 만약 어떤 두 값 a, b에 대해서 비교 함수 compare를 compare(a, b)와 같이 호출했을 때:
  // - 음수를 반환하면, a가 b 앞에 오도록 정렬합니다.
  // - 0을 반환하면, a와 b를 같은 순서로 간주합니다.
  // - 양수를 반환하면, b가 a 앞에 오도록 정렬합니다.

  const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];
  names.sort((x, y) => x.length - y.length);
  console.log(names);

  // NOTE!!
  // 비교 함수를 넘기지 않더라도 아래의 코드 처럼 정렬이 잘 되는 것 처럼 보일 수 있다.
  const arr2 = [3, 1, 4, 5, 2];
  arr2.sort();
  console.log(arr2);
  // 비교 함수를 인수로 넘겨주지 않으면, sort 메소드는 먼저 요소를 전부 문자열로 변환한 후, 유니코드 코드포인트를 비교하는 방식으로 정렬한다.
  // sort를 사용할 때에는 꼭 비교함수를 넘겨주도록 하자!
  
  let ex1 = [20, 3, 100].sort();
  console.log(`ex1: ${ex1}`);
  let ex2 = ['abc', 'DEF', 'aBC'].sort();
  console.log(`ex2: ${ex2}`);

  let ex3 = [20, 3, 100].sort((x, y) => x - y);
  console.log(`ex1: ${ex3}`);
  let ex4 = ['abc', 'DEF', 'aBC'].sort((x, y) => x.localeCompare(y));
  console.log(`ex2: ${ex4}`);

console.groupEnd('배열 정렬하기'); }


{ console.group('SELF PRACTICE');
  class Friend {
    constructor (name, job, area) {
      this.name = name;
      this.drink = job;
      this.area = area;
    }
  }
  const friends = [
    new Friend('suri', 'tea', 'seoul'),
    new Friend('minimini', 'beer', 'seoul'),
    new Friend('sunmi', 'cocoa', 'seoul'),
    new Friend('suki', 'latte', 'incheon'),
    new Friend('mangeun', 'soda', 'daegu'),
  ];

  const result = friends
  .map((friend) => friend.name)
  .sort((x, y) => x.localeCompare(y) + x.length - y.length);
  console.log(result);
console.groupEnd('SELF PRACTICE'); }


{ console.group('배열 순회하기');
  // 배열의 각 요소를 차례대로 돌면서 요소에 대한 작업을 하는 것을 순회(traverse)라고 한다.
  
  const arr = [1, 2, 3];

  // for 구문: 단순하게 for loop를 사용해 배열의 길이만큼 돌며, 전통적으로 많이 쓰이던 방식이었으나 forEach 메소드와 for...of 구문이 추가됨으로써 현재는 잘 쓰이지 않는다.
  for(let i = 0; i < arr.length; i++) {
    console.log(`for: ${arr[i]}`);
  }

  // forEach 메소드: 배열의 각 요소에 대해 함수를 호출할 수 있다.
  // 1. 화살 함수를 사용하여 더욱 간결하고 읽기 편한 코드가 되었다.
  arr.forEach(item => console.log(`item 요소${item}에 대한 요소가 실행 중`));
  // 2. 메소드에 넘기는 함수에는 총 세 개의 인수가 들어가는데 현재 순회중인 배열의 요소, 인덱스 값, 순회중인 배열이 들어온다.
  arr.forEach((item, index, array) => console.log(`index ${index + 1}번째 요소에 대해 함수가 실행 중`));

  // for...of 구문: iterable을 순회하기 위해 사용할 수 있다.
  const arr2 = [1, 2, 3, 4, 5];
  for(let item of arr2) {
    console.log(`for...of: ${item}`);
  }

console.groupEnd('배열 순회하기'); }