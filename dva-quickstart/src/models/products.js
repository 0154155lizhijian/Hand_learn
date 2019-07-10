export default {
    namespace: 'abc',
    state: [ 
        // {name:'dva',id:1},
        // {name:'antd',id:2}
    ],
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };  