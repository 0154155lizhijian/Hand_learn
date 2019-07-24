// fs = require('fs')

// const fileB =  function (){
//     return new Promise(function(resolve,reject){
//         fs.readFile('B.txt', 'utf-8', function (err, data) {
//             if (err) throw err;
//             resolve(data)
//           });
//     })
// } 

// const fileTest =  function (){
//     return new Promise(function(resolve,reject){
//         fs.readFile('test.txt', 'utf-8', function (err, data) {
//             if (err) throw err;
//             resolve(data)
//           });
//     })
// } 

// function* asyncFile(){
//     yield fileB;
//     yield fileTest;
//     return 1
// }
// const F = asyncFile()
// for (const v of F) {
//     console.log(v.toString())
// }

const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName,'utf-8',function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

function* asyncFile() {
  const f1 = yield readFile('B.txt');
  const f2 = yield readFile('test.txt');

};
const gen = asyncFile();

// gen.next().value.then(data=>{
//     console.log(data)
//     return gen.next().value
// }).then((data)=>{
//     console.log(data)
// })
fun1=()=>{
    setTimeout(() => {
        console.log('111111')
    }, 5000);
    return 1;
}

const fileAsync =  async function(){
    const f1 =  await fun1();
    const f2 =  await fun2();
    console.log(f1,f2)
}
fileAsync()

