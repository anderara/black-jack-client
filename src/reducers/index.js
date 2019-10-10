import { combineReducers } from 'redux'
import player from './player'
import rooms from './rooms'
import playersinroom from './playersinroom'
import playername from './playername'

export default combineReducers({
    player,
    playername,
    rooms,
    playersinroom //this is supposed to contain all players in room

})