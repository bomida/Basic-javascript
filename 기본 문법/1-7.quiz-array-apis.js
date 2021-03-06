'use strict';

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' | ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
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
  // ์ถ์  ์๋๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ๋ณํํ๋ ๊ฒ์ด ์๋๋ผ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด์ผํ๋ ๊ฒ
  // slice๋ ๋ฐฐ์ด์ ํน์ ํ ๋ถ๋ถ์ ๋ฆฌํดํ๋ ํจ์
  // splice๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ์์ ํ๋ ํจ์
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
  // find: ์ฒซ๋ฒ์งธ๋ก ์ฐพ์์ง ์์๋ฅผ ๋ฆฌํดํ๋ค. ์ ๋ฌ๋ ์ฝ๋ฐฑํจ์๊ฐ true์ผ๋ ๋ฆฌํด, ๋ง์ฝ ์ฐพ์ง ๋ชปํ๋ฉด undefined๋ก ๋ฆฌํด๋๋ค.
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // filter: ์ฝ๋ฐฑํจ์๋ฅผ ์ ๋ฌํด์ ์ฝ๋ฐฑํจ์๊ฐ true์ธ ์์๋ง ์ฐพ์์ ๋ฐฐ์ด๋ก ์ ๋ฌ.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // map: ๋ฐฐ์ด์์ ๋ค์ด์๋ ์์ ํ๋ํ๋๋ฅผ ๋ค๋ฅธ ๊ฒ์ผ๋ก ๋ณํํด์ฃผ๋ ๊ฒ
}

// Q8. check if there is a student with the score lower than 50
{
  const result1 = students.some((student) => student.score < 50);
  console.log(`Q8. result2: ${result1}`);
  
  const result2  = students.every((student) => student.score >= 50);
  console.log(`Q8. result2: ${result2}`)
  // some: ๋ฐฐ์ด์ ์์ ์ค์์ ํ๋๋ผ๋ ์กฐ๊ฑด์ ๋ง์กฑ๋๋ ์์๊ฐ ์๋ค๋ฉด true๊ฐ ๋ฆฌํด์ด ๋๋ค.
  // every: ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค์ด ์กฐ๊ฑด์ ์ถฉ์กฑํด์ผ์ง๋ง true๊ฐ ๋ฆฌํด๋๋ค.
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
  // reduce: ๋ฐฐ์ด์์ ๋ค์ด์๋ ๋ชจ๋  ์์๋ง๋ค ํธ์ถ์ด ๋๋ค. ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค์ ๊ฐ์ ๋์ ํ๋ ๋ญ๊ฐ ํจ๊ป ๋ชจ์๋์ ๋ ์ฐ๋ ํจ์
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
  const result1 = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result1);

  const result2 = students
  .map((student) => student.score)
  .sort((a, b) => b - a)
  .join();
  console.log(result2);
}