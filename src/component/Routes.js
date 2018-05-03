import loadable from 'loadable-components';
import Loading from './Ui/Loading';

const loadingObj = {
  LoadingComponent: Loading,  
}

const Home = loadable(() => import('./Home'), loadingObj);
const Test = loadable(() => import('./Test'), loadingObj);

const routes = [
  {
    path: '/home/index',
    component: Home,
    name:"首页"
  },
  {
    path: '/home/test',
    component: Test,
    name: '测试页面'
  }
];

export default routes;