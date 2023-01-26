// // let input = ['a', 'b', 'c']
// // let count = 0

// // function permutation(arr) {
// //     // for i = 첫 번째 위치시킬 요소 a, b, c
// //     for (let i = 0; i < arr.length; i++) {
// //         // for j는 두 번재 위치시킬 요소
// //         for (let j = 0; j < arr.length; j++) {
// //             if (i == j) continue
// //             for (let k = 0; k < arr.length; k++) {
// //                 if (i == k || j == k) continue
// //                 console.log(arr[i], arr[j], arr[k])
// //                 count++
// //             }
// //         }
// //     }
// // }

// // permutation(input)

// // console.log(count);

// console.clear()
// let input = ['a', 'b', 'c']
// let count = 0 // 1이추가됨


// const permutation = (arr, s, r) => { // arr 배열, 시작할 위치 s, 몇개를 뽑을지 r

//     // 1. 재귀함수를 멈춰야 할 조건

//     if (s === r) { //2가되면
//         count++
//         console.log(arr)
//         return
//     }
//     // 2. 재귀를 돌면서 변경되어야 할 부분 / 메인 로직
//     for (let i = s; i < arr.length; i++) { //두번 재기가 된거야 0, 1
//         [arr[s], arr[i]] = [arr[i], arr[s]]
//         permutation(arr, s + 1, r);
//         [arr[s], arr[i]] = [arr[i], arr[s]] // 원복
//     }

//     ['a', 'a']
//     ['b', 'b']
//     ['a', 'b', 'c']

// }

// permutation(input, 0, 2)

// console.log(count);

// let input = [1, 2, 3, 4]
// let count = 0

// function combination(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i], arr[j]);
//             count++
//         }
//     }
// }

// combination(input)
// console.log(count);

// let input = [1, 2, 3, 4]
// let output = []
// let count = 0

// function combination(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i], arr[j]);
//             count++
//         }
//     }
// }

// combination(input)
// console.log(count);


// let result
// let count = 0
// function forloop(s, t, number) {
//     let acc = 0

//     for (let i = 1; i <= number; i++) {
//         if (i === 1) {
//             acc += s
//         } else {
//             acc += t
//         }
//         console.log(i, acc)
//     }
//     return acc
// }



// function recusive(s, t, number) {
//     // 멈출 조건
//     if (number == 1) {
//         return s
//     }

//     return recusive(s, t, number - 1) + t
// }

// result = recusive(3, 2, 5) // 초기값 3 등차값 2 반복횟수 5
// console.log(result);


// const double = (crr, db, num) => {
//     for (let i = 1; i <= num; i++) {
//         if (i == 1) {
//             crr *= 1
//         } else {
//             crr *= db
//         }
//     }
//     return crr
// }

// result = double(3, 2, 5)

// console.log(result);

// const double = (crr, db, num) => {
//     if (num == 1) return crr

//     return double(crr, db, num - 1) * 2
// }

// // 24 * 2
// // 12 * 2
// // 6 * 2
// // 3 * 2


// result = double(3, 2, 5)

// console.log(result);

const recusive = (crr) => {
    if (crr == 1) return crr

    return recusive(crr - 1) * crr
}

// recusive(crr - 1) * crr
// recusive(crr - 1) * crr
// recusive(crr - 1) * crr
// recusive(crr - 1) * crr



result = recusive(5)
console.log(result);