import React, { Component } from 'react';
import {inject} from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import '../scss/pages/App.css';
// import Login from './Login';
import routes from '../common/AppRoutes';
import Layout from './Layout';
// 判断登录
const requireAuth = (nextState, replace) => {
  console.log(nextState, replace);
};

@inject('store')
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((v,index) => <Route exact key={index} path={v.path} component={v.component} onEnter={requireAuth} />  )
          }
          <Route component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
