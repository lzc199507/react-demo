let catagoryIndexInfo = new Map()
catagoryIndexInfo.set('yanchanghui', 1)
catagoryIndexInfo.set('huajugeju', 2)
catagoryIndexInfo.set('xiuxianyule', 3)
catagoryIndexInfo.set('film', 4)
catagoryIndexInfo.set('tiyusaishi', 5)
catagoryIndexInfo.set('ertongqinzi', 6)
catagoryIndexInfo.set('yinyuehui', 7)
catagoryIndexInfo.set('quyizaji', 8)
catagoryIndexInfo.set('wudaobalei', 9)

module.exports = {
  catagoryIndexInfo,
  getValue: (dic, code) => {
    return dic.get(code)
  },
  getDict: (dic) => {
    let list = []
    for (let node of dic) {
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
