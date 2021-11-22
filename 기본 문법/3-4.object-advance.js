// 'use strict';

// 객체 자신의 속성(Own Property)
// 속성 접근자(peroperty accessor)를 통해 객체의 속성에 접근할 때, 객체 자신이 갖고 있는 속성(own property)이 반환될 수도 있고, 혹은 프로토타입으로부터 상속받은 속성(inherited property)이 반환될 수 있다.
// in 연산자도 in 연산자와 속성 접근자를 가지고 둘을 구분할 수 없다.
{
  // 객체`obj`는 프로토타입의 `inheritedProp` 속성을 상속 받았다.
  const obj = Object.create({inheritedProp: 'inheritedProp'});
  // 객체 `obj`에 직접 `ownProp` 속성을 만들어주었다.
  obj.ownProp = 'ownProp';

  console.log('inheritedProp:', obj.inheritedProp);
  console.log('ownProp:', obj.ownProp);
  console.log('constructor:', obj.constructor);

  console.log('inheritedProp' in obj);
  console.log('ownProp' in obj);
  console.log('constructor' in obj);
}

// 이 때, 객체 자신이 특정 속성을 가지고 있는지 확인하기 위해 Object.prototype.hasOwnProperty 메소드를 사용할 수 있다.
{
  const obj = Object.create({inheritedProp: 'inheritedProp'});
  obj.ownProp = 'ownProp';

  console.log(`hasOwnProperty('inheritedProp')`, obj.hasOwnProperty('inheritedProp'));
  console.log(`hasOwnProperty('ownProp')`, obj.hasOwnProperty('ownProp'));
  console.log(`hasOwnProperty('constructor')`, obj.hasOwnProperty('constructor'));
}


// 데이터 속성(Data Property)의 부수속성(Property Attribute)
// 앞서 delete 연산자를 통해 객체의 속석을 지울 수 있다는 것을 배웠다.
{
  const obj = {prop: 1};
  delete obj.prop;
  console.log('after delete prop:', obj.prop);
}

// 하지만 객체의 속성을 항상 삭제할 수 있는 것은 아니고, 내장 객체 중에 어떤 속성은 delete 연산자를 통해 삭제할 수 없는 것이 있다.
// 이에 대한 정보는 속성의 부수속성(property attribute)라고 불리는 곳에 숨겨져 있다.
{
  // delete Math.PI; // TypeError: Cannot delete property 'PI'
  console.log(Math.PI);
}

// 객체의 부수속성을 아려보려면, Object.getOwnPropertyDescriptor라는 정적 메소드를 사용해 부수속성을 나타내는 객체를 얻을 수 있다. 이 객체를 일러 속성 기술자(property descriptor)라고 부른다.
{
  const obj = {prop: 1};
  console.log(Object.getOwnPropertyDescriptor(obj, 'prop'));
  console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
}
// obj.prop의 configurable 부수속성은 true이고 Math.PI의 configurable 부수속성은 false이다. 이 때문에 Math.PI를 삭제하려고 해도 삭제가 되지 않았던 것이다.

// 이처럼 '데이터 속성(data property)'에 대한 속성 기술자는 네 가지 속성을 갖는다.
// - value: 속성에 어떤 값이 저장되어 있는지를 나타낸다.
// - writable: 변경할 수 있는 속성인지를 나타낸다.
// - enumerable: 열거 가능한 속성인지를 나타낸다.
// - configurable: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타낸다.

// 두 속성의 writable 부수속성에도 차이가 있다. Math.PI는 속성의 값을 변경하려고 해도 변경되지 않는다.
{
  // Math.PI = 10; // Cannot assign to read only property 'PI' of object
}

// 어떤 객체의 전체 속성에 대한 속성 기술자를 얻어오려면, Object.getOwnPropertyDescriptors 정적 메소드를 사용하면 됩니다.
{
  console.log(Object.getOwnPropertyDescriptors(Math));
}

// 참고로 엄격 모드가 아닐 때에는 writable: false, configurable: false인 속성을 변경하거나 삭제하려고 해도 에러가 나지 않고 그냥 무시되지만, 엄격 모드일 때에는 에러가 발생한다.
{
  function func1() {
    delete Math.PI;
  }
  function func2() {
    'use strict';
    delete Math.PI;
  }

  func1(); // 에러가 나지 않는다.
  // func2(); // TypeError: Cannot delete property 'PI' of #<Object>
}