'use strict';

// JSON(Javascript Object Notation)은 웹의 세계에서 가장 맣이 사용되는 직렬화 형식이다.
{
  const json = {
    "key": "value",
    "arr": [1, 2, 3],
    "nullProp": null
  }
}

// JSON은 언어에 관계없이 사용할 수 있는 직렬화 형식이고, 실제로 많은 프로그래밍 언어들이 JSON관련 기능을 내장하고 있다.
// JS 역시 JSON 관련 기능을 내장하고 있다. 같은 이름의 JSON내장 객체의 메소드를 통해 직렬화와 역직렬화를 할 수 있다.
{
  // `JSON.stringify`로 직렬화를 할 수 있다.
  const stringify = JSON.stringify({
    key: 'value',
    arr: [1, 2, 3],
    nullProp: null,
    undefinedProp: undefined // 값이 `undefined`인 속성은 직렬화 과정에서 제외된다.
  }); // '{"key":"value","arr":[1,2,3],"nullProp":null}'
  console.log(stringify);

  // `JSON.parse`로 역직렬화를 할 수 있다.
  const parse = JSON.parse('{"key":"value","arr":[1,2,3],"nullProp":null}');
  console.log(parse);
}