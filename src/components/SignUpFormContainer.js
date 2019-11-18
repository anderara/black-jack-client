import React from 'react'
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class SignUpFormContainer extends React.Component {
  state = { playerName: '', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state.playerName, this.state.email, this.state.password)

    this.setState({
        playerName: '',
        email: '',
        password: ''
    })

    this.props.history.replace("/login")
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return <SignUpForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

function mapStateToProps(state) {
  return { 
            player: state.player,
            rooms: state.rooms,
            playername: state.playername
      }
}

export default connect(mapStateToProps, { signUp })(SignUpFormContainer)