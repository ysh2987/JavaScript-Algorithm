function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
  return this.length;
}

DoubleLinkedList.prototype.isEmpty = function () {
  return this.legth === 0;
}
//printNode() : 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write(`head -> `)
  for(let node = this.head; node != null; node = node.next){
    process.stdout.write(`${node.data} -> `)
  }
  console.log("null")
}
//printNodereverse() : 노드 역방향 출력
DoubleLinkedList.prototype.printNodereverse = function () {
  let temp = [];

  process.stdout.write(`null < - `)
  for(let node = this.tail; node != null; node = node.prev){
    temp.push(node.data)
  }

  for(let i = temp.length-1; i >=0; i--){
    process.stdout.write(`${temp[i]} <- `)
  }

  console.log("tail")
};

//appned : 맨 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value) // 10
  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

};
// insert () : position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length){
    return false;
  }
  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0){
    if(this.head === null){
      this.head = node;
      this.tail = node;
    } else{
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if( position === this.length){
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while(index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }
  this.length++;
  return true;

};

// remove : value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head;
  let prev = current

  while( current.data != value && current.next != null){
    prev = current;
    current = current.next
  }
  if (current.data != value){
    return null;
  }

  if(current === this.head){
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if(current === this.tail){
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;

  return current.data
}

// removeAt() : position 위치 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length){
    return null;
  }
  let current = this.head;
  let index = 0;
  let prev = 0;

  if (position === 0){
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if(position === this.length -1){
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while(index++ < position){
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};
// indexOf() : value 값을 갖는 노드 위치 반환
DoubleLinkedList.prototype.indexOf = function(value){
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

// remove2() : indexof + removeAt = remove2
DoubleLinkedList.prototype.remove2 = function name(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};



let dll = new DoubleLinkedList();
dll.insert(1)
dll.insert(10)
dll.append(100)
dll.append(1000)
dll.insert(2, 1)
dll.insert(3, 3);
dll.printNode(); // head -> 10 -> 2 -> 1 -> 100 -> 1000 -> 3 -> null


