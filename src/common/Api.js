import fetch from './Fetch';
/**
 * xx
 */
export const getUserApi = () => fetch({
  url: '/api/user/',
  method: 'get',
});
/**
 * 登录
 */
export const loginApi = (param) => fetch({
  url: '/api/auth/login',
  method: 'post',
  data: param || {}
});

/**
 * 注册
 */
export const registerApi = (param) => fetch({
  url: '/api/auth/register',
  method: 'post',
  data: param || {}
});