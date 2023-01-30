/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "\n";
  // let star =1

  // for(let i=1; i<=height; i++){
    
  //   for(let k=1; k<=height-k; k++){
      
  //     str+=' '
  //   }

  //   for(let j=1; j<=star; j++){
  //     str+='*'
  //   }
    
  //   str+='\n' 
    
  //   star+=2
  // }

  // for(let i=0; i<height; i++){
  //   for(let j=0; j<height-i-1; j++){
  //     str+= ' '
  //   }
  //   for(let j=0; j< i*2+1; j++){
  //     str+='*'
  //   }
  //   str += '\n'
  // }
  
  for(let i=0; i<height; i++){
    for(let j=0; j<height-i-1; j++){
      str+=' '
    }

    for(let j=0; j< i*2+1; j++){
      str +='*'
    }

    str+='\n'
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
