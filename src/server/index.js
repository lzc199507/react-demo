import { allApi } from 'utils/apiPath'
import { RequestServer } from './Request'

const {
  getIndexData, getCategoryList, getCityList, getActivityDetail, getMovieDetail,
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

export async function queryCityList (params) {
  const res = await RequestServer({
    url: getCityList,
    data: params,
  })
  return res
}

export async function queryActivityDetail (params) {
  const res = await RequestServer({
    url: getActivityDetail,
    data: params,
  })
  return res
}

export async function queryMovieDetail (params) {
  const res = await RequestServer({
    url: getMovieDetail,
    data: params,
  })
  return res
}
