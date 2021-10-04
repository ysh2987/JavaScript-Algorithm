// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array){
  this.array = array ? array : [];
};

// getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 true/ false
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element){
  return this.array.push(element);
};

// dequeue() : 데이터 삭제

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

// front() : 가장 첫 데이터 반환
Queue.prototype.front = function() {
  return this.array.length == 0 ? undefined : this.array[0];
};
// size() : 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
}
// clear() : 큐 초기화
Queue.prototype.clear = function () {
  this.array = []
}

let que = new Queue([1,2,3])
let data = que.getBuffer()
console.log(data) // [ 1, 2, 3 ]
console.log(que.isEmpty()) // false
que.enqueue(4)
console.log(que.dequeue()) // 1
console.log(que.dequeue()) // 2
console.log(que) // [3, 4]

console.log(que.front()) // 3
console.log(que.size()) //2
que.clear()
console.log(que) // []


// ---------------------------------------------------------------
// head, tail 추가
function Queue2(array){
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
};

// enqueue() 개선 방식
Queue2.prototype.enqueue = function(element){
  return (this.array[this.tail++] = element);
  // array에 tail에 elemnet를 저장하고 tail에 포인터를 1 증가 시킨다.
};

// dequeue 개선 방식 shift -> index
Queue2.prototype.dequeue = function() {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};
let que2 = new Queue2([1,2,3])
que2.enqueue(4)
console.log(que2.dequeue()) // 1
console.log(que2.dequeue()) // 2

// ---------------------------------------------------------------
// 성능 측정

let test1 = new Queue();
let test2 = new Queue2();

const count = 100000;


function benchmark(queue, enqueue) {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    enqueue ? queue.enqueue() : queue.dequeue();
  }
  return Date.now() - start;
}

console.log("enqueue test1: " + benchmark(test1, 1) + "ms"); // enqueue test1: 8ms
console.log("enqueue test2: " + benchmark(test2, 1) + "ms"); // enqueue test2: 6ms

console.log("dequeue test1: " + benchmark(test1, 0) + "ms"); // dequeue test1: 6732ms
console.log("dequeue test2: " + benchmark(test2, 0) + "ms"); // dequeue test2: 10ms