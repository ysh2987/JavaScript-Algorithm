# 연결 리스트 (Linked List)
- 각 노드가 데이터와 포인터를 가지며, `한 줄`로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조
- 구현 메서드
  - LinkedList.size() : 노드 개수
  - LinkedList.isEmpty() : 비어 있는지 확인
  - LinkedList.printNode() : 노드 출력
  - LinkedList.append() : 노드 맨 뒤에 추가
  - LinkedList.insert() : 노드 맨 앞에 추가
  - LinkedList.remove() : 노드 삭제
  - LinkedList.removeAt() : 노드 삭제
  - LinkedList.indexOf() : 데이터 위치 확인

## 연결리스트 구현하기
```javascript
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

//LinkedList() : head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length ===0;
};


// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
  for(let node = this.head; node != null; node = node.next){
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value){
  let node = new Node(value);
  let current = this.head;
  if (this.head === null){
    this.head = node;
  } else {
    while(current.next != null){
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

// insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value, position = 0) {
  if(position < 0 || position > this.length){
    return false;
  }
  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0){
    node.next = current;
    this.head = node;
  } else {
    while(index++ < position){
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }
  this.length++;
  return true;
};
// remove() : value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current;
  while(current.data != value && current.next != null){
    prev = current; 
    current = current.next;
  }
  if (current.data != value){
    return null;
  }

  if (current === this.head){
    this.head = current.next;
  }else {
    prev.next = current.next
  }

  this.length--;
  return current.data;
};

// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if(position < 0 || position >= this.length){
    return null;
  }

  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0){
    this.head = current.next;
  }else {
    while(index++ < position){
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;
  return current.data;
}

// indexOf() : value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function(value){
  let current = this.head;
  let index = 0;

  while (current != null){
    if (current.data === value){
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};

// remove2() : indexof + removeAt = remove
LinkedList.prototype.remove2 = function name(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};


let ll = new LinkedList()
ll.append(1)
ll.append(10)
ll.append(100)
ll.printNode() // 1 -> 10 -> 100 -> null
ll.insert(5)
ll.insert(3,3)
ll.printNode() // 5 -> 1 -> 10 -> 3 -> 100 -> null

ll.remove(1000)
ll.printNode() // 5 -> 1 -> 10 -> 3 -> 100 -> null
ll.remove(1)
ll.printNode() // 5 -> 10 -> 3 -> 100 -> null

ll.removeAt(1)
ll.printNode() // 5 -> 3 -> 100 -> null

console.log(ll.indexOf(100)) // 2
ll.remove2(100)
ll.printNode() // 5 -> 3 -> null

console.log(ll.size()); // 2
```