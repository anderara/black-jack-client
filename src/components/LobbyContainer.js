import React from 'react'
import Lobby from './Lobby'
import { connect } from 'react-redux'
import { createGameRoom } from '../actions'
//import { Redirect } from 'react-router-dom'

class LobbyContainer extends React.Component {
  state = { gameRoomName: ''}

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Lobby name: ', this.state.gameRoomName)
   /* this.props.createGameRoom(this.state.gameRoomName)
    this.setState({
        gameRoomName: ''
    })*/

  }

  onChange = (event) => {
      console.log('I am changing in the lobby', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
      console.log('lobby container ->', this.onChange)
    return <Lobby
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      value={this.state}
    />
  }
}

function mapStateToProps (state) {
  return { 
            player: state.player
      }
}

export default connect(mapStateToProps, { createGameRoom })(LobbyContainer)