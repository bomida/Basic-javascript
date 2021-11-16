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

  // NOTE! - 그래서 어떤 것을 써야하나?
  // for...of - 단순히 배열을 순회하기가 목적일 때, 간결하고 속도 적인 측면에서 유리하다.
  // forEach - 배열을 순회하면서 배열의 인덱스가 필요한 경우
  // for - 코드의 실행 속도가 정말로 중요할 때

console.groupEnd('배열 순회하기'); }


{ console.group('배열로부터 새로운 값 생성');
  // slice: 메소드는 배열의 일부분에 해당하는 새로운 배열을 반환
  const sliceArr = [1, 2, 3, 4, 5];

  // 인덱스 2부터 인덱스 4 사이의 요소들을 가지고 새로운 배열을 생성
  const newSliceArr = sliceArr.slice(2, 4); // [3, 4]
  console.log(`newSliceArr: ${newSliceArr}`);

  // newArr을 조작해도, 원본 배열에는 영향을 미치지 않는다.
  newSliceArr[0] = 5;
  console.log(`newSliceArr: ${newSliceArr}`); // [5, 4]
  console.log(`ㄴ sliceArr: ${sliceArr}`); // [1, 2, 3, 4, 5]

  // 첫 번째 인수의 값은 0, 두번째 인수의 값은 배열의 length 속성이다. 즉, 인수없이 호출하면 배열 전체가 복사 된다.
  // slice는 얕은 복사(shallow copy)를 하므로, 배열 안에 배열 또는 객체가 들어있을 때는 주의해서 사용해야한다.
  const sliceArr2 = sliceArr.slice();
  console.log(`sliceArr2: ${sliceArr2}`);


  // map: 배열의 각 요소에 함수를 적용해, 그 반환값을 요소로 갖는 새로운 배열을 만든다.
  // forEach와 비슷해 보이지만 새로운 배열을 만든다는 차이가 있다.
  const mapArr = [1, 2, 3, 4, 5];

  // `mapArr`의 각 요소를 제곱한 값으로 새 배열을 만든다.
  const newMapArr = mapArr.map((item) => item ** 2);
  console.log(`newMapArr: ${newMapArr}`);
  console.log(`ㄴ mapArr: ${mapArr}`);

  // map도 forEach와 같이 함수를 호출할 때 세 개의 인수를 넘긴다.
  const map = mapArr.map((item, index, array) => item * index);
  console.log(`인수 3개를 넘겼을 때: ${map}`);


  // concat: 메소드는 여러 배열을 연결해서 새 배열을 만들 때 사용한다.
  const concatArr1 = [1, 2];
  const concatArr2 = [3, 4];
  const concat = concatArr1.concat([5, 6], [7, 8], concatArr2);
  console.log(`concat: ${concat}`);


  // reduce: 메소드는 모든 요소의 값을 종합해서 하나의 값으로 만드는 계산을 할 때 사용합니다.
  const reduceArr = [1, 2, 3];
  const reduce = reduceArr.reduce((acc, item) => acc + item, 0);
  console.log(`reduce: ${reduce}`);

  // 코드 수행 순서
  // 1. 초기값 0과 배열의 첫번째 요소인 1을 인수로 해서 함수를 호출. 즉, acc매개변수에 0이 대입되고, item 매개변수에 1이 대입된다. 그래서 결과값은 1이 된다. 이것을 누적값(accumulator)이라한다.
  // 2. 누적값 1과 배열의 두 번째 요소인 2를 인수로해서 함수를 호출. 결과값 3이 다시 누적값이 된다.
  // 3. 누적값 3과 배열의 세 번째 요소인 3을 인수로해서 함수를 호출. 결과값은 6이 된다.
  // 4. 더 이상 요소가 남아있지 않으므로 reduce 호출의 결과값은 6이 된다.

  const stringArr = ['one', 'two', 'three'];
  const reduce2 = stringArr.reduce((acc, item, index, array) => {
    return acc + `(${index}: ${item})`;
  }, '');
  console.log(`reduce2: ${reduce2}`);
  // reduce는 (누적값, 현재요소, 인덱스, 배열)과 같은 인수를 받는다.
  // reduce 메소드에 초기값 인수를 주지 않으면, 첫 번째 인수가 초기값으로 지정되어 첫 번째 요소와 두번째 요소에 대한 계산부터 시작한다. 즉, 위 두 예제에서 초기값을 생략해도 같은 결과가 나온다.
  // 다만, 배열의 요소가 하나 밖에 없다면 아래와 같이 계산이 수행되지 않고 첫 번째 요소가 그대로 반환되므로 초기값은 항상 제공해주는 것이 좋다.

  const reduceArr2 = ['one'];

  // 문자열의 길이를 모두 더하려고 했지만 계산을 수행할 대상이 하나밖에 없어서 함수가 호출되지 못하고 결과값으로 'one'이 반환
  const reduce3 = reduceArr2.reduce((acc, item) => acc + item.length);
  console.log(`reduce3: ${reduce3}`);

  const reduce4 = reduceArr2.reduce((acc, item) => acc + item.length, 0);
  console.log(`reduce3: ${reduce4}`);


  // filter: 배열에서 원하는 요소만을 골라내어 새로운 배열을 생성할 수 있다.
  // filter 메소드에는 진릭밧(boolean)을 반환하는 함수를 주어야한다.
  // 진리값을 반환하는 함수를 predicate라고 한다.
  // filter에 주어지는 함수도 forEach와 같이 (현재요소, 인덱스, 배열)의 세 인수를 받는다.
  const filterArr = [1, 2, 3, 4, 5];

  // 짝수만 골라내기
  const filter = filterArr.filter(item => item % 2 === 0);
  console.log(`filter: ${filter}`);


  // join: 배열의 요소들을 문자열로 변환 후, 메소드에 주어진 구분자(seperator)를 이용해 하나의 문자열로 결합하여 반환한다.
  const joinArr = [1, 2, 3];
  console.log(`joinArr: ${joinArr}`);

  const join = joinArr.join(' & ');
  console.log(`join ${join}`);

  const join2 = joinArr.join(); // 구분자를 넘기지 않으면 `,` 문자가 구분자로 사용된다.
  console.log(`join2: ${join2}`);
console.groupEnd('배열로부터 새로운 값 생성'); }


{ console.group('요소 찾기');
  // indexOf와 lastIndexOf 메소드를 사용하면 특정 요소가 배열의 몇 번째에 위치하는 지를 알아낼 수 있다.
  // indexOf는 배열의 왼쪽부터, lastIndexOf는 오른쪽부터 검색해서 처음 만나는 요소의 인덱스를 반환한다. 만약 일치하는 요소가 없다면, 두 메소드 모두 -1을 반환한다.
  const arr = ['a', 'b', 'c', 'b', 'a'];

  console.log('indexOf1: '+ arr.indexOf('b'));
  console.log('lastIndexOf1: '+ arr.lastIndexOf('b'));
  console.log('indexOf1: '+ arr.indexOf('z'));
  console.log('lastIndexOf1: '+ arr.lastIndexOf('z'));

  // 두 메소드 모두 두 번째 인수로 시작 인덱스를 받는다. 시작 인덱스가 주어지면 해당 인덱스부터 검사를 시작한다.
  const arr2 = ['a', 'b', 'c', 'b', 'a'];
  console.log('indexOf2: ' + arr.indexOf('b', 2));
  console.log('lastIndexOf2: ' + arr.lastIndexOf('b', 2));

  // find 메소드와 findIndex 메소드를 사용하면 특정 조건을 만족하는 요소를 찾을 수 있다. 두 메소드 모두 predicate을 이용해 왼쪽부터 검사해서 처음 만나는 요소를 찾는다.
  // find는 요소 자체를 반환하며, findIndex는 요소의 인덱스를 반환한다는 차이점이 있다. 조건을 만족하는 요소를 찾지 못하면, find는 undefined를, findIndex는 -1을 반환한다.
  // forEach와 마찬가지로, find와 findIndex에 주어지는 predicate에는 (현재 요소, 인덱스, 배열)의 세 인수가 넘겨진다.
  const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];

  console.log(names.find(item => item.length < 6));
  console.log(names.findIndex(item => item.length < 6));
  console.log(names.find(item => item.length > 8));
  console.log(names.findIndex(item => item.length > 8));

console.groupEnd('요소 찾기'); }


{ console.group('배열이 특정 조건을 만족하는지 판별하기');
  // 배열의 세 메소드 includes, every, some는 모두 배열이 특정 조건을 만족하는지를 나타내는 진리값을 반환
  // includes 메소드는 배열이 특정 요소를 포함하고 있는지를 판별한다. indexOf로도 비슷한 일을 할 수 있지만 includes가 진리값을 반환한다는 점에서 조금 더 편리하다.
  // includes 메소드 또한 시작 인덱스를 인수로 받는다.
  const arr = ['one', 'two', 'three'];
  console.log('includes: ' + arr.includes('one'));
  console.log('includes: ' + arr.includes('one', 1)); // 1은 인덱스 값이다.

  // every는 predicate를 인수로 받아서, 모든 요소가 조건을 만족하는 지를 검사한다.
  const arr2 = ['one', 'two', 'three'];
  console.log('every: ' + arr2.every(item => item.length > 2));
  console.log('every: ' + arr2.every(item => item.length > 3));

  // some은 predicate를 인수로 받아서, 조건을 만족하는 요소가 하나라도 있는지 검사한다.
  const arr3 = ['one', 'two', 'three'];
  console.log('some: ' + arr3.some(item => item.length > 3));
  console.log('some: ' + arr3.some(item => item.length > 5));

  // NOTE! - forEach와 마찬가지로, every와 some에 주어지는 predicate에는 (현재요소, 인덱스, 배열)의 세 인수가 넘겨진다.
console.groupEnd('배열이 특정 조건을 만족하는지 판별하기'); }


{ console.group('배열인지 아닌지 판별하기');
  // 어떤 값이 배열인지 아닌지 판별하기 위해서 Array.isArray 정적 메소드를 사용할 수 있다.
  console.log(Array.isArray([]));
  console.log(Array.isArray({}));
  console.log(Array.isArray('hello'));
console.groupEnd('배열인지 아닌지 판별하기'); }


{ console.group('문자열과 배열');
  // 문자열은 배열과 유사한 문법을 통해 다뤄질 수 있다. 그리고 문자열의 메소드 중에는 배열의 메소드 중 몇몇과 이름이 같고 완전히 같은 방식으로 동작하는 것들이 있다.
  console.log('hello'[0]);
  console.log('hello'.slice(2, 4));
  for (let c of 'hello') {
    console.log(c);
  }
console.groupEnd('문자열과 배열'); }


{ console.group('다차원 배열(Multidimensional Array)');
  // 컴퓨터를 사용하다보면 표 형태의 자료를 많이 다르게 된다. JS에서는 표 형태의 자료를 간단히 나타내기 위해 배열을 요소로 갖는 배열을 사용할 수 있다.
  const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  // 이렇게 배열 속에 배열이 중첩되어 있는 자료구조를 가지고 다차원 배열이라고 한다.
  // 다차원 배열 속에 있는 요소를 다루기 위해서, 대문자 표기법을 연이어 사용할 수 있다.
  console.log(table[0][1]);
  console.log(table[2][0]);
console.groupEnd('다차원 배열(Multidimensional Array)'); }


