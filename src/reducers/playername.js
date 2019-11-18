//black-jack-client
import { SAVE_PLAYERNAME } from "../actions"

export default function playername ( state='', action = {}) {
    switch(action.type){
        case SAVE_PLAYERNAME:
            return action.payload

        default:
            return state
    }
}