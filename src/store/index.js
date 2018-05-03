import { observable, action } from "mobx";

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;
  @observable login = false;

  constructor(title) {
    this.title = title;
  }
  @action 
  setLogin(){
    setTimeout(() => {
      this.login = false;
    }, 3000);
  }
  @action
  myTest(){
    this.title = '1223';
  }
}