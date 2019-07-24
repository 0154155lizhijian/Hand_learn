const dataSource = [];
for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    groupCode: 'BG000000',
    groupName: `SRM平台${i}`,
    companyCode: '330000',
    companyName: '汉德信息',
    pageDomain: '192.168.1.1',
    pageAddress: 'www.baidu.com',
    use: '启用',
  });
}

export default {
  namespace: 'info',
  state: {
      dataSource:[...dataSource],
      visible: false,
      recode:'',
      key:'',
  },
  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },

  reducers: {
    save(state, {payload:index,value:value}) {
      const newDataSource = [...state.dataSource]
      delete newDataSource[index].status
      newDataSource[index] = value
      return {...state,dataSource:newDataSource}
    },
    edit(state,{payload:index}){
      const newDataSource = [...state.dataSource];
      newDataSource[index].status = 'UPDATE'
      return {...state,dataSource:newDataSource}
    },
    showDrawer(state){
      const visible = !state.visible
      return {...state,visible:visible,recode:''}
    },
    add(state,{payload:newInfo}){
      const newDataSource = [...state.dataSource];
      newDataSource.push(newInfo);
      return{...state,dataSource:newDataSource,visible:!state.visible}
    },
    editDrawer(state,{payload:recode,params:index}){
      const newDataSource = [...state.dataSource];
      newDataSource[index].status = 'UPDATETWO'
      return{...state,recode:recode,visible:!state.visible,dataSource:newDataSource,key:index}
    },
    saveTwo(state,{payload:newInfo}){
      const newDataSource = [...state.dataSource]
      newDataSource[state.key] = newInfo
      return {...state,dataSource:newDataSource,visible:!state.visible}
    }
  },

};
