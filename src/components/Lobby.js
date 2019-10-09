//black-jack-client/components/Lobby.js
import React from 'react'

export default function Lobby (props) {

    const gameRoomName = props.gameRoomName
    console.log('props in lobby.js is:', props)

        return (

            <div>
            <h1>This is the lobby room ya bas</h1>
            <form onSubmit={props.onSubmit}>
                <label>
                Create a new room
                </label>
                <input type='text' name='gameRoomName' value={gameRoomName} onChange={props.onChange}/>
                <label>Room Name</label>
            <input type='submit' value='submit'/>
        </form>
        </div>
        
        )
}

