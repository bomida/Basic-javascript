'use strict';

// let, const 변수와 블록 스코프

{
  // let, const는 같은 이름을 갖는 변수의 재선언을 허용하지 않는다.
  // let foo = 1;
  // let foo = 2; // Duplicate declaration 'foo'
  // const foo = 3; // Duplicate declaration 'foo'

  // function func(param) {
  //   let param = 1; // Duplicate declaration 'param'
  // }
}
{
  // 변수가 선언되기 전에 참조하려고 하면 에러가 난다.
  // console.log(foo);
  // let foo = 1;
}
{
  // let과 const가 바로 블록 스코프(block scope)를 갖는다.
  // 블록 안에서 선언된 변수는 외부에서 접근할 수 없다.
  if (true) {
    let i = 0;
    // 내부에 있는 console.log는 작동한다.
  }
}
{
  // console.log(i); // ReferenceError: i is not defined
  // if, for, while, function등의 구문을 사용하면 블록이 형성되어, 그 안에서 let 또는 const를 통해 선언된 변수는 외부에서 접근할 수 없다.
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i); // ReferenceError: i is not defined
}
{
  let i = 0;
}
// console.log(i); // ReferenceError: i is not defined


// var 변수와 함수 스코프
{
  // var는 let과 유사하게, 값을 다시 대입할 수 있는 변수이다.
  // var는 함수의 매개변수와 유사하게, 함수 스코프를 갖는다.
  var foo = 1;
  foo = 2;
}
{
  // var를 통해 선언된 변수는 let, const로 선언된 변수와는 다른 특징을 갖는다.
  // var를 통한 변수 선언은 재선언을 허용한다.
  function func() {
    var foo = 1;
  }
  func();
  console.log(foo); // ReferenceError: foo is not defined
}
{
  // 이때, 아무런 에러도 발생하지 않는다.
  var foo = 1;
  var foo = 1;
  
  // 호이스팅(hoisting) - var로 선언된 변수는 내부적으로 함수 혹은 파일의 맨 위로 끌어올려지는 과정을 거치기 때문에, 같은 스코프 안에만 있다면 변수가 선언되기 전에도 해당 변수에 접근할 수 있는 현상
  // 단, 호이스팅이 일어난다고 하더라도, 변수의 선언만 위로 끌어올려질 뿐 값을 대입하는 과정은 코드의 순서에 맞게 이루어지기 때문에 대입이 일어나기 전에 변수의 값을 읽으면 undefined가 불러와지게 된다.
}
{
  // 마지막으로, var 변수는 함수 스코프를 갖는다. 즉, 함수가 아닌 블록에서 정의된 var 변수는 해당 블록 바깥에서도 유효할 수 있다.
  console.log(foo); // undefined
  var foo = 1;

  function func() {
    console.log(bar); // undefined
    var bar = 1;
  }
  func();
}
{
  // 이 특징에 주의하지 않으면, 중첩된 for 루프와 같이 블록이 중첩된 코드에서 의도치 않은 동작을 할 수 있다.
  for(var i = 0; i < 3; i++) {
    console.log('outer');
    // 위아래 두 `i`변수는 같은 함수 스코프에서 정의 된 같은 변수이다.
    // 바깥쪽 루프를 한 번 도는 동안, 안쪽 루프를 도느라 이미 `i`의 값이 3이 되어버렸다.
    for(var i = 0; i < 3; i++) {
      console.log('inner');
    }
  }
}