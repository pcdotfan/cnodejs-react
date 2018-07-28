import React from 'react';
import ReactDOM from 'react-dom';
import './assets/less/main.less';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from 'containers/Home'
import Topic from "containers/Topic";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/topics/:topic" component={ Topic } />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
