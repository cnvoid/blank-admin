import axios from 'axios'
import active from './active'

axios.defaults.baseURL = '/';
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let apiConfs = [active]

let requestFunc = function (parms, requestConfig = {}) {
  return new Promise((resolve, reject) => {
    let reqConfig = {
      method: requestConfig.method || 'get',
      url: requestConfig.url,
      withCredentials: true,
      headers: {},
      data: {},
      params: {}
    }

    if (['post', 'put', 'patch'].includes(String(requestConfig.method).toLocaleLowerCase())) {
      reqConfig.data = parms
    } else {
      reqConfig.params = parms
    }

    let reso = {
      code: 0,
      msg: '',
      data: {}
    }

    axios(reqConfig)
      .then((res) => {
        if (res.code == 200) {
          reso.data = res.data || {}
        } else {
          reso.code = res.code
          reso.msg = res.msg
        }
        resolve(reso)
      }, (rej) => {
        reso.code = -1
        reso.msg = rej
        resolve(reso)
      })
  });
}

let apis = {}

apiConfs.map(item => {
  for (let key in item) {
    apis[key] = async function (parms) {
      return await requestFunc(parms, item[key])
    }
  }
})

export default apis
