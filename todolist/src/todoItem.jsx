import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const {item,index} =this.props
        return (
            <div>
                <li><span>{index+1}.{item}</span><span className="delete" onClick={this.handleClick}>X</span></li>
            </div>
        )
    }
    handleClick(){
        const{handleDelete,index} = this.props;
        handleDelete(index);
    }
}
