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

// const recusive = (crr) => {
//     if (crr == 1) return crr

//     return recusive(crr - 1) * crr
// }

// recusive(crr - 1) * crr
// recusive(crr - 1) * crr
// recusive(crr - 1) * crr
// recusive(crr - 1) * crr



// result = recusive(5)
// console.log(result);


// function myFunc(p1, p2, succeessCallback, failCallback){
//     try{
//         console.log(`p1 + p2 = ${p1+p2}`);
//         result = p1 + p2

//         if(result < 10){
//             succeessCallback(result)
//         }else{
//             noWheereFunc()
//         }
//     }catch(err){
//         failCallback(err)
//     }
// }

// const succeessCallback = function(result){
//     console.log('the result is' + result);
// }

// const failCallback = function(err){
//     console.log('Faild resaon' + err)
// }

// myFunc(1,10, succeessCallback, failCallback)

// const loginUser = (id, pw, onSucess, onError)=>{
//     console.log('Mached id & pass')
//     if(pw === 'corect'){
//         onSucess(id)
//     }else{
//         onError('정보가 일치하지 않습니다!')
//     }
// }

// const getPermission = (userId, onSucess, onError)=>{
//     console.log('Acess DB and load user permission');
//     if(userId < 1000){
//         let permission = ['perm1', 'perm2', 'perm3']
//         onSucess(permission)
//     }else{
//         onError('Load permission Faild')
//     }
// }

// const onSucess = (sucess)=>{
//     console.log(sucess, '님 환영합니다')
// }

// const onError = (err)=>{
//     console.log(err);
// }

// loginUser('엄성준', 'corect',onSucess, onError)

// let pr = new Promise((resolve, reject)=>{
//     // resolve('rosolve called')
//     reject('reject call')
// })

// pr.then((sucess)=>{
//     console.log('sucess', sucess)
// }).catch((err)=>{
//     console.log('catch',err)
// }).finally(()=>{
//     console.log('filanl');
// })

// const asynkFunc = (isSucess)=>{
//     setTimeout(()=>{
//         if(isSucess){
//             return {id :13, name:'sungjun'}
//         }else{
//             throw new Error('faild')
//         }
//     },3000)
// }

// let result = asynkFunc(true)
// console.log(result); // non bloking 형식이라 바로 실행됨

// const asynkFunc = (isSucess)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isSucess){
//                 resolve({id :13, name:'sungjun'})
//             }else{
//                 reject(new Error('faild'))
//             }
//         },3000)
//     })
    
// }

// asynkFunc(true).then((sucess)=>{
//     console.log(sucess)
// }).catch((fail)=>{
//     console.log(fail);
// }).finally(()=>{
//     console.log('finaly')
// })

 

// 동기는 하나가 끝날때까지 기다렸다가 다음게 실행되는거고
// 비동기는 순서에 상관없이 

// const fetchUser = (isSucess)=>{
//     return new Promise((resoleve, reject)=>{
//         setTimeout(()=>{
//             if(isSucess){
//                 resoleve({
//                     id:1,
//                     name:'sungjun',
//                     gender:'mail',
//                     email:'umseongjun@naver.com'
//                 })
//             }else{
//                 reject('회원 정보 조회에 실패하였습니다.')
//             }
//         },3000)
        
//     })
// }

// fetchUser(true).then((sucess)=>{
//     console.log(sucess)
// }).catch((reject)=>{
//     console.log(reject)
// })

// function a(){
//     return 1
// }

// function b(){
//     return a()+1
// }

// function c(){
//    return b()+1
// }
// result = c()
// console.log(result)

// function excute(){
//     console.log('1')
//     setTimeout(()=>{
//         console.log('2'); // web에서 제공하는 비동기 방식의 setTimeout은 건너뛰고 callstack이 비게 되면 3초 뒤에 실행 // 비동기 처리 그냥 넘어가게
//     },3000)
//     console.log('3')
// }

// excute()

function runInDelay(callback, seconds){
    if(!callback) return new Error('no callback')
    if(seconds<=0) throw new Error('시간이 0보다 작습니다.')
    seconds *=1000
    setTimeout(()=>{
        callback()
    },seconds)
}

function callback(){
    console.log('실행')
}

runInDelay('', 0) 