
// 1. 배열의 삭제
//다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

// 2. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 데이터
var arr = [200, 100, 300];
arr.splice(2, 0, 1000);
console.log(arr);

// 출력
// [200, 100, 10000, 300]


// 3. 변수 타입 1
let arr = [100, 200, 300];
console.log(typeof(arr));
// answer : object
// undefined, string, number는 모두 기본 자료형(primitive type)

// 4. 변수 타입 2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// 1)  입력 : a =1, 출력 : number
// 2)  입력 : a = 2.22, 출력 : boolean
// 3)  입력 : a = 'p', 출력 : string
// 4)  입력 : a = [1, 2, 3], 출력 : object
// answer : 2번 - number

// 5. for loop
let a = 10;
let b = 2;

for(let i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a+b);
// answer : 16 - 초기값이 1이고, 2씩 증가하기 때문에 i의 값은 1, 3 그리고 a의 10을 더하면 a = 14가 된다.

// 6. false
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**
// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// answer : 2번 - string = true;

// 7. 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// answer : 3, 5번 - JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며 let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능

// 8. 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']);
// answer : 84 - 제일 마지막 값이 출력된다.

// 9. concat을 활용한 출력 방법
//데이터
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

// mine
// let result = [year, month, day, hour, minute, second];
// let i = result;
// for (i = 0; i < i.length; i++) {
//   document.write('<p>'+'/'+ result +'</p>');
// }

// answer
let result = year.concat(`/${month}/${day}/ ${hour}:${minute}:${second}`);

console.log(result);

//출력
//2019/04/26 11:34:27

// 11. for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let s = 0;

for (let i=1; i<=100; i++) {
  s += i;
}

console.log(s);

// 13. 몇 번째 행성인가요?
const order = prompt('숫자 1을 누르세요.');
switch (order) {
  case '1':
    console.log('수성');
    break;
  case '2':
    console.log('금성');
    break;
  case '3':
    console.log('지구');
    break;
  case '4':
    console.log('화성');
    break;
  case '5':
    console.log('목성');
    break;
  default:
    console.log('1~5까지 눌러주세요.');
    break;
}

// const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// const n = prompt('몇 번째 행성인가요?');
// console.log(planets[n-1]);

// 17. 놀이기구 키 제한
const height = prompt('키를 적어주세요.');
let progrss = ( height >= 150 ? 'YES' : 'NO');
let result = alert(progrss);