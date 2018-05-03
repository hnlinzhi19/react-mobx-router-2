import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import './scss/pages/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import Todo from './store/index';

const store = new Todo();
// console.log(store);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
