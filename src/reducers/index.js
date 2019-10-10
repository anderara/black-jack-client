import { combineReducers } from 'redux'
import player from './player'
import rooms from './rooms'
import playersinroom from './playersinroom'

export default combineReducers({
    player,
    rooms,
    playersinroom //this is supposed to contain all players in room

})