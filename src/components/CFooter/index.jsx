import React, { Component } from 'react';
import { Layout } from "antd";
import "./main.less";

const { Footer } = Layout;

class CFooter extends Component {
    render() {
        return (
            <footer>
                <Footer>
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                </Footer>
            </footer>
        );
    }
}

export default CFooter;
