import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
// style
import './styles/app.css'
import './styles/home.css'
import './styles/activity.scss'
import './styles/act.scss'
import './styles/film.css'
import './styles/city.css'
import './styles/category.scss'
import './styles/Calendar.scss'
import './styles/upload.css'
import 'antd-mobile/dist/antd-mobile.css'

import { Provider } from 'react-redux'
import axios from 'axios'
import store from './store'

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
