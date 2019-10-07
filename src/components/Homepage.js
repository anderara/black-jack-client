import React from 'react'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component {
   render(){
       return (
           <div>
               <h1>A&A's Black Jack</h1>
               <button>Register as a new user</button>
               <br />
               <button>Log in if you already have an account</button>
           </div>
       )
   }
}