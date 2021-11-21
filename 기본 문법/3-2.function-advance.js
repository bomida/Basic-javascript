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


// arguments와 나머지 매개변수 (Rest Parameters)
// function 구문을 통해 생성된 함수가 호출될 때는, arguments라는 변수가 함수 내부에 자동으로 생성된다.
// arguments는 유사 배열 객체(array-like object)이자 반복 가능한 객체(iterable object)로, 함수가 주어진 인수가 순서대로 저장되기 때문에 인덱스를 가지고 인수를 읽어오거나 for...of를 통해 순회할 수 있다.
{
  function add(x, y) {
    // `arguments[0]`에는 `x`와 같은 값이, `arguments[1]`에는 `y`와 같은 값이 저장된다.
    console.log(arguments[0], arguments[1]);
    return x + y;
  }
  add(1, 2);
}

// arguments는 ES2015 이전까지 인수의 개수에 제한이 없는 함수를 정의하는 데에 사용되고는 했다.
// ES2015에서 도입된 나머지 매개변수(rest parameters)문법을 통해 똑같은 기능을 더 깔끔한 문법으로 구현할 수 있기 때문에 arguments는 더 이상 사용되지않는다.
{
  function sum() {
    let result = 0;
    for(let item of arguments) {
      result += item;
    }
    return result;

  }
  console.log(sum(1, 2, 3, 4));
}

// 매개변수 앞에 ... 을 붙여주면, 해당 매개변수에 모든 인수가 저장된다.
// arguments와는 달리 나머지 매개변수는 실제 배열이기 때문에, 배열의 메소드를 활용할 수 있다.
{
  function sum(...ns) {
    let result = 0;
    for(let item of ns) {
      result += item;
    }
  }
  console.log(sum(1, 2, 3, 4));
}

// 단, ...문법은 마지막 매개변수에만 사용할 수 있다.
{
  function printGrade(name, ...grades) {
    console.log(`${name} 학생의 점수는 ${grades.join(', ')} 입니다.`);
  }
  printGrade('Mary', 96, 78, 68);
}

// 마지막 매개변수가 아닌 매개변수에 ...문법을 사용하려고하면 에러가 난다.
// arguments 객체는 더 많은 기능을 포함하고 있지만, 여기에서 소개하지 않은 기능은 '주인 없는 this'와 함께 예전 버전 JS의 좋지않은 부분 중 하나이므로 사용하지 않는 것이 좋다.
{
  // function printGrades(...grades, name) {
  //   console.log(`${name} 학생의 점수는 ${grades.join(',')} 입니다.`);
  // }
  // SyntaxError: Rest parameter must be last formal parameter
}


// 화살표 함수 (Arrow Function)
// 화살표 함수(arrow function)는 ES2015에서 도입된 새로운 유형의 함수이다. 화살표 함수는 (매개변수 목록) => {함수내용}과 같은 문법을 통해 정의할 수 있다.
// 다만, 특정 조건을 만족하는 화살표 함수는 조금 더 간결한 문법으로 정의할 수도 있다.
// - 만약 화살표 함수의 매개변수가 하나라면, 괄호를 생략할 수 있다.
// - 만약 화살표 함수의 내부가 하나의 구문으로 이루어졌다면, 중괄호를 생략할 수 있다. 이때, 이 구문의 결과값이 곧 함수의 반환값이 된다.
{
  const add = (x, y) => {
    return x + y;
  }
  const negate = (x) => {
    return !x;
  }
}

// 위 코드를 더 짧게 작성할 수 있다.
{
  const add = (x, y) => x + y;
  const negate = x => !x;
}

// function 구문으로 정의되는 함수와 비교했을 때, 화살표 함수는 문법 측면에서만 다른 것이 아니라 특별한 성질을 갖고 있다.
// - 화살표 함수는 생성자로 사용될 수 없다. 따라서 prototype 속성을 갖고 있지 않다.
// - 화살표 함수는 스스로의 this, arguments, super를 가지지 않는다.
// - 화살표 함수 내부에서 yield 키워드를 사용할 수 없다. 즉, 제너레이터로 사용될 수 없다.
// 이때, 스스로 this를 가지지 않는다는 말은 함수 내부에서 this를 사용할 수 없다는 말이 아니라 화살표 함수 내부에서 this를 사용하면, 그 this는 함수가 정의된 스코프에 존재하는 this를 가리킨다. (new.target, arguments, super 모두 마찬가지)

// 이런 성질 때문에, 화살표 함수 내부에 잇는 this는 엄격 모드의 영향을 받지 않는다.
{
  function Person(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const mary = new Person('mary');
  console.log(mary.getName());
}

// 주의!
// 화살표 함수는 생성자로 사용될 수 없지만, 위 '엄격 모드' 파트에 있는 예제와 비슷하게 보이기 위해서 함수의 이름을 대문자로 시작하도록 했다.
{
  const Person = (name) => {
    'use strict';
    this.name = name;
  }
  Person('mary');
  console.log('window.name:', window.name);
}

// 화살표 함수는 스스로의 this를 갖지 않는다고 했는데, 이 때문에 화살표 함수에 대해 bind, call, apply 메소드를 호출해도 아무런 효과가 없다.
{
  function Person(name) {
    this.name = name;
    this.getName = () => {
      // 여기에서 사용된 `this`는 `함수가 정의된 스코프`,
      // 즉 `Person 함수 스코프`에 존재하는 `this`를 가리키게 된다.
      return this.name;
    }
  }
  const mary = new Person('mary');

  // `this`를 바꿔보려고 해도, 아무런 효과가 없다.
  console.log(mary.getName.call({name: 'john'}));
}

{
  const mary = {
    name: 'mary',
    getName: () => {
      return this.name;
    }
  };
  // 위의 화살표 함수는 전역 스코프에서 정의되었기 때문에, `this`는 전역 객체를 가리킨다.
  // `mary`의 메소드로 사용된다고 해도, 이 사실이 변하지 않는다.
  // 브라우저 환경의 전역 객체인 `window`는 `name`이라는 속성에 빈 문자열을 갖고 있기 때문에, 이 값이 대신 반환된다.
  console.log(mary.getName());
}

{
  function Person(name) {
    this.name =  name;
    this.getName = () => {
      return 'printResult: ' + this.name;
    }
  }

  const mary = new Person('mary');
  function printResult(func) {
    console.log(func());
  }
  printResult(mary.getName);
}

// NOTE!!
// function 구문으로 생성되는 함수가 단순한 함수 이외에 생성자가 제너레이터등의 여러 기능까지 떠맡고 있는 반면에, 화살표 함수는 오직 함수 혹은 메소드로 사용되도록 만들어졌다.
// 함수의 값으로 다루어야 하는 경우(특히 함수를 다른 함수의 인수로 넘겨야하는 경우) 사용한다.

// 매개변수의 기본값(Default Parameter)

// Array.prototype.slice 메소드는 인수를 주었을 때나 주지 않았을 때나 모두 잘 동작한다.
{
  const arr = [1, 2, 3, 4, 5];
  console.log('slice:', arr.slice());
  console.log('slice:', arr.slice(2));
  console.log('slice:', arr.slice(2, 3));
}

{
  // 인수를 그대로 반환하는 함수(identity function)이다.
  const ident = x => x;
  console.log(ident());
}

{
  function hello(name) {
    // 매개변수는 `var` 변수와 같은 성질을 갖기 때문에, 재대입을 할 수 있다.
    if(name === undefined) {
      name = 'Mary';
    }
    console.log(`Hello, ${name}!`);
  }
  hello('john');
  hello();
  hello(undefined);
}

{
  // `Mary`가 `name` 매개변수의 기본값이 된다.
  function bye(name = 'Mary') {
    // 코드가 훨씬 더 깔끔해졌다.
    console.log(`bye, ${name}!`);
  }
  bye('john');
  bye();
  bye(undefined);
}