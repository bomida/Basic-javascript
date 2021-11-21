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