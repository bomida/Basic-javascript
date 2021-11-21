// 'use strict';

// 객체로서의 함수
// 함수는 function 생성자로부터 생성되는 개체이다. 다만, 다른 객체들과는 다르게 호출할 수 있다(callable)는 특징이 있다.

// 함수 객체는 두 가지 유용한 속성을 갖고 있다.
// - length: 함수의 매개변수의 개수를 반환한다.
// - name: 함수의 이름을 반환한다.
{
  function add(x, y) {
    return x + y;
  }
  console.log('add.length:', add.length);
  console.log('add.name:', add.name);
  // name 속성의 값은 다양한 조건에 의해 결정된다.
}

// 주인 없는 this
// this는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드이다. 하지만 생성자나 메소드가 아닌 함수에서 this 키워드를 사용한다고 해서 에러가 나지 않는다.
{
  function printThis() {
    console.log(this);
  }
  printThis();
  // 이 예제에서 this는 전역 객체를 가리키고 있다.
}

// JS에는 여러 가지 좋지 않은 부분들이 있는데, this가 전역 객체를 가리키는 성질은 이들 중 가장 대표적인 것이다.
{
  function Person(name) {
    this.name = name;
  }

  // `new`를 빠트린 채 생성자를 호출하면, `this`는 전역 객체를 가리키게된다.
  Person('john');

  // 의도치 않게 전역 객체의 속성이 변경되었다.
  console.log('window.name:', window.name);
}


// 엄격 모드(Strict Mode)
// 엄격 모드를 통해 위와 같은 실수를 방지할 수 있다.
// 엄격 모드를 활성화 하려면 .js 파일 또는 함수의 가장 위에 'use strict';와 같이 문자열을 쓰자.
// 파일 위에 엄격 모드를 선언하면 해당 파일 전체가 엄격 모드로 동작하고, 함수 위에서 선언한다면 해당 함수만 엄격 모드로 동작한다.
// 실수를 미연에 방지해주기 때문에, 항상 사용하는 것이 좋다.
// 하지만 ES2015 모듈을 이용해 작성된 코드는 항상 엄격 모드로 동작하기 때문에, 엄격 모드를 선언해주지 않아도 된다.
// 또는 Babel과 TypeScript같은 트랜스파일러를 통해 ES2015 모듈 방식으로 작성되기 때문에 이런 도구를 사용하고 있다면 본인이 작성하는 코드가 항상 엄격 모드로 동작하고 있는 것이다.
{
  function Person(name) {
    // 엄격 모드를 활성화한다.
    'use strict';

    // `undefined`의 속성을 변경하려고 하고 있기 때문에, 에러가 난다.
    this.name = name;
  }
  // Person('john'); // TypeError: Cannot set property 'name' of undefined
}


// this 바꿔치기
// bind, call, apply 메소드를 사용하면 원하는 값을 가리키게 만들수 있다.

// 함수 객체의 bind 메소드를 호출하면, 메소드의 인수로 넘겨준 값이 this가 되는 새로운 함수를 반환한다.
{
  // ex1
  function printGrade(grade) {
    console.log(`bind ex1: ${this.name} 님의 점수는 ${grade}점 입니다.`);
  }
  const student = {name: 'Mary'};
  const printGradeForMary = printGrade.bind(student);

  printGradeForMary(100);
}
{
  // ex2
  function sum(num) {
    return num + this.num1 + this.num2;
  }
  let myObj = {num1: 20, num2: 10};
  let customSum = sum.bind(myObj);

  console.log('bind ex2:', customSum(5));
}
{
  // ex3
  // function saving(deposit) {
  //   console.log(`bind ex3: ${account.name}님 ${deposit}원 입금되었습니다.`);
  // }
  // const deposit = prompt(`입금할 금액을 넣어주세요.`).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // const account = {name: 'bomi'};
  // const client = saving.bind(account);

  // client(deposit);
}

// call 혹은 apply 메소드를 사용하면, 새로운 함수를 만들지 않고서도 임시적으로 this를 바꿔버릴 수 있다. call과 apply는 인수를 넘겨주는 형식에 차이가 있을 뿐, 나머지 기능은 동일하다.
{
  function printGrade(grade) {
    console.log(`${this.name} 님의 점수는 ${grade}점 입니다.`);
  }
  const student = {name: 'Mary'};

  printGrade.call(student, 100);
  printGrade.apply(student, [100]);
}