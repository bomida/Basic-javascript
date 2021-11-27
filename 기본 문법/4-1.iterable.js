// 'use strict';

// Iterable
// 반복 가능한 객채(iterable object)는 for...of 구문과 함께 ES2015에서 도입되었다.
// 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 Symbol.iterable 속성에 특별한 형태의 함수가 들어있다는 것이다.
{
  const str = 'hello';
  console.log(str[Symbol.iterator]);
}

// 객체의 Symbol.iterator 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(iterable object) 혹은 줄여서 iterable이라 부르고, 해당 객체는 iterable protocol을 만족한다고 말한다.

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
  const characters1 = [...characters];
  console.log(characters1);

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
  const printNumberGen = numberGen();
  console.log(printNumberGen);

  // 1, 2, 3이 순서대로 출력된다.
  for(let n of numberGen()) {
    console.log(`numberGen: ${n}`);
  }
}

// yield* 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있다.
{
  function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
  }

  function* numberGen2() {
    yield* numberGen();
    yield* numberGen();
  }

  // 1, 2, 3, 1, 2, 3이 순서대로 출력된다.
  for(let n of numberGen2()) {
    console.log(`numberGen2: ${n}`);
  }
}

// yield 키워드를 제외하면, generator 함수 내부의 동작 방식은 일반적인 함수와 별반 다르지 않는다.
// 즉, 다른 함수에서 할 수 있는 일이라면 generator 함수 안에서도 모두 할 수 있다.
{
  // 등차수열 생성하기
  function* range(start = 0, end = Infinity, step = 1) {
    for(let i = start; i < end; i += step) {
      yield i;
    }
  }
  
  // 피보나치 수열 생성하기
  function* fibonacci(count = Infinity) {
    let x = 1;
    let y = 1;
    for(let i = 0; i < count; i++) {
      yield x;
      [x, y] = [y, x + y];
    }
  }

  // 하나의 항목을 계속 넘겨주기
  function* repeat(item, count = Infinity) {
    for(let i = 0; i < count; i++) {
      yield item;
    }
  }

  // 여러 요소를 반복해서 넘겨주기
  function* repeatMany(array) {
    while (true) {
      for (let item of array) {
        yield item;
      }
    }
  }
}

  // Generator 함수를 사용할 때 주의 할 점
  // Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있다.
  // Generator 함수 내부에서 정의된 일반 함수에서는 yield 키워드를 사용할 수 없다.
  {
    // Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있다.
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    const iter = gen();

    for(let n of iter) {
      // 잘 출력된다.
      console.log(n);
    }
    for(let n of iter) {
      // `iter`는 한 번 사용되었으므로, 이 코드는 실행되지 않는다.
      console.log(n);
    }
  }
  {
    // Generator 함수 내부에서 정의 된 일반 함수에서는 `yield` 키워드를 사용할 수 없다.
    // function* gen2() {
    //   // 아예 문법 오류가 난다. (Unexpected token)
    //   function fakeGen() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //   }
    //   fakeGen();
    // }
  }


// Iterator Protocol
// 이제 iterable의 동작 원리를 살펴보자. (** iterable과 iterator을 잘 구분하자 **)
// iterable protocol을 만족하려면, Symbol.iterator 속성에 저장되어 있는 함수는 iterator 객체를 반환해야한다.
// 아래 조건을 iterator protocol이라고 한다.

// Iterator 객체는 아래의 특별한 조건을 만족하는 객체이다.
// - Iterator는 next라는 메소드를 갖는다.
// - next 메소드는 다음 두 속성을 갖는 객체를 반환해야한다.
//   - done : 반복이 모두 끝났는지를 나타낸다. 
//   - value : 현재 순서의 값을 나타낸다.

{
  // 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있다.
  const strIterator = 'go'[Symbol.iterator]();
  console.log(strIterator.next());
  console.log(strIterator.next());
  console.log(strIterator.next());
  console.log(strIterator.next());

  // generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있다.
  function* gen() {
    yield 1;
    yield 2;
  }

  const genIterator = gen()[Symbol.iterator]();
  console.log(genIterator.next());
  console.log(genIterator.next());
  console.log(genIterator.next());
  console.log(genIterator.next());
}

// Iterable protocol과 iterator protocol을 모두 이해하셨다면, 이제 직접 iterable을 만들 수 있다.
// 앞의 예제에 있엇던 range 함수를 generator 함수를 사용하지 않고 똑같이 구현해보겠다.
{
  function range(start = 0, end = Infinity, step = 1) {
    // `range` 함수는 iterable을 반환한다.
    return {
      currentValue: start,
      [Symbol.iterator]() {
        // iterable의 `Symbol.iterator` 메소드는 iterator을 반환해야한다.
        return {
          next: () => {
            if (this.currentValue < end) {
              const value = this.currentValue;
              this.currentValue += step;
              return {
                done: false,
                value
              }
            } else {
              return {
                done: true
              }
            }
          }
        }
      }
    }
  }
}
// Generator 함수를 사용했을 때보다 훨씬 복잡해졌다. 이 때문에 iterator protocol을 직접 구현하는 대신 generator 함수를 사용하는 경우가 많다.
// 다만, next 메소드를 사용하면 iterable을 세부적으로 제어할 수 있으므로, iterator에 대해서 알아둘 필요는 있다.


// Generator와 Iterator
// Generator 함수로부터 만들어진 객체는 일반적인 iterable처럼 쓸 수 있지만, iterator와 관련된 특별한 성질을 갖고 있다.

// 첫 번째로, generator 함수로부터 만들어진 객체는 iterable protocol과 iterator protocol을 동시에 만족한다.
{
  function* gen() {
    // ...
  }

  const genObj = gen();
  console.log( genObj[Symbol.iterator]().next === genObj.next );
}

// 즉, Symbol.iterator를 통해 iterator를 생성하지 않고도 바로 next를 호출할 수 있다.
{
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  const iter = gen();

  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
}

// 두 번째로, generator 함수 안에서 return 키워드를 사용하면 반복이 바로 끝나면서 next 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장된다.
// 다만, return을 통해 반환된 값이 반복 절차에 포함되지 않는다.
{
  function* gen() {
    yield 1;
    return 2; // generator 함수는 여기서 종료된다.
    yield 3;
  }

  const iter = gen();

  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());

  // `1`만 출력된다.
  for(let v of gen()) {
    console.log(v);
  }
}

// 세 번째로, generator 함수로부터 생성된 객체의 next 메소드에 인수를 주어서 호출하면, generator 함수가 멈췄던 부분의 yield 표현식의 결과값은 앞에서 받은 인수가 된다.
{
  function* gen() {
    const received = yield 1;
    console.log(received);
  }

  const iter = gen();
  console.log(iter.next());
  
  // `hello`가 출력된다.
  iter.next('hello');
}


// Generator Example
// 위에서 배웠던 성질들을 활용해서, 다른 iterable을 활용하는 몇 개의 generator 함수 예제를 작성해봤다.
{
  // 각 항목을 변환후 넘겨주기
  function* map(iterable, mapper) {
    for(let item of iterable) {
      yield mapper(item);
    }
  }

  // 각 순서까지의 누적값을 넘겨주기
  function* reduce(iterable, reducer, initial) {
    let acc = initial;
    for(let item of iterable) {
      acc = reducer(acc, item);
      yield acc;
    }
  }

  // 여러 iterable을 연결하기
  function* concat(iterables) {
    for(let iterable of iterables) {
      yield* iterable;
    }
  }

  // 앞쪽 몇 개의 항목만 넘겨주기
  function* take(iterable, count = Infinity) {
    const iterator = iterable[Symbol.iterator]();
    for(let i = 0; i < count; i++) {
      // `yiel*`와는 다르게, iterator의 `next` 메소드를 이용하면 iterable의 일부만 가져올 수 있다.
      const {value, done} = iterator.next();
      if(done) break;
      yield value;
    }
  }
}

// 위 generator 함수들이 어떻게 구현되었는지 파악해보자. 그리고 위 generator 함수들을 이용해 iterable이 제공하는 여러 기능들을 사용해보자.

{
  function* fn() {
    const num1 = yield '첫번째 숫자를 입력해주세요.';
    console.log(num1);

    const num2 = yield '두번째 숫자를 입력해주세요.';
    console.log(num2);

    return num1 + num2
  }
  const a = fn();

  console.log(a.next());
  console.log(a.next(3));
  console.log(a.next(5));
  console.log(a.next());
}