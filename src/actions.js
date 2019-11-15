import request from 'superagent'
import { createBrowserHistory } from 'history'
export const browserHistory = createBrowserHistory()

export const LOGIN = 'LOGIN'
export const CREATE_ROOM = 'CREATE_ROOM'
export const ADD_ROOMS = 'ADD_ROOMS'
export const JOIN_ROOM = 'JOIN_ROOM'
export const ALL_PLAYERS_IN_ROOM = 'ALL_PLAYERS_IN_ROOM'
export const SAVE_PLAYERNAME = 'SAVE_PLAYERNAME'

// const baseUrl = 'http://localhost:4000'
// const baseUrl = 'http://172.16.30.254:4000'

export const baseUrl = 'http://0165d74f.ngrok.io'

//process.env.DATABASE_URL || 'http://localhost:4000'

function signUpPlayer(payload){
    return {
      type: signUp,
      payload: payload.jwt
    }
   }

function savePlayerName(payload){
    return {
        type: SAVE_PLAYERNAME,
        payload
    }
}

export const signUp = (playerName, email, password) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/player`)
        .send({playerName, email, password})
        .then(response => {
            const action = signUpPlayer(response.body)
            dispatch(action)

            //set redux state playername so I know who I am when I join a room
            const actionPlayerName = savePlayerName(playerName)
            dispatch(actionPlayerName)
        })
        .catch(console.error)
   }

function loginUser(payload){
    return {
      type: LOGIN,
      payload: payload
    }
   }

export const login = (email, password) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/login`)
        .send({email, password})
        .then(response => {
            const action = loginUser(response.body)
            dispatch(action)
        })
        .catch(res => {
            alert(res.message)
        })
        }

function createRoom(payload) {
    console.log('CREATING A ROOM FUNCTION')
    return {
        type: CREATE_ROOM,
        payload
    }
}

export const createGameRoom = (gameRoomName) => (dispatch, getState) => {
    console.log('createGameRoom function')
    request
        .post(`${baseUrl}/gameroom`)
        .send({gameRoomName})
        .then(response => {
            console.log('CREATING A ROOM')
            const action = createRoom()  
            dispatch(action)
        })

        .catch(res => {
            alert(res.message)
        })
}

export function addRooms(payload) {
    return {
        type: ADD_ROOMS,
        payload
    }
}

function joinRoom(payload) {
    console.log('JOINING ROOM')
    return {
        type: JOIN_ROOM,
        payload
    }
}

export const addPlayerToRoom = (gameRoomId) => (dispatch, getState) => {
    const state = getState()
    const {jwt} = state.player

    request
        .put(`${baseUrl}/joinroom`)
        .set('Authorization', `Bearer ${jwt}`)
        .send({gameRoomId})
        .then(response => {
            console.log('JOIN ROOM')
            /*const action = joinRoom(null)
            console.log('action in addPlayerToRoom in action.js is', action)
            dispatch(action)*/
            //joinRoom is never called for some reason but it does not seem to be required
        })
        .catch(res => {
            alert(res.message)
        })
}

export const removePlayerFromRoom = () => (dispatch, getState) => {
    const state = getState()
    const {jwt} = state.player

    request
        .put(`${baseUrl}/exitroom`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(
            //response => {
            //const action = joinRoom(null) -> this is old code (copy-pasted it)
            console.log('Response from exit room'),
            browserHistory.push('/lobby')
            //here we might want to dispatch an action that saves the response on redux

        )
        .catch(response => {
            alert(response.message)
        })
}

export const getRoomInfo = () => (dispatch, getState) => {
    const state = getState()
    const {player} = state
    request
        .get(`${baseUrl}/playingroom`)
        .set('Authorization', `Bearer ${player}`)
        .then(response => {return response})
        .catch(error => {alert(error.message)})
}

export function getPlayersInRoom(payload) {
    return {
        type: ALL_PLAYERS_IN_ROOM,
        payload
    }
}

export const getCards = () => (dispatch, getState) => {
    const state = getState()
    const {jwt} = state.player
    request
        .put(`${baseUrl}/playercards`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {return response})
        .catch(error => {alert(error.message)})
}

