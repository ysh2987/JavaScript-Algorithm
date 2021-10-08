# 선형 조사법 해시테이블 (Linear probing Hash Table)
- Hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어 있다면 그 자리에 대신 저장하는 해시테이블 기반 자료구조이다.

## 선현 조사법 해시 테이블 구현하기
- 구현 할 메서드
  - LinearHashTable.clear() : 객체 초기화
  - LinearHashTable.size() : 객체 크기 반환
  - LinearHashTable.getBuffer() : 전체 데이터 반환
  - LinearHashTable.print() : 전체 데이터 출력
  - LinearHashTable.put() : 데이터 추가
  - LinearHashTable.remove() : 데이터 삭제
  - LinearHashTable.get() : 데이터 반환

```javascript
const HASH_SIZE = 5 // 충돌 빈도를 증가시키기 위해 5로 변경

// Element() : key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;  
}

// HashTable() : 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() : 해시 함수
// loselose hsah function
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++){
    hash += key.charCodeAt(i)
  }
  return hash % HASH_SIZE
}

// put() : 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index
  console.log(`key : ${key} -> index: ${index}`)

  do{
    if (this.table[index] === undefined){
      this.table[index] = new Element(key, value);
      this.length++;
      return true
    }

    index = (index + 1) % HASH_SIZE;
  }while(index !== startIndex)

  return false

}

// get() : 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key)
  let startIndex = index

  do {
    if(this.table[index] !== undefined && this.table[index].key === key){
      return this.table[index].value
    }
    index = (index + 1) % HASH_SIZE
  } while(index !== startIndex)

  return undefined
}

// remove() : 데이터 삭제
LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key)
  let startIndex = index
  do {
    if(this.table[index] !== undefined && this.table[index].key === key){
      let element = this.table[index]
      delete this.table[index]
      this.length--

      return element
    }

    index = (index + 1) % HASH_SIZE
  } while(index !== startIndex)

  return undefined

}

// clear() : 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}
// size() : 크기 반환
LinearHashTable.prototype.size = function () {
  return this.length;
}
// getBuffer() : 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function() {
  let array = []
  for (let i = 0; i < this.table.length; i++){
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array
}
// print() : 데이터 셋 출력
LinearHashTable.prototype.print = function() {
  for (let i = 0; i < this.table.length; i++){
    if(this.table[i]){
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value)
    }
  }  
}

let lht = new LinearHashTable()
lht.put("Ana", 172)
lht.put("Donnie", 183)
lht.put("Sue", 163)
lht.put("Jamie", 168)
lht.put("Paul", 190)
console.log(lht)
// index 충돌이 일어났지만 비어 있는 배열부분에 들어감
// key : Ana -> index: 2
// key : Donnie -> index: 0
// key : Sue -> index: 1
// key : Jamie -> index: 1
// key : Paul -> index: 2
// LinearHashTable {
//   table: [
//     Element { key: 'Donnie', value: 183 },
//     Element { key: 'Sue', value: 163 },
//     Element { key: 'Ana', value: 172 },
//     Element { key: 'Jamie', value: 168 },
//     Element { key: 'Paul', value: 190 }
//   ],
//   length: 5
// }
console.log('')
console.log(lht.get('Ana')) // 172
console.log(lht.get('Paul')) // 190
console.log(lht.get('Kim')) // undefined

console.log(lht.remove('Ana')) // { key: 'Ana', value: 172 }
console.log(lht.get('Ana')) // undefined
```