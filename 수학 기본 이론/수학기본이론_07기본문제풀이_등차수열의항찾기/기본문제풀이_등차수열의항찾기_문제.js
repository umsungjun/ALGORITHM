/* 1. 등차수열의 항 찾기 */

/* user code */
function answer(a, d, n) {
  let index = -1;

  // let num

  // for (let i = 1; ; i++) { // i = 1부터 종료시점이 없이 무한 으로 i++
  //   num = a + d * (i - 1) // 1, 3, 5, 7

  //   if (num > n) break; // n보다 커지게 되면 break

  //   if (num === n) {
  //     index = i
  //   }

  // }

  if ((n - a) % d === 0) {
    // 등차수열을 만족함
    index = (n - a) / d + 1
  } else index = -1

  return index
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
