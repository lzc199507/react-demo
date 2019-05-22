import showDic from './dictionaries/show'

const dics = Object.assign({}, showDic)
module.exports = {
  ...dics,
  getValue: (dic, code) => {
    return dic.get(code)
  },
  getDict: (dic) => {
    let list = []
    console.log(1212)
    for (let node of dic) {
      console.log(node)
      list.push({ node })
    }
    return list
  },
  getProperties: (dic) => {
    let list = []
    dic.forEach((value, code) => {
      list.push({ code, value })
    })
    return list
  },
  getList: (dic) => {
    let list = []
    dic.forEach((value, code) => {
      list.push({ code, value })
    })
    return list
  },
}
