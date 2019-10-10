import React from 'react'
import Lobby from './Lobby'
import { connect } from 'react-redux'
import { createGameRoom, baseUrl, addRooms, addPlayerToRoom} from '../actions'
//import { Redirect } from 'react-router-dom'

class LobbyContainer extends React.Component {

  // componentDidMount(){
  //   console.log('Sloppy function', displayRooms())
  // }
  source = new EventSource(`${baseUrl}/gameroom`)

  componentDidMount() {
    this.source.onmessage = event => {
      console.log(event)
      const rooms = JSON.parse(event.data)
      // this.setState({gameRoomName:rooms})
      this.props.addRooms(rooms)
    }
    // console.log("TESTING stream:", rooms)
  }

  state = { gameRoomName: ''}
  

  onSubmit = (event) => {
    event.preventDefault()
    // console.log('Lobby name: ', this.state.gameRoomName)
    this.props.createGameRoom(this.state.gameRoomName)
    this.setState({
        gameRoomName: ''
    })
    
  }

  onJoinRoom = (event) => {
    event.preventDefault()

    console.log("gameRoomId from lobby is:", event.target.id)
    const gameRoomId = event.target.id
    this.props.addPlayerToRoom(gameRoomId)

    this.props.history.replace("/gameRoom")
  }

  onChange = (event) => {
      // console.log('I am changing in the lobby', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    // console.log('this state in the render', this.state)
      // console.log('lobby container ->', this.onChange)
      console.log('this.props in LOBBYCONTAINER IS', this.props)
      // { this.state.gameRoomName.length>0?this.state.gameRoomName.map(gameroom => <li>{gameroom}</li>):'loading...'}
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