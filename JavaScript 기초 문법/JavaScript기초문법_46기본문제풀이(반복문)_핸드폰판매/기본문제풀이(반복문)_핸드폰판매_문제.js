/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;

  // 코드 구현 시작 영역

  // const bigCell = Math.max(...employee)
  
  // employee.find((num, i)=>{
  //   if(num===bigCell){
  //     employee_id = i+1
  //   }
  // })

  let max = 0

  for(let i=0; i<employee.length; i++){
    if(employee[i]>max){
      max = employee[i]
      employee_id = i + 1
    }
  }
  // 코드 구현 종료 영역

  return employee_id;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1],
  // TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  // TC: 3
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
