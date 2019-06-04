let catagoryName = new Map()
catagoryName.set(1, '一级')
catagoryName.set(2, '二级')
catagoryName.set(3, '三级')
catagoryName.set(4, '四级')

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
  catagoryName,
  catagoryIndexInfo,
  getValue: (dic, code) => {
    return dic.get(code)
  },
}
