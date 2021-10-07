# 원형 큐 (Circular Queue)
- 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO(First in First Out) 기반의 선형 자료 구조
- 구현할 메서드
  - CircularQueue.isFull() : 데이터가 꽉찾는지
  - CircularQueue.isEmpty() : 비어 있는지 확인
  - CircularQueue.getBuffer() : 데이터 전체 획득
  - CircularQueue.enqueue() : 데이터 추가
  - CircularQueue.dequeue() : 테이터 삭제
  - CircularQueue.front() : 첫 번째 데이터
  - CircularQueue.dataSize() : 큐 내 데이터 개수 확인
  - CircularQueue.clear() : 전체 삭제

## 원형 큐 구현하기
```javascript
// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size ;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.arrat.slice()
}

// isEmpty() : 데이터가 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
}

// isFull() : 데이터가 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
}

// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function (element){
  if(this.isFull()) return false;

  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
}

// dequeue() : 데이터 삭제
CircularQueue.prototype.dequeue = function (){
  if(this.isEmpty()) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head+1) % this.size
  this.length--;

  return element
};

// front() : 가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[this.head];
}

// datasize() : 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
  return this.length
}

// clear : 큐 초기화
CircularQueue.prototype.clear = function (size = 5) {
  this.array = [];
  this.size = size;
  this.length= 0;
  this.tail = 0;
}

let cq = new CircularQueue([1,2,3])
console.log(cq) // [ 1, 2, 3 ]

cq.enqueue(4)
cq.enqueue(5)
console.log(cq) // [ 1, 2, 3, 4, 5 ]

cq.dequeue()
console.log(cq) // [ <1 empty item>, 2, 3, 4, 5 ]


console.log(cq.front()) // 2
console.log(cq.dataSize()) // 4
```