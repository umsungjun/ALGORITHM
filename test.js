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

let input = [1, 2, 3, 4]
let output = []
let count = 0

function combination(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
            count++
        }
    }
}

combination(input)
console.log(count);