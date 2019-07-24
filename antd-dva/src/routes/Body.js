import React, { Component } from 'react'
import Style from './IndexPage.css'
import { Table, Divider, Pagination, Input, Form } from 'antd'
import { connect } from 'dva'

class Body extends Component {
  constructor(props) {
    super(props);
    const { getFieldDecorator } = this.props.form;
    this.state = {
      columns: [
        {
          title: '集团编码',
          dataIndex: 'groupCode',
          key: 'groupCode',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("groupCode", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '集团名称',
          dataIndex: 'groupName',
          key: 'groupName',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("groupName", {
                  initialValue: text
                })(
                  <Input />
                ))
            } else {
              return text
            }
          }
        },
        {
          title: '公司编码',
          dataIndex: 'companyCode',
          key: 'companyCode',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("companyCode", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '公司名称',
          dataIndex: 'companyName',
          key: 'companyName',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("companyName", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '二级页面域名',
          dataIndex: 'pageDomain',
          key: 'pageDomain',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("pageDomain", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '二级页面地址',
          dataIndex: 'pageAddress',
          key: 'pageAddress',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("pageAddress", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '启用',
          dataIndex: 'use',
          key: 'use',
          render: (text, record, index) => {
            if (record.status==='UPDATE') {
              return (
                getFieldDecorator("use", {
                  initialValue: text
                })(
                  <Input />
                )
              )
            } else {
              return text
            }
          }
        },
        {
          title: '操作',
          key: 'opration',
          render: (text, record, index) => {
            if (record.status === 'UPDATE') {
              return (
                <span>
                  <a href="javascript:;" onClick={this.save.bind(this, index, text)}>保存</a>
                  <Divider type="vertical" />
                  <a href="javascript:;" onClick={this.save.bind(this, index, text)}>取消</a>
                </span>
              )
            } else {
              return (
                <span>
                  <a href="javascript:;" onClick={this.edit.bind(this, index, text)}>编辑1</a>
                  <Divider type="vertical" />
                  <a href="javascript:;" onClick={this.editDrawer.bind(this,record,index)}>编辑2</a>
                </span>
              )
            }
          }



        }
      ]

    }
  }
  editDrawer(recode,index){
    this.props.dispatch({
      type:'info/editDrawer',
      payload:recode,
      params:index,
    })
  }
  edit(index, text, record) {
    this.props.dispatch({
      type: 'info/edit',
      payload: index,
    })
  }
  save(index, text) {
    const { getFieldsValue, setFieldsValue } = this.props.form;
    const value = getFieldsValue();
    this.props.dispatch({
      type: 'info/save',
      payload: index,
      value: value
    })
  }


  render() {
    return (
      <div>
        <Table rowKey={(recode, index) => index} dataSource={this.props.info.dataSource} columns={this.state.columns} />;
                <br />
      </div>
    )
  }
}

Body = Form.create()(Body);


export default connect(({ info }) => ({ info }))(Body)
