import React, { Component } from 'react';
import {inject} from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadable from 'loadable-components';
import Loading from './Ui/Loading';

import 'antd/dist/antd.css';
import '../scss/pages/App.css';
// import Login from './Login';
import Layout from './Layout';

const loadingObj = {
  LoadingComponent: Loading,
}
const Login = loadable(() => import('./Login'), loadingObj);
const Register = loadable(() => import('./Register'), loadingObj);


// import routes from './Routes';
// import logo from '../imgs/logo.svg';

@inject('store')
class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
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
