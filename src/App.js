import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from 'components/pages/Home'
import List from 'components/pages/List'
import CityList from 'components/pages/City'
import MovieDetail from 'components/pages/MovieDetail'
import Comment from 'components/pages/Comment'
// import Search from './components/pages/Search/Search.jsx'
import Search from 'components/pages/Search'
import Detail from 'components/pages/Detail'
import Member from 'components/pages/Member'
// import Comment from './components/pages/Detail/Comment.jsx'


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
          <Route path="/moviedetail/:filmId" component={MovieDetail} />
          <Route path="/comment" component={Comment} />
          <Route path="/member" component={Member} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    )
  }
}

export default App
