import showDic from './dictionaries/show'
// let showDic = require('./dictionaries/show')

console.log('showDic', showDic)
const dics = Object.assign({}, showDic)
console.log('dics', dics)
const a = { ...dics }
console.log('a', a)
// module.exports = {
// export {
//   ...dics,
//   getValue: (dic, code) => {
//     return dic.get(code)
//   },
//   getDict: (dic) => {
//     let list = []
//     console.log(1212)
//     for (let node of dic) {
//       console.log(node)
//       list.push({ node })
//     }
//     return list
//   },
//   getProperties: (dic) => {
//     let list = []
//     dic.forEach((value, code) => {
//       list.push({ code, value })
//     })
//     return list
//   },
//   getList: (dic) => {
//     let list = []
//     dic.forEach((value, code) => {
//       list.push({ code, value })
//     })
//     return list
//   },
// }
// export default { ...a }
export default { ...dics }
// module.exports = {
//   ...a,
// }
