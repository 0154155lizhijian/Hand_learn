当处理多个input输入的时候，我们可以给每个元素添加name元素，并处理函数根据event.target.name 的值选择要执行的操作

```
 handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
```