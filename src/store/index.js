import { observable, action } from "mobx";

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;
  @observable login = false; // 记录是否登录了
  @observable isLoadedLogin = false; // 判断是否请求过了

  constructor(title) {
    this.title = title;
  }
  @action 
  setLogin(){
    if (this.isLoadedLogin) {
      return;
    }
    setTimeout(() => {
      this.isLoadedLogin = true;          
      this.login = true;
      console.log('test', this.login);      
    }, 3000);
  }
  @action
  myTest(){
    this.title = '1223';
  }
}