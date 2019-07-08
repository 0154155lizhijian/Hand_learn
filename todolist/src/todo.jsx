import React, { Component } from 'react'
import "./todo.css"
import TodoItem from './todoItem';
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputvalue: "",
            list:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    };
    handleChange(e){
        this.setState({
            inputvalue:e.target.value
        })
    }
    handleSubmit(e){
        this.setState(()=>({          
                list:[...this.state.list,this.state.inputvalue],
                inputvalue:''
        }))
    }
    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
   
    render() {
        const itemContent = this.state.list.map((item,index)=>{
            return <TodoItem key={index} item={item} index={index} handleDelete={this.handleDelete}></TodoItem>
        })
        return (
            <div className="box">
                <div className="intend">
                    <label htmlFor="insertArea">计划做：<input type="text" value={this.state.inputvalue} onChange={this.handleChange}/></label>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <div className="plan">
                    <ul>
                        {itemContent}
                    </ul>
                </div>
            </div>
        )
    }
}
