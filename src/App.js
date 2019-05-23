import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import List from './components/pages/List/List.jsx'
import CityList from './components/pages/City/CityList.jsx'
import Search from './components/pages/Search/Search.jsx'
// import Detail from './components/pages/Detail/Detail.jsx'
import Detail from './components/pages/Detail'
import Movie from './components/pages/Detail/Movie.jsx'
import Comment from './components/pages/Detail/Comment.jsx'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/city" component={CityList} />
          <Route path="/search" component={Search} />
          <Route path="/detail/:name" component={Detail} />
          <Route path="/moviedetail/:name" component={Movie} />
          <Route path="/comment" component={Comment} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    )
  }
}

export default App
