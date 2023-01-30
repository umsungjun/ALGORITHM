/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  /* let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const numArr = []

  for (let i = s; i <= e; i++) {
    numArr.push(String(i))
  }

  numArr.forEach((num) => {
    for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < 10; j++) {
        if (num[i] == j) {
          result[j] += 1
        }
      }
    }
  }) */

  let result = []
  for (let i = 0; i < 10; i++) { // result의 0~9번째 index에 0으로 초기화
    result[i] = 0
  }

  let num
  for (let i = s; i <= e; i++) {
    num = i
    while (num != 0) {
      result[num % 10]++ //129 라고 치면 9가 남음
      num /= 10 //12.9
      num = parseInt(num) //12
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
