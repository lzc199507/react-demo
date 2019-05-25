/*
 * 后端接口，用于请求数据
 */

// 引入express和request
let express = require('express')
let request = require('request')


// 导入proxy
// var proxy = require('http-proxy-middleware');


// 定义后端静态服务器
let app = express()
// context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api


// options可选的配置参数请自行看readme.md文档，通常只需要配置target，也就是你的api所属的域名。
// const options = {
//     target: 'http://m.xishiqu.com',
//     changeOrigin: true
// }

// 将options对象用proxy封装起来，作为参数传递
// const apiProxy = proxy(options);

// 现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
// app.use('/apiXsq', apiProxy);

// 网站定位初始化
app.get('/init', (req, res) => {
  // 设置跨域权限
  res.append('Access-Control-Allow-Origin', '*')


  // 向接口请求数据
  request('http://m.xishiqu.com/ajax/home/init', (err, result, body) => {
    res.send(body)
  })
})


// 获取地点列表
// http://m.xishiqu.com/ajax/home/cityList
app.get('/getCityList', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
	
  request('http://m.xishiqu.com/ajax/home/cityList', (err, result, body) => {
    res.send(body)
  })
})

// 获取电影详情页数据
// http://m.xishiqu.com/api/film/getFilmDetails?filmId=547
app.get('/getMovieData', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  request({
    url: `http://m.xishiqu.com/api/film/getFilmDetails?filmId=${req.query.filmId}`,
    headers: {
      Cookie: `cityCode=${req.query.cityCode}`,
    },

  }, (err, result, body) => {
    res.send(body)
  })
})

// 获取搜索页面数据
// http://m.xishiqu.com/ajax/activity/search
app.get('/getSearchData', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  request({
    url: 'http://m.xishiqu.com/ajax/activity/search',
    headers: {
      Cookie: `cityCode=${req.query.cityCode}`,
    },

  }, (err, result, body) => {
    res.send(body)
  })
})


// 获取搜索关键字信息
// http://m.xishiqu.com/ajax/keywords?q=%E5%91%B5%E5%91%B5
app.get('/getKeywordData', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  // console.log(req.query.kw);
  // console.log(req.query.cityCode);

  request({
    url: `http://m.xishiqu.com/ajax/keywords?q=${req.query.kw}`,
    headers: {
      Cookie: `cityCode=${req.query.cityCode}`,
      // 'Cookie': `SERVER_ID=a2d781fc-3715eec0; ___rl__test__cookies=1543989938834; OUTFOX_SEARCH_USER_ID_NCOO=6555022.2683485085; stat=6509128; cityCode=${req.query.cityCode}; stat_clientGUID=C4FECF3B-1C4C-18C0-F09F-3A943782E1AA; historySearch=%E8%BF%99%2C; XSRF-TOKEN=eyJpdiI6IjNJSGgyUEhhZGZjSE1KdVZnWncybUE9PSIsInZhbHVlIjoiQTVtTWVheWxOXC82Z2JERjNHUjBjanVSbHc3b1doMDJvQnFBZVoyVFJralliOXY1ZEJSVUY1WGtDaVVZbk50TGpxNDdhYmRBRXh5bklaeHhSSEdZTERnPT0iLCJtYWMiOiIxZGRhZWM3OGM4ZDA1MWYwNWEyYTA3ZTU2Y2VlNzM2ZWUzZDU5NmQ4ZGM2YjQ3ZjIxNWZmMGUwZjgyYzJmMTI3In0%3D; laravel_session=eyJpdiI6IlwvMWZreDFVMEJkaEVcLzFIXC8yZzNXRnc9PSIsInZhbHVlIjoiRVowY29ZbG1Xb3NPQmg2Q3FLbSsyTytLTHR0M1wvOUh1UzVHeVRza3M1STNNem9YT3FZUitGa0tmaUJ2N0NBSDY4MGpXXC9qczRwbFlpdzR3SEpCV0FVZz09IiwibWFjIjoiZTBjOTY3YzA4MWFhZmVmMDAwMjE5NDI0MzBhNjMwOTdhNWQ2YTExYWVkZmRhODg1OWFlMzYwMWZjMjkyZWVmNyJ9`
    },

  }, (err, result, body) => {
    res.send(body)
  })
})


// 获取地点
// http://m.xishiqu.com/ajax/home/setCity?cityCode=020
app.get('/getCity', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  request(`http://m.xishiqu.com/ajax/home/setCity?cityCode=${req.query.cityCode}`, (err, result, body) => {
    res.send(body)
  })
})


// 详情页
// http://m.xishiqu.com/ajax/activity/detail?pinyinName=wosylgz
app.get('/goDetail', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  request(`http://m.xishiqu.com/ajax/activity/detail?pinyinName=${req.query.pinyinName}`, (err, result, body) => {
    res.send(body)
  })
})


// 获取广州信息
// http://m.xishiqu.com/ajax/home/index?cityCode=020


app.get('/getIndexData', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Content-Type', 'application/json')
  res.append('Cache-control', 'no-cache')
  res.append('Cache-control', 'private, must-revalidate')
  res.append('Pragma', 'no-cache')
  res.append('Expires', -1)

  console.log(req.query)


  request({
    url: `http://m.xishiqu.com/ajax/home/index?cityCode=${req.query.cityCode}`,
    headers: {
      Cookie: `cityCode=${req.query.cityCode}`,
    },

  }, (err, result, body) => {
    res.send(body)
  })
})


// 分类页
// 获取分类列表（4个参数，加上cookie的cityCode）
// http://m.xishiqu.com/ajax/activity/list?frontCate=&date=&order=-1&page=1
app.get('/getCategoryList', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  request({
    url: `http://m.xishiqu.com/ajax/activity/list?frontCate=${req.query.frontCate}&date=${req.query.date}&order=${req.query.order}&page=${req.query.page}`,
    headers: {
      Cookie: `cityCode=${req.query.cityCode}`,
    },

  }, (err, result, body) => {
    res.send(body)
  })	
})


var server = app.listen(1234, () => {
  let host = server.address().address
  let port = server.address().port
 
  // console.log("访问地址为 http://%s:%s", host, port);
  console.log(`server start in port ${1234}`)
})
