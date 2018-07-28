import React, { Component } from 'react';
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import "./main.less";

const { Header } = Layout;

class CHeader extends Component {
    render() {
        return (
            <header>
                <Header>
                    <div className="logo" />
                    <Menu mode="horizontal" className="nav-menu" theme="light" style={{ lineHeight: "64px" }}>
                        <Menu.Item><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="newbie">新手入门</Menu.Item>
                        <Menu.Item key="api">API</Menu.Item>
                        <Menu.Item key="about">关于</Menu.Item>
                        <Menu.Item key="register">注册</Menu.Item>
                        <Menu.Item key="login">登录</Menu.Item>
                    </Menu>
                </Header>
            </header>
        );
    }
}

export default CHeader;
