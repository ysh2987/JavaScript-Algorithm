# 반복문
## 반복문 for
- 선언문, 조건문, 증감문 형태로 이루어진 반복문
- 조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행한다.
- 선언문, 조건문, 증감문 자리에 공백 입력 가능하다.

```javascript
// for 예제
for (let i =0; i < 3; i++){
  console.log(i) // 0 1 2
}

for(let i = 10; i < 3; i++){
  console.log(i) // 조건에 false를 반환해 실행하지 않음
}

let num = 0;
for (; num < 2; ){
  console.log(num) // 0 1
  num++;
  // 선언문과 증감문이 없는 for문
}
```
## 2중 for 문
```javascript
// 구구단 
for(let i = 1; i < 10; i++){
  for(let j = 1; j < 10; j++){
    console.log(`${i} * ${j} = ${i * j}`)
  }
}
```

## for .. in 반복문
- 객체의 ket, value 형태를 반복하여 수행하는데 최적화 된 유형이다.
- 첫번째 부터 마지막까지, 객체의 키 개수만큼 반복한다.

```javascript
const person = {fname: "Jhon", lname: "Bob", age: 25};
let text = ""

for (let x in person){
  text += person[x]
}
console.log(text) // JhonBob25
```


## for .. of 반복문
- Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형이다.
- ES6에 새로 추가된 Collection 기반의 반복 구문 

```javascript
let array = [1, 2, 3, 4, 5]
let result = 0
for (let z of array){
  result += z
}
console.log(result) // 15
```


## 반복문 while
- 조건이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문이다.
- for문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop등 수행시 많이 사용한다.
- 조건문을 코드 블록보다 아래로 옮긴 do ... while 반복문도 존재(최소 한번 수행이 필요할 떄 많이 사용한다.)

```javascript
let i = 0
while (i < 3) {
  console.log(i)  // 0 1 2 
  i++
}

let j = 0
do {
  console.log(j)
  j++
} while( j < 3); // 0 1 2 

```
- do while은 한번은 실행하고 조건을 확인한다.


## 반복문 제어(break)
- 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자이다.
- 다중 반복문일 경우 가장 안쪽의 반복문을 종료한다.
- Label을 통하여 다중 반복문을 한번에 종료 가능하다.
  - Label: 반복문 앞에 콜론과 함께 쓰이는 식별자

## 반복문 제어(continue)
- 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 시킨 후 반복문 내 명시된 조건을 판단한다.

```javascript
// break
let text = ""

for (let i = 0; i < 10; i++){
  if (i ===3) break;
  text += i
}
console.log(text) // 012

// continue
text = ""
for (let i = 0; i < 10; i++){
  if (i ===3) continue;
  text += i
}
console.log(text) // 012456789
```
## 반복문 제어(Label)
- 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자이다.
- break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야 한다.
- 다중 for문을 한번에 종료시킬때 자주 사용된다.

```javascript
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
  console.log(`${i} * ${j} = ${i * j}`)  
  // 0 * 0 = 0 
  // 1 * 0 = 0 
  // 2 * 0 = 0 
  break; 
  }
} 
// Label
end: for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(`${i} * ${j} = ${i * j}`)  
    // 0 * 0 = 0
    break end;  
  }
} 
```

