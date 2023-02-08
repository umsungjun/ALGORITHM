/* 기차 운행 */
let stack =[]
let num =0

/* user code */
function answer(train) {
  for(let i=0; i<train.length; i++){
    while(stack.length ===0 || stack[stack.length -1] < train[i]){
      stack.push(++num)
    }
    console.log(stack)
    if(stack[stack.length-1] === train[i]){
      stack.pop()
    }else{
      return false
    }
  }

  return true
  

}


/* main code */
let input = [
  // TC: 1
  [1, 2, 3],

  // TC: 2
  [3, 2, 1],

  // TC: 3
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
