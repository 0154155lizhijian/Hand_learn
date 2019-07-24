// function buy(resolve,reject) {
//     setTimeout(function(){
//         resolve(['西红柿','鸡蛋','油菜']);
//     },3000)
// }
// function cook(resolve, reject){
//     setTimeout(function(){
//         //对做好的饭进行下一步处理。
//         resolve ({
//             rice: '米饭',
//             dish: ['西红柿炒鸡蛋','清炒油菜']
//         })
//     },3000) 
// }
// function send(resolve,reject){
//     setTimeout(()=>{
//         resolve('老婆的么么哒');
//     },3000)
   
// }
// function call(){
//     setTimeout(()=>{
//         console.log('给保姆加100块钱奖金');
//     },3000) 
// }

// new Promise(buy)
// .then((value)=>{
//     console.log(value)
//     return new Promise(cook);
// })
// .then((value)=>{
//     console.log(value)
//     return new Promise(send);
// })
// .then((value)=>{
//     console.log(value);
//     call()
// })


let one =(resolve,reject)=> {
    setTimeout(()=>{
        resolve(1)
    },2000)
}
let two = (resolve,reject) => {
    setTimeout(()=>{
        resolve(2)
    },5000)
 
}
let three = (resolve,reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
}
const start = Date.now()
// promise.then方法
new Promise(one)
    .then((value)=>{
        console.log(value)
        return new Promise(two)
    })
    .then((value)=>{
        console.log(value)
        return new Promise(three)
    })
    .then((value)=>{
        console.log(value)
    })

//promise.all方法  它指的是全部任务同步运行后的结果，所以花费时间是最长的子任务花费时间
let onePromise = new Promise(one);
let twoPromsie = new Promise(two);
let threePromsie = new Promise(three);

Promise.all([onePromise,twoPromsie,threePromsie]).then(values=>{
    console.log(values)
})
//同理，若是要单个子任务异步处理，就可以
onePromise
  .then(()=> twoPromsie)
  .then(()=> threePromsie)
  .then(()=>{
    console.log('完成')
  })

//async 的方式解决回调  运行时间是最大子进程运行时间

const dsp = async()=> {
    let result1 = await onePromise
    let result2 = await twoPromsie;
    let result3 = await threePromsie;
    console.log(result1,result2,result3);
    console.log( Date.now()-start)  //5秒
}
dsp()
