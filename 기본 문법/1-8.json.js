'use strict';

// JSON
// Javascript Object Notaiton

// 1. Object to JSON
// stringfy(obj) : 문자화
{ console.group('Object to JSON - stringify');

  let json = JSON.stringify(true);
  console.log(json);

  json = JSON.stringify(['apple', 'banana']);
  console.log(json);

  const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => { 
      console.log(`${name} can jump!`);
    },
    // 함수는 오브젝트에 있는 데이터가 아니므로, JSON에 포함되지 않는다.
    // JS에만 있는 특별한 데이터도 포함되지 않는다.
  };

  json = JSON.stringify(rabbit);
  console.log(json);

  // 아래 코드 처럼 배열을 이용해 원하는 property만 가져올 수 있다.
  json = JSON.stringify(rabbit, ['name', 'color']);
  console.log(json); 

  // 또는 콜백함수를 이용해서 더욱 세밀하게 통제할 수가 있다.
  json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name'? 'bomi' : value;
  });
  console.log(json);

console.groupEnd('Object to JSON - stringify'); }


// 2. JSON to Object
// parse(json)