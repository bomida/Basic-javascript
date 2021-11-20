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
