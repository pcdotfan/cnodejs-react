import React, { Component } from "react";
import App from 'containers/App'
import CPostList from "components/CPostList";

class Home extends Component {
  render() {
    return (
        <App>
            <CPostList />
        </App>
    );
  }
}

export default Home;
