import React, { Component } from 'react'
import { connect } from 'dva';

class Todo extends Component {

    constructor(props) {
        super(props)
        // console.log(this.props.todos.todo)
        this.state = {
            inputValue: ''
        }
    }
    change(e) {
        const text = e.target.value
        this.setState({
            inputValue: text
        })
    }
    add() {
        this.props.dispatch({
            type: 'todos/add',
            payload: this.state.inputValue
        })
        this.setState({
            inputValue:''
        })
    }
    delete(index){
        this.props.dispatch({
            type:'todos/delete',
            payload:index
        })
    }

    render() {
        const List = this.props.todos.todo.map(
            (item, index) => {
                return (
                <React.Fragment key={index}>
                     <li >{index}.{item}<button onClick={this.delete.bind(this,index)}> 删除</button></li> 
                </React.Fragment>
                )
            }
        )
        return (
            <div>
                <label>要做的事情： <input placeholder="输入要做的事情" onChange={this.change.bind(this)} value={this.state.inputValue}></input></label><button onClick={this.add.bind(this)}>添加事项</button>
                <ul>
                    {List}
                </ul>
            </div>
        )
    }
}

export default connect(({ todos }) => ({ todos }))(Todo)
