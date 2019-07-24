import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Popconfirm, Modal, Form, Input } from 'antd';

class ShopList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    title: '商品名称',
                    dataIndex: 'name',
                },
                {
                    title: '单价',
                    dataIndex: 'price',
                },
                {
                    title: '类型',
                    dataIndex: 'type',
                },
                {
                    title: '操作',
                    render: (text, recode) => {
                        return (
                            <Popconfirm title="你要删除这个商品吗" onConfirm={() => this.props.onDelete(recode.key)}>
                                <Button>Delete</Button>
                            </Popconfirm>
                        )
                    }
                }
            ],
            visible: false,
        }
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>+添加商品</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </Modal>
                <Table columns={this.state.columns} dataSource={this.props.shopLists}></Table>
            </div>
        )
    }
}

ShopList.PropTypes = {
    shopLists: PropTypes.array.isRequired
}

export default ShopList;