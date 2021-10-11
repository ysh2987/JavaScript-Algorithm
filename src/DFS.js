function Graph() {
  this.edge = {}
  this.visited = {}
}

// addVertex() : 정점 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = []
  this.visited[v] = false
}

// addEdge() : 간선 추가
Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2) // v1 -> v2
}

// dfs() : DFS 재귀탐색
Graph.prototype.dfs = function (startVertex){
  this._dfsRecursiveVisit(startVertex)
}

// dfsStack() : DFS 스택탐색
Graph.prototype.dfsStack = function (startVertex){
  // this._dfsRecursiveVisit(startVertex)
  this._dfsLoopVisit(startVertex)
}

// _dfsRecursiveVisit() : 재귀를 이용한 DFS 탐색
Graph.prototype._dfsRecursiveVisit = function (vertex){
  // 1. 종료 조건
  if (this.visited[vertex]){
    return
  }

  // 2. 재귀 호출을 하면서 수행해야할 코드
  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`)

  let neighbors = this.edge[vertex]
  for (let i = 0; i < neighbors.length; i++){
    this._dfsRecursiveVisit(neighbors[i])
  }
}

// _dfsLoopVisit() : 스택을 이용한 DFS 탐색
Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = []
  stack.push(vertex)

  while(stack.length !== 0) {
    let vertex = stack.pop()
    if (this.visited[vertex]) continue
    this.visited[vertex] = true
    console.log(`visit "${vertex}" `)

    let neighbors = this.edge[vertex]
    for (let i = neighbors.length - 1; i >= 0; i--){
      stack.push(neighbors[i])
    }
  }
}

// print() : 현재 Graph 연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge){
    let neighbors = this.edge[vertex];
    if (neighbors.length === 0) continue

    process.stdout.write(`${vertex} -> `)
    for (let j =0; j < neighbors.length; j++){
      process.stdout.write(`${neighbors[j]} `)
    }
    console.log("")
  }
}

let graph = new Graph()
let vertex = ["A","B","C","D","E","F","G","H","I"]

for (let i =0; i< vertex.length; i++){
  graph.addVertex(vertex[i])
}

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("E", "I")


graph.dfs("A") // 재귀 
graph.dfsStack("A") // stack 결과 동일
// visit "A"
// visit "B"
// visit "E"
// visit "I"
// visit "F"
// visit "C"
// visit "G"
// visit "D"
// visit "H"

