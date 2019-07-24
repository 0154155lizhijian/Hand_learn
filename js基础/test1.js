// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...myIterable])  // [1, 2, 3]

// function* gen(){
//     // some code
//   }
  
//   var g = gen();
//   console.log(g)

// function* f() {
//     for(var i = 0; true; i++) {
//       var reset = yield i;  //g.next()
//       console.log(reset)  ;  //g.next()
//       if(reset) { i = -1; };
//     }
//   }
  
//   var g = f();
//   console.log(g.next(),g.next(),g.next(true),g.next())
//   g.next() // { value: 0, done: false }
//   g.next() // { value: 1, done: false }
//   g.next(true) // { value: 0, done: false }

function* numbers () {
    yield 1
    yield 2
    return 3
    yield 4
  }
  let number = numbers()
  console.log(number.next(),number.next(),number.next(),number.next()) 

  
  // 扩展运算符
  console.log([...numbers()] ) // [1, 2]
  
  // Array.from 方法
  Array.from(numbers()) // [1, 2]
  
  // 解构赋值
  let [x, y] = numbers();
  x // 1
  y // 2
  
  // for...of 循环
  for (let n of numbers()) {
    console.log(n)
  }
  // 1
  // 2


  function* foo() {
    yield 'a';
    yield 'b';
    }
  function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
    }
    let b = bar()
    console.log(b.next(),b.next(),b.next())