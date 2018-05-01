import React from 'react';
import {withRouter, Redirect,Route} from 'react-router-dom';
import { action, observable } from 'mobx';
import { inject, observer} from 'mobx-react';
import { Layout } from 'antd';

import routes from './Routes';
import Menu from './Ui/Menu';
import '../scss/pages/Layout.css';

const { Header, Footer, Sider, Content } = Layout;

@inject('store')
@withRouter
@observer
export default class MyLayout extends React.Component{
  @observable collapsed = false;
  componentWillMount(){
    this.props.store.setLogin();
  }
  @action
  onCollapse = (collapsed) => {
    this.collapsed = collapsed;    
  }

  render(){
    const {login} = this.props.store;
    const {pathname} = this.props.location;
    const from  = { 
      pathname: "/login", 
      state: {from: pathname} 
    };
    if (!login) {
      return <Redirect to={from} />;
    }
    if (pathname === '/' || pathname === '/home/') {
      return <Redirect to="/home/index" />;
    }   
    return (
      <div>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
          <Layout>
            <Sider collapsible collapsed={this.collapsed}  onCollapse={this.onCollapse} style={{ background: '#fff', padding: 0 }}>
              <Menu />
            </Sider>
            <Content>
            {
              routes.map((v,index) => <Route exact={v.path === '/' ? true : false} key={index} path={v.path} component={v.component} />  )
            } 
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        
      </div>
    );
  }
}