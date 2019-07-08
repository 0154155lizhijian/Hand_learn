import React, { Component } from 'react'

export default class Mapper extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number, item) => <li key={number.toString()}>这是序号为{item}的元素{number}</li>)
        return (
            <div>
                <ul>  {listItems}
                </ul>
            </div>
            
        )
    }
}
