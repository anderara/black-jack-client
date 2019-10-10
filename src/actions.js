import request from 'superagent'

export const LOGIN = 'LOGIN'
export const CREATE_ROOM = 'CREATE_ROOM'
export const ADD_ROOMS = 'ADD_ROOMS'
export const JOIN_ROOM = 'JOIN_ROOM'
export const ALL_PLAYERS_IN_ROOM = 'ALL_PLAYERS_IN_ROOM'

// const baseUrl = 'http://localhost:4000'
// const baseUrl = 'http://172.16.30.254:4000'

export const baseUrl = process.env.DATABASE_URL || 'http://172.16.30.254:4000'

function signUpPlayer(payload){
    return {
      type: signUp,
      payload: payload.jwt
    }
   }

export const signUp = (playerName, email, password) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/player`)
        .send({playerName, email, password})
        .then(response => {
            const action = signUpPlayer(response.body)
            dispatch(action)
        })
        .catch(console.error)
   }

function loginUser(payload){
    return {
      type: LOGIN,
      payload: payload.jwt
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
    return {
        type: CREATE_ROOM,
        payload
    }
}

export const createGameRoom = (gameRoomName) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/gameroom`)
        .send({gameRoomName})
        // .then(console.log('printing the room created ', {gameRoomName}))
        .then(response => {
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
    return {
        type: JOIN_ROOM,
        payload
    }
}

export const addPlayerToRoom = (gameRoomId) => (dispatch, getState) => {
    const state = getState()
    const {player} = state

    request
        .put(`${baseUrl}/joinroom`)
        .set('Authorization', `Bearer ${player}`)
        .send({gameRoomId})
        .then(console.log('Add player to room --> ', {gameRoomId}))
        .then(response => {
            const action = joinRoom()
            dispatch(action)
        })
        .catch(res => {
            alert(res.message)
        })
}

export const getRoomInfo = () => (dispatch, getState) => {
    const state = getState()
    const {player} = state
    request
        .get(`${baseUrl}/playingroom`)
        .set('Authorization', `Bearer ${player}`)
        .then(response => {console.log('Room info -> ', response)})
        .catch(error => {alert(error.message)})
}

export function getPlayersInRoom(payload) {
    return {
        type: ALL_PLAYERS_IN_ROOM,
        payload
    }
}

