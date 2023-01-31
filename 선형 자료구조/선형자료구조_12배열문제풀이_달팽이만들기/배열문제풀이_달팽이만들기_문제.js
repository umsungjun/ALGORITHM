/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];

  // 1. result를 2차원 배열로 
  for(let i=0; i<length; i++){
    result[i]= []
  }


  /*  2. 패턴 기반으로 반복문 구현
        1) length길이만큼 시작
        2) length-i 만큼 진행 하면서 방향 바뀜 두번씩 진행
        3) length == 0 프로그램 종료
  */
 let x,y,num 
  x=y=num = 0
  let direction = 1

 x--
  while(1){
    for(let i=0; i<length; i++){
      x+=direction
      result[y][x] = ++num
    }

    if(length == 0) break
    length--
    for(let i=0; i<length; i++){
      y+=direction
      result[y][x] = ++num
    }

    direction *=-1
  }
  return result;
}

// if 3 
/* [
  [1,2,3]
  [8,9 4]
  [7,6,5]
] */

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
