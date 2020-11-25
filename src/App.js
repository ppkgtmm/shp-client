import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './route/Main'
import './App.sass'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;