// let input = ["a", "b", "c"]
// let count =0

// // 매개변수 배열, 시작 index, 뽑을 갯 수
// function permutation(arr, s, r){
//   if (s == r){
//     count++
//     console.log(arr)
//     return
//   }
//   //1. 재귀 함수를 멈춰야할 조건
//   for(let i = s; i < arr.length; i++){
//     [arr[s], arr[i]] = [arr[i], arr[s]]
//     permutation(arr, s + 1, r);
//     [arr[s], arr[i]] = [arr[i], arr[s]]
//   }
//   // 2. 재귀를 돌면서 변경되어야 될 부분 
// }

// permutation(input, 0, 2)



// let input = ["a", "b", "c"]
// let count =0

// // 매개변수 배열, 시작 index
// function permutation(arr, s){
//   if (s == arr.length-1){
//     count++
//     console.log(arr)
//     return
//   }
//   //1. 재귀 함수를 멈춰야할 조건
//   for(let i = s; i < arr.length; i++){
//     [arr[s], arr[i]] = [arr[i], arr[s]]
//     // ["a", "b", "c"]
//     permutation(arr, s+1);
//     [arr[s], arr[i]] = [arr[i], arr[s]]
//   }
//   // 2. 재귀를 돌면서 변경되어야 될 부분 
// }

// permutation(input, 0)

// 조합

// let input = [1, 2, 3, 4]
// let conut = 0

// function combination(arr){
//   for (let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//       conut++;
//       console.log(arr[i], arr[j])
//     }
//   }
// }
// combination(input)
// console.log(conut)
// // 1 2
// // 1 3
// // 1 4
// // 2 3
// // 2 4
// // 3 4
// // 6

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