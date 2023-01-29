/* 2. 잃어버린 카드 찾기 */

/* user code */
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);
  let d = 0
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1]
  }
  d /= num.length // 3으로 나누면 등차가 나옴
  // if (Math.abs(num[0] - num[1]) > Math.abs(num[1] - num[2])) {
  //   number = num[0] + Math.abs(num[1] - num[2])
  // } else {
  //   number = num[1] + Math.abs(num[0] - num[1])
  // }
  let location = num[2] - num[1] > num[1] - num[0] ? num[0] + d : num[1] + d
  return number;
}

/* main code */
let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
