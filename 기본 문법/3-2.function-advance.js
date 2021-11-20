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
{
  function Person(name) {
    this.name = name;
  }

  // `new`를 빠트린 채 생성자를 호출하면, `this`는 전역 객체를 가리키게된다.
  Person('john');

  // 의도치 않게 전역 객체의 속성이 변경되었다.
  console.log('window.name:', window.name);
}