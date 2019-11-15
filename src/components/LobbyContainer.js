import React from 'react'
import Lobby from './Lobby'
import { connect } from 'react-redux'
import { createGameRoom, baseUrl, addRooms, addPlayerToRoom} from '../actions'
//import { Redirect } from 'react-router-dom'

class LobbyContainer extends React.Component {


  source = new EventSource(`${baseUrl}/gameroom`)

  componentDidMount() {
    this.source.onmessage = event => {

      const rooms = JSON.parse(event.data)
      this.props.addRooms(rooms)
    }
  
  }

  state = { gameRoomName: ''}
  

  onSubmit = (event) => {
    console.log('lobbycontainer creating a room')
    event.preventDefault()
    this.props.createGameRoom(this.state.gameRoomName)
    this.setState({
        gameRoomName: ''
    })
    
  }

  onJoinRoom = (event) => {
    event.preventDefault()
    const gameRoomId = event.target.id
    this.props.addPlayerToRoom(gameRoomId)
    this.props.history.replace("/gameRoom")
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <div> <Lobby
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      onJoinRoom={this.onJoinRoom}
      value={this.state}
      rooms = {this.props.rooms}
      addPlayerToRoom = {this.addPlayerToRoom}
    />
    
    </div>
  }
}

function mapStateToProps(state) {
  return { 
            player: state.player,
            rooms: state.rooms
      }
}

export default connect(mapStateToProps, { createGameRoom, addRooms, addPlayerToRoom })(LobbyContainer)