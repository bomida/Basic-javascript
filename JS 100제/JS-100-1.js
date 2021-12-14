

//다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
{ console.group('1. 배열의 삭제');

  let nums = [100, 200, 300, 400, 500];
  nums.pop();
  nums.pop();
  console.log(nums);

console.groupEnd('1. 배열의 삭제'); }


// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
{ console.group('2. 배열의 내장함수');

  // 데이터
  let arr = [200, 100, 300];
  arr.splice(2, 0, 1000);
  console.log(arr);

  // 출력
  // [200, 100, 10000, 300];

  // 해설
  // splice() 메소드는 배열의 요소를 삭제 또는 교환하거나 새 요소를 추가하여 배열의 내용을 변경한다.

console.groupEnd('2. 배열의 내장함수'); }


{console.group('3. 변수 타입 1');

  let arr = [100, 200, 300];
  console.log(typeof(arr));

  // 1)  undefined
  // 2)  string
  // 3)  number
  // 4)  object -> 정답

  // 해설
  // undefined, string, number는 모두 기본 자료형(primitive type)이다.

console.groupEnd('3. 변수 타입 1'); }


{ console.group('4. 변수 타입 2');

  // 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

  // 1)  입력 : a = 1,   출력 : number
  // 2)  입력 : a = 2.22,   출력 : boolean -> 정답
  // 3)  입력 : a = 'p',   출력 : string
  // 4)  입력 : a = [1, 2, 3],   출력 : object

  // 해설
  // 2번의 출력값은 number이다. boolean에 해당하는 값은 true와 false 두 가지 이다.

console.groupEnd('4. 변수 타입 2'); }


{ console.group('5. for문 계산');

  let a = 10;
  let b = 2;

  for(let i=1; i<5; i+=2){
      a += i;
  }
  console.log(a+b);
  // 10(a) + 1(i) = 11(a);
  // 11(a) + 3(i) = 14(a);
  // 14(a) + 2(b) = 16;

  // 1)  10
  // 2)  12
  // 3)  14
  // 4)  16 <- 정답

  // 해설
  //  i 값이 1부터 시작하고 한번 순환할 때마다 2씩 증가하기 때문에 for 문은 총 두 번 순환한다.

console.groupEnd('5. for문 계산');}


{ console.group('6. false');

  // 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
  // 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

  // 1)  NaN
  // 2)  1 -> 정답
  // 3)  ""
  // 4)  0
  // 5)  undefined
  console.log(Boolean(NaN));
  console.log(Boolean(1));
  console.log(Boolean(''));
  console.log(Boolean(0));
  console.log(Boolean(undefined));

  // 해설
  // 정수는 true로 취급한다.

console.groupEnd('6. false'); }


// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
{ console.group('7. 변수명');

  // 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

  // 1)  age
  // 2)  Age
  // 3)  let -> 정답
  // 4)  _age
  // 5)  1age -> 정답
  console.log(`3) let과 5) 1age는 변수명으로 사용할 수 없다.`);

  // 해설
  // JS 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며,
  // let은 이미 JS문법에 존재하는 예약어라 사용이 불가하다.

console.groupEnd('7. 변수명'); }


// 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
{ console.group('8. 객체의 키 이름 중복');

  let d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
  };
  console.log(d['weight']);

  // 해설
  // 객체에 같은 값이 중복이 되면, 가장 나중에 기입된 값만 출력이 된다.
  // 그러므로 84가 출력된다.

console.groupEnd('8. 객체의 키 이름 중복'); }


{ console.group('9. concat을 활용한 출력 방법');

  // 데이터
  let year = '2019';
  let month = '04';
  let day = '26';
  let hour = '11';
  let minute = '34';
  let second = '27';

  let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
  console.log(result);

  // 출력
  // 2019/04/26 11:34:27

console.groupEnd('9. concat을 활용한 출력 방법'); }


// const n = prompt(`몇 단 트리를 원하나요? (숫자만 넣어주세요.)`);
{ console.group('10. 별 찍기');
  
  // 입력
  // 5

  // 출력
  //     *
  //    ***
  //   *****
  //  *******
  // *********

  // let num = prompt('몇 단 트리를 원하나요?');
  // for(let n = 0; n < num; n++) {
  //   for(let i = 0; i < 4; i++) {
  //     console.log(' ');
  //     for(let j = 0; j < 1; j++) {
  //       console.log('*');
  //     }
  //   }
  // }

console.groupEnd('10. 별 찍기'); }


{ console.group('11. for를 이용한 기본 활용');

  // 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

  let s = 0;
  // for(let i = 0; i < 101; i++) {
  //   s += i;
  // }
  for (let i=1; i<=100; i++){
    s += i;
  }
  
  console.log(s);

console.groupEnd('11. for를 이용한 기본 활용'); }


{ console.group('12. 몇 번째 행성인가요?');

  // 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
  // 주어진 소스 코드를 수정해선 안됩니다.

  class Wizard {
    constructor(health, mana, armor) {
      this.health = health,
      this.mana = mana,
      this.armor = armor
    }
    attack () {
      console.log('파이어볼 💨');
    }
  }

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();

  // 출력
  // 545 210 10
  // 파이어볼

console.groupEnd('12. 몇 번째 행성인가요?'); }


{ console.group('13. 몇 번째 행성인가요?');

  // 입력 : 1
  // 출력 : 수성

  // const number = prompt('1부터 8까지 숫자중 하나를 입력하세요.');
  // switch(number) {
  //   case '1':
  //     alert('수성');
  //     break;
  //   case '2':
  //     alert('금성');
  //     break;
  //   case '3':
  //     alert('지구');
  //     break;
  //   case '4':
  //     alert('화성');
  //     break;
  //   case '5':
  //     alert('목성');
  //     break;
  //   case '6':
  //     alert('토성');
  //     break;
  //   case '7':
  //     alert('천왕성');
  //     break;
  //   case '8':
  //     alert('해왕성');
  //     break;
  //   default:
  //     alert('숫자를 다시 입력해주세요.');
  //     break;
  // }

  // const plants = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  // const n = prompt('몇 번째 행성인가요?');
  // console.log(plants[n-1]);

console.groupEnd('13. 몇 번째 행성인가요?'); }


{ console.group('14. 3의 배수 인가요?');

  // 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

  const random = Math.floor(Math.random()*100);

  if(random % 3 == 0) {
    console.log('👏 ');
  } else {
    console.log(random);
  }

  // 입력 : 3
  // 출력 : 짝
  // 입력 : 2
  // 출력 : 2

console.groupEnd('14. 3의 배수 인가요?'); }


{ console.group('15. 자기소개');

  // class Person {
  //   constructor(name) {
  //     this.name = name
  //   }
  //   sayHello() {
  //     alert(`Hello, I am ${this.name}.\nNice to meet you`);
  //   }
  // }
  // const student = new Person();
  // const putnamed = prompt('Put your name, please.');
  // student.name = putnamed;
  // student.sayHello();
  
  // const name = prompt('Put your name, please.');
  // console.log(`Hello, I am ${name}.\nNice to meet you`);

console.groupEnd('15. 자기소개'); }


{ console.group('16. 로꾸거');

  const str = '거꾸로';
  console.log(str.split('').reverse().join(''));

  // 입력 : 거꾸로
  // 출력 : 로꾸거

console.groupEnd('16. 로꾸거'); }


{ console.group('17. 놀이기구 키 제한');

  const height = 160;
  console.log(height > 150 ? 'ternary operator: YES' : 'ternary operator: NO');

  if(height >= 150){
    console.log(`if else: YES`);
  } else {
    console.log(`if else: NO`);
  }

console.groupEnd('17. 놀이기구 키 제한'); }


{ console.group('18. 평균 점수');

  // 평균점수를 구하라. 단, 소숫점 자리는 모두 버린다.
  class Test {
    constructor(literature, math, english) {
      this.literature = literature;
      this.math = math;
      this.english = english;
    }
    evg() {
      return (this.literature + this.math + this.english) / 3;
    }
  }

  const result = new Test(20, 30, 40);
  // result.literature = 20;
  // result.math = 30;
  // result.english = 40;
  console.log(Math.floor(result.evg()));

  // new Test에 값 넣는 법 복습!!!
  // - 새로운 오브젝트 괄호 안에 값만 넣는다. 구분은 ,로 한다.

  // 다른 풀이

  // const scores = prompt('세 과목의 점수를 입력하시오.').split(' ');
  // let sum = 0;

  // for(let i=0; i<3; i++) {
  //   sum += parseInt(scores[i], 10);
  //   // 십진수 형태의 숫자로 데이터 타입을 변환한다.
  // }
  // console.log(Math.floor(sum/3));

console.groupEnd('18. 평균 점수'); }


{ console.group('19. 제곱을 구하자');

  // const numA = prompt('제곱을 구할 숫자를 입력하시요.');
  // const numB = prompt('제곱을 구할 숫자를 입력하시요.');
  // console.log(numA ** numB);

  // const n = prompt('수를 입력하시오.').split(' ');
  const n = [2, 3];
  console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

console.groupEnd('19. 제곱을 구하자'); }


{ console.group('20. 몫과 나머지 *****'); 

  const num = [10, 2]; //prompt('두 숫자를 입력해주세요.').split(' ');

  const result = Math.floor(parseInt(num[0],10) / parseInt(num[1],10));
  const left = parseInt(num[1], 10) % parseInt(num[0], 10);

  console.log(result, left);

console.groupEnd('20. 몫과 나머지'); }


{ console.group('21. set은 어떻게 만드나요?');

  // 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

  // 1)  let x = {1, 2, 3, 5, 6, 7};
  // 2)  let x = {};
  // 3)  let x = new Set('javascript'); -> 정답
  // 4)  let x = new Set(range(5));
  // 5)  let x = new Set(); -> 정답

  // set객체는 set생성자 함수로 생성한다. 인수를 전달하지 않으면 빈 객체가 생성되고, set생성자 함수는 iterable을 인수로 받아 set객체를 생성한다.

console.groupEnd('21. set은 어떻게 만드나요?'); }


{ console.group('22. 배수인지 확인하기');

  // 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

  // 1)  i / 6 == 0
  // 2)  i % 6 == 0 -> 정답
  // 3)  i & 6 == 0
  // 4)  i | 6 == 0
  // 5)  i // 6 == 0

  // % 는 뺀 나머지 값을 구하는 연산자이다.

console.groupEnd('22. 배수인지 확인하기'); }


{ console.group('23. OX문제');

  console.log(10/3); //의 출력은 3이다
  // 정답은 X 왜냐면 출력값이 3.333333...이 나오는데 소수점 없이 출력을 하고 싶다면
  console.log(Math.floor(10/3)); // Math.floor() 함수를 쓰면 된다.

console.groupEnd('23. OX문제'); }


{ console.group('24. 대문자로 바꿔주세요.');

  const mary = 'mary';
  console.log(mary.toLocaleUpperCase());

console.groupEnd('24. 대문자로 바꿔주세요.'); }


{ console.group('25. 원의 넓이를 구하세요.');

  // 반지름의 길이 x 반지름의 길이 x 3.14
  // const n = prompt('원의 지름을 입력하세요.');
  // const pi = Math.PI;
  // const toFixed = pi.toFixed(2);
  // console.log(n * n * toFixed);

  const pi = Math.PI;
  const toFixed = pi.toFixed(2);

  function circle(n) {
    const result = n * n * toFixed;
    return result;
  }
  
  const r = 10 // prompt('원의 지름을 입력하세요.');
  console.log(circle(r));

console.groupEnd('25. 원의 넓이를 구하세요.'); }


{ console.group('26. 행성 문제 2');

  // const plants = '수성';
  // switch(plants) {
  //   case '수성':
  //     console.log('Mercury');
  //     break;
  //   case '금성':
  //     console.log('Venus');
  //     break;
  //   case '지구':
  //     console.log('Earth');
  //     break;
  //   case '화성':
  //     console.log('Mars');
  //     break;
  //   case '목성':
  //     console.log('Jupiter');
  //     break;
  //   case '토성':
  //     console.log('Saturn');
  //     break;
  //   case '천왕성':
  //     console.log('Uranus');
  //     break;
  //   case '해왕성':
  //     console.log('Neptune');
  //     break;
  //   default:
  //     console.log('태양계가 아닙니다.');
  // }

  const plants = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천성' : 'Uranus',
    '해성' : 'Neptune'
  };

  const name = '수성';
  console.log(plants[name]);


console.groupEnd('26. 행성 문제 2'); }


{ console.group('27. 객체 만들기 *****');

  // const keys = prompt('이름을 입력하세요').split(' ');
  // const values = prompt('점수를 입력하세요').split(' ');
  // const obj = {};

  // for (let i=0; i<keys.length; i++) {
  //   mathTest[keys[i]] = parseInt(values[i], 10);
  // }

  // const mathTest = {
  //   'Yujin' : 70,
  //   'Hyewon' : 100
  // }
  // console.log(mathTest);

console.groupEnd('27. 객체 만들기'); }


{ console.group('28. 2-gram *****');

  // **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
  // 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

  const toStr= 'Javascript';
  for(let i = 0; i < toStr.length-1; i++) {
    console.log(toStr[i], toStr[i+1]);
  }

console.groupEnd('28. 2-gram'); }


{ console.group('29. 대문자만 지나가세요.');

  const put = 'H';
  if(put === put.toUpperCase()) {
    console.log('YES');
  } else {
    console.log('NO');
  }

  const str = 'hello';
  console.log('toUpperCase: ' + str.toUpperCase());
  console.log('toLocaleUpperCase: ' + str.toLocaleUpperCase());

console.groupEnd('29. 대문자만 지나가세요.'); }


{ console.group('30. 문자열 속 문자 찾기');

  // const put = 'pineapple is yummy';
  // const indexOf = put.indexOf('apple');
  // console.log(indexOf);

  const data = 'pineapple is yummy';
  const word = 'apple';

  console.log(data.indexOf(word));

console.groupEnd('30. 문자열 속 문자 찾기'); }


{ console.group('31. 자바스크립트 자료형의 복잡도');

  // 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

  // 1)  arr[i]
  // 2)  arr.push(5) 
  // 3)  arr.slice() -> 정답
  // 4)  arr.pop()
  // 5)  arr.includes(5) -> 정답

  // slice:  몇번째 인덱스 부터 자를지(포함), 몇번째 인덱스까지 자를지(미포함)

console.groupEnd('31. 자바스크립트 자료형의 복잡도');}


{ console.group('32. 문자열 만들기');

  // 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
  // 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
  // 출력 : 5

  // const data = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';
  // console.log(data.length);

  // const string = prompt('문자열을 입력하세요.').split(' ');
  // console.log(string.length);

console.groupEnd('32. 문자열 만들기'); }


{ console.group('33. 거꾸로 출력하기');

  // 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

  // const data = prompt('숫자를 입력하세요.').split(' ').reverse();
  // const result = '';

  // for (let i = 0; i < data.length; i++){
  //   result =+ data[i];
  // }
  // console.log(result);

console.groupEnd('33. 거꾸로 출력하기'); }


{ console.group('34. sort 구현하기 *****');

  // const unsorted = prompt('키를 입력하세요');
  // let sorted = "";

  // const sorted = unsorted
  //   .split(" ")
  //   .sort(function(a, b) {
  //     return a - b;
  //   })
  //   .join(" ");

  // if (unsorted === sorted) {
  //   console.log("Yes");
  // } else {
  //   console.log("No");
  // }

console.groupEnd('34. sort 구현하기'); }


{ console.group('35. Factory 함수 사용하기 *****');

  function one(n){
    function two(value){
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
  }

  const a = one(2);
  const b = one(3);
  const c = one(4);

  console.log(a(10));
  console.log(b(10));
  console.log(c(10));

console.groupEnd('35. Factory 함수 사용하기'); }


{ console.group('36. 구구단 출력하기');

  // 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.
  // 입력 : 2
  // 출력 : 2 4 6 8 10 12 14 16 18

  const num = 2 // prompt();
  
  for(let i = 1; i <= 9; i++) {
    console.log(num * i);
  }

  // const num = 2 // prompt('숫자를 입력하세요');
  // let result = '';

  // for (let i=1; i<=9; i++){
  //   result += i * num + '\n';
  // }
  // console.log(result);

console.groupEnd('36. 구구단 출력하기'); }


{ console.group('37. 반장 선거 *****');
  
  // 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.
  // 입력
  // 원범 원범 혜원 혜원 혜원 혜원 유진 유진
  // 출력
  // 혜원(이)가 총 4표로 반장이 되었습니다.

  const arr = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
  // 원범 원범 혜원 혜원 혜원 혜원 유진 유진
  let result = {};
  let winner = '';

  for(let index in arr){
    let value = arr[index];
    result[value] = result[value] === undefined ? 1 : result[value] = result[value] + 1;
  }

  winner = Object.keys(result).reduce((a, b) => {
    return result[a] > result[b] ? a : b
  });

  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

console.groupEnd('37. 반장 선거'); }


{ console.group('38. 호준이의 아르바이트 *****');

  // 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
  // 입력 : 97 86 75 66 55 97 85 97 97 95
  // 출력 : 6

  // const scores = prompt('점수입력').split(' ').map(n => {
  //   return parseInt(n, 10);
  // });

  // const result = scores.sort((a, b) => {
  //   return a - b;
  // });
  // console.log(result);

  // let count = 0;
  // let arr = [];
  
  // while (arr.length < 3) {
  //   let n = scores.pop();
  //   if (!arr.includes(n)){
  //     arr.push(n);
  //   }
  //   count += 1;
  // }
  
  // console.log(count);

console.groupEnd('38. 호준이의 아르바이트'); }


{ console.group('39. 오타 수정하기 *****');

  // 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

  // const data = prompt('문자를 입력하세요.');
  // console.log(data.replace('q', 'e'));

console.groupEnd('39. 오타 수정하기'); }


{ console.group('40. 놀이동산에 가자');

  // let total = 0;
  // let count = 0;
  // const limit = prompt('제한 무게를 입력하세요.');
  // const n = prompt('인원수를 입력하세요.');

  // for(let i = 0; i <= n; i++) {
  //   total += parseInt(prompt('무게를 입력해주세요.'), 10);
  //   if (total <= limit) {
  //     count = i;
  //   }
  // }

  // console.log(count);

console.groupEnd('40. 놀이동산에 가자'); }


{ console.group('41. 소수판별');

  const random = Math.floor(Math.random()*10);
  console.log(random);

  function primeNum(random) {
    for(let i = 2; i < random; i++) {
      const result = random % 1;
      if(result === 0) {
        console.log('NO');
        return false;
      }
    }
    if(result === 1) {
      console.log('NO');
      return;
    }
    console.log('YES');
  };
  
  primeNum(random);

console.groupEnd('41. 소수판별'); }


{ console.group('42. 2020년');

  // const month = 12 //prompt('달을 입력하시오.');
  // const date = 12 //prompt('일을 입력하시오.');

  // function solution(a, b) {
  //   const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  //   const x = new Date('2020-' + a + '-' + b);
  //   return day[x.getDay()];
  // }
  // console.log(solution(month, date));

console.groupEnd('42. 2020년'); }


{ console.group('43. 10진수를 2진수로');

  const num = 234;
  const intNum = num.toString(2);
  console.log('intNum: ' + intNum);

  const intNum2 = parseInt(11101010, 2); // 234
  console.log('intNum2: ' + intNum2);

  const intNum3 = parseInt(11001, 2);
  console.log('intNum3: ' + intNum3);

  const num2 = 110011;
  const intNum4 = parseInt(num2, 2);
  const intNum5 = parseInt(num2, 2).toString(2);
  console.log('intNum4: ' + intNum4);
  console.log('intNum5: ' + intNum5);

console.groupEnd('43. 10진수를 2진수로'); }


{ console.group('44. 각 자리수의 합');

  let arr = [1, 2]// prompt('숫자를 입력하세요.').toString().split('');
  let set = 0;

  arr.forEach((item) => {
    set += item;
  });
  console.log(set);

console.groupEnd('44. 각 자리수의 합');}


{ console.group('45. getTime()함수 사용하기');

  const currentDate = new Date();
  let year = currentDate.getTime();
  year = Math.floor(year/(3600*24*365*1000))+1970
  console.log(year)

console.groupEnd('45. getTime()함수 사용하기')}


{console.group('46. 각 자리수의 합 2');

  let arr = [];
  let sum = 0;

  for(let i = 0; i < 20; i++) {
    arr[i] = i + 1;
  }

  arr.forEach((n) => {
    while(n !== 0) {
      sum += (n % 10);
      n = Math.floor(n/10);
    }
  });

  console.log(sum);

console.groupEnd('64. 각 자리수의 합 2'); }


{ console.group('47. set 자료형의 응용 *****');

  const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };

  let result = new Set();
  for(let key in people) {
    result.add(people[key]);
  }
  console.log(result.size);

console.groupEnd('47. set 자료형의 응용'); }


{ console.group('48. 대소문자 바꿔서 출력하기');

  // let data = // prompt('put the message plz');
  // let b = [];
  // let s = '';

  // for(let i = 0; i <data.length; i++) {
  //   if(data[i] === data[i].toLowerCase()) {
  //     b.push(data[i].toUpperCase());
  //   } else {
  //     b.push(data[i].toLowerCase());
  //   }
  // }

  // for(let j = 0; j < b.length; j++) {
  //   s += b[j];
  // }
  // console.log(s)

console.groupEnd('48. 대소문자 바꿔서 출력하기'); }


{ console.group('49 : 최댓값 구하기');

  // let nums = prompt('숫자를 입력하세요.').split(' ')
  // .map((n) => {
  //   return parseInt(n, 10);
  // });
  // console.log(nums);
  // const arr = nums.sort((a, b) => {
  //   return b - a;
  // });
  // console.log(nums[0]);

  // let n = prompt().split(' ');
  // console.log(Math.max(...n));

  // mine answer
  const n = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const arr = n.reduce((a, b) => a > b ? a : b);
  console.log(arr);

console.groupEnd('49 : 최댓값 구하기'); }


{ console.group('50. 버블정렬 구현하기 - ???');

  // function bubble(arr) {
  //   let result = arr.slice(); // 원본 배열 복사

  //   for (let i = 0; i < result.length - 1; i++) {
  //     for (let j = 0; j < result.length - i; j++) {
  //       if (result[j] > result[j + 1]) {
  //         let temp = result[j];
  //         result[j] = result[j+1];
  //         result[j+1] = temp;
  //       }
  //     }
  //   }
  //   return result;
  // }

  // const items = prompt('입력해주세요.').split(' ').map((n) => {
  //   return parseInt(n, 10);
  // });

  // console.log(bubble(items));

console.groupEnd('50. 버블정렬 구현하기'); }


// { console.group('parseInt');

// let nums = prompt('숫자를 입력하세요.').split(' ')
// .map((n) => {
//   return parseInt(n, 10);
// });
// console.log(nums);

// console.groupEnd('parseInt'); }