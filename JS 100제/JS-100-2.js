

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