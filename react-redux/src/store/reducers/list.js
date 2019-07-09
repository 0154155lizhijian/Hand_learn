import * as types from '../action-types'

export default function (state = { lists: [{text:'移动端计划'}],newType:'all'}, actions) {
    switch (actions.type) {
        case types.ADD_TODO:
            return {...state,lists:[...state.lists,{text:actions.text}]}
        case types.TOGGLE_TODO:
            return {...state,lists:state.lists.map((item,index)=>{
                if(index == actions.index){
                    item.completed = !item.completed
                }
                return item
            })}
        case types.DEL_TODO: 
            return {...state,lists:[...state.lists.slice(0,actions.index),...state.lists.slice(actions.index+1)]}
        case types.SWITCH_TYPE:
            console.log({...state,newType:actions.newType})
            return {...state,newType:actions.newType}
        default:
            return state;
    }
}