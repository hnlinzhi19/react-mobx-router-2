import React from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { observer} from 'mobx-react';
import {observable, action } from 'mobx';
import routes from '../Routes';

@withRouter
@observer
export default class MenuNow extends React.Component{
  @observable currentKey = [routes[0].path];
  componentWillReceiveProps(nextProps){
    const {pathname} = nextProps.location;
    this.currentKey = [pathname || routes[0].path];
  }

  @action
  selectMenu = ({ item, key, selectedKeys }) => {
    const {history} = this.props;
    history.push(selectedKeys[0]);
  }

  render(){
    const nowKeyArray = [...this.currentKey];
    // console.log('渲染一次');
    return (
      <Menu theme="dark" defaultSelectedKeys={[routes[0].path]} selectedKeys={nowKeyArray} mode="inline" onSelect={this.selectMenu}>
        {
          routes.map((v,index) => 
          <Menu.Item key={v.path}>
            <Icon type="pie-chart" />
            <span>{v.name}</span>
          </Menu.Item>)
        }
      </Menu>
    );
  }
}

