import request from 'superagent'

export const LOGIN = 'LOGIN'

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
        .catch(console.error)
        }

// export const getPlayers = () => (dispatch, getState) => {
// const state = getState()
// const { playerName } = state

// if (!playerName.length) {
//     request(`${baseUrl}/players`)
//     .then(response => {
//         const action = allPlayers(response.body)

//         dispatch(action)
//     })
//     .catch(console.error)
// }
// }

// function newImage (payload) {
//     return {
//     type: NEW_IMAGE,
//     payload
//     }
// }
