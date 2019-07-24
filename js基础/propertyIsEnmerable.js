function Person(){
    this.name="我是实例属性";
    this.age=19;
  }
  var p=new Person();
  console.log(p.propertyIsEnumerable("name")); //true
  
  Person.prototype.prop="我是原型属性";//添加一个原型属性
  console.log(p.propertyIsEnumerable("prop"));//false prop是继承自原型上的属性，所以返回的是false
  
  for(var k in p){
    console.log(k+","+p[k]);//name,我是实例属性  age,19  prop,我是原型属性
  }