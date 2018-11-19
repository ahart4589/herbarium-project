import React, { Component } from 'react'
import {Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route component={Landing} exact path='/'/>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)
