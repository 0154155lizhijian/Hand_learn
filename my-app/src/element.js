import React, { Component } from 'react'


export default class Element extends Component {
    render(){
        const element = (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
          );
        return(
            element
        )
    }
}


