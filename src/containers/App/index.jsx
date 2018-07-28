import React, { Component } from 'react';
import { Layout } from 'antd'
import CHeader from 'components/CHeader'
import CFooter from "components/CFooter";
import CSider from "components/CSider";

const { Sider, Content } = Layout;

class App extends Component {
    render() {
        return <div className="App">
            <Layout>
                <CHeader />
                <Layout style={ { padding: "0 50px" } }>
                    <Content style={ { padding: "0 20px" } }>
                        { this.props.children }
                    </Content>
                    <Sider width="350" style={ { padding: "0 20px" } }>
                        <CSider />
                    </Sider>
                </Layout>
                <CFooter />
            </Layout>
        </div>;
    }
}

export default App;
