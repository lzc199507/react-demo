import { allApi } from '../utils/apiPath'
import { RequestServer } from './Request'

const {
  getIndexData, getCategoryList,
} = allApi

export async function queryIndexData (params) {
  const res = await RequestServer({
    url: getIndexData,
    data: params,
  })
  return res
}

export async function queryCategoryList (params) {
  const res = await RequestServer({
    url: getCategoryList,
    data: params,
  })
  return res
}
