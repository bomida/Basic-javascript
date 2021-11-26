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

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
});

const getEgg = hen => 
new Promise((resolve, reject) => {
  // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});

const cook = egg => 
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

/*
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/

// 위의 코드를 줄일 수 있다.
getHen() //
  .then(getEgg)
  .catch(error => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);


  // Homework
{

  // Callback Hell example

  class UserStorage {
      loginUser(id, password) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (
              (id === 'bomi' && password === 'dream') ||
              (id === 'coder' && password === 'academy')
            ) {
              resolve(id);
            } else {
              reject(new Error('not found'));
            }
          }, 2000);
        });
      }
      getRoles(user) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (user === 'bomi') {
              resolve({name: 'bomi', role: 'admin'});
            } else {
              reject(new Error('no access'));
            }
          }, 1000);
        });
      }
    }

  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your password');
  userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(
      `Hello ${user.name}, you have a ${user.role} role`
    ))
    .catch(console.log);
}