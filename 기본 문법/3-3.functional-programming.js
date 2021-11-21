// 'use strict';

// 고차 함수(Higher-order Function)
// 함수를 인수로 받는 함수, 또는 함수를 반환하는 함수를 일러 고차 함수(higher-order function)라고 한다.
{
  // 함수를 인수로 받는 함수
  function func2(f) {
    f();
  }

  // 함수를 반환하는 함수
  function func1() {
    return function() {};
  }

  // 고차 함수는 함수를 인수로 받는 Array의 많은 메소드들이다. (forEach, map, reduce, filter, sort, every, some, find)
  // 다른 함수의 인수로 넘겨지는 함수를 콜백(callback)이라 부르기도한다.
}


// 클로저(Closure)
// 보통의 경우, 안쪽 스코프에서 정의된 변수는 바깥 스코프에서 접근할 수 없다.
{
  function func1(x) {
    return x;
  }
  console.log('func1():', func1(1));
  // 더 이상 변수 `x`에 접근할 수 있는 방법이 없다
}
{
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // 더 이상 변수 `i`에 접근할 수 있는 방법이 없다.
}

// 바깥 스코프에 해당하는 코드의 실행이 끝난 뒤라도 안쪽 스코프에서 만들어진 함수에서 바깥 스코프의 변수를 사용하고 있다면 함수를 통해서 변수를 계속 사용할 수 있다.
{
  function func1(x) {
    // 여기서 반환되는 함수는 바깥 스코프에 있는 변수 `x`를 사용하고 있다.
    return function() {
      return x;
    }
  }
  const func2 = func1(1);
  // `func1`의 실행은 끝났지만, `func2`를 통해서 `x`를 사용할 수 있다.
  console.log('func2():', func2());
}

// 바깥 스코프에 있는 변수를 가져다 사용하는 함수와, 변수가 저장되는 저장소를 클로저(closure)라고 부른다.
{
  const arr = [];

  for (let i = 0; i < 10; i++) {
    // 여기서 만들어진 함수는 바깥 스코프에 있는 변수 `i`를 사용하고 있다.
    arr.push(function() {
      return i;
    });
  }

  // for 루프의 실행은 끝났지만, 루프 안에서 만들어진 함수가 배열에 저장되어 있다.
  // 배열 안에 들어있는 함수를 통해, 해당 함수가 만들어진 시점의 변수 `i`를 사용할 수 있다.
  console.log('arr[2]:', arr[2]());
  console.log('arr[5]', arr[5]());
}

{
  // 고차 함수의 인수로 함수를 넘길 때, 해당 함수에서 바깥 스코프에 있는 변수를 사용할 수 있다.
  const people = [
    {name: '윤아준', age: 19},
    {name: '신하경', age: 20}
  ]
  function peopleOlderThan(people, threshold) {
    return people.filter(person => person.age > threshold);
  }
  console.log(peopleOlderThan(people, 19));
}

{
  // 특정한 방식으로 동작하는 함수를 만들어내는 고차 함수를 작성할 수 있다.
  function makeAdder(x) {
    return function(y) {
      return x + y;
    }
  }
  console.log([1, 2, 3].map(makeAdder(2)));
}

// 데이터를 숨기고 정해진 방법을 통해서만 데이터에 접근할 수 있도록 제한을 두는데 활용되기도 한다.
{
  function makeCounter(x = 1) {
    return function() {
      return x++;
    }
  }
  
  // `x`를 직접 변경할 수 있는 방법이 없다.
  const counter = makeCounter();
  console.log('counter:', counter());
  console.log('counter:', counter());
}

{
  function personFactory(inintialAge) {
    let age = inintialAge;
    return {
      getOlder() {
        age++;
      },
      getAge() {
        return age;
      }
    };
  }
  // `age`를 직접 변경할 수 있는 방법이 없다.
}


// 화살표 함수와 고차 함수
// 화살표 함수 문법을 이용하면, 적은 양의 코드만 사용해서 고차 함수를 만들 수 있다.
{
  const makeAdder = x => y => x + y;
  const add2 = makeAdder(2);
  add2(3);
}
{
  const makeCounter = (x = 1) => () => x++;
  const counter = makeCounter();
  console.log('counter:', counter());
  console.log('counter:', counter());
}


// 재귀 함수(Recursive Function)
// 함수 내부에서 자기 자신을 호출하는 함수를 재귀 함수(recursive function)라 부른다.
{
  function func() {
    func();
  }
}

// 루프와 재귀 함수
// 대부분의 루프는 재귀 함수를 통해 다시 구현될 수 있다.
// 코드의 의미가 명확해지고 코드의 길이를 줄일 수 있다는 장점이 있다.
{
  // 루프로 구현된 팩토리얼
  function factorialLoop(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log('factorialLoop:', factorialLoop(6));

  // 재귀 함수로 구현된 팩토리얼
  function factorialRec(n) {
    return n <= 1 ? 1 : n * factorialRec(n - 1);
  }
  console.log('factorialRec:', factorialRec(6));
}

{
  // 루프로 구현된 피보나치 수
  function fiboLoop(n) {
    let x = 0;
    let y = 1;
    for (let i = 0; i < n; i++) {
      [x, y] = [y, x + y];
    }
    return x;
  }
  console.log('fiboLoop:', fiboLoop(4));

  // 재귀 함수로 구현된 피보나치 수
  function fiboRec(n) {
    return (
      n < 1 ? 0 :
      n === 1 ? 1 :
      fiboRec(n - 1) + fiboRec(n - 2)
    );
  }
  console.log('fiboRec:', fiboRec(4));
}


// 분할 정복 (Divide and Conquer)
// 분할 정복(divide and conquer)은 문제를 작은 부분 문제로 나누어서 푼 뒤, 그 결과를 합치는 식으로 알고리즘을 작성하는 기법이다.
// fiboRec 역시 분할 정복의 일종이라 할 수 있다.

// 분할 정복 기법을 활용하는 알고리즘 중 대표적인 예로 병함 정렬(merge sort)가 있다.
{
  function mergeSort(arr) {
    // 입력 된 배열의 길이가 1 이하면 더 이상 재귀 호출을 하지 않습니다.
    if (arr.length <= 1) return arr;

    // 배열을 절반으로 잘라 두 개의 작은 배열로 분할하고, 두 작은 배열에 대해 재귀 함수를 수행한다.
    const slicer = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, slicer));
    const arr2 = mergeSort(arr.slice(slicer));

    // `arr1`, `arr2`는 **이미 정렬되어있는 상태**이므로,
    // 이 성질을 이용해 두 배열을 **정렬되어있는 큰 배열**로 합칠 수 있다.
    const newArr = [];
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
      if (arr1[i] == undefined || arr1[i] > arr2[j]) {
        newArr.push(arr2[j]);
        j++;
      } else {
        newArr.push(arr1[i]);
        i++;
      }
    }
  
    // 큰 배열을 반환한다.
    return newArr;
  }
}

// 주의할 점
// 재귀 함수가 실행되는 동안에는 종료되지 않은 함수가 아주 많이 생기게 되므로, 컴퓨터의 메모리에 큰 부담을 줄 수 있다.
// JS 구동 환경에서는 특정 깊이 이상의 재귀 호출이 일어날 수 없도록 제한을 두고 있다.
// Chrome 브라우저의 경우 대량 10000번 정도의 재귀 호출이 일어나면 아래와 같은 에러를 발생시킨다.
{
  // factorialRec(20000);
  // RangeError: Maximum call stack size exceeded
}
{
  const fiboRecMemoized = (() => {
    // 계산 결과를 저장하는 저장소를 만듭니다.
    const memo = new Map();
  
    const fiboRec = n => {
      // 만약에 이전에 같은 인수로 계산한 적이 있다면
      // 해당 결과를 바로 반환합니다.
      let result = memo.get(n);
      if (result != undefined) return result;
  
      result = (
        n < 1 ? 0 :
        n === 1 ? 1 :
        fiboRec(n - 1) + fiboRec(n - 2)
      );
  
      // 계산 결과를 저장소에 저장한 후 반환합니다.
      memo.set(n, result);
      return result;
    }
  
    return fiboRec;
  })();
}