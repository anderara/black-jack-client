//black-jack-client
import { ALL_PLAYERS_IN_ROOM } from "../actions"

export default function playersinroom ( state=[], action = {}) {
    switch(action.type){
        case ALL_PLAYERS_IN_ROOM:
            return action.payload

        default:
            return state
    }
}