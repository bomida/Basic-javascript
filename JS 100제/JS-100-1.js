
// 1. 배열의 삭제
//다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
{ console.group('1. 배열의 삭제');

  let nums = [100, 200, 300, 400, 500];
  nums.pop();
  nums.pop();
  console.log(nums);

console.groupEnd('1. 배열의 삭제'); }


// 2. 배열의 내장함수
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


// 3. 변수 타입 1
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


// 4. 변수 타입 2
{ console.group('4. 변수 타입 2');

  // 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

  // 1)  입력 : a = 1,   출력 : number
  // 2)  입력 : a = 2.22,   출력 : boolean -> 정답
  // 3)  입력 : a = 'p',   출력 : string
  // 4)  입력 : a = [1, 2, 3],   출력 : object

  // 해설
  // 2번의 출력값은 number이다. boolean에 해당하는 값은 true와 false 두 가지 이다.

console.groupEnd('4. 변수 타입 2'); }


// 5. for문 계산
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


// 6. false
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


// 7. 변수명
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


// 8. 객체의 키 이름 중복
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


// 9. concat을 활용한 출력 방법
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


// 10. 별 찍기
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


// 11. for를 이용한 기본 활용
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


// 12. 몇 번째 행성인가요?
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


// 13. 몇 번째 행성인가요?
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


// 14. 3의 배수 인가요?
{ console.group('14. 3의 배수 인가요?');

  // 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

  // 입력 : 3
  // 출력 : 짝

  // 입력 : 2
  // 출력 : 2

console.groupEnd('14. 3의 배수 인가요?'); }


// 17. 놀이기구 키 제한
