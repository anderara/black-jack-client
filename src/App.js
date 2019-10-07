import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import Homepage from './components/Homepage'

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component = {Homepage} />
          {/* <Route path="/SignUp" component = {SignUpFormContainer}/>
          <Route path="/LogIn" component = {LoginFormContainer} />
          <Route path="/PostImage" component={ListContainer}/> */}
        </div>
    );
  }
 }
 
 export default App
