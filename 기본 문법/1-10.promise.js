'use strict';

// Promise is a Javascript object for asynchromous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise( (resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log(`doing something...`);
  setTimeout(() => {
    resolve('bomi');
    // reject(new Error(`no network`));
    // Error오브젝트를 사용할 때는 에러난 이유를 정확하게 명시해야한다.
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
.then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  })
})
.then(num => console.log(num));