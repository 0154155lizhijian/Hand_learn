import React, { Component } from 'react'
import Element from "./element"
export default class Button extends Component {
    render() {
        const name = {
            firstname: 'li',
            lastname: 'zhijian',
        }

        const Img = (
            <div>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118440743,2294239393&fm=26&gp=0.jpg" alt="" />
            </div>
        )

        const user = {
            name,
            sex: '男',
            age: '20'
        }
     
       
        return (
            <div >
                <div><button color="red">{user.name.firstname}+button按钮</button>
                </div>
                {Img}
                <a href="#">石沉大海时间内及时拿出</a>
                <p>沈阳市酒店</p>
                <Element></Element>
            </div>
            
        )
    }
}
