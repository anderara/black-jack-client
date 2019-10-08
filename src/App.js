import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Homepage from './components/Homepage'
import SignUpFormContainer from './components/SignUpFormContainer'
import LoginFormContainer from './components/LoginFormContainer'

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component = {Homepage} />
          <Route path="/SignUp" component = {SignUpFormContainer}/>
          <Route path="/login" component = {LoginFormContainer} />
          {/* <Route path="/PostImage" component={ListContainer}/> */}
        </div>
    );
  }
 }

 export default App
