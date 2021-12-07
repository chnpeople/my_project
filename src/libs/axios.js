import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

function ajax(options) {
  const CancelToken = axios.CancelToken;
  axios({
    headers: options.headers,
    method: options.methods,
    url: options.uri,
    params: options.data,
    responseType: options.responseType,
    cancelToken: new CancelToken(function executor(c) {
      Vue.$httpRequestList.push(c);
    }),
  }).then((res) => {
    options.successCallback && options.successCallback(res);
  }).catch(err => {
    options.errCallback && options.errCallback(err);
  });
}

function clearHttpRequestingList() {
  if (Vue.$httpRequestList.length > 0) {
    Vue.$httpRequestList.forEach((item) => {
      item();
    });
    Vue.$httpRequestList = [];
  }
}

Vue.prototype.$axios = ajax;

export { ajax, clearHttpRequestingList };
