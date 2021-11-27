'use strict';

// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
  // do network request in 10 sec...
  // return 'bomi';

  // Promise안에는 resolve나 reject를 이용해서 완성을 해줘야한다.
  return new Promise((resolve, reject) => {
    resolve('bomi');
  });
}

// Promise를 이용했던 위 코드를 async를 통해 간단하게 만들 수 있다.
// 함수 앞에 async를 붙여준다.
async function fetchUser() {
  // do network request in 10 sec...
  return 'bomi'; // 자동적으로 코드 블럭이 Promise로 만들어진다.
}
const user = fetchUser();
user.then(console.log);
console.log(user); // pending


// 2. await
// await는 함수 안에서만 쓸 수 있다.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 3초 있다가 사과를 리턴하는 함수
async function getApple() {
  await delay(2000);
  // throw 'error';
  return '🍎';
}

// 3초 있다가 바나나를 리턴하는 함수
async function getBanana() {
  await delay(1000);
  return '🍌';
}

// Promise로 사과와 바나나를 한번에 따오는 함수를 만들어보자.
// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`);
//   })
// }

// 위와 같은 코드를 async와 await를 이용해 다시 짜면
async function pickFruits() {
  // 아래 코드와 같이 promise를 만든다.
  const applePormise = getApple();
  const bananaPromise = getBanana();
  // Error Handling처럼 try와 catch를 이용해 작성할 수 있다.
  const apple = await applePormise;
  const banana = await bananaPromise;
  return apple + banana;
}
pickFruits().then(console.log); // callback hell과 다를바 없어짐

// 그냥 promise를 사용하는 함수는 이렇다.
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌'); // chaining
// }

// 3. useful Promise APIs
// 병렬적으로 기능을 수행하는 코드를 짤 때 사용한다.

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);