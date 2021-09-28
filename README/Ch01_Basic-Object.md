# method
- 객체에 저장된 값이 함수인 경우, 이를 메서드라고 부름
```javascript
let user = {
    name: "john",
    age: 27,
    hello_func(){
        console.log('hello')
    }
}
```

## method 변경
```javascript
function hello_func(){
    console.log('hello')
}

function hi_func(){
    console.log('hi')
}

let obj = {
    name: "jhon",
    age : 27,
    func: hello_func,
}

obj.func() //hello
obj.func = hi_func
obj.func() // hi
console.log(obj.func === hi_func) //true
```
## this
- 메서드에서 객체 내부의 속성(property) 값을 접근할 수 있는 지시자
- this를 사용하는 method는 추가 가능하며, 이 때 this는 runtime에 결정되어 호출한 객체에 따라 다름

```javascript
let user = {name : "song"}
let admin = {name : "admin"}

function hello_func() {
    console.log(`hello ${this.name}`)
}
user.func = hello_func // 객체에 함수 삽입
admin.func = hello_func 

user.func() //hello song
admin.func() // hello admin

// 다른 함수 접근방식
user["func"]() //hello song
admin["func"]() // hello admin
```

# 내장 함수
## Number
- Number.toString() : 숫자를 정수로 변환
- Number.toFixed() : 자릿수 표현
- Number.toPrecision() : 정수와 소수의 자리 수를 합한 길이로 제한
- Number.isNaN() : 표현할 수 없는 값인지 확인 true/false 반환
- Number.isFinite() : 정상적인 유한수인지 확인
- Number.parseInt() : 정수로 변환
- Number.parseFloat(): 실수로 변환

## String
- String.length : 문자열 길이
- String.charAt(index) : index에 해당하는 문자 반환
- String.charCodeAt(index) : index에 해당하는 문자에 ASCII코드 반환
- String[index] : index에 해당하는 문자 반환
- String.indexOf(str) : 문자열에 해당 문자가 몇번째 index에 있는지 
- String.indexOf(str, 3) : 인덱스 3부터 검색을 한다.   
- String.lastIndexOf(str) : 뒤에서부터 검색한다.
- String.includes(str) : 문자가 있는지 true / false 반환
- String.toUpperCase() : 알파벳 대문자로 변환
- String.toLowerCase() : 알파벳 소문자로 변환
- String.replace() : 문자열 치환, 요소 하나만 변경하기 떄문에 전체를 변경하기 위해서는 정규표현식 사용해야함.
    - .replace(/l/g, "w" ) : l 전체를 w로 변환
    - .replace(/l/gi, "w" ) : l 전체를 대소문자 구분 하지 않고 w로 변환
- String.slice(start, end) : 시작 index부터 끝 index까지의 문자열 추출
    - end를 기입하지 않은 경우 start 부터 끝 까지
- String.substring(start, end) : slice와 동일하지만
    - slice는 start가 end보다 클 경우 동작하지 않지만
    - substring은 작은 값을 start로 자동으로 변환된다.
- String.substr(start, length) : start 위치부터 몇글자를 반환할 것인지
- String.split() : 문자열 분할 

## Array
- 여러 개체 값을 순차적으로 나열한 자료구조
- 배열 내 값을 요소라고 하며, 배열 요소는 index로 접근 가능하다.
- 대표 속성(property)과 메서드(method)
- Array.length : 배열 크기 확인
- Array.isArray() : 배열 여부 확인, 맞으면 true / 아님면 false
- Array.push() : 배열의 마지막에 데이터를 추가한다.
- Array.pop() : 배열의 마지막 데이터를 삭제한다.
- Array.shift() : 배열의 맨 앞에 데이터를 추가한다.
- Array.unshift() : 배열의 맨 앞에 데이터를 삭제한다.
- delete Array[index] : 배열의 index값 삭제, 삭제해도 배열 사이즈가 그대로인 문제 발생
- Array.splice() : 인수가 한개일 경우 배열의 index값 부터 끝까지 자르기
    - 인수가 2개일 경우 Array.splice(1,1) 1번 index값 1개만 제거
    - 삭제와 동시에 삽입하고자 할 배열 데이터를 삽입할 수 있다.
    - Array.splice(1,1,'apple','melon')
- Array.slice() : 데이터를 자른뒤 가져오고 싶을 때, 원본데이터가 변경되지 않는다.
- Array.concat(arr1,arr2): 다중 배열을 병합한다.
- Array.indexOf() : 앞에서부터 값의 index번호를 반환한다.
- Array.lastIndexOf() : 뒤에서부터 값의 index번호를 반환한다.
- Array.includes() : 배열의 데이터가 포함되어 있으면 true, 없으면 false
- Array.sort() : 내림차순 정렬
- Array.reverse() : 배열을 뒤집는다. sort를 한뒤 reversr를 하게 되면 오름차순으로 정렬된다.
- Array.join() : 배열의 원소들을 문자열로 변환한다.

## 고차함수
- 하나 이상의 함수를 배개변수로 취하거나 함수를 결과로 반환하는 함수
- 배개변수로 전달되는 함수는 콜백 함수
- Array.sort(callback function) : 임의 정렬
- Array.forEach() : 반복작업
- Array.map() : 콜백함수 결과 배열 반환

## forEach( )
- 배열 요소 별 콜백 함수 각각에 실행: Array..forEach(function(item,index,array){})
- item: 배열 요소, index: 배열 위치, array: 배열
```javascript
let nums = [4, 5, 6]
nums.forEach(function(i,j,k){
  console.log(i) // 4 5 6 배열 요소
  console.log(j) // 0 1 2 인덱스
  console.log(k) // [4, 5, 6] 배열 자체
})
```
## map( )
- 배열 요소 별 함수 호출 및 결과를 배열로 반환: Array.map(function(item,index,arrat){})
- item: 배열 요소, index: 배열 위치, array: 배열
```javascript
let nums = [1, 2, 3, 4, 5]
let nums_for_loop = []
// for문
for (let i = 0; i < nums.length; i++){
  nums_for_loop.push(nums[i] * 2)
}
// map
let nums_map = nums.map(function (item){
    return item * 2
})
```

## find( )
- 콜백 함수의 조건을 반복하는, 단 하나의 값만 반환 : Array.find(function(item,index,arrat){})
- item: 배열 요소, index: 배열 위치, array: 배열
```javascript
let users = [
  {name: 'bob', age : 17, job: false},
  {name: 'mike', age : 20, job: true},
  {name: 'jhon', age : 27, job: false}
]

let find_job = users.find(function(user){
  return user.job == false
})
console.log(find_job) // { name: 'bob', age: 17, job: false }

let find_age = users.find(function (user){
  return user.age >= 19
})
console.log(find_age) // { name: 'mike', age: 20, job: true }
```

## filter( )
- 콜백 함수의 조건을 만족하는 값을 배열로 반환: Array.filter(function(item,index,arrat){})
- item: 배열 요소, index: 배열 위치, array: 배열

```javascript
let users = [
  {name: 'bob', age : 17, job: false},
  {name: 'mike', age : 20, job: true},
  {name: 'jhon', age : 27, job: false}
]

let find_job = users.filter(function(user){
  return user.job == false
})
console.log(find_job)
// { name: 'bob', age: 17, job: false },
// { name: 'jhon', age: 27, job: false }
let find_age = users.filter(function (user){
  return user.age >= 19
})
console.log(find_age)
// { name: 'mike', age: 20, job: true },
// { name: 'jhon', age: 27, job: false }
```

## reduce( )
- 요소 별 함수 누적 결과값 반환 : Array.reduce(function(item,index,arrat){})
- accumulator: 이전 함수 결과(initial로 초기값 설정 가능), item: 배열요소, index: 배열위치, array: 배열

```javascript
let nums = [11, 12, 13, 14 ,15]
let call_cnt = 0

let sum = nums.reduce(function(accumulator, item, index, array){
  console.log(accumulator, '\t\t', item, "\t\t", index, "\t\t", array)
  call_cnt++
  return accumulator + item
})
console.log(call_cnt) // 4 요소가 5개여도 초기값을 설정하지 않으면 배열에 맨 앞요소에 연산은 하지 않음
console.log(sum) // 65
```

## Math
- 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
- Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능하다.
- 대표 속성 및 메서드
  - Math.E : 오일러 상수
  - Math.PI : 파이값 제공
  - Math.abs(x) : 절대값
  - Math.max(x) : 최대값 
  - Math.min(x) : 최소값
  - Math.random() : 랜덤 난수
  - Math.pow(x, y) : 제곱
    - Math.pow(2, 3) : 8
  - Math.sqrt : 제곱근
    - Math.sqrt(4) : 2
  - Math.round(x) : 소수점 이하 반올림 정수
  - Math.ceil(x) : 소수점 이하 올림
  - Math.floor(x) : 소수점 이하 내림

## 최대 / 최소 / 절대값
- Math.max(x) : 최대값, Math.min(x) : 최소값, Math.abs(x) : 절대값
- 배열을 인수로 받아 최대/최소를 산출하려면 apply함수 혹은 스프레드 문법을 사용해야한다.
  - Math.max(...nums)
  - Math.max.apply(numm, nums)

## Date
- 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
- Date 객체는 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현한다.
- 대표 메소드

|함수명||의미|설명|
|--|--|--|--|
|getFullYear()|setFullYear()|년도||
|getMonth()|setMonth()|월|1월(0) ~ 12월(11)|
|getDate()|setDate()|일||
|getDay()|setDay()|요일|일요일(0) ~ 토요일(6)
|getHours()|setHours()|시간||
|getMinutes()|setMinutes()|분||
|getSeconds()|setSeconds()|초||
|getMilliseconds()|setMilliseconds()|밀리초||
|getTime()|setTime|Unix 타임| 1970/1/1 12:00 기준 경과한 밀리초|

```javascript
let date = new Date(Date.UTC(2021, 0, 1))

console.log(date.getFullYear()) // 2021
console.log(date.getMonth()) // 0

// 일요일(0) ~ 토요일(6)    
console.log(date.getDay()) // 5
console.log(date.getHours()) // 9
console.log(date.getUTCHours()) // 0
console.log(date.getTime()) // 1609459200000
console.log(date.getTimezoneOffset()) // -540 우리나라 시간과 UTC 시간과의 차이
```
```javascript
let dt = new Date();
dt.setDate(dt.getDate()+365) // 1년 후 
dt.setFullYear(dt.getFullYear()-1) // 1년 전

let dt = new Date()
let arrDayStr = ['일','월','화','수','목','금','토']

let str = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate() // 2021-9-29
let str1 = dt.getFullYear()+'년 '+(dt.getMonth()+1)+'월 '+dt.getDate()+'일' // 2021년 9월 29일
let str2 = (dt.getMonth()+1)+'월 '+dt.getDate()+'일 '+arrDayStr[dt.getDay()]+'요일'// 9월 29일 수요일

```
## Date 생성자
- Date 생성자 종류 :
  - new Date() 
  - new Date(miniseconds)
  - new Date(datestring)
  - new Date(year,month,date,hours,minutes,seconds,ms)
```javascript
let date_now = new Date() // 2021-09-28T17:19:29.211Z
let date_str = Date() // Wed Sep 29 2021 02:19:29 GMT+0900 (GMT+09:00)
let date_ms_1 = new Date(0) // 1970-01-01T00:00:00.000Z
let date_string = new Date("2020-01-01") // 2020-01-01T00:00:00.000Z

// UTC 기준으로 나오기 때문에 1월 1일을 적어도 우리나라 시간은 9시간 전이므로
// 20년 12월 31일이 출력된다.
// month : 1월(0) ~ 12월(11) 
let date_params_1 = new Date(2021, 0, 1) // 2020-12-31T15:00:00.000Z

// UTC 보정
let date_params_2 = new Date(Date.UTC(2021, 0, 1)) // 2021-01-01T00:00:00.000Z
```
