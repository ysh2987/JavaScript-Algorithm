# Dijkstra 알고리즘
- 그래프에서 출발점과 도착점 사이의 최단 거리를 구하는 알고리즘
- 보통 단일 정점 간 최단 경로 산출 시 사용, 도로 교통 망이나 OSPF 등의 네트워크 라우팅 프로토콜에 널리 이용
- 구현 할 메서드
  - 정점 추가 : ShortestPath.addVertex()
  - 간선 추가 : ShortestPath.addEdge()
  - 다익스트라 알고리즘 : ShortestPath._extractMin()
  ShortestPath.dijkstra()

## 다익스트라 구현하기
```javascript
// ShortestPath.addVertex() : edge object 객체 저장을 위한 생성자
// key : vertex
// value : list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function ShortestPath() {
  this.edges = {}
}

// addVertex() : 정점 추가(간선 비용 표시를 위해 object 형태로 저장)
ShortestPath.prototype.addVertex = function(vertex){
  this.edges[vertex] = {}
}
//addEdge () : 간선 추가
ShortestPath.prototype.addEdge = function (srcVertex, dstVetex, weight){
  this.edges[srcVertex][dstVetex] = weight
}

// _extractMin : 최단 거리 노드 탐색
ShortestPath.prototype._extractMin = function (queue, dist){
  let minDistance = Number.POSITIVE_INFINITY
  let minVertex = null
  for (let vertex in queue){
    if(dist[vertex] <= minDistance){
      minDistance = dist[vertex]
      minVertex = vertex
    }
  }
  return minVertex
}

// dijkstra() : 다익스트라 최단 경로 탐색
ShortestPath.prototype.dijkstra = function (start) {
   let queue = {}
   let dist = {}
   
   for (let vertex in this.edges){
     dist[vertex] = Number.POSITIVE_INFINITY
     queue[vertex] = this.edges[vertex]
   }
   dist[start] = 0
   while(Object.keys(queue).length !=0){
     let u = this._extractMin(queue, dist)

     delete queue[u]

     for (let neigbor in this.edges[u]){
       let alt = dist[u] +this.edges[u][neigbor]
       if (alt < dist[neigbor]) dist[neigbor] = alt
     }
  }
for(let vertex in this.edges){
  if(dist[vertex] == Number.POSITIVE_INFINITY){
    delete dist[vertex]
  } // infinite값 제거
}
  return dist
}

let path = new ShortestPath()
path.addVertex("A")
path.addVertex("B")
path.addVertex("C")
path.addVertex("D")
path.addVertex("E")

path.addEdge("A", "B", 10)
path.addEdge("A", "C", 3)
path.addEdge("B", "C", 1)
path.addEdge("B", "D", 2)
path.addEdge("C", "B", 4)
path.addEdge("C", "D", 8)
path.addEdge("C", "E", 2)
path.addEdge("D", "E", 7)
path.addEdge("E", "D", 9)

console.log(path)
console.log(path.dijkstra("A")) // { A: 0, B: 7, C: 3, D: 9, E: 5 }
console.log(path.dijkstra("B")) // { B: 0, C: 1, D: 2, E: 3 }
console.log(path.dijkstra("C")) // { B: 4, C: 0, D: 6, E: 2 }


```