import { LOGIN } from '../actions'

export default function player (state = '', action = {}) {
    
  switch (action.type) {
      case  LOGIN:
        return action.payload

      default:
        return state;
    }
  }