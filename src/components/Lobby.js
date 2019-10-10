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
                
                    {gameRooms.length?gameRooms.map(gameroom => {
                    return (

                        <div border ="2">

                            {/* {console.log('Logging PROPS.ROOMS in the Lobby:', props.rooms[0].id)} */}
                            <form onSubmit={props.onJoinRoom} key={gameroom.id} id={gameroom.id} name={gameroom.id}>
                                <p>{gameroom.gameRoomName}</p>
                                Wanna join this room, ya bas?
                                <input type="submit" value="Join Room" />
                            </form>

                        </div>)
                        })
                    : 'loading...'}
            </div>
        
        )
}

