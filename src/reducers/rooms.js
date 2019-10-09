import { ADD_ROOMS } from "../actions"

export default function rooms ( state=[], action = {}) {
    switch(action.type){
        case ADD_ROOMS:
            return action.payload

        default:
            return state
    }
}
