import React from 'react'
import { connect } from 'react-redux'
import { baseUrl } from '../actions'

import ActualRoom from './ActualRoom'

class ActualRoomContainer extends React.Component {

    source = new EventSource(`${baseUrl}/gameroom`)
  
    componentDidMount() {

        console.log("Component ACTUAL ROOM LOADED")      
    }

    render() {
          // { this.state.gameRoomName.length>0?this.state.gameRoomName.map(gameroom => <li>{gameroom}</li>):'loading...'}
        return <div> <ActualRoom
          
        />
        
        </div>
      }
}

function mapStateToProps(state) {
    return { 
            //   player: state.player,
            //   rooms: state.rooms
        }
  }
  
export default connect(mapStateToProps, { })(ActualRoomContainer)