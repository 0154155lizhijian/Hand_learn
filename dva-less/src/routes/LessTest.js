import React, { Component } from 'react'
import Style from './LessTest.less'

export default class LessTest extends Component {
    render() {
        return (
            <div>
                <div className={Style.oneBox}>
                    index
                </div>
            </div>
        )
    }
}
