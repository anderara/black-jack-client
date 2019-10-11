import React from 'react'

export default function ActualRooms (props) {

    
    const myName = props.myName
    const playersInRoom = props.getPlayersInRoom
    const strangersInRoom = playersInRoom.filter(player => player.playerName !== myName)
    const playerReady = props.playerReady

    console.log('strangersInRoom is fuckin', strangersInRoom)
        //console.log('ACTUAL ROOM props is', props)
        return (<div>
            <h1>You are {myName}</h1>
            {strangersInRoom? strangersInRoom.map(stranger =>  <li>{stranger.playerName}</li>):<p>...loading</p>}
            <button type="text" onClick={playerReady}>Click me</button>
            </div>
        )
}