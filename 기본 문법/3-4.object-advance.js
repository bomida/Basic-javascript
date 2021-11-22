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

// 속성 기술자를 통해 객체의 속성 정의하기
// 속성 기술자는 우리가 직접 속성 기술자를 가지고 석성을 정의할 수도 있다. 프로토타입 상속을 위해 사용했던 Object.create 정적 메소드는, 사실 두 번째 인수로 속성 기술자 객체를 받는다.
{
  const obj = Object.create(Object.prototype, {
    prop: {
      value: 1,
      writable: false,
      enumerable: true,
      configurable: false
    },
    another: {
      value: 2
    }
  });

  console.log(obj);

  obj.prop = 2;
  console.log(obj.prop);

  delete obj.prop;
  console.log(obj.prop);
}
// 속성 기술자에 writable, enumerable, configurable 속성을 주지 않으면, 해당 부수속성은 모두 false로 취급된다.

// Object.create 외에, Object.defineProperty 혹은 Object.defineProperties 정적 메소드를 사용해서 이미 만들어진 객체에 대한 속성을 정의할 수도 있다.
{
  const obj = {};
  Object.defineProperty(obj, 'prop', {
    vlaue: 1,
    writable: false,
    enumertable: true,
    configurable: false
  });
}


// 접근자 속성(Accessor Property)와 그 부수속성
{
  // 접근자 속성의 필요성을 설명하기 위해, 화폐를 다루면서 환전 기능이 있는 프로그램을 짜야한다고 가정하고, won 단위와 dollar 단위를 저장하는 객체를 만들 수 있을 것이다.
  const money = {
    won: 1086,
    dollar: 1
  }
  
  // 하지만 위의 코드에는 문제가 있다. won 속성이 변경되었을 때 dollar 속성까지 자동으로 변경되지 않으므로, 둘 사이의 동기화가 깨지게 된다.
  console.log(money.won += 1086);
  // 2172원이 되었지만 dollar의 값은 2달러로 변경되지 않았다.
  console.log(money.dollar);

  // 이를 해결하기 위해, 객체에는 _won 속성을 저장하고 달러 단위가 필요할 때는 원 단위로 부터 계산해내도록 일일이 메소드를 두는 방법을 사용하고 있다.
  function Money(won = 0) {
    Object.defineProperty(this, '_won', {
      value: won,
      writable: true
    }); // enumerable: false, configurable: false
  }
  
  // 원 단위 값을 가져오는 메소드
  Money.prototype.getWon = function() {
    return this._won;
  };
  
  // 원 단위 값을 저장하는 메소드
  Money.prototype.setWon = function(amount) {
    this._won = amount;
  };
  
  // 달러 단위 값을 가져오는 메소드
  Money.prototype.getDollar = function() {
    return this._won / 1086;
  };
  
  // 달러 단위 값을 저장하는 메소드
  Money.prototype.setDollar = function(amount) {
    this._won = amount * 1086;
  };
  
  const m = new Money();  

  m.setWon(1086);
  console.log(`won to dollar:`, m.getDollar());
  m.setDollar(2);
  console.log(`dollar to won:`, m.getWon());

  // 두 단위 사이의 동기화가 잘 유지되지만, 코드가 길어졌다. 특히, 속성을 사용하기 위해 매번 메소드를 호출해야하는 것이 불편하다.
}
{
    // Getter와 Setter 기능을 사용해, 더 깔끔하게 작성할 수 있다.

    const obj = {

      // 메소드 이름 앞에 `get`을 써주면, 이 메소드는 getter메소드가 된다.
      get prop() {
        console.log(`getter가 호출되었다.`);
        return this._hidden;
      },

      // 메소드 이름 앞에 `set`을 써주면, 이 메소드는 setter 메소드가 된다.
      set prop(arg) {
        console.log(`setter가 호출되었다.`);
        this._hidden = arg;
      }
    }

    // `set prop` 메소드가 `1`을 인수로 해서 호출된다.
    obj.prop = 1;

    // `get prop` 메소드가 호출되고 해당 메소드의 반환값을 읽어온다.
    obj.prop;

    Object.getOwnPropertyDescriptors(obj);
}
// obj 객체 리터럴 안에서 함수 앞에 get과 set 키워드를 사용했다. 이 두 함수는 각각 prop이라는 속성의 getter와 setter가 된다. getter는 속성을 읽어올 때, setter는 속성을 변경할 때 호출된다.

// getter와 setter가 정의 된 속성을 접근자 속성(accessor property)이라고 한다. 접근자 속성에 대한 속성 기술자는 네 가지 속성을 갖는다.
// - get: getter함수
// - set: setter함수
// - enumerable: 열거 가능한 속성인지를 나타낸다.
// - configurable: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타낸다.