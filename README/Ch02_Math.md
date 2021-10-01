# 알고리즘 복잡도

## 시간 복잡도
- 입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행 시간을 평가하는 방법
- 3가지 점근적 표현법
  - 빅오 : 최악의 상황을 고려하여 성능 측정 결과 표현
  - 세타 : 평균적인 경우에서의 성능 측정 결과 표현
  - 오메가 : 최선의 상황일 때의 성능 측정 결과 표현

# 경우의 수 
## 순열
- 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관 `있게` 나열하는 경우의 수 ( nPr )

```javascript
// 순열 예제 - for문
// 3개의 알파벳으로 단어를 만드는 경우의 수
// 알파벳 개수가 늘어날 때마다 for문을 추가 작성해야한는 번거로움이 생긴다.
let input = ["a", "b", "c"]
function permutation(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j =0; j <arr.length; j++){
      if(i == j) continue
      for(let k=0; k < arr.length; k++){
        if (i == k)  continue
        if (j == k) continue
        console.log(arr[i], arr[j], arr[k])
      }
    }
  }
}
permutation(input)
// a c b
// b a c
// b c a
// c a b
// c b a
```
```javascript
// 순열 예제 - 재귀함수
// 3개의 알파벳으로 단어를 만드는 경우의 수
let input = ["a", "b", "c"]
let count =0

// 매개변수 배열, 시작 index, 뽑을 갯 수
function permutation(arr, s, r){
  //1. 재귀 함수를 멈춰야할 조건
  if (s == r){
    count++
    console.log(arr)
    return
  }
  // 2. 재귀를 돌면서 변경되어야 될 부분 
  for(let i = s; i < arr.length; i++){
    [arr[s], arr[i]] = [arr[i], arr[s]]
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]
  }
  
}
permutation(input, 0, 2)
// a c b
// b a c
// b c a
// c a b
// c b a
```

## 조합
- 서로 다른 n개의 원소 중에서 r를 중복없이 골라 순서에 상관 `없이` 나열하는 경우의 수 ( nCr )
```javascript
// 조합 예제 - for문
// 4개의 숫자 카드에서 2개를 뽑는 경우의 수
let input = [1, 2, 3, 4]
let count = 0

function combination(arr){
  for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      conut++;
      console.log(arr[i], arr[j])
    }
  }
}
combination(input)
console.log(count)
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4
// 6
```

```javascript
//재귀
let input = [1, 2, 3, 4]
let output = []
let count = 0
function combination(arr, data, s, idx, r){
  if (s == r){
    count++;
    console.log(data)
    return;

  }
  for(let i = idx; arr.length-i >= r-s; i++){
    data[s] = arr[i];
    combination(arr, data, s +1, i+1, r);
  }
}

combination(input, output, 0, 0, 2)
console.log(count)

```

# 점화식
- 점화식이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
- 대표적인 점화식
  - 등차 수열 : F(n) = F(n-1) + a
  - 등비 수열 : F(n) = F(n-1) * a
  - 팩토리얼 : F(n) = F(n-1) * n
  - 피보나치 수열 : F(n) = F(n-1) + F(n-2)

```javascript
// 등차 수열
// for문
let result

function forloof(s, t, number) {
  let acc = 0

  for (let i = 1; i <= number; i++){
    if(i == 1) acc+= s
    else acc += t
  }
  return acc
}

result = forloof(3, 2, 5)
console.log(result) // 11

// 재귀
let result

function reculsive(s, t, number) {
  if (number == 1){
    return s
  }
  return reculsive(s,t, number-1) + t
}

result = reculsive(3, 2, 5)
console.log(result) // 11
```


```javascript
// 등비 수열
// for문
let result

function forloof(s, t, number) {
  let acc = 1

  for (let i = 1; i <= number; i++){
    if(i == 1) acc *= s
    else acc *= t
  }
  return acc
}

result = forloof(3, 2, 5)
console.log(result) // 11

// 재귀
let result

function reculsive(s, t, number) {
  if (number == 1){
    return s
  }
  return reculsive(s,t, number-1) * t
}

result = reculsive(3, 2, 5)
console.log(result) // 11
```

```javascript
// 팩토리얼
function reculsive(number) {
  if (number == 1){
    return number
  }
  return reculsive(number-1) * number
}

result = reculsive(5)
console.log(result)
```


