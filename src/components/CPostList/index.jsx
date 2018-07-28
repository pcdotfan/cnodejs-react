import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Card, List, Avatar, Tag, Spin, Button } from "antd";
import axios from "axios";
import moment from "moment";
import "./main.less";

const excerptHtml = require( "excerpt-html" );

const tabList = [
  { key: "all", tab: "全部" },
  { key: "good", tab: "精华" },
  { key: "share", tab: "分享" },
  { key: "ask", tab: "问答" },
  { key: "job", tab: "招聘" }
];

const baseUrl = "https://cnodejs.org/api/v1/topics";

class CPostList extends Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    key: "all",
    page: 1,
    data: []
  };

  async onTabChange( key ) {
    const data = await this._fetchData( key );
    this.setState( { data, key } );
  }

  async componentDidMount() {
    const data = await this._fetchData();
    this.setState( { data, loading: false } );
  }

  async _fetchData( tab = "all", paged = "1" ) {
    const response = await axios.get( `${ baseUrl }/?tab=${ tab }&page=${ paged }` );
    if ( response.data.success ) {
      return response.data.data;
    }
    return;
  }

  async onLoadMore() {
    this.setState( {
      loading: true
    } );
    let { key, page, data } = this.state;
    const result = await this._fetchData( key, page + 1 );
    data = data.concat( result );
    this.setState( { data, page: page + 1, loading: false } );
    window.dispatchEvent( new Event( "resize" ) );
  }

  getExcerpt( html ) {
    return excerptHtml( html, { pruneLength: 80 } );
  }

  render() {
    const { loading, loadingMore, showLoadingMore, data, key } = this.state;
    const loadMore = showLoadingMore ? (
      <div
        style={ {
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        } }
      >
        { loadingMore && <Spin /> }
        { !loadingMore && (
          <Button onClick={ this.onLoadMore.bind( this ) }>加载更多</Button>
        ) }
      </div>
    ) : null;
    return (
      <div>
        <Card
          style={ { width: "100%" } }
          tabList={ tabList }
          bordered={ false }
          activeTabKey={ key }
          onTabChange={ keyChanged => {
            this.onTabChange( keyChanged );
          } }
        >
          <List
            loading={ loading }
            itemLayout="horizontal"
            loadMore={ loadMore }
            dataSource={ data }
            renderItem={ item => (
              <List.Item
                actions={ [ <span>{ moment( item.last_reply_at ).fromNow() }</span> ] }
              >
                <List.Item.Meta
                  avatar={ <Avatar src={ item.author.avatar_url } /> }
                  title={
                    <Link to={ '/topics/' + item.id }>
                      { item.title }{ " " }
                      { item.top ? <Tag color="#87d068">置顶</Tag> : "" }{ " " }
                    </Link>
                  }
                  description={ this.getExcerpt( item.content ) }
                />
              </List.Item>
            ) }
          />
        </Card>
      </div>
    );
  }
}

export default CPostList;
