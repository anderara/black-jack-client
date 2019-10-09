import { combineReducers } from 'redux'
import player from './player'
import rooms from './rooms'

export default combineReducers({
    player,
    rooms

})