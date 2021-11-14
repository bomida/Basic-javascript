'use strict';

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' | ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 3);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2,5);
  console.log(newArray);
  // 출제 의도는 배열 자체를 변형하는 것이 아니라 새로운 배열을 만들어야하는 것
  // slice는 배열의 특정한 부분을 리턴하는 함수
  // splice는 배열 자체를 수정하는 함수
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // console.log(students.prototype.indexOf(90)); // mine
  const result = students.find((student) => student.score === 90);
  console.log(result);
  // find: 첫번째로 찾아진 요소를 리턴한다. 전달된 콜백함수가 true일때 리턴, 만약 찾지 못하면 undefined로 리턴된다.
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // filter: 콜백함수를 전달해서 콜백함수가 true인 요소만 찾아서 배열로 전달.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // map: 배열안에 들어있는 요소 하나하나를 다른 것으로 변환해주는 것
}

// Q8. check if there is a student with the score lower than 50
{
  const result1 = students.some((student) => student.score < 50);
  console.log(`Q8. result2: ${result1}`);
  
  const result2  = students.every((student) => student.score >= 50);
  console.log(`Q8. result2: ${result2}`)
  // some: 배열의 요소 중에서 하나라도 조건에 만족되는 요소가 있다면 true가 리턴이 된다.
  // every: 배열에 있는 모든 요소들이 조건에 충족해야지만 true가 리턴된다.
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log('------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
  // reduce: 배열안에 들어있는 모든 요소마다 호출이 된다. 배열에 있는 모든 요소들의 값을 누적하는 뭔가 함께 모아놓을 때 쓰는 함수
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  
}