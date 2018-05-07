import loadable from 'loadable-components';
import Loading from '../component/Ui/Loading';

const loadingObj = {
  LoadingComponent: Loading,
}
const Login = loadable(() => import('../component/Login'), loadingObj);
const Register = loadable(() => import('../component/Register'), loadingObj);
const Home = loadable(() => import('../component/Layout'), loadingObj);

const routes = [
  {
    path: '/login',
    component: Login,
    name: '登录'
  },
  {
    path: '/register',
    component: Register,
    name: '注册'
  },
  {
    path: '/home',
    component: Home,
    name: '首页'
  },
];

export default routes;