// 최소힙 (MinHeap)
// Heap() : 배열 내 요소를 저장하기 위한 생성자
function Heap() {
    this.items = []
}

// swap() : 배열 내 두 요소 위치를 변경
Heap.prototype.swap = function (index1, index2){
    let temp = this.items[index1]
    this.items[index1] = this.items[index2]
    this.items[index2] = temp
}
// parentIndex() : 부모 노드의 위치 반환
Heap.prototype.parentIndex = function(index) {
    return Math.floor((index-1) /2)
}

// leftChildIndex() : 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function (index) {
    return index * 2 + 1
}

// rightChildIndex() : 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function (index) {
    return index * 2 + 2
}
// parent () : 부모 노드의 요소 값 반환
Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)]
}


// leftChild () : 부모 노드의 요소 값 반환
Heap.prototype.leftChild = function (index) {
    return this.items[this.leftChildIndex(index)]
}

// rightChild () : 부모 노드의 요소 값 반환
Heap.prototype.rightChild = function (index) {
    return this.items[this.rightChildIndex(index)]
}

// peak() : 현재 정렬된 최소/최대 요소 값 반환
Heap.prototype.peak = function() {
    return this.items[0]
}

// size() : 현재 배열 내 크기 반환
Heap.prototype.size = function(){
    return this.items.length
}

// insert() : 신규 노드 추가
Heap.prototype.insert = function(item) {
    this.items[this.size()] = item
    this.bubbleUp()
}


// bubbleUp() : 추가된 노드 위치 정렬
// 최대 힙은 부등호를 반대로 변경하면 구현이 가능하다.
Heap.prototype.bubbleUp = function () {
    let index = this.size() - 1
    while (this.parent(index) && this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index) , index)
        index = this.parentIndex(index)
    }
}

// extract(): root 노드 반환 및 삭제
Heap.prototype.extract = function () {
    let item = this.items[0]
    this.items[0] = this.items[this.size() - 1]
    this.items.pop()
    this.bubbleDown()
    return item
}
  
// bubbleDown(): 대체된 root 노드 위치를 기준으로 정렬
// 최대 힙은 부등호를 반대로 변경하면 구현이 가능하다.
Heap.prototype.bubbleDown = function () {
    let index = 0
    while (
    this.leftChild(index) &&
    (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
    let childIndex = this.leftChildIndex(index)
    if (
        this.rightChild(index) &&
        this.rightChild(index) < this.items[childIndex]
    ) {
        childIndex = this.rightChildIndex(index)
    }

    this.swap(childIndex, index)
    index = childIndex
    }
}

let minHeap = new Heap()

minHeap.insert(90)
minHeap.insert(15)
minHeap.insert(10)
minHeap.insert(7)
minHeap.insert(12)
minHeap.insert(2)
minHeap.insert(8)
console.log(minHeap) // [2, 10, 7, 90, 12, 15, 8]
minHeap.insert(3)
console.log(minHeap) // [2, 3, 7, 10, 12 ,15 ,8, 90]

console.log(minHeap.extract()) // 2
console.log(minHeap) //  [3, 10 , 7, 90, 12, 15, 8]
console.log(minHeap.extract()) // 3
console.log(minHeap.extract()) // 7
console.log(minHeap.extract()) // 8
console.log(minHeap.extract()) // 10
console.log(minHeap.extract()) // 12
console.log(minHeap.extract()) // 15
console.log(minHeap.extract()) // 90
