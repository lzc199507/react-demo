import axios from 'axios'
// 发送请求
// url {string} 要请求的地址名称
// data 要请求的参数
// method {string} 要请求的方法
export function RequestServer ({ url = '', data = {}, method = 'get' }) {
  const promise = new Promise(((resolve, reject) => {
    if (method === 'get') {
      axios.get(url, {
        params: data,
      })
        .then((res) => {
          if (res) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  }))
  return promise
}
