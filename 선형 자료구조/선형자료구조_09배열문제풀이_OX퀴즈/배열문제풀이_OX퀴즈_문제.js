/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;

  // const answer = [1]

  // for (let i = 1; i < mark.length; i++) {
  //   if (mark[i] === 1) {
  //     answer.push(answer[answer.length - 1] + 1)
  //   } else if (mark[i] === 0) {
  //     answer.push(0)
  //   }
  // }
  // for (let i = 0; i < answer.length; i++) {
  //   result += answer[i]
  // }
  let score = 0
  for (let i = 0; mark.length; i++) {
    if (mark[i]) {
      result += ++score
    } else {
      score = 0
    }
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
