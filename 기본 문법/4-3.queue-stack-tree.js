'use strict';

// 큐, 스택, 트리
// 어떤 데이터의 구체적인 구현 방식은 생략한 채, 데이터의 추상적 형태와 그 데이터를 다루느 방법만을 정해놓은 것을 가지고 ADT(Abstract Data Type) 혹은 추상 자료형이라고한다.


// 큐(Queue)
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

// 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.


// 트리(Tree)
// 트리(tree)는 여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용된다.

// 트리를 다룰 때 사용되는 몇 가지 용어를 살펴보겠다.
// - 노드(node): 트리 안에 들어있는 각 항목을 말한다.
// - 자식 노드(child node): 노드는 여러 자식 노드를 가질 수 있다.
// - 부모 노드(parent node): 노드 A가 노드 B를 자식으로 갖고 있다면, 노드 A를 노드 B의 '부모 노드'라고 부른다.
// - 뿌리 노드(root node): 트리의 가장 상층부에 있는 노드를 말한다.
// - 잎 노드(leaf node): 자식 노드가 없는 노드를 말한다.
// - 조상 노드(ancestor node): 노드 A의 자식을 따라 내려갔을 때 노드 B에 도달할 수 있다면, 노드 A를 노드 B의 조상 노드라고 부른다.
// - 자손 노드(descendant node): 노드 A가 노드 B의 조상 노드일 때, 노드 B를 노드 A의 자손 노드라고 부른다.
// - 형제 노드(sibling node): 같은 부모 노드를 갖는 다른 노드를 보고 형제 노드라고 부른다.

{
  class Node {
    constructor(content, children = []) {
      this.content = content;
      this.children = children;
    }
  }

  const tree = new Node('hello', [
    new Node('world'),
    new Node('and'),
    new Node('fun', [
      new Node('Javascript')
    ])
  ]);

  function traverse(node) {
    console.log(node.content);
    for(let child of node.children) {
      traverse(child);
    }
  }

  traverse(tree);
}

// 트리는 계층 구조를 나타내기 위해, 또한 구조를 통해 알고리즘의 효율을 높이고자할 때 널리 사용된다.