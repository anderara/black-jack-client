import React from 'react'

export default function SignUpForm (props) {
    
    const playerName = props.values.playerName
    const email = props.values.email
    const password = props.values.password


    return (
        <div>
        <form onSubmit={props.onSubmit}>
            <label>
            Player name:
            <input type='text' name='playerName' value={playerName} onChange={props.onChange}/>
            </label>
            E-mail:
            <input type='text' name='email' value={email} onChange={props.onChange}/>
            Password:
            <input type='text' name='password' value={password} onChange={props.onChange}/>
        <input type='submit' value='submit'/>
        </form>
        </div>
        )
    }