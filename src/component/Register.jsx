import React from 'react';
import {withRouter, Redirect, Link} from 'react-router-dom';
import { inject ,observer} from 'mobx-react';
import { Form, Input, Button } from 'antd';
import {getLoginStatus} from '../common/Mixin';
import Loading from './Ui/Loading';
import '../scss/pages/Login.css';

const FormItem = Form.Item;


@inject('store')
@withRouter
@getLoginStatus()
@observer
class Register extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render(){
    const {login,isLoadedLogin} = this.props.store;
    const { from } = this.props.location.state || { from: { pathname: "/home/" } };
    // console.log(this.props.location);
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
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
        <div className="login-wrapper ">
        <Form onSubmit={this.handleSubmit} className="login-form register">
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input placeholder="Username" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem className="login-form-center">
          <Button type="primary" htmlType="submit" className="login-form-button2">
            Log in
          </Button>
          <p><Link to={{pathname: '/login'}}>已有账号</Link></p>
        </FormItem>
        </Form>
        </div>
      </div>
    );
  }
}

export default Form.create({})(Register);