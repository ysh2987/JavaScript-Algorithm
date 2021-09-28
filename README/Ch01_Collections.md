# Collection
- 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간이다.
- 자바스크립트에서 제공하는 Collection은 아래와 같다
- Indexed Collection
  - Array
  - Typed Array
- keyed Collection
  - Object 
  - Map
  - Weak Map
  - Set
  - Weak Set

## 생성자
- 유사한 객체를 다중으로 만들 때 사용되는 함수(타 언어에서의 class 개념과 유사)
- 일반적으로 생성자 함수의 첫 글자는 대문자로 시작한다.
- 생성자 함수로 객체 생성 시 new 연산자를 통해 객체를 생성한다.

```javascript
function FishBread(flavor, price){
  this.flavor = flavor
  this.price = price
  this.base = "flour"
}

let bread_1 = new FishBread("cream", 1200)
let bread_2 = new FishBread("redbean", 1000)
let bread_3 = new FishBread("milk", 1500)

console.log(bread_1) // FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2) // FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3) // FishBread { flavor: 'milk', price: 1500, base: 'flour' }

```
## new.target
- new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능하다.
```javascript
function User(name){
  if(!new.target){
    return new User(name)
  }
  this.name = name
}

let result_2 = User('john')
console.log(result_2) // User { name: 'john' }
```
- 위와 같이 new.target속성을 사용하여 new를 선언 안했을 경우 재귀적으로 다시 new를 붙혀 호출할수 있도록 해준다.




# Map
- 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능할 수 있는 Collection
- Map은 Object 대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요하다.
- 대표 속성 및 메서드
  - 생성자 : new Map()
  - 개수 확인 : Map.size
  - 요소 추가 : Map.set(key,value)
  - 요소 접근 : Map.get(key)
  - 요소 삭제 : Map.delete(key)
  - 전체 삭제 : Map.clear()
  - 요소 존재 여부 확인 : Map.has(key)
  - 그 밖의 메서드 : Map.keys(), Map.values(), Map.entires()

## Map Object 비교
- Object의 키는 Strings이며, Map의 키는 모든 값을 가질 수 있다.
- Object는 크기를 수동으로 추적해야하지만, Map은 크기를 쉽게 얻을 수 있다.
  - Object = Object.keys(Object).length
  - Map = Map.size
## Map 반복문
- Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for of 구문을 통해 반복문을 수행한다.
```javascript
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
])
for(let key of recipe_juice.keys()){
  console.log(key)
  // strawberry
  // banana
  // ice
}
for(let item of recipe_juice.values()){
  console.log(item)
  // 50
  // 100
  // 150
}
for(let key_item of recipe_juice){
  console.log(key_item)
  // [ 'strawberry', 50 ]
  // [ 'banana', 100 ]
  // [ 'ice', 150 ]
}
```

## Map <--> Object 변환
- Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object간 변환이 가능하다.
```javascript
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
])

// Map => Object로 변환
let recipe_juice_obj = Object.fromEntries(recipe_juice)
console.log(recipe_juice_obj)
// { strawberry: 50, banana: 100, ice: 150 }

// Object => 배열로 변환
let recipe_juice_kv = Object.entries(recipe_juice_obj)
console.log(recipe_juice_kv)
// [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

// 배열 => Map 변환
let recipe_juice_map = new Map(recipe_juice_kv)
console.log(recipe_juice_map)
// Map { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
```


# Set
- value만을 저장하며 중복을 허용하지 않는 Collection
- 대표 속성 및 메서드
  - 생성자 : new Set()
  - 개수 확인 : Set.size
  - 요소 추가 : Set.add(value)
  - 요소 삭제 : Set.delete(value)
  - 전체 삭제 : Set.clear()
  - 요소 존재 여부 확인 : Set.has(key)
  - 그 밖의 메서드 : Set.keys(), Set.values(), Set.entires()


## Set 요소 추가 / 삭제
- 요소 추가 : Set.add(value), 요소 존재 여부 확인 : Set.has(key), 요소 삭제 : Set.delete(value)
- 다양한 자료형을 value로 사용 가능하며, set.add 호출시 set이 반환되므로 체이닝 가능하다.

```javascript
let set = new Set()
let num = new Set([1,2,3,4,5])
let str = new Set("Hello")

console.log(num) // Set { 1, 2, 3, 4, 5 }
console.log(str) // Set { 'H', 'e', 'l', 'o' }

set.add(1).add(1).add(10).add(20)
console.log(set) // Set { 1, 10, 20 }

console.log(set.has(10)) // true

console.log(set.delete(1)) // 삭제되면 true
console.log(set.delete(-1)) // 요소가 없으면 false+
console.log(set) // Set { 10, 20 }
```

## Set 반복문
- Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행가능

```javascript
let str = new Set("Hello")

for(let item of str){
  console.log(item)
  //H
  //e
  //l
  //o
}

for(let item of str.keys()){
  console.log(item)
  //H
  //e
  //l
  //o
}

for(let item of str.values()){
  console.log(item)
  //H
  //e
  //l
  //o
}

for(let item of str.entries()){
  console.log(item)
  // [ 'H', 'H' ]
  // [ 'e', 'e' ]
  // [ 'l', 'l' ]
  // [ 'o', 'o' ]
}
```