import React, { Component } from "react";
import { Card, Button, List } from "antd";
import { Link } from "react-router-dom"
import axios from "axios";
import "./main.less";

const baseUrl = "https://cnodejs.org/api/v1/topics";

class CSider extends Component {

  state = {
    noReplyList: []
  }

  async componentDidMount() {
    const data = await this._fetchData();
    const noReplyList = [];
    data.map(item => {
      !item.reply_count && noReplyList.push(item);
    })
    this.setState( { noReplyList, loading: false } );
  }

  async _fetchData( tab = "all", paged = 1 ) {
    const response = await axios.get( `${ baseUrl }/?tab=${ tab }&page=${ paged }` );
    if ( response.data.success ) {
      return response.data.data;
    }
    return;
  }

  render() {
    const { noReplyList } = this.state;
    return (
      <div>
        { this.props.children }
        <Card
          title="CNode：Node.js专业中文社区"
          className="sider-card"
          bordered={ false }
        >
          <p>
            您可以 <a href="/signin">登录</a> 或 <a href="/signup">注册</a>，也可以
          </p>
          <Button type="primary" icon="github">
            通过 GitHub 登录
          </Button>
        </Card>
        <Card title="无人回复的话题" className="sider-card" bordered={ false }>
          <List
            itemLayout="horizontal"
            dataSource={ noReplyList }
            renderItem={ item => (
              <List.Item key={ item.id }>
                <List.Item.Meta
                  title={ <Link to={ '/topics/' + item.id }>{ item.title }</Link> }  />
              </List.Item>
            ) } 
          />
        </Card>
      </div>
    );
  }
}

export default CSider;
