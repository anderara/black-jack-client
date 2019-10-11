import { LOGIN } from '../actions'

export default function player (state = '', action = {}) {
  console.log("reducer", state , "PL ", action.payload, 'action type', action.type)  
  switch (action.type) {
      case  LOGIN:
        return action.payload

      default:
        return state;
    }
  }