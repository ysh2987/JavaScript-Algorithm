# 데크 ( Deque )
- Double-Ended Queue 약자로, 삽입과 삭제가 양쪽 긑에서 모두 발생할 수 있는 선형 자료구조이다.
- 구현 할 메서드
    - Deque.getBuffer(): 데이터 전체 획득
    - Deque.isEmpty() : 비어있는지 확인
    - Deque.pushFront() / Deque.popFront() : 앞쪽 데이터 추가 / 삭제
    - Deque.pushBack() / Deque.popBack() : 뒤쪽 데이터 추가 / 삭제
    - Deque.front() : 가장 첫 데이터 반환
    - Deque.back() : 가장 마지막 데이터 반환
    - Deque.size() : 길이 반환
    - Deque.clear() : 초기화
    
## 데크 구현하기
```javascript
// Deque() : 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []){
  this.array = array;
}
// getBuffer() : 객체 내 데이터 셋 반환
Deque.prototype.getBuffer = function(){
  return this.array.slice();
}

// isEmpty() : 데이터가 비어있는지 확인
Deque.prototype.isEmpty = function() {
  return this.array.length === 0 
}
// pushFront(): 앞쪽 데이터 추가
Deque.prototype.pushFront = function(data){
  return this.array.unshift(data)
}

// popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function(){
  return this.array.shift();
}
// pushBack() : 뒤쪽 데이터 추가
Deque.prototype.pushBack = function(data){
  return this.array.push(data)
}
// popBack() : 뒤쪽 데이터 삭제
Deque.prototype.popBack = function(){
  return this.array.pop()
}
// front() : 가장 첫 데이터 반환
Deque.prototype.front = function(){
  return this.array.length === 0 ? undefined : this.array[0];
}
// back() : 가장 끝 데이터 반환
Deque.prototype.back = function(){
  return this.array.length == 0 ? undefined : this.array[this.array.length-1]
}
// size() : 큐 내 데이터 개수 확인
Deque.prototype.size = function(){
  return this.array.length;
}
// clear : 큐 초기화
Deque.prototype.clear = function(){
  return this.array = []
}

let dq = new Deque([1,2,3]);
let data = dq.getBuffer()
console.log(data) //[1,2,3]
console.log(dq.isEmpty()) //false
dq.pushFront(0)
dq.pushBack(4)
console.log(dq.getBuffer()) // [ 0, 1, 2, 3, 4 ]
dq.popFront()
dq.popBack()
console.log(dq.getBuffer()) // [ 1, 2, 3 ]
console.log(dq.front()) // 1
console.log(dq.back()) // 3
console.log(dq.size()) // 3
console.log(dq.clear()) // []
```