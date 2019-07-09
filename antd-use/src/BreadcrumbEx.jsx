import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import './index.css'
const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/apps/1">商店</Link>：<Link to="/apps/1/detail">详情</Link>
        </li>
        <li>
            <Link to="/apps/2">饮品店</Link>：<Link to="/apps/2/detail">详情</Link>
        </li>
    </ul>
);

const breadcrumbNameMap = {
    '/apps': '店铺',
    '/apps/1': '商店',
    '/apps/2': '饮品店',
    '/apps/1/detail': '商店物品',
    '/apps/2/detail': '饮品店物品',
};
export const Home = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>连接{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">家</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
            <div className="demo-nav">
                <Link to="/">家</Link>
                <Link to="/apps">店铺</Link>
            </div>
            <Switch>
                <Route path="/apps" component={Apps} />
                <Route render={() => <span>Home Page</span>} />
            </Switch>
            <Alert style={{ margin: '16px 0' }} message="下面是详细信息" />
            <Switch>
                <Route path="/apps/1" component={()=>{
                    return <h2>欢迎来到商店</h2>
                }} />
                <Route path="/apps/2" component={()=>{
                    return <h2>欢迎来到饮品店</h2>
                }}/>
            </Switch>
            <Switch>
                <Route path="/apps/1/detail" component={()=>{
                    return <ul>
                        <li>毛巾</li>
                        <li>被子</li>
                        <li>桶</li>
                    </ul>
                }} />
                <Route path="/apps/2/detail" component={()=>{
                    return <ul>
                    <li>纯净水</li>
                    <li>奶茶</li>
                    <li>咖啡</li>
                </ul>
                }} />
            </Switch>
        </div>
    );
});


