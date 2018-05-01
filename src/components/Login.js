import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import { inject ,observer} from 'mobx-react';

@inject('store')
@withRouter
@observer
export default class Login extends React.Component{
  componentWillMount(){
    this.props.store.setLogin();
  }
  render(){
    const {login} = this.props.store;
    const { from } = this.props.location.state || { from: { pathname: "/home/" } };
    console.log(this.props.location);
    if (login) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <div>Login</div>
    );
  }
}