import React from 'react';
import {withRouter, Redirect, Link} from 'react-router-dom';
import { inject ,observer} from 'mobx-react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {getLoginStatus} from '../common/Mixin';
import {loginApi} from '../common/Api';
import Loading from './Ui/Loading';
import '../scss/pages/Login.css';

const FormItem = Form.Item;


@inject('store')
@withRouter
@getLoginStatus()
@observer
class Login extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        loginApi(values).then((res) => {
          console.log(res);
          if (res.token) {
            localStorage.setItem('LINZ_BLOG_TOKEN', res.token);
            self.props.store.setLogin(true);
          }
        });
      }
    });
  }
  render(){
    const {login, isLoadedLogin} = this.props.store;
    const { from } = this.props.location.state || { from: { pathname: "/home" } };
    const { getFieldDecorator } = this.props.form;
    if (!isLoadedLogin) {
      return (<Loading />)
    }
    if (login) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <div>
        <div className="login-wrapper">
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to={{pathname: '/register'}}>马上注册</Link>
        </FormItem>
        </Form>
        </div>
      </div>
    );
  }
}

export default Form.create({})(Login);