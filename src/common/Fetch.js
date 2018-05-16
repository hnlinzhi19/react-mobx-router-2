import axios from 'axios';

// 创建axios实例
const http = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 50000,                  // 请求超时时间
});

const errHandler = (err) => {
  if (err.name === 'SyntaxError') {
    return;
  }
  // const response = err.response || {};
  // const { code: errCode, message: errMsg } = response;
  // let msg = '服务器未知异常';
  // if (errMsg && String(errCode) !== '404') {
  //   msg = errMsg;
  // }
};

// request拦截器
http.interceptors.request.use(config =>
  // Do something before request is sent
  // console.log(config);
   config, (error) => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
http.interceptors.response.use(
  response => response.data,
  (error) => {
    console.log(`err ${error}`);// for debug
    errHandler(error);
    return Promise.reject(error);
  },
);

export default http;
