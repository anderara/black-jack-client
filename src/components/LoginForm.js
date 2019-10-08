import React from 'react'

export default function LoginForm (props) {
    
    const email = props.values.email
    const password = props.values.password


    return (
        <div>
        <form onSubmit={props.onSubmit}>
            <label>
            E-mail:
            <input type='text' name='email' value={email} onChange={props.onChange}/>
            </label>
            Password:
            <input type='text' name='password' value={password} onChange={props.onChange}/>
        <input type='submit' value='submit'/>
        </form>
        </div>
        )
    }