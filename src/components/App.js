import React, { Component } from 'react';
import {inject} from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import Login from './Login';
import Layout from './Layout';

// import routes from './Routes';
// import logo from '../imgs/logo.svg';
import '../scss/pages/App.css';

@inject('store')
class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Layout} />
          <Route component={Layout} />
        </Switch>
          {/* {
            routes.map((v,index) => <Link key={index} to={v.path}>{v.name}</Link>)            
          }
          {
            routes.map((v,index) => <Route exact={v.path === '/' ? true : false} key={index} path={v.path} component={v.component} />  )
          } */}
      </Router>
    );
  }
}

export default App;
