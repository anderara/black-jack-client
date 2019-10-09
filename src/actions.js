import request from 'superagent'

export const LOGIN = 'LOGIN'
export const CREATE_ROOM = 'CREATE_ROOM'

// const baseUrl = 'http://localhost:4000'
// const baseUrl = 'http://172.16.30.254:4000'

const baseUrl = process.env.DATABASE_URL || 'http://172.16.30.254:4000'

function signUpPlayer(payload){
    console.log("SignUp payload is", payload)
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
            console.log("response in LoginForm is: ", response)
            const action = signUpPlayer(response.body)
            dispatch(action)
        })
        .catch(console.error)
   }

function loginUser(payload){
    console.log("loginUser payload is", payload)
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
            console.log("response in LoginForm is: ", response)
            const action = loginUser(response.body)
            dispatch(action)
        })
        .catch(res => {
            alert(res.message)
        })
        }

function createRoom(payload) {
    console.log('createRoom payload -> ', payload)
    return {
        type: CREATE_ROOM,
        payload
    }
}

export const createGameRoom = (gameRoomName) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/lobby`)
        .send({gameRoomName})
        .then(response => {
            console.log('Create room named ', response)
            const action = createRoom()
            dispatch(action)
        })
        .catch(res => {
            alert(res.message)
        })
}
