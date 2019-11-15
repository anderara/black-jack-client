import React from 'react'
import { connect } from 'react-redux'
import { baseUrl, getRoomInfo, getPlayersInRoom, getCards, removePlayerFromRoom } from '../actions'

import ActualRoom from './ActualRoom'


class ActualRoomContainer extends React.Component {
  ///playingroom playercards
    source = new EventSource(`${baseUrl}/playingroom`)
  
    componentDidMount() {
      this.source.onmessage = event => {
        const players = JSON.parse(event.data)
       // this.props.getPlayersInRoom(players)
      }        
    }

    playerReady = (event) => {
      event.preventDefault()
      this.props.getCards()
    }
    render() {

        return <div> <ActualRoom
          getRoomInfo = {this.props.getRoomInfo}
          getPlayersInRoom = {this.props.playersinroom}
          myName = {this.props.player.name}
          playerReady = {this.playerReady}
          rooms = {this.props.rooms}
          removePlayerFromRoom = {this.props.removePlayerFromRoom}
          
        />
        
        </div>
      }
}

function mapStateToProps(state) {
    return { 
              player: state.player,
              rooms: state.rooms,
              playersinroom: state.playersinroom, //players that are in the room
              playername: state.playername //this is my name
        }
  }
  
export default connect(mapStateToProps, { getRoomInfo, getPlayersInRoom, getCards, removePlayerFromRoom })(ActualRoomContainer)