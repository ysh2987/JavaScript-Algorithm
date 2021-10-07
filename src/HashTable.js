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
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++){
    hash += key.charCodeAt(i)
  }
  return hash % HASH_SIZE
}
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
console.log(ht.hashCode("Ana")) // 13

ht.put("Ana", 172)
ht.put("Sue", 163)
ht.put("Paul", 190)
console.log(ht)

console.log(ht.get("Paul")) // Element { key: 'Paul', value: 190 }
console.log(ht.remove("Paul")) // Element { key: 'Paul', value: 190 }

ht.print()
// 5 -> Sue: 163
// 13 -> Ana: 172
console.log(ht.getBuffer()) // [Element { key: 'Sue', value: 163 }, Element { key: 'Ana', value: 172 } ]
