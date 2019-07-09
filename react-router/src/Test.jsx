import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>404 这是：{this.props.match.params.location}</h1>
            </div>
        )
    }
}
