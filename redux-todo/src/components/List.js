import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../store/actions/list'
import store from '../store'

export class List extends Component {
    static propTypes = {
        lists: PropTypes.array
    }
    constructor(props){
        super(props)
    }
    componentWillMount(){
        
        this.unsubscribe = store.subscribe(()=>{})   //进行订阅
    }
    componentWillUnmount(){
        this.unsubscribe()   //订阅结束
    }
    render() {
        return (
            <div>
                <label>要做的事情<input value={this.props.lists[0].text }/></label>
                <button >提交</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.todos
}

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, actions)(List)
