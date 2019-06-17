import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
// style
import 'src/styles/home.scss'
import 'src/styles/activity.scss'
import 'src/styles/act.scss'
import 'src/styles/film.css'
import 'src/styles/city.scss'
import 'src/styles/category.scss'
import 'src/styles/app.css'
import 'antd-mobile/dist/antd-mobile.css'


import { Provider } from 'react-redux'
import axios from 'axios'
import store from 'store'

import App from './App'
import * as serviceWorker from './libs/serviceWorker'

React.axios = axios

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
