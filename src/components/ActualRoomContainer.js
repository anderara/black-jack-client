import React from 'react'
import { connect } from 'react-redux'
import { baseUrl, getRoomInfo, getPlayersInRoom, getCards } from '../actions'

import ActualRoom from './ActualRoom'


class ActualRoomContainer extends React.Component {

    source = new EventSource(`${baseUrl}/playercards`)
  
    componentDidMount() {
      this.source.onmessage = event => {
        console.log(event)
        const players = JSON.parse(event.data)
        console.log('Stream of players is: ', players)
        // this.setState({gameRoomName:rooms})
        this.props.getPlayersInRoom(players)
      }

        console.log("ACTUAL ROOM this.props is:", this.props)
        
    }

    playerReady = (event) => {
      event.preventDefault()
      this.props.getCards()
 
    }

    render() {
      
     
          // { this.state.gameRoomName.length>0?this.state.gameRoomName.map(gameroom => <li>{gameroom}</li>):'loading...'}
        return <div> <ActualRoom
          getRoomInfo = {this.props.getRoomInfo}
          getPlayersInRoom = {this.props.playersinroom}
          myName = {this.props.player.name}
          playerReady = {this.playerReady}
          rooms = {this.props.rooms}
          
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
  
export default connect(mapStateToProps, { getRoomInfo, getPlayersInRoom, getCards })(ActualRoomContainer)