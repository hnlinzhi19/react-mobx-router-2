import {
  observable,
  action
} from "mobx";
import {
  getUserApi
} from '../common/Api';

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;
  @observable login = false; // 记录是否登录了
  @observable isLoadedLogin = false; // 判断是否请求过了 用于页面加载loading状态
  @observable isLoading = false; // 判断是否在加载中
  @observable userInfo = {};
  @observable getUserTimes = 0; // 用于防止多次请求

  constructor(title) {
    this.title = title;
  }
  @action
  setLogin(type) {
    // 防止多次请求
    if(this.isLoading) {
      return;
    }
    // 已经加载过用户信息了，切不是需要刷新数据的情况下 禁止再次请求
    if (!type && this.getUserTimes) {
      return;
    }
    this.isLoading = true;
    this.getUserTimes += 1;
    getUserApi().then((res) => {
      // loading 结束
      this.isLoading = false;
      this.isLoadedLogin = true;
      if (res.code === 403) {
        this.login = false;
      } else {
        this.login = true;
        this.userInfo = res.info;
      }
    });
    // setTimeout(() => {
    //   this.isLoadedLogin = true;          
    //   this.login = true;
    //   console.log('test', this.login);      
    // }, 3000);
  }
  @action
  myTest() {
    this.title = '1223';
  }
}