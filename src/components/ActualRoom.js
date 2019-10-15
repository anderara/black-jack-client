import React from 'react'

export default function ActualRooms (props) {

    
    const myName = props.myName
    const playersInRoom = props.getPlayersInRoom
    const rooms = props.rooms
    const strangersInRoom = playersInRoom.filter(player => player.playerName !== myName)
    const playerReady = props.playerReady

    //Find the room id of the room that I am in
    console.log('playersInRoom', props)
    const myRoom = playersInRoom.find(playerInRoom => playerInRoom.playerName===myName)
    console.log('myRoom extracted is:', myRoom)
    let myRoomName
    let nameOfStrangers
    if(myRoom&&rooms.length>0){

        myRoomName = rooms.find(room => room.id===myRoom.gameroomId)
        myRoomName=myRoomName.gameRoomName
        console.log('myRoomName is', myRoomName)
        nameOfStrangers = strangersInRoom.filter(stranger => {
                console.log('stranger.gameRoomId is', stranger.gameroomId, 'myRoom.gameroomId is', myRoom.gameroomId)
                return stranger.gameroomId===myRoom.gameroomId})
        console.log('nameOfStrangers is', nameOfStrangers)
    }
    //const myRoomName = rooms.find(room => room.id===myRoom.gameroomId)
    //myRoom properties seem to be inaccessible due to syncing problems?

    //const myRoomId = myRoom['gameroomId']


    //extract yourself from playersinroom
    const myData = playersInRoom.find(playerInRoom => playerInRoom.playerName === myName)
    
        return (<div>
            <h1>You are {myName} and you are in room {myRoom? myRoomName:<p>uknown</p>}</h1>
            <h2>The others in the room are: {nameOfStrangers?nameOfStrangers.map(stranger => <li>{stranger.playerName}</li>):<p>Waiting for players</p>}</h2>
            {myData? <div><img src = {myData.card1} alt = 'card'/><img src = {myData.card2} alt = 'card'/></div>:<p>loading</p>}
            <button type="text" onClick={playerReady}>Click me</button>
            </div>
        )
}