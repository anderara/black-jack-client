import React from 'react'

export default function ActualRooms (props) {

    
    const myName = props.myName
    const playersInRoom = props.getPlayersInRoom
    const rooms = props.rooms
    const strangersInRoom = playersInRoom.filter(player => player.playerName !== myName)
    const playerReady = props.playerReady

    //Find the room id of the room that I am in
    const myRoom = playersInRoom.find(playerInRoom => playerInRoom.playerName===myName)
    let myRoomName
    let nameOfStrangers
    if(myRoom&&rooms.length>0){

        myRoomName = rooms.find(room => room.id===myRoom.gameroomId)
        myRoomName=myRoomName.gameRoomName
        nameOfStrangers = strangersInRoom.filter(stranger => {
                return stranger.gameroomId===myRoom.gameroomId})
    }

    const myData = playersInRoom.find(playerInRoom => playerInRoom.playerName === myName)
    
        return (<div>
            <h1>You are {myName} and you are in room {myRoom? myRoomName:<p>uknown</p>}</h1>
            <h2>The others in the room are: {nameOfStrangers?nameOfStrangers.map(stranger => <li>{stranger.playerName}</li>):<p>Waiting for players</p>}</h2>
            {myData? <div><img src = {myData.card1} alt = 'card'/><img src = {myData.card2} alt = 'card'/></div>:<p>loading</p>}
            <button type="text" onClick={playerReady}>Click me</button>
            </div>
        )
}