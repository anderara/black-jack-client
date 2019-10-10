import React from 'react'

export default function ActualRooms (props) {

    const playersInRoom = props.getPlayersInRoom

    const getRoomInfo = props.getRoomInfo
    console.log('playersInRoom is fuckin', playersInRoom)
        //console.log('ACTUAL ROOM props is', props)
        return (<div>
            {getRoomInfo()}
            {playersInRoom? playersInRoom.map(player => <li>{player.playerName}</li>):<p>...loading</p>}
            <button>TEST START</button>
            </div>
        )
}