# 탐욕 알고리즘 ( Greedy Algorithm )
- 매 순간 최적 해를 선택하면서 최종적으로 최적해에 도달하는 알고리즘 설계 기법
- 탐욕 알고리즘 특징
  - 최적 부분 구조나 탐욕 선택 속성 문제를 해결하는데 적합하다.
  - 매 순간 최적 해를 찾으면서 구하는 방법이 항상 최적임을 보장하지 않아 유의 필요함


## 예제 코드
- 편의점 이용객이 1000엔 지폐를 내고 n값의 물건을 구매 할 때 가장 적게 거스름돈을 주는 경우 
- 제일 적게 거슬러 줄 수 있는 500원부터 지불하면 된다.

```javascript
function solution (n) {
  let change= [500, 100, 50, 10, 5, 1]
  let cnt = 0
  n = 1000 - n
  for (let i = 0; i < change.length; i++){
    while (n >= change[i]){
      n -= change[i]
      cnt++
    }
  }
  return cnt
}

console.log(solution(380))
console.log(solution(1))
```
