### react学习知识点 7/19
- 生命周期函数(特点以及参数)(getDerivedStateFromProps,getSnapshotBeforeUpdate)
- 事件处理
  - this作用域
  - 绑定this的方式
  - 如何传参
- 条件渲染(几种表达式写法)
- 列表渲染方式（key的原理）
- 表单（受控与非受控组件）
- ref(三种ref的写法与异同点)
- onRef的实现原理以及父子组件通信
- context的运行流程
<br />

- Context
  - 练习：写一个context跨中间组件传值用户信息列表，
  三个input框加一个新建按钮，列表中包含单条删除功能。（userName,phone,email,新建，删除）
  - 要求：（样式随意）15分钟以内完成
- portals
  >提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
  >第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。
  - 练习：封装一个portal组件，
  - 要求：可传入className，以及style，样式随意）10分钟以内完成
- Fragments
- 深入 JSX 
- 协调
- Refs & Dom
  - 三种ref的写法与异同点
  - 练习：将上述用户信息列表改写成父组件中操作子组件（新建按钮放在在父组件中并执行子组件的新建方法，list放在子组件的state中渲染）
  - 要求：（样式随意）15分钟以内完成
- 高阶组件
  >HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用
  >传入一个组件，可以为其执行某些功能
- Refs 转发
  > 组件接收 ref，并将其向下传递,“转发”给子组件

  - (结合refs转发以及高阶组件)写一个高阶可以拿到子组件的ref，并可以传入一个type参数，可以为子组件过滤掉某种类型的props。例如传入string，子组件props中将不会出现string类型的数据
  
