export default {
    namespace: 'shop',
    state: [],
    reducers: {
      'delete'(state, { params: key }) {
        return state.filter(item => item.key !== key)
      },
    },
  };  