# 해시 함수(Hash Function)
- 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
- 해시 함수 특성
  - 압축성 : 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
  - 효율성 : 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
  - 저항성 : 결과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질

## 해시 테이블 (Hash Table)
- Hash 함수를 사용하여 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
- 충돌(Collision) 해결방법
  - 해시 함수 변경 : 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
  - 자료구조 확장 : Open Addressing Method(선형 조사법, 이중해시), Close Addressing Method(체이닝)

## 해시 테이블 구현하기
- 구현 할 메서드
  - HashTable.clear() : 객체 초기화
  - HashTable.size() : 크기 반환
  - HashTable.getBuffer() : 전체 데이터 반환
  - HashTable.print() : 전체 데이터 출력
  - HashTable.pust() : 데이터 추가
  - HashTable.remove() : 데이터 삭제
  - HashTable.get() : 데이터 반환


```javascript
const HASH_SIZE = 37

// Element() : key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;  
}

// HashTable() : 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() : 해시 함수
// loselose hsah function
// ------------------------------------------
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++){
    hash += key.charCodeAt(i)
  }
  return hash % HASH_SIZE
}
// ------------------------------------------

// hashcod() : 해시함수
// djb2 hash function
// HashTable.prototype.hashCode = function (key) {
//   let hash = 5381; // 소수로
//   for (let i = 0; i < key.length; i++){
//     hash = hash * 33 + key.charCodeAt(i)
//   }
//   return hash % HASH_SIZE
// }
// ------------------------------------------

// put() : 데이터 추가
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key : ${key} -> index: ${index}`)

  if (this.table[index] !== undefined){
    return false;
  }
  this.table[index] = new Element(key, value)
  this.length++;
  return true;
}

// get() : 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)]
}

// remove() : 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)]

  if (element !== undefined){
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
}

// clear() : 초기화
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

HashTable.prototype.size = function () {
  return this.length;
}

HashTable.prototype.getBuffer = function() {
  let array = []
  for (let i = 0; i < this.table.length; i++){
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array
}

HashTable.prototype.print = function() {
  for (let i = 0; i < this.table.length; i++){
    if(this.table[i]){
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value)
    }
  }  
}


let ht = new HashTable();

ht.put("Ana", 172)
ht.put("Donnie", 183)
ht.put("Sue", 163)
ht.put("Jamie", 168)
ht.put("Paul", 190)

console.log("")
console.log(ht.size())
ht.print()

// 충돌 현상 발생

// key : Ana -> index: 13
// key : Donnie -> index: 13
// key : Sue -> index: 5
// key : Jamie -> index: 5
// key : Paul -> index: 32

// 3 size
// 5 -> Sue: 163
// 13 -> Ana: 172
// 32 -> Paul: 190

// 해결방법 hasn function을 기존 loselose -> djb2 hash function으로 변경
// djb2 - 변수값들을 소수로 지정하는 방식이다
// 충돌 해결
// key : Ana -> index: 6
// key : Donnie -> index: 36
// key : Sue -> index: 11
// key : Jamie -> index: 34
// key : Paul -> index: 20

// 5 size
// 6 -> Ana: 172
// 11 -> Sue: 163
// 20 -> Paul: 190
// 34 -> Jamie: 168
// 36 -> Donnie: 183
```