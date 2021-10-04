// Stack() : 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
};

// getBuffer : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 유무
Stack.prototype.isEmpty = function() {
  return this.array.length === 0;
};

// push : arr 맨 뒤에 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};
// pop : arr 맨 뒤 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};
// peak() : 가장 끝 데이터 반환
Stack.prototype.pop = function () {
  return this.array[this.array.lnegth-1];
};
// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};
// indexOf() : 데이터 위치 확인
Stack.prototype.indexOf = function (element, position = 0) {
  for(let i = position; i < this.array.length; i++){
    if (element === this.array[i]) return i;
  }
};

// includes() : 데이터 존재 여부 확인
Stack.prototype.includes = function (element){
  for(let i = 0; i < this.array.length; i++){
    if (element === this.array[i]) return true;
  }
  return false;
}


let stack = new Stack([1,2,3]);
console.log(stack)

let data = stack.getBuffer()
console.log(data) // [ 1, 2, 3 ]
console.log(stack === data) // false 값만 복사
console.log(stack.isEmpty()) // false
stack.push(2)
console.log(stack) //  [ 1, 2, 3, 2 ]
stack.pop()
console.log(stack) // [ 1, 2, 3,]
console.log(stack.indexOf(1)) // 0
console.log(stack.includes(3)) // true