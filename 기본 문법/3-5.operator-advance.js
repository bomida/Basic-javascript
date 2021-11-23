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