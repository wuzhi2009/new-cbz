// 引入axios
import axios from 'axios';
import { notification } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons'
const baseUrl='';
// 创建axios实例
const httpService = axios.create({
  // url前缀-'http:xxx.xxx'
  // baseURL: process.env.BASE_API, // 需自定义
  baseURL:baseUrl,
  // 请求超时时间
  // timeout: 20000 // 需自定义
});

//添加请求和响应拦截器
// 添加请求拦截器
httpService.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers.token=window.sessionStorage.getItem('token');
  config.headers.Authorization = '';
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
httpService.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code === 500) {
    // 抽屉弹窗 业务报错
    notification.open({
      message: '系统错误',
      description:
        "系统接口500异常 请联系管理员！！",
      icon:<CloseCircleTwoTone twoToneColor="red" />,
      maxCount:3
    });
  }
  if (response.data.code === 404) {
    notification.open({
      message: '服务器找不到',
      description:
        "接口404错误 请联系管理员！！",
      icon:<CloseCircleTwoTone twoToneColor="red" />,
      maxCount:3
    });
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  // 抽屉弹框

  if (error.response.status === 401) {
    notification.open({
        message: '登录失效',
        description:
          "系统接口401异常！！",
        icon:<CloseCircleTwoTone twoToneColor="red" />,
        maxCount:3
      });
    if (window.location.pathname !== "/login") {
      // 权限已过期 删除token缓存
      window.location.href = "/login";
    }
  }
  return Promise.reject(error);
});

/**
 * 缓存
 */
const cache = {};
function getCache(url) {
  return cache[url] || null;
}

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url) {
  return new Promise((resolve, reject) => {
    // 栏目列表缓存
    if (url === "/sp/monitoring/getDeptList") {
      const cacheData = getCache(url)
      if (cacheData) {
        return resolve(cacheData);
      }
    }
    // 用户数据缓存
    if (url === "/system/user/getInfo") {
      const cacheData2 = getCache(url);
      if (cacheData2) {
        return resolve(cacheData2);
      }
    }
    httpService({
      url: url,
      method: 'get',
    }).then(response => {
      if (url === "/sp/monitoring/getDeptList") {
        cache[url] = response;
      }
      if (url === "/system/user/getInfo") {
        cache[url] = response;
      }
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'put',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

export function getBaseUrl(url, params = {}) {
  return baseUrl;
}
const req = {get, post, put, fileUpload, getBaseUrl};
export default req;