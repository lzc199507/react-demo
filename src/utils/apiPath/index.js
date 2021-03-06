const API = 'http://localhost:1234'

const allApi = {
  getIndexData: `${API}/getIndexData`,
  getCategoryList: `${API}/getCategoryList`,
  getCityList: `${API}/getCityList`,
  getActivityDetail: `${API}/goDetail`,
  getMovieDetail: `${API}/getMovieData`,
  getSearchData: `${API}/getSearchData`,
  getKeywordData: `${API}/getKeywordData`,
  getAccurateKeywordData: `${API}/getAccurateKeywordData`,
  getMemberLetter: `${API}/getMemberLetter`,
  getMemberDiscount: `${API}/getMemberDiscount`,
}

module.exports = {
  allApi,
}
