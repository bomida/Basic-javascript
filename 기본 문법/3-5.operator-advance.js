// 'use strict';

// 표현식 (Expression)
// 코드 중에 값으로 변환될 수 있는 부분을 표현식(Expression)이라 부른다

// 리터럴
// - 1
// - null
// - 'hello'
// - {prop: 1}
// - [1, 2, 3]
// - function(x, y) { return x + y }
// (x, y) => x + y

// 연산자
// - 1 + 2
// - true && false
// - 'prop' in obj
// - delete obj.prop
// - typeof null
// - obj instanceof Object
// - new Object()
// - (variable 변수가 선언되어 있다면) variable = 1

// 기타
// - this
// - variable (변수)
// - obj.prop (속성)
// - func() (함수 호출)

// 표현식을 값으로 변환하기 위해 실제로 해당 표현식을 실행시키는 절차를 평가(evaluation)라고 한다.


// Short-circuit Evaluation
// 피연산자가 두 개인 연산 중에, 값을 결정하기 위해 양쪽 피연산자 모두가 필요하지는 않은 경우가 있다. 아래 식에서는 expression 부분의 표현식이 평가될 필요가 없다. JS에서는 expression 부분이 평가되지 않는다. 이런 평가 방식을 short-circuit evaluation이라고 한다.
{
  false && expression
  true || expression
  0 ?? expression
}

// 세 연산자의 실제 동작 방식은 다음과 같다
// - &&: 왼쪽 피연산자를 평가해서 falsy이면 이 값을 바로 반환한다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환한다.
// - ||: 왼쪽 피연산자를 평가해서 truthy이면 이 값을 바로 반환한다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환한다.
// - ??: 왼쪽 피연산자를 평가해서 null이나 undefined가 아니면이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.

// 위 성질들을 이용해 if 구문을 흉내낼 수 있다.
{
  // `func1`과 `func2`는 동일하게 동작한다.
  function func1(cond) {
    if(cond) {
      console.log('조건을 만족합니다.');
    }
  }
  function func2(cond) {
    cond && console.log('조건을 만족합니다.');
  }
}
{
  // `func1`과 `func2`는 동이랗게 동작합니다.
  function func1(arg) {
    if(!arg) {
      arg = 'hello';
    }
    console.log(arg);
  }
  function func2(arg) {
    arg = arg || 'hello';
    console.log(arg);
  }
}

// 특히 || 연산자는 '기본 매개변수'(ES2015)문법이 생기기 전까지 매개변수의 기본값을 지정하는 용도로 많이 사용됐다. ?? 연산자는 ES2020에 도입되었다.
// short-circuit evalutation을 사용하면 코드의 길이가 줄어드는 효과가 있지만, 코드의 의미가 불명확해질 수 있고 논리적으로 놓치는 부분이 생길 수 있으니 주의하자.


// Optional chaining
// 여러번 중첩된 객체의 속성에 접근할 때, 특정 깊이에 중첩된 객체가 없을 수도 있다면 이를 고려해서 코드를 짜야한다. 
{
  const person = {
    name: '준하',
    age: 28,
    company: {
      name: 'Hello World JS',
      office: {
        name: '판교 오피스',
        address: '경기도 성남시 분당구 판교동',
      }
    }
  };

  // 이때, 준하 회사의 주소에 접근하기 위해서는 다음과 같은 표현식을 작성할 수 있다.
  const address = person.company.office.address;
}

// 만약 준하가 아직 학생이어서 취업을 하지 않은 경우, 혹은 회사 주소를 입력하지 않은 경우, 다음과 같이 회사의 주소 정보를 가지지 않을 수 있다.
{
  // 회사 정보가 없음
  const person = {
    name: '준하',
    age: 28,
  };
}
{
  // 회사 오피스 정보를 입력하지 않음
  const person = {
    name: '준하',
    age: 28,
    company: {
      name: 'Hello World JS',
    }
  };

  // 이 때, 그냥 person.company.office.address에 접근하면 에러가 난다.
  // const address = person.company.office.address;
  // TypeError: Cannot read properties of undefined (reading 'address')
  
  // 이 경우 회사의 주소에 접근하기 위해 중접된 객체마다 속성에 데이터가 있는지 확인해야 한다. 하나하나 if문으로 null check를 할 수도 있지만, 앞서 언급한 && 연산자를 사용하여 다음과 같이 작성할 수 있다.
  const address = person.company && person.company.office && person.company.office.address;
}

// 이렇게 논리 연산자를 사용하여 작성하면 if문을 중첩하여 작성하는 것 보다는 간결하지만 다음과 같은 단점을 가진다.
// - 객체가 많이 중첩될수록 코드의 길이가 길어진다.
// - 값이 null 과 undefined가 아닌 falsy 값인 경우도 고려해야 한다.

{
  // 많은 중첩
  // const sixth = first && first.second && first.second.third && first.second.third.fourth && first.second.third.fourth.fifth && first.second.third.fourth.fifth.sixth;

  // // 값이 null과 undefined가 아닌 falsy 값인 경우
  // const person = {
  //   name: '준하',
  //   age: 28,
  //   company: {
  //     name: '',
  //   }
  // };

  // // companyNameLength에 숫자 대신 빈 문자열이 할당됩니다.
  // const companyNameLength = person.company && person.company.name && person.company.name.length && 0; // ''

  // // 이를 고려하여 아래처럼 해주어야합니다.
  // const companyNameLength = person.company && typeof person.company.name === 'string' && person.company.name.length; // 0
}
{
  // ES2020에 포함된 Optional chaining 문법을 사용하면 이러한 번거로움을 해소할 수 있다.

  const person = {
      name: '준하',
    age: 28,
    company: {
      name: '',
    }
  };

  const address = person.company?.office?.address;
  console.log(`address:`, address);
  const companyNameLength = person.company?.name?.length;
  console.log(`companyNameLength:`, companyNameLength);
  
  // 여기서 .? 연산자를 Optional chaining 연산자라고 부릅니다. 이 연산자는 속성 접근자와 비슷한 기능을 하지만, Obj?prop에서, obj가 null 혹은 nudefined이면 obj가 바로 반환되고, 아니면 obj.prop이 반환된다. 덕분에 접근하는 대상이 null 혹은 undefined인 경우에 에러가 날까봐 걱정할 필요가 없다.

  // 만약 아래 예시처럼 입력된 주소가 없는(null, undefined)경우 '주소 없음'을 표시하고 싶다면 ?? 연산자와 함께 활용할 수도 있다.
  const address2 = person.company?.office?.address ?? '주소 없음';
  console.log(`address2:`, address2);
}


// 삼항 연산자(Ternary Operator)
// a ? b : c 와 같이 쓰이는 삼항 연산자(ternary operator)는 조건부 연산자(conditional operator)라고도 불립니다. 앞의 표현식에서, a가 truthy이면 b가, falsy이면 c가 반환된다.
{
  console.log(true ? 1 : 2);
  console.log(false ? 1 : 2);
}

// 삼항 연산자 역시 평가할 필요가 없는 부분은 평가하지 않는다.
{
  true ? console.log('left') : console.log('right');
  false ? console.log('left') : console.log('right');
}

// 삼항 연산자 역시 if...else를 대신하는 용도로 자주 사용된다.
{
  // `func1`과 `func2`는 동일하게 동작한다.
  function func1(cond) {
    if(cond) {
      return true;
    } else {
      return false;
    }
  }

  function func2(cond) {
    return cond ? true : false;
  }
}


// 증가/감소 연산자(Increment/Decrement Operator)
// JS에는 1단위로 정수의 증가/감소 연산을 할 수 있는 ++, -- 연산자가 있다.
{
  let num = 10;

  num++;
  console.log(num);

  num--;
  console.log(num);
}

// 여기서 num++ 역시 표현식이다. 즉, 값으로 변환된다는 말이다.
{
  let num = 10;
  console.log(`num++:`, num++);
  console.log(`num--:`, num--);
}

// 분명 num++ 표현식이 평가된 이후에 num의 값이 증가하기는 했다. 그런데 num++ 표현식 자체는 증가시키기 전의 값을 반환한다.
// ++ 연산자는 피연산자의 값을 1 증가시킨다. 단,
//  - ++ 연산자를 피연산자 앞의 쓰면, 그 표현식은 값을 증가시키고 뒤의 결과값을 반환한다.
//  - ++ 연산자를 피연산자 뒤에 쓰면, 그 표현식은 값을 증가시키기 전의 피연산자를 그대로 반환한다.
// 이 동작 방식은 감소 연산자(--)에도 적용된다.

{
  // 아래 코드 예제의 위에 있는 루프는 3번 실행되지만, 아래 있는 루프는 2번 밖에 실행되지 않는다.
  let i = 3;
  while (i--) {
    console.log('감소 연산자를 뒤에 쓰면 어떻게 될까요?');
  }

  let j = 3;
  while (--j) {
    console.log('감소 연산자를 앞에 쓰면 어떻게 될까요?');
  }

  // 증감 연산자의 성질을 활용하면, 코드를 조금 더 짧게 작성할 수 있다.
  function Counter(initial = 0) {
    this._count = initial;
  }

  // `this._count`를 1 증가시키면서도 증가시키기 전 값을 반환하는 코드를,
  Counter.prototype.lonInc = function() {
    const result = this._count;
    this._count += 1;
    return result;
  }
  // 아래와 같이 짧게 쓸 수 있다.
  Counter.prototype.inc = function() {
    return this._count++;
  }
}


// 할당 연산자 (Assignment Operator)
// = 연산자를 비롯해, 연산 후 할당을 하는 +=, -= 등등의 연산자 역시 모두 피연산자와 함께 표현식을 이룹니다.
{
  let x;
  console.log(`x = 5:`, x = 5);
}

// 할당 연산자에 대한 표현식의 결과값은 왼쪽 피연산자에 실제로 할당된 값이 된다.
{
  let x = 5;
  console.log(`x += 5:`, x += 5);

  let y = 6;
  console.log(`x -= 3:`, x -= 3);
}


// 연산자 우선 순위 (Operator Precedence)
// 연산자 여러 개가 연이어 사용된 표현식에서는, 연산자 우선 순위(operator precedence)에 따라 어떤 연산자를 먼저 계산할지가 결정된다.
{
  // `+` 연산자가 왼쪽에 있지만, `*` 연산자의 우선 순위가 더 높으므로 먼저 계산된다.
  console.log(`2 + 3 * 4 =`, 2 + 3 * 4);
}
{
  // 결과 값이 무엇일지 맞춰보세요.
  console.log(`typeof 'helloworld' === 'hello' + 'world':`, typeof 'helloworld' === 'hello' + 'world');
}
{
  // 연산 순서가 명확해졌습니다.
  console.log(`typeof ('helloworld' === ('hello' + 'world')):`, typeof ('helloworld' === ('hello' + 'world')));
}


// 연산자 결합 순서(Operator Associativity)
// 이번에는 같은 연산자를 연이어 쓴 경우에 주의해야 할 점에 대해 알아보자.
// 어떤 연산자는 같은 연산자를 연이어 쓴 경우에 왼쪽부터 결합되어 계산된다.
{
  // 위아래 식은 완전히 같은 방식으로 동작한다.
  console.log(`1 + 2 + 3 + 4 + 5:`, 1 + 2 + 3 + 4 + 5);
  console.log(`(((1 + 2) + 3) + 4) + 5:`, (((1 + 2) + 3) + 4) + 5);

  // 왼쪽부터 결합되어, 처음으로 등장하는 falsy 값이 표현식의 결과값이 된다. 나머지는 평가되지 않는다.
  // console.log(`a && b && c && d`, a && b && c && d);
  // console.log(`((a && b) && c) && d`, ((a && b) && c) && d);

  // 왼쪽부터 결합되어, 처음으로 등장하는 truthy 갑이 표현식의 결과값이 된다. 나머지는 평가되지 않는다.
  // console.log(a || b || c || d);
  // console.log(((a || b) || c) || d);
}

// 연산자의 결합성 때문에, 수학에서 쓰이는 식을 JS에서는 그대로 쓸 수 없는 경우가 있다.
{
  // 위아래 식은 완전히 같은 방식으로 동작한다.
  // 결과적으로 'true > 1`이 되어 결과값이 `false`가 된다.
  3 > 2 > 1;
  (3 > 2) > 1;
  true > 1;

  // 세 개의 수에 대한 비교를 하고 싶다면 아래와 같이 해야 한다.
  console.log(3 > 2 && 2 > 1);
}

// 어떤 연산자는 오른쪽부터 결합되어 계산된다.
{
  // 위아래 식은 완전히 같은 방식으로 동작한다.
  console.log(`2 ** 2 ** 3:`, 2 ** 2 ** 3);
  console.log(`2 ** (2 ** 3):`, 2 ** (2 ** 3));

  // 위아래 식은 완전히 같은 방식으로 동작한다.
  let x, y, z;
  console.log(`z = y = x = 1:`, z = y = x = 1);
  console.log(`z = (y = (x = 1)):`, z = (y = (x = 1)));

  // 위아래 식은 완전히 같은 방식으로 동작한다.
  // console.log(`a ? b : c ? d : e ? f : g:`, a ? b : c ? d : e ? f : g);
  // console.log(`a ? b : (c ? d : (e ? f : g)):`, a ? b : (c ? d : (e ? f : g)));
}


// 값을 비교하는 여러가지 방법
// JS에서는 두 값이 같은지를 비교하기 위해 아래 세 가지 방법을 사용할 수 있다.
// - ==, !=
// - ===, !==
// - Object.is
// 여기서 a != b는 !(a == b)와 항상 같다. a !== b 또한 !(a === b)와 항상 같다.

// 추상적 동일성(Abstract Equality)
// == 연산자는 두 피연산자의 타입이 다를 때는 타입을 변환한 후 비교한다. 두 피연산자의 타입이 같다면 === 연산자와 같은 방식으로 동작한다.
{
  console.log(`'1' == 1`, '1' == 1);
  console.log(`true == 1`, true == 1);
  console.log(`false == 0`, false == 0);
  console.log(`'' === false`, '' === false);
}
//  여기서 a != b는 !(a == b)와 항상 같다. a !== b 또한 !(a === b)와 항상 같다.


// 추상적 동일성(Abstract Equality)
// == 연산자는 두 피연산자의 타입이 다를 때는 타입을 변환한 후 비교합니다. 두 피연산자의 타입이 같다면 === 연산자와 같은 방식으로 동작한다.
{
  console.log(`'1' == 1`, '1' == 1);
  console.log(`true == 1`, true == 1);
  console.log(`false == 0`, false == 0);
  console.log(`'' == false`, '' == false);
}

// 타입을 변환하는 과정에서 의도치 않은 방식으로 동작할 수 있기 때문에, 주의해서 사용해야 한다.
{
  console.log(`' \n\t ' == 0`, ' \n\t ' == 0);
}

// null check를 할 때 만큼은 == 연산자가 유용하게 사용된다. == 연산자는 아래와 같은 성질을 갖고 있습니다.
// - null과 undefined 두 값을 동일한 것으로 취급한다. 즉, 결과값이 true가 된다.
// - null과 undefined를 이 두 값을 제외한 다른 값과 비교했을 때는 항상 결과값이 false가 된다.
{
  console.log(`null == undefined`, null == undefined);
  console.log(`null == 0`, null == 0);
  console.log(`null == ''`, null == '');
  console.log('undefined == false', undefined == false);
  console.log(`undefined == NaN`, undefined == NaN);
}


// 엄격한 동일성(Strict Equality)
// ===, !== 연산자는 두 피연산자의 타입이 다른 경우 무조건 false를 반환한다. 따라서 ==, != 연산자와는 달리, 서로 다른 타입의 피연산자에 대해서도 안심하고 사용할 수 있다.
{
  console.log(`'1' === 1`, '1' === 1);
  console.log(`true === 1`, true === 1);
  console.log(`false === 0`, false === 0);
}

// 다만, number 타입에 대한 비교를 할 때에는 다음과 같이 특이한 동작을 한다.
{
  // `===` 연산에서, `NaN`은 number 타입의 **모든** 값과 다르다. 이는 자기 자신에 대해서도 마찬가지이다.
  console.log(`NaN === NaN:`, NaN === NaN);

  // `0`과 `-0`은 서로 다른 값이지만, `===` 연산은 이 둘을 같은 것으로 취급한다.
  console.log(`0 === -0:`, 0 === -0);
}


// Object.is
// Object.is 정적 메소드는 두 인수가 정말로 같은 값인지를 검사합니다. 아래의 두 예외를 제외하고는 === 연산자와 같은 방식으로 동작한다.
{
  console.log(Object.is(NaN, NaN));
  console.log(Object.is(0, -0));
}

// 무엇을 써야 하나요?
// 특별한 경우를 제외하고는 === 혹은 !== 연산자를 사용해서 비교를 하면 됩니다. 다만 null check를 할 때 만큼은 == 혹시 != 연산자를 사용하는 것이 편하다.


// Spread Syntax
// Spread 문법을 사용하면 배열(혹은 객체)을 다른 배열(혹은 객체)에 쉽게 삽입할 수 있다. 나머지 매개변수(rest parameters) 문법과 같은 기호인 ...가 사용되지만, 그 의미는 다르다.

// 배열
// Spread 문법을 통해 배열 리터럴의 중간에 다른 배열을 이어붙일 수 있다. 이 때, arr1 안에 있는 요소들이 arr2 안으로 복사됩니다.
{
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];

  // 이전에는 같은 작업을 하기 위해 `Arrary.prototype.slice` 메소드를 사용했다.
  arr1.slice();
}

// Spread 문법은 함수 호출 시에도 사용할 수 있다. 이 때 배열의 모든 요소를 함수의 인수로 넘긴다.
{
  const arr = [1, 2, 3, 4, 5];

  // 아래 코드는 `Math.max(1, 2, 3, 4, 5)`와 동일하다.
  console.log(`Math.max(...arr)`, Math.max(...arr));

  // 이전에는 같은 직업을 하기 위해 `Function.prototype.apply` 메소드를 사용했다.
  console.log(`Math.max.apply(null, arr)`, Math.max.apply(null, arr));
}

// 객체
// 객체에 대해서도 spread 문법을 사용할 수 있다. 이 때 자기 자신의 (own) 열거 가능한(enumerable) 속성만을 복사합니다.
// 아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 Babel 플러그인 혹은 TypeScript 등의 트랜스파일러를 사용해야 한다.
{
  const obj1 = {prop: 1};
  const obj2 = {...obj1};

  // 이전에는 같은 작업을 하기 위해 `Object.assign` 정적 메소드를 사용했다.
  Object.assign({}, obj1);
}


// 분해대입(Destructuring Assignment)

// 배열의 분해대입
// 다음과 같이 변수의 선언과 동시에 배열의 요소를 해당 변수에 대입할 수 있다.
{
  const [a, b, c] = [1, 2, 3];
  console.log(a, b, c);
}

// 만약 요소의 순서와 일치하는 변수가 좌측 목록에 들어있지 않으면, 해당 요소는 무시된다.
{
  // 여기서 `2`, `4`는 무시된다.
  const [a, , c] = [1, 2, 3, 4];
  console.log('a, c', a, c);
}