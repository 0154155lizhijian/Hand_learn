// let [foo, [[bar], baz]] = [1, [[2], 3]];

// console.log(foo ) // 1
// console.log(bar ) // 2
// console.log(baz) // 3


// let x
// console.log(typeof x) 

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       yield b;
//       [a, b] = [b, a + b];
//     }
//   }
  
//   let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(...[first,second,third,fourth,fifth,sixth])

// const obj1 = {};
// const obj2 = { foo: 'bar' };
// Object.setPrototypeOf(obj1, obj2);

// console.log(Object)
// const { foo } = obj1;
// foo // "bar"

// const [...abc] = "hello"
// console.log(abc)
// const arr = [1,2,3]
// const hello = [...arr] 
// console.log(hello.toString())

// console.log( [1,2,3].join(''))
// console.log( 'string1 string2'.split(" ")) 

// var result = [1,undefined, 3].map((x = 'yes') => x);
// console.log(result)

// let Student = [{
//     age: 22,
//     sex: "男",
//     name: "xiaoming"
//   },{
//     age:20,
//     sex:"女",
//     name:"xiaohong"
//   }];
  
// Student.map((item)=>{
//     let {age,sex,name} = item
//     console.log(age+sex+name)
// })

// const string = "gao ming"
// for(let s of string){
//     console.log(s)
// }
// let s = 'Hello world!';
// console.log(
//     s.startsWith('world', 6), // true
// s.endsWith('Hello', 5), // true
// s.includes('Hello', 5) // false
// )

// const a = [];
// for(var i = 0; i < 6;i++){
//   a[i] = (function(arg){
//       return function () {
//           console.log(arg);
//       }
//   })(i);
// }
// a[5]()

// var arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log(i)
// }

  
// Function.prototype.call2 = function(context) {
//     context.fn = this;
//     console.log(arguments)
//     var args = [];
//     for(var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']'); 
//         // console.log(args)  //[ 'arguments[1]' ] [ 'arguments[1]', 'arguments[2]' ]
//     }
//     console.log('context.fn(' + args +')');  //context.fn(arguments[1],arguments[2])
//     eval('context.fn(' + args +')');
//     console.log(context.fn)
//     delete context.fn;
//   }
//   // 测试一下
//   var foo = {
//     value: 1
//   };
  
//   function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
//   }
  
//   bar.call2(foo, 'kevin', 18); 


// Function.prototype.apply2 = function (context, arr) {
//     var context = Object(context) || window;
//     context.fn = this;

//     var result;
//     if (!arr) {
//         result = context.fn();
//     }
//     else {
//         var args = [];
//         for (var i = 0, len = arr.length; i < len; i++) {
//             args.push('arr[' + i + ']');
//         }
//         result = eval('context.fn(' + args + ')')
//     }

//     delete context.fn
//     return result;
// }

  

// var foo = {
//     value: 1
//   };
  
//   function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
//   }
  
//   bar.apply2(foo, ['kevin', 18]); 


// let arr = [['one',1],['two',2],['three',3],['four',4]]
// let map = new Map(arr);
// console.log(map)
// // 遍历 key 值
// for (let key of map.keys()) {
//   console.log(key);
// }

// // 遍历 value 值
// for (let value of map.values()) {
//   console.log(value);
// }

// // 遍历 key 和 value 值(一)
// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }

// // 遍历 key 和 value 值(二)
// for (let [key, value] of arr) {
//   console.log(key)
// }

// var Student={
//     age:18
// }

// class Student{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     tostring(){
//         return(this.x+this.y)
//     }
// }

// var student = new Student(2,3)
// console.log(student.tostring())

// class Point{
//     constructor(){
//         this.name = 'point'
//     }
// }
// console.log(Point.name)

// class Obj {
//     x=5;
//     y=6;
//     constructor() {
//       console.log(this.x)
//     }
//   }
  
//   const myObj = new Obj();
// console.log(myObj)

