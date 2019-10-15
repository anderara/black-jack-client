//black-jack-client/components/Lobby.js
import React from 'react'
import player from '../reducers/player'

export default function Lobby (props) {

    const gameRoomName = props.gameRoomName 
    const gameRooms = props.rooms
    let playersInRoom = []
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
                
                    {gameRooms.length?gameRooms.map(gameroom => {
                        {playersInRoom = gameRooms.find(gameRoom => gameRoom.id === gameroom.id).players}
                    return (

                        <div border ="2">

                            <form onSubmit={props.onJoinRoom} key={gameroom.id} id={gameroom.id} name={gameroom.id}>
                                <p>{gameroom.gameRoomName}</p>
                                Wanna join this room, ya bas?
                                <p>Players Already In Room</p>
                                {playersInRoom.map(playerName=> <li>{playerName.playerName}</li>)}
                                <input type="submit" value="Join Room" />
                            </form>

                        </div>)
                        })
                    : 'loading...'}
            </div>
        
        )
}

