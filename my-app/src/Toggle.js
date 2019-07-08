import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(
            state =>({
                isToggleOn: !state.isToggleOn
            }) 
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}
