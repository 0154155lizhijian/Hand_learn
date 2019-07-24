export default {

  namespace: 'todos',

  state: {
    todo:['写作业','打酱油'],
    
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },
 
  reducers: {
    add(state, {payload:text}) {
      return {...state,todo:[...state.todo,text]};
    },
    delete(state,{payload:index}){
      return {...state,todo:[...state.todo.slice(0,index),...state.todo.slice(index+1)]};
    },

  },

};
