import React from 'react'

export default function ActualRooms (props) {

    
    const myName = props.myName
    const playersInRoom = props.getPlayersInRoom
    const strangersInRoom = playersInRoom.filter(player => player.playerName !== myName)

    console.log('strangersInRoom is fuckin', strangersInRoom)
        //console.log('ACTUAL ROOM props is', props)
        return (<div>
            <h1>You are {myName}</h1>
            {strangersInRoom? strangersInRoom.map(stranger =>  <li>{stranger.playerName}</li>):<p>...loading</p>}
            <button>TEST START</button>
            </div>
        )
}