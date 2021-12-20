

{ console.group('51. merge sort를 만들어보자 - ???');

  // 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.
  // 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
  // 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
  // 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
  // 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

  // 다음 코드의 빈간을 채워 병합정렬을 완성해 봅시다.

  // function mergeSort(arr){
  //   if (arr.length <= 1){
  //     return arr;
  //   }
  
  //   const mid = Math.floor(arr.length / 2);
  //   const left = arr.slice(0,mid);
  //   const right = arr.slice(mid);
  
  //   return merge(mergeSort(left), mergeSort(right));
  // }
  
  // function merge(left, right){
  //   let result = [];
  
  //   while (left.length && right.length){
  //     if (left[0] < right[0]){
  //       result.push(left.shift());
  //     } else {
  //       result.push(right.shift());
  //     }
  //   }
  //   while (left.length) {
  //     result.push(left.shift());
  //   }
  //   while (right.length) {
  //     result.push(right.shift());
  //   }
  
  //   return result;
  // }
  
  // const array = prompt('배열을 입력하세요')
  // .split(' ')
  // .map(n => parseInt(n, 10));
  
  // console.log(mergeSort(array));

console.groupEnd('51. merge sort를 만들어보자'); }


{ console.group('52. quick sort - ???');

  // function quickSort(arr){
  //   if (arr.length <= 1){
  //     return arr;
  //   }

  //   const pivot = arr[0];
  //   const left = [];
  //   const right = [];

  //   for (let i=1; i<arr.length; i++){
  //     if(arr[i] < pivot){
  //       left.push(arr[i]);
  //     } else {
  //       right.push(arr[i]);
  //     }
  //   }
  //   return quickSort(left).concat(pivot, quickSort(right));
  // }

  // const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

  // console.log(quickSort(array));

console.groupEnd('52. quick sort'); }


{ console.group('53. 괄호 문자열');



console.groupEnd('53. 괄호 문자열'); }


{ console.group('54. 연속되는 수');

  function sol(l) {
    l.sort((a, b) => a - b);


    for(let i = 0; i < l.length; i++) {
      if(l[i]+1 !== l[i+1]) { // 이 부분 모르겠음
        return 'NO';
      }
    };
    return 'YES';
  };

  const n = [2, 4, 4, 5] // prompt('스탬프를 입력하세요').split(' ').map(n => parseInt(n, 10));
  console.log(sol(n))

  // mine
  // const data = prompt('스탬프를 입력하세요').split(' ').map(Number);
  // let sort = data.sort((a, b) => a - b);
  // console.log(data);
  // if(data === sort) {
  //   console.log('YES');
  // } else {
  //   console.log('NO');
  // }

console.groupEnd('54. 연속되는 수'); }


{ console.group('55. 하노이의 탑');

  

console.groupEnd('55. 하노이의 탑'); }


{ console.group('56. 객체의 함수 응용');
  // 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

  // 데이터
  const nationWidth = {
    'Korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
  }

  let korea = nationWidth[Object.keys(nationWidth)[0]]; // 220877
  console.log(nationWidth.Korea);
  delete nationWidth.Korea;

  let result = Math.max(...Object.values(nationWidth)) - korea;
  let country;

  for(let nation in nationWidth) {
    const output = Math.abs(korea - nationWidth[nation]);
    if(result > output) {
      result = output;
      country = nation;
    }
  }

  console.log(`${country} ${result}`);

console.groupEnd('56. 객체의 함수 응용'); }


{ console.group('57. 1의 개수');

  // 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

  // let n = '';
  // for(let i = 0; i <= 1000; i++) {
  //   n += i;
  // }
  // console.log(n.match(/1/g).length);

  let n = '';
  for(let i = 0; i <= 1000; i++) {
    n += i;
  }
  console.log(n);

  let count = 0;
  for(let j of n) {
    if(j == 1) {
      count++
    }
  }
  console.log(`result: ${count}`);

console.groupEnd('57. 1의 개수'); }


{ console.group('58. 콤마 찍기');

  // 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

  // mine
  // let num = prompt('정산금을 입력해주세요.').split(' ').map(Number);
  // // console.log(num);
  // const result = num.toLocaleString();
  // console.log(result);

  // 재귀 함수 사용
  // function comma(s) {
  //   if(s.length <= 3) {
  //     return s;
  //   } else {
  //     return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  //   }
  // }

  // const n = prompt('숫자를 입력해주세요.');
  // console.log(comma(n));

console.groupEnd('58. 콤마 찍기'); }


{ console.group('59. 빈칸 채우기');

  // 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

  const data = 'hi';
  const n = 25 + parseInt((data.length/2), 10);
  const a = data.padStart(n, '=');

  console.log(`${a.padEnd(50, '=')}`);

  //padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
  //padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움

console.groupEnd('59. 빈칸 채우기'); }


{ console.group('');

  let students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

  // mine
  // for(let i = 0; i < students.length; i++) {
  //   console.log(`번호: ${i+1}, 이름: ${students[i]}`);
  // }

  // answer
  students.sort();
  for(let key in students) {
    console.log(`번호: ${parseInt(key, 10)+1}, 이름: ${students[key]}`);
  }

console.groupEnd(''); }