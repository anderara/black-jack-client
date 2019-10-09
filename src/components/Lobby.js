//black-jack-client/components/Lobby.js
import React from 'react'

export default function Lobby (props) {

    const gameRoomName = props.gameRoomName 
    const gameRooms = props.rooms
    // console.log('props in lobby.js is:', props)

        return (

            <div>
            <h1>This is the lobby room ya bas</h1>
            <form onSubmit={props.onSubmit}>
                <label>
                Create a new room
                <input type='text' name='gameRoomName' value={gameRoomName} onChange={props.onChange}/>
                </label>
                <label>Room Name</label>
            <input type='submit' value='submit'/>
            </form>
            {console.log('Logging PROPS.ROOMS in the Lobby:', props.rooms)}
            
                {gameRooms.length?gameRooms.map(gameroom => { 
                   return <li key={gameroom.id}>{gameroom.gameRoomName}</li>
                }): 'loading...'}
                
            
        </div>
        
        )
}

