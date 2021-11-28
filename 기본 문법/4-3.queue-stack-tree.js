'use strict';

// 큐, 스택, 트리
// 어떤 데이터의 구체적인 구현 방식은 생략한 채, 데이터의 추상적 형태와 그 데이터를 다루느 방법만을 정해놓은 것을 가지고 ADT(Abstract Data Type) 혹은 추상 자료형이라고한다.


// 큐 (Queue)
// 큐(queue)는 다음과 같은 성질을 갖는 자료형이다.
// - 데이터를 집어넣을 수 있는 선형(linear) 자료형이다.
// - 먼저 집어넣은 데이터가 먼저 나온다. 이 특징은 줄여서 FIFO(First In First Out)라고 부릅니다.
// - 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있습니다.

// JS에서는 배열을 이용해서 간단하게 큐를 구현할 수 있다.
{
  class Queue {
    constructor() {
      this._arr = [];
    }
    enqueue(item) {
      this._arr.push(item);
    }
    dequeue() {
      return this._arr.shift();
    }
  }
  
  const queue = new Queue();
  console.log(queue.enqueue(1));
  console.log(queue.enqueue(2));
  console.log(queue.enqueue(3));
  console.log(queue.dequeue()); // 1
}
// 큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용된다.


// 스택(Stack) 
// 스택(stack) 다음과 같은 성질을 갖는 자료이다.
// - 데이터를 집어넣을 수 있는 선형(linear) 자료형이다.
// - 나중에 집어넣은 데이터가 먼저 나온다. 이 특징을 줄여서  LIFO(Last In First Out)라고 부릅니다.
// - 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 집언허는 데이터를 확인하는 peek 등의 작업을 할 수 있다.

// JS에서는 배열을 이용해서 간단하게 스택을 구현할 수 있다.
{
  class Stack {
    constructor() {
      this._arr = [];
    }
    push(item) {
      this._arr.push(item);
    }
    pop() {
      return this._arr.pop();
    }
    peek() {
      return this._arr[this._arr.length - 1];
    }
  }

  const stack = new Stack();
  console.log('stack.push(1): ' + stack.push(1));
  console.log('stack.push(1): ' + stack.push(2));
  console.log('stack.push(1): ' + stack.push(3));
  console.log('stack.pop(): ' + stack.pop());
}