import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions'
import { Redirect } from 'react-router-dom'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('state.email: ', this.state.email, 'state.password: ', this.state.password)
    this.props.login(this.state.email, this.state.password)
    this.setState({
        email: '',
        password: ''
    })

  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if(this.props.player){
      return <Redirect to="/lobby"/>
    }
    console.log('props.user', this.props.player)
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

function mapStateToProps (state) {
  return { 
            player: state.player
      }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)