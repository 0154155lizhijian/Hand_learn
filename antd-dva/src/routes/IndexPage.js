import React, { Component } from 'react'
import { Layout, Drawer, Form, Input, Switch, Button, PageHeader } from 'antd'
import Navigation from './Navigation'
import Body from './Body'
import Style from './IndexPage.css'
import { connect } from 'dva';
const { Header, Content } = Layout
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      formItemLayout: {
        labelCol: {
          sm: { span: 7 },
        },
        wrapperCol: {
          sm: { span: 16 },
        },
      },
    } 
  };
  onClose = () => {
    this.props.form.resetFields();
    this.props.dispatch({
      type:'info/showDrawer'
    })
  };

  handleAdd=()=>{
    const {getFieldsValue,resetFields} = this.props.form

    if(this.props.info.recode.status === 'UPDATETWO'){
      const newInfo = getFieldsValue()
      // console.log(newInfo)
      this.props.dispatch({
        type:'info/saveTwo',
        payload:newInfo
      })
    }else{
      const newInfo = getFieldsValue()
      if( newInfo.groupName == undefined){
        alert('你传值啊')
      }else{
        this.props.dispatch({
          type:'info/add',
          payload:newInfo
        })
      }
    
    resetFields();
    }
  }
  render() {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Layout>
          <Header className={Style.header}>
            <PageHeader
              title="用户分配"
              extra={[
                <Button key="1" type="primary" onClick={this.onClose}>
                  +新建
                 </Button>
              ]}
              style={{ margin: "0px -30px 0px -50px" }}></PageHeader>
          </Header>
          <Content className={Style.bodyContent}>
            <Navigation ></Navigation>
            <Body newInfo={this.state.newInfo} ></Body>
          </Content>
          <Drawer
            width={400} 
            title="新建门户分配"
            placement='right'
            closable={true}
            onClose={this.onClose}
            visible={this.props.info.visible}
          >
            <Form {...this.state.formItemLayout} >
              <Form.Item label="集团名称" required>
                {
                  getFieldDecorator("groupName", {
                    initialValue:this.props.info.recode.groupName
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="集团编码" >
                {
                  getFieldDecorator("groupCode", {
                    initialValue:this.props.info.recode.groupCode
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="公司名称">
                {
                  getFieldDecorator("companyName", {
                    initialValue:this.props.info.recode.companyName
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="公司编码">
                {
                  getFieldDecorator("companyCode", {
                    initialValue:this.props.info.recode.companyCode
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="二级页面域名" required>
                {
                  getFieldDecorator("pageDomain", {
                    initialValue:this.props.info.recode.pageDomain
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="二级页面地址" required>
                {
                  getFieldDecorator("pageAddress", {
                    initialValue:this.props.info.recode.pageAddress
                  })(
                    <Input />
                  )
                }
              </Form.Item>
              <Form.Item label="启用">
                {
                  getFieldDecorator("use", {
                    initialValue:this.props.info.recode.use
                  })(
                    <Input />
                  )
                }
              </Form.Item>
            </Form>
            <div
              className={Style.drawerButton}
            >
              <Button style={{ marginRight: 8 }}
              onClick={this.onClose}>
                取消
            </Button>
              <Button type="primary" onClick={this.handleAdd}>
                确定
            </Button>
            </div>
          </Drawer>
        </Layout>
      </div>
    )
  }
}

IndexPage = Form.create()(IndexPage)
export default connect(({info})=>({info}))(IndexPage)